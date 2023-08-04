import {fetchToken,readContract,getNetwork,writeContract,prepareWriteContract,signTypedData,waitForTransaction,fetchBalance,signMessage,sendTransaction,prepareSendTransaction } from '@wagmi/core'
import abiInfo from '@/config/abi/abi.json'
import {getLocalStorage} from './BrowserUtils'

const nftContractAddress = process.env.NEXT_PUBLIC_NTF_CONTRACT_ADDRESS
const withdrawContractAddress = process.env.NEXT_PUBLIC_WITHDRAW_CONTRACT_ADDRESS
const usdcTokenAddress = process.env.NEXT_PUBLIC_SM_PAYMENT_USDC_TOKEN
const paymentReceiverAddress = process.env.NEXT_PUBLIC_SM_PAYMENT_RECEIVER

async function etherRemoteMinerOnboard(owner:string,miner:string,permitMiner:any,permitToPay:any) {
  const { chain } = getNetwork();

  const value = {
    address: `0x${nftContractAddress?.replace('0x','')}`,
    abi: abiInfo.ArkreenNTFAbi.RemoteMinerOnboard,
    functionName: abiInfo.ArkreenNTFAbi.RemoteMinerOnboard[0].name,
    args: [owner,miner,permitMiner,permitToPay],
    chainId: chain?.id,
  }
  //const config = await prepareWriteContract(value)
  return await writeContract({
    address: `0x${nftContractAddress?.replace('0x','')}`,
    abi: abiInfo.ArkreenNTFAbi.RemoteMinerOnboard,
    functionName: abiInfo.ArkreenNTFAbi.RemoteMinerOnboard[0].name,
    args: [owner,miner,permitMiner,permitToPay],
    chainId: chain?.id,
  });
}

async function etherRemoteMinerOnboardNative(owner:string,miner:string,permitMiner:any) {
  const { chain } = getNetwork();
  return await writeContract({
    address: `0x${nftContractAddress?.replace('0x','')}`,
    abi: abiInfo.ArkreenNTFAbi.RemoteMinerOnboardNative,
    functionName: abiInfo.ArkreenNTFAbi.RemoteMinerOnboardNative[0].name,
    args: [owner,miner,permitMiner],
    chainId: chain?.id,
    value:permitMiner.value
  });
}

async function etherRemoteMinerOnboardApproved(owner:string,miner:string,permitMiner:any) {
  const { chain } = getNetwork();
  return await writeContract({
    address: `0x${nftContractAddress?.replace('0x','')}`,
    abi: abiInfo.ArkreenNTFAbi.RemoteMinerOnboardApproved,
    functionName: abiInfo.ArkreenNTFAbi.RemoteMinerOnboardApproved[0].name,
    args: [owner,miner,permitMiner],
    chainId: chain?.id
  });
}

async function withdraw(address:any,value:any, nonce:any, v:any, r:any, s:any) {
  const { chain } = getNetwork();
  const config = await prepareWriteContract({
    address: `0x${withdrawContractAddress?.replace('0x','')}`,
    abi: abiInfo.ArkreenRewardAbi.withdraw,
    functionName: abiInfo.ArkreenRewardAbi.withdraw[0].name,
    args: [address,value, nonce, v, r, s],
    chainId: chain?.id,
  })
  return await writeContract({
    address: `0x${withdrawContractAddress?.replace('0x','')}`,
    abi: abiInfo.ArkreenRewardAbi.withdraw,
    functionName: abiInfo.ArkreenRewardAbi.withdraw[0].name,
    args: [address,value, nonce, v, r, s],
    chainId: chain?.id,
  });
}

async function etherBalance(address:string,token?:string){
  if(token){
    const balance = await fetchBalance({address: `0x${address.substring(2)}`,token: `0x${token.substring(2)}`})
    return balance;
  }else {
    const balance = await fetchBalance({address: `0x${address.substring(2)}`})
    return balance;
  }
}

async function etherTokenNonce(token:string,owner:string){
  const { chains } = getNetwork();
  return await readContract({address: `0x${token.substring(2)}`,abi: abiInfo.ArkreenNTFAbi.nonces,functionName: 'nonces',args: [owner],chainId: chains[0].id});
}

async function getWithdrawNonce(owner:string){
  const { chains } = getNetwork();
  return await readContract({address: `0x${withdrawContractAddress?.substring(2)}`,abi: abiInfo.ArkreenRewardAbi.nonces,functionName: abiInfo.ArkreenRewardAbi.nonces[0].name,args: [owner], chainId: chains[0].id});
}

async function tokenInfo(token:string){
  try{
    return await fetchToken({address: `0x${token.substring(2)}`});
  }catch(err){
    return undefined
  }
}

async function assembleSignTypedData(currency:string,owner:string,expiredTime:number,amount:string){
  const { chain } = getNetwork();
  const token = await tokenInfo(currency);
  if(!token){
    return undefined;
  }
  // 获取Nonce
  const nonceData = await etherTokenNonce(currency,owner) as BigInt;
  // domain
  let domain = {}
  let EIP712Domain = []
  //
  if(currency.toLowerCase() == '0x2791bca1f2de4661ed88a30c99a7a9449aa84174' || currency.toLowerCase() == '0x0fa8781a83e46826621b3bc094ea2a0212e71b23'){
    let salt = '0x0000000000000000000000000000000000000000000000000000000000000000'
    const chainIdHex = Number(chain?.id).toString(16)
    const offset = salt.length-(chainIdHex.length)
    salt = salt.substring(0,offset)+chainIdHex
    domain = {
      name: token.name,
      version: "1",
      verifyingContract: `0x${currency.substring(2)}`,
      salt:salt
    } as const
    
    EIP712Domain = [
      {
          name: "name",
          type: "string"
      },
      {
          name: "version",
          type: "string"
      },
      {
          name: "verifyingContract",
          type: "address"
      },
      {
          name: "salt",
          type: "bytes32"
      }
  ]
  }else {
    domain = {
      name: token.name,
      version: '1',
      chainId: chain?.id,
      verifyingContract: `0x${currency.substring(2)}`,
    } as const
    EIP712Domain = [
      {
          name: "name",
          type: "string"
      },
      {
          name: "version",
          type: "string"
      },
      {
          name: "chainId",
          type: "uint256"
      },
      {
          name: "verifyingContract",
          type: "address"
      }
    ]
  }
  //
  const types = {
    EIP712Domain: EIP712Domain,
    Permit: [
        {
            name: "owner",
            type: "address",
        },
        {
            name: "spender",
            type: "address",
        },
        {
            name: "value",
            type: "uint256",
        },
        {
            name: "nonce",
            type: "uint256",
        },
        {
            name: "deadline",
            type: "uint256",
        }
    ]
  } as const
  // value
  const message = {
    owner: `0x${owner.substring(2)}`,
    spender: `0x${nftContractAddress?.substring(2)}`,
    value: amount,
    nonce: nonceData.valueOf(),
    deadline: expiredTime
  } as const

  return {domain,types,primaryType: 'Permit',message};
}

async function etherSignTypeData(signTypedDataObj:any) {
  //console.log(signTypedDataObj)
  return await signTypedData(signTypedDataObj);
}

async function personalSign(message:string){
  const signature = await signMessage({message: message})
  return signature
}

async function transfer(value:string, tokenAddress?:string){
    if (tokenAddress) {
        const token = await tokenInfo(tokenAddress);
        if (!token) {
            return undefined;
        }
        const decimals = token.decimals;
        console.log('QPay-Page#transfer:decimals:' + decimals)
        console.log('QPay-Page#transfer:value:' + value)

        let des = '1'
        for (let i = decimals; i > 0; i--) {
            des = des + '0'
        }
        const amount = Number(value) * Number(des);
        console.log('QPay-Page#transfer:amount:' + amount)

        const { chain } = getNetwork();
        const to = `0x${paymentReceiverAddress?.replace('0x','')}`;
        const config = await prepareWriteContract({
          address: `0x${usdcTokenAddress?.replace('0x','')}`,
          abi: abiInfo.erc20Abi.transfer,
          functionName: abiInfo.erc20Abi.transfer[0].name,
          args: [to, amount],
          chainId: chain?.id,
        })
        console.log('QPay-Page#transfer:args-to:' + to)
        const result = await writeContract(config);
        console.log('QPay-Page#transfer:result.hash:' + result.hash)
        return result.hash;
    } else {
        const result = await transaction(value);
        return result;
    }
}

async function approve(currency:string, _value:string){
  const { chain } = getNetwork();
  const _spender = nftContractAddress
  return await writeContract({
    address: `0x${currency.replace('0x','')}`,
    abi: abiInfo.erc20Abi.approve,
    functionName: abiInfo.erc20Abi.approve[0].name,
    args: [_spender,_value],
    chainId: chain?.id,
  });
}

async function transaction(value:string) {
    const request = await prepareSendTransaction({
        to: `0x${paymentReceiverAddress?.replace('0x','')}`,
        value: BigInt(value),
    })
    const { hash  } = await sendTransaction(request)
    return hash ;
}

async function waitTransaction(hash:string) {
  const result = await waitForTransaction({confirmations: 1,hash:`0x${hash.replace('0x','')}`})
  return result;
}

function getConnectApp(){
  const walletconnectStr = getLocalStorage('walletconnect')
  if(walletconnectStr){
    const walletconnect = JSON.parse(walletconnectStr);
    return walletconnect.peerMeta.name
  }else {
    return undefined
  }
}

function emojiAvatarForAddress(address: string) {
  const resolvedAddress = typeof address === 'string' ? address : '';
  const avatarIndex = Math.abs(
    hashCode(resolvedAddress.toLowerCase()) % avatars.length
  );
  return avatars[avatarIndex ?? 0];
}

function hashCode(text: string) {
  let hash = 0;
  if (text.length === 0) return hash;
  for (let i = 0; i < text.length; i++) {
    const chr = text.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  return hash;
}

async function AllMinersToken(address:string) {
  const { chains } = getNetwork();
  return await readContract({address: `0x${(''+nftContractAddress).substring(2)}`,abi: abiInfo.ArkreenNTFAbi.AllMinersToken,functionName: 'AllMinersToken',args: [address],chainId: chains[0].id});
}

const colors = [
  '#FC5C54',
  '#FFD95A',
  '#E95D72',
  '#6A87C8',
  '#5FD0F3',
  '#75C06B',
  '#FFDD86',
  '#5FC6D4',
  '#FF949A',
  '#FF8024',
  '#9BA1A4',
  '#EC66FF',
  '#FF8CBC',
  '#FF9A23',
  '#C5DADB',
  '#A8CE63',
  '#71ABFF',
  '#FFE279',
  '#B6B1B6',
  '#FF6780',
  '#A575FF',
  '#4D82FF',
  '#FFB35A',
]

const avatars = [
  { color: colors[0], emoji: '🌶' },
  { color: colors[1], emoji: '🤑' },
  { color: colors[2], emoji: '🐙' },
  { color: colors[3], emoji: '🫐' },
  { color: colors[4], emoji: '🐳' },
  { color: colors[0], emoji: '🤶' },
  { color: colors[5], emoji: '🌲' },
  { color: colors[6], emoji: '🌞' },
  { color: colors[7], emoji: '🐒' },
  { color: colors[8], emoji: '🐵' },
  { color: colors[9], emoji: '🦊' },
  { color: colors[10], emoji: '🐼' },
  { color: colors[11], emoji: '🦄' },
  { color: colors[12], emoji: '🐷' },
  { color: colors[13], emoji: '🐧' },
  { color: colors[8], emoji: '🦩' },
  { color: colors[14], emoji: '👽' },
  { color: colors[0], emoji: '🎈' },
  { color: colors[8], emoji: '🍉' },
  { color: colors[1], emoji: '🎉' },
  { color: colors[15], emoji: '🐲' },
  { color: colors[16], emoji: '🌎' },
  { color: colors[17], emoji: '🍊' },
  { color: colors[18], emoji: '🐭' },
  { color: colors[19], emoji: '🍣' },
  { color: colors[1], emoji: '🐥' },
  { color: colors[20], emoji: '👾' },
  { color: colors[15], emoji: '🥦' },
  { color: colors[0], emoji: '👹' },
  { color: colors[17], emoji: '🙀' },
  { color: colors[4], emoji: '⛱' },
  { color: colors[21], emoji: '⛵️' },
  { color: colors[17], emoji: '🥳' },
  { color: colors[8], emoji: '🤯' },
  { color: colors[22], emoji: '🤠' },
]

const WalletUtils = {
  assembleSignTypedData:assembleSignTypedData,
  tokenInfo:tokenInfo,
  etherTokenNonce:etherTokenNonce,
  etherRemoteMinerOnboard:etherRemoteMinerOnboard,
  etherRemoteMinerOnboardNative:etherRemoteMinerOnboardNative,
  etherSignTypeData:etherSignTypeData,
  transfer:transfer,
  transaction:transaction,
  waitTransaction:waitTransaction,
  etherBalance:etherBalance,
  getConnectApp:getConnectApp,
  personalSign:personalSign,
  withdraw:withdraw,
  getWithdrawNonce:getWithdrawNonce,
  emojiAvatarForAddress:emojiAvatarForAddress,
  AllMinersToken:AllMinersToken,
  approve:approve,
  etherRemoteMinerOnboardApproved:etherRemoteMinerOnboardApproved,
}


export default WalletUtils;

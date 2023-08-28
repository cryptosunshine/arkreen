import {fetchToken,readContract,getNetwork,writeContract,prepareWriteContract,signTypedData,waitForTransaction,fetchBalance,signMessage,sendTransaction,prepareSendTransaction } from '@wagmi/core'
import abiInfo from '@/config/abi/abi.json'
import {getLocalStorage} from './BrowserUtils'

const GREEN_BTC_ADDRESS = process.env.NEXT_PUBLIC_GREEN_BTC_ADDRESS

async function authMintGreenBTC(height:number,energyStr:string,cellCount:number,blockTime:string,beneficiary:string,greenType:number,sig:any,) {
    const { chain } = getNetwork();
    return await writeContract({
        address: `0x${GREEN_BTC_ADDRESS?.replace('0x','')}`,
        abi: abiInfo.ArkreenGreenBTC.authMintGreenBTC,
        functionName: abiInfo.ArkreenGreenBTC.authMintGreenBTC[0].name,
        args: [height,energyStr,cellCount,blockTime,beneficiary,greenType,sig],
        chainId: chain?.id,
    });
}

async function tokenURI(height:number){
  const { chain } = getNetwork();
  return await readContract({
    address: `0x${GREEN_BTC_ADDRESS?.replace('0x','')}`,
    abi: abiInfo.ArkreenGreenBTC.tokenURI,
    functionName: abiInfo.ArkreenGreenBTC.tokenURI[0].name,
    args: [height],
    chainId: chain?.id,
  })
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

async function tokenInfo(token:string){
  try{
    return await fetchToken({address: `0x${token.substring(2)}`});
  }catch(err){
    return undefined
  }
}

async function etherSignTypeData(signTypedDataObj:any) {
  //console.log(signTypedDataObj)
  return await signTypedData(signTypedDataObj);
}

async function personalSign(message:string){
  const signature = await signMessage({message: message})
  return signature
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
  tokenInfo:tokenInfo,
  etherSignTypeData:etherSignTypeData,
  waitTransaction:waitTransaction,
  etherBalance:etherBalance,
  getConnectApp:getConnectApp,
  personalSign:personalSign,
  emojiAvatarForAddress:emojiAvatarForAddress,
  authMintGreenBTC:authMintGreenBTC,
  tokenURI:tokenURI,
}


export default WalletUtils;

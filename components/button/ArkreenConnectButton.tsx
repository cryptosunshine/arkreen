"use client"

import { ConnectButton } from "@rainbow-me/rainbowkit";
import ArkreenNativeButton from './ArkreenNativeButton'
import {WalletIcon} from '@/components/icons/ArkreenIcon'
import {DownOutlined,LoadingOutlined} from '@ant-design/icons';
import ArkreenAvatar from "@/components/avatar/ArkreenAvatar";

type ButtonProps = {
    onlyAvatar?:boolean
    showBalance?:boolean
}

export default function ArkreenConnectButton(prop: ButtonProps): JSX.Element {



    return (
        
        <ConnectButton.Custom>
            {({account,chain,openAccountModal,openChainModal,openConnectModal,authenticationStatus,mounted}) => {

            const ready = mounted && authenticationStatus !== 'loading';
            const connected = ready && account && chain && (!authenticationStatus || authenticationStatus === 'authenticated');

            return (
                <div {...(!ready && {'aria-hidden': true,'style': {opacity: 0,pointerEvents: 'none',userSelect: 'none',height:'40px',lineHeight:'40px'},})}>
                {(() => {
                    if (!connected) {
                        return (
                            <div style={{height:'40px',lineHeight:'36px'}}>
                                <ArkreenNativeButton onClick={openConnectModal}><WalletIcon style={{width:'14px',height:'14px'}} /> Connect Wallet</ArkreenNativeButton>
                            </div>
                        )
                    }
                    if (chain.unsupported) {
                        return (
                            <div style={{height:'40px',lineHeight:'36px'}}>
                                <ArkreenNativeButton style={{background:'#FF494A',width:'155px'}} onClick={openChainModal}> Wrong Network&nbsp;&nbsp;&nbsp;<DownOutlined style={{fontSize:'14px'}} /></ArkreenNativeButton>
                            </div>
                        );
                    }

                    return (
                        <div style={{ display: 'flex',height:'40px',lineHeight:'40px' }}>
                            <div style={{padding:'0px 12px 0px 12px',color:'#00913A',height:'40px',background:'#F6F6F9',borderRadius: '8px 0px 0px 8px',display:prop.showBalance?'block':'none' }}>
                                <span>{account.displayBalance ? ` ${account.displayBalance}` : <LoadingOutlined />} </span>
                            </div>
                            {/*
                            <div onClick={openAccountModal} style={{flex:1,color:'#40404D',padding:'0px 12px 0px 12px',background:'#EFEFF1',borderRadius: prop.onlyAvatar?'8px 8px 8px 8px':'0px 8px 8px 0px',cursor:'pointer'}}>
                                <div style={{display:'flex'}}>
                                    <div style={{lineHeight:'30px',textAlign:'center',width:'30px',height:'30px',marginTop:'5px',borderRadius:'100px',background:WalletUtils.emojiAvatarForAddress(account.address).color}}>
                                        <span style={{fontSize:'16px',borderRadius:'100px'}}>{WalletUtils.emojiAvatarForAddress(account.address).emoji}</span>
                                    </div>
                                    <div>
                                        <span style={{marginLeft:'8px',fontSize:'16px',display:prop.onlyAvatar?'none':''}}>{account.displayName} </span> &nbsp;<DownOutlined style={{fontSize:'14px'}} />
                                    </div>
                                </div>
                            </div>
                            */}
                            {
                            <div onClick={openAccountModal} style={{flex:1,color:'#40404D',padding:'0px 12px 0px 12px',background:'#EFEFF1',borderRadius: prop.onlyAvatar?'8px 8px 8px 8px':'0px 8px 8px 0px',cursor:'pointer'}}>
                                <div style={{display:'flex', alignItems: 'center'}}>
                                    <div ><ArkreenAvatar address={account.address} type='owner' shape='circle' /></div>
                                    <div>
                                        <span style={{marginLeft:'8px',fontSize:'16px',display:prop.onlyAvatar?'none':''}}>{account.displayName} </span> &nbsp;<DownOutlined style={{fontSize:'14px'}} />
                                    </div>
                                </div>
                            </div>
                            }
                        </div>
                    );
                })()}
                </div>
            )
            }}
            </ConnectButton.Custom>

    )
}
   
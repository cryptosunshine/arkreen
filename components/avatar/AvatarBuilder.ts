import {antList,eyeList,faceList,mouthList,colorList} from './MinerCommons'

import {hashCode,buildSeed,getOwnerAvatar,defaultOwnerAvatar} from './utils'


type AvatarBuildType = {
    type?: 'owner' | 'miner' | undefined
    address: string,
}

function build(params:AvatarBuildType) {
    let svg = ''
    if(params.type == 'owner'){
        if(params.address){
            if(params.address.length == 11 && (params.address.startsWith('1') || params.address.startsWith('2'))){
                svg = getOwnerAvatar(params.address)
            }else {
                svg = buildOwnerAvatar(params.address)
            }
        }else {
            svg = defaultOwnerAvatar
        }
    }else {
        svg = buildMinerAvatar(params.address)
    }
    return svg
}

function buildOwnerAvatar(address:string){
    const seedStr = buildSeed(address)
    return getOwnerAvatar(seedStr);
}

function buildMinerAvatar(address:string){
    //
    const hash = hashCode(address.toLowerCase())
    const antIndex = Math.abs(hash % antList.length);
    const faceIndex = Math.abs(hash % faceList.length);
    const eyeIndex = Math.abs(hash % eyeList.length);
    const mouthIndex = Math.abs(hash % mouthList.length);
    const colorIndex = Math.abs(hash % colorList.length);
    //
    const mask = '<mask id="viewboxMask"><rect width="106" height="106" rx="0" ry="0" x="0" y="0" fill="#fff" /></mask>'
    //
    const ant = '<g transform="translate(8 -1)">'+antList[antIndex]+'</g>'
    let face = '<g transform="translate(9 23)">'+faceList[faceIndex]+'</g>'
    face = face.replaceAll('#faceColor#',colorList[colorIndex])
    const eye = '<g transform="translate(9 26)">'+eyeList[eyeIndex]+'</g>'
    const mouth = '<g transform="translate(9 75)">'+mouthList[mouthIndex]+'</g>'
    //
    const body = '<g mask="url(#viewboxMask)">'+ant+face+eye+mouth+'</g>'
    //
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106 106" fill="none" shape-rendering="auto">'+mask+body+'</svg>'
    //
    return svg;
}



export default build
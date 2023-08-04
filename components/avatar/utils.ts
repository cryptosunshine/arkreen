import {faceComponents,clothesComponents,hairComponents,glassesComponents,hairColorList} from './OwnerCommons'


const sexList = ['male','female']

export function buildSeed(address:string) {
    const hash = hashCode(address.toLowerCase())
    const sex = sexList[Math.abs(hash % sexList.length)];
    const clothesIndex = Math.abs(hash % (sex=='male'?clothesComponents.male.length:clothesComponents.female.length));
    const hairIndex = Math.abs(hash % (sex=='male'?hairComponents.male.length:hairComponents.female.length));
    const faceIndex = Math.abs(hash % (sex=='male'?faceComponents.male.length:faceComponents.female.length));
    const glassesIndex = Math.abs(hash % glassesComponents.length);
    const hairColorIndex = Math.abs(hash % hairColorList.length);
    const seed = formatSeed(sex,clothesIndex,hairIndex,faceIndex,glassesIndex,hairColorIndex)
    return seed;
}

function formatSeed(sex:string,clothesIndex:number,hairIndex:number,faceIndex:number,glassesIndex:number,hairColorIndex:number) {
    let seed = ''
    seed = sex == 'male'?'1':'2'
    seed+=(clothesIndex<10?'0':'')+clothesIndex
    seed+=(hairIndex<10?'0':'')+hairIndex
    seed+=(faceIndex<10?'0':'')+faceIndex
    seed+=(glassesIndex<10?'0':'')+glassesIndex
    seed+=(hairColorIndex<10?'0':'')+hairColorIndex
    return seed;
}

export function analysisSeed(seed:string) {
    const seedIndex:seedIndexType = {
        sex: seed.startsWith('1')?'male':'female',
        clothesIndex: Number(seed.substring(1,3)),
        hairIndex: Number(seed.substring(3,5)),
        faceIndex: Number(seed.substring(5,7)),
        glassesIndex: Number(seed.substring(7,9)),
        hairColorIndex: Number(seed.substring(9,11))
    }
    return seedIndex;
}

export function hashCode(text: string) {
    let hash = 0;
    if (text.length === 0) return hash;
    for (let i = 0; i < text.length; i++) {
      const chr = text.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0;
    }
    return hash;
}

export function getOwnerAvatar(seed:string) {
    if(seed && seed.length == 11){
        const seedIndex = analysisSeed(seed)
        return buildOwnerAvatarSvg(seedIndex)
    }else {
        return defaultOwnerAvatar;
    }
}

function buildOwnerAvatarSvg(seedIndex:seedIndexType){
    const sex = seedIndex.sex
    //
    const mask = '<mask id="viewboxMask"><rect width="416" height="416" rx="0" ry="0" x="0" y="0" fill="#fff" /></mask>'
    //
    const face = (sex=='male'?faceComponents.male[seedIndex.faceIndex]:faceComponents.female[seedIndex.faceIndex])
    const clothes = (sex=='male'?clothesComponents.male[seedIndex.clothesIndex]:clothesComponents.female[seedIndex.clothesIndex])
    let hair = sex=='male'?hairComponents.male[seedIndex.hairIndex]:hairComponents.female[seedIndex.hairIndex]
    hair = hair.replaceAll('#hairColor#',hairColorList[seedIndex.hairColorIndex])
    const glasses = glassesComponents[seedIndex.glassesIndex]
    //
    const body = '<g mask="url(#viewboxMask)"><path fill="#DDE0F8" d="M0 0h416v416H0z"/>'+face+clothes+hair+glasses+'</g>'
    //
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 416 416" fill="none" shape-rendering="auto">'+mask+body+'</svg>'
    //
    return svg;
}

type seedIndexType = {
    sex: string,
    clothesIndex: number
    hairIndex: number
    faceIndex: number
    glassesIndex: number
    hairColorIndex: number
}

export const defaultOwnerAvatar = '<svg viewBox="0 0 416 416" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1128_31697)"><rect width="416" height="416" fill="#DDE0F8"/><g clip-path="url(#clip1_1128_31697)"><path fill-rule="evenodd" clip-rule="evenodd" d="M176 318H240V355.653C297.17 362.768 340 392.009 340 427L76 427C76 392.009 118.83 362.768 176 355.653V318Z" fill="#FFECD1"/></g><path d="M90.1768 210.257C92.4914 236.79 109.27 238.385 109.27 238.385L109.518 185.267C109.518 185.267 87.8359 183.711 90.1768 210.257Z" fill="#FFECD1"/><path d="M325.212 209.46C322.898 235.993 306.12 237.588 306.12 237.588L305.871 184.47C305.871 184.47 327.553 182.914 325.212 209.46V209.46Z" fill="#FFF6ED"/><mask id="mask0_1128_31697" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="109" y="71" width="198" height="256"><path d="M109 170.132C109 115.39 153.317 71 207.999 71C262.668 71 307 115.39 307 170.145V227.881C307 282.623 262.681 327 207.999 327C153.33 327 109 282.623 109 227.868V170.132Z" fill="#D9D9D9"/></mask><g mask="url(#mask0_1128_31697)"><path d="M208 71C153.219 71 108.746 115.531 108.746 170.297V228.058C108.746 282.836 153.233 327 208 327V71Z" fill="#FFECD1"/><path d="M208 71V327C262.781 327 307.104 282.836 307.104 228.071V170.175C307.104 115.396 262.767 71 208 71Z" fill="#FFF6ED"/></g><g clip-path="url(#clip2_1128_31697)"><mask id="mask1_1128_31697" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="76" y="318" width="264" height="109"><path fill-rule="evenodd" clip-rule="evenodd" d="M176 318H240V355.653C297.17 362.768 340 392.009 340 427L76 427C76 392.009 118.83 362.768 176 355.653V318Z" fill="#FFEED6"/></mask><g mask="url(#mask1_1128_31697)"><path d="M280.077 274.677C278.865 292.845 270.803 309.871 257.525 322.3C244.247 334.729 226.747 341.631 208.578 341.605C190.408 341.579 172.929 334.627 159.686 322.16C146.443 309.693 138.429 292.644 137.269 274.473C119.386 277.634 103.186 287.006 91.5097 300.944C79.8338 314.882 73.4286 332.495 73.418 350.693V526.527H342.58V350.693C342.571 332.725 336.332 315.319 324.93 301.453C313.529 287.586 297.673 278.121 280.077 274.677Z" fill="#6C8D9B"/><path fill-rule="evenodd" clip-rule="evenodd" d="M257.525 322.3C270.803 309.871 278.865 292.845 280.077 274.677C297.673 278.121 313.529 287.586 324.93 301.453C336.332 315.319 342.571 332.725 342.58 350.693L342.58 526.527H73.418L73.418 431.864H207.999L207.999 341.602C208.192 341.604 208.385 341.605 208.578 341.605C226.747 341.631 244.247 334.729 257.525 322.3ZM157.579 320.093C145.595 307.842 138.366 291.659 137.269 274.473C119.386 277.634 103.186 287.006 91.5097 300.944C86.6361 306.762 82.6808 313.22 79.7256 320.093H157.579Z" fill="#99B6C3"/></g></g><path fill-rule="evenodd" clip-rule="evenodd" d="M304.837 200.281C304.617 190.515 304.111 178.458 302.97 169.088C300.443 148.334 295.001 129.462 280.501 125.001C266.001 120.539 227.309 120.073 206.521 120.002C181.155 119.917 147.996 122.003 136.001 127.001C119.001 134.084 115.11 147.323 112.08 169.088C110.756 178.599 110.254 190.913 110.082 200.768C108.571 200.935 107.363 198.506 105.925 190.563C102.86 173.63 102 139.501 102 139.501C102 86.0005 148.569 54.0273 208.014 54.0273C267.459 54.0273 314 84.5005 314 139.501C314 139.501 313.139 173.63 310.077 190.563C308.313 200.317 306.893 201.753 304.837 200.281Z" fill="#333333"/></g><defs><clipPath id="clip0_1128_31697"><rect width="416" height="416" fill="white"/></clipPath><clipPath id="clip1_1128_31697"><rect width="264" height="98" fill="white" transform="translate(76 318)"/></clipPath><clipPath id="clip2_1128_31697"><rect width="416" height="416" fill="white"/></clipPath></defs></svg>'


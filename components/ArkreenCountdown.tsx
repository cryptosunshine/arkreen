"use client"

import React, {useEffect, useState} from 'react'

type CountdownType = {
    time:number
    style?:React.CSSProperties
    onFinish?: () => void;
    type?: 'square' | 'text' | undefined
}

export default function ArkreenCountdown(prop: CountdownType): JSX.Element {

    const squareStyle:React.CSSProperties = {padding:'2px 4px',borderRadius:'8px',border:'1px solid #00913A',width:'36px',display:'inline-block'}
    const arrn = [31536000, 2592000, 604800, 86400, 3600, 60, 1];
    const [str,setStr] = useState<any>()

    function formatCountdownDate(value: number) {
        if(value===0 || Number.isNaN(value)){
            return ''
        }
        if(value < 100000000000){
            value = value * 1000
        }
        if(value<=Date.now()){
            return ''
        }
        let mistiming = Math.round(Number(new Date()) / 1000) - (value / 1000);
        mistiming = Math.abs(mistiming)
        let str = "";
        //
        let d = day(mistiming);
        if(d>0){
            str += d + "d ";
            mistiming = mistiming - (arrn[3]*d);
        }
        //
        let h = hour(mistiming);
        if(h>0){
            str += h+':';
            mistiming = mistiming - (arrn[4]*h);
        }else{
            if(prop.type == 'square'){
                str += '00:'
            }
        }
        let min = minutes(mistiming);
        if(min>=10){
            str = str + min + ':';
            mistiming = mistiming - (arrn[5]*min);
        }else if(min>=0){
            str = str + '0'+ min + ':';
            mistiming = mistiming - (arrn[5]*min);
        }else {
            str = '00:';
        }
        let s = second(mistiming);
        if(s>=10){
            str += s;
        }else if(s>=0){
            str += '0'+s;
        }else{
            str += '00'
        }
        return str===""?"00:00:00":str;
    }

    function second(mistiming: number){
        return fun(mistiming,arrn[6]);
    }
    
    function minutes(mistiming: number){
        return fun(mistiming,arrn[5]);
    }

    function init(str:string) {
        if(prop.type == 'square'){
            let element = <><span style={squareStyle}>00</span>:<span style={squareStyle}>00</span>:<span style={squareStyle}>00</span></>
            if(str!==''){
                const strArr = str.split(':')
                element = <>
                 {
                    strArr.map((item:string,index:number) => (index==strArr.length-1)?
                        <span key={'gl_'+Math.random()}><span style={squareStyle}>{item.length<2?'0'+item:item}</span></span>
                        :
                        <span key={'gl_'+Math.random()}><span style={squareStyle}>{item.length<2?'0'+item:item}</span><span style={{paddingInline:'2px'}}>:</span></span>
                        )
                 }
                </>
            }
            setStr(element)
        }else {
            const element = <>{str===""?"00:00:00":str}</>
            setStr(element)
        }
    }
    
    function hour(mistiming: number){
        return fun(mistiming,arrn[4]);
    }
    
    function day(mistiming: number){
        return fun(mistiming,arrn[3]);
    }

    function fun(mistiming: number,number: number){
        if(mistiming>=number){
            const inm = Math.floor(mistiming / number);
            if(inm!==0){
                return inm;
            }
        }
        return 0;
    }

    useEffect(() => {
        init(formatCountdownDate(prop.time))
        //
        const timer = setInterval(() => {
            const str = formatCountdownDate(prop.time);
            init(str)
            if(str == ''){
                prop.onFinish?.call(1)
                clearInterval(timer)
            }
        }, 1000)
        //
        return () => {
            clearTimeout(timer);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    

    return (
        <>
            {
                prop.type == 'square'?
                <span style={prop.style}>{str}</span>
                :
                <span style={prop.style}>{str}</span>
            }
        </>
    )
}
    
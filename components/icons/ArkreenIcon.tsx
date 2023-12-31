import React from "react";
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import Icon from '@ant-design/icons';

const fillStyle = {fill: 'currentColor'}
const strokeStyle = {stroke: 'currentColor'}

export function Vector2Icon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width="32" height="24" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.4883 5.01242L13.5117 22.9892L4.51172 13.9892" stroke="#00913A" strokeWidth="6" strokeLinecap="square"/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function Vector1Icon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="14" y="3" width="6" height="20" fill="#E16969"/>
            <rect x="14" y="28" width="6" height="6" fill="#E16969"/>
        </svg>

    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function Btn1Icon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.style?.width?props.style.width:"32px"} height={props.style?.height?props.style.height:"32px"} viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="11" y="15.5" width="10" height="2" rx="1" fill="white"/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function Btn2Icon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.style?.width?props.style.width:"32px"} height={props.style?.height?props.style.height:"32px"}  viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M15 20.5C15 21.0523 15.4477 21.5 16 21.5C16.5523 21.5 17 21.0523 17 20.5V17.5H20C20.5523 17.5 21 17.0523 21 16.5C21 15.9477 20.5523 15.5 20 15.5H17V12.5C17 11.9477 16.5523 11.5 16 11.5C15.4477 11.5 15 11.9477 15 12.5L15 15.5H12C11.4477 15.5 11 15.9477 11 16.5C11 17.0523 11.4477 17.5 12 17.5H15L15 20.5Z" fill="white"/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function SmileIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.style?.width?props.style.width:"17px"} height={props.style?.height?props.style.height:"17px"} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path style={strokeStyle} stroke={props.style?.color?props.style.color:"#00913A"} d="M8.99957 16.5C13.1415 16.5 16.4991 13.1421 16.4991 9C16.4991 4.85786 13.1415 1.5 8.99957 1.5C4.85767 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85767 16.5 8.99957 16.5Z" strokeWidth="1.49996" strokeLinecap="round" strokeLinejoin="round"/>
            <path style={strokeStyle} stroke={props.style?.color?props.style.color:"#00913A"} d="M6 10.5C6 10.5 7.12493 12 8.99983 12C10.8747 12 11.9997 10.5 11.9997 10.5" strokeWidth="1.49996" strokeLinecap="round" strokeLinejoin="round"/>
            <path style={strokeStyle} stroke={props.style?.color?props.style.color:"#00913A"} d="M6.75 6.75H6.7575" strokeWidth="1.49996" strokeLinecap="round" strokeLinejoin="round"/>
            <path style={strokeStyle} stroke={props.style?.color?props.style.color:"#00913A"} d="M11.25 6.75H11.2575" strokeWidth="1.49996" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function TmsIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.style?.width?props.style.width:"17px"} height={props.style?.height?props.style.height:"17px"} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path style={strokeStyle} stroke={props.style?.color?props.style.color:"#00913A"} d="M8.99957 16.5C13.1415 16.5 16.4991 13.1421 16.4991 9C16.4991 4.85786 13.1415 1.5 8.99957 1.5C4.85767 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85767 16.5 8.99957 16.5Z" strokeWidth="1.49996" strokeLinecap="round" strokeLinejoin="round"/>
            <path style={strokeStyle} stroke={props.style?.color?props.style.color:"#00913A"} d="M8.98834 9.32832V4.60918" strokeWidth="1.49996" strokeLinecap="round" strokeLinejoin="round"/>
            <path style={strokeStyle} stroke={props.style?.color?props.style.color:"#00913A"} d="M8.98766 9.32719L13.546 8.10592" strokeWidth="1.49996" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}


export function Down2Icon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width='15px' height={props.style?.height?props.style.height:"17px"} viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path  style={strokeStyle} stroke={props.style?.color?props.style.color:"#00913A"} d="M10.6623 12.6579L7.48047 15.8398L7.48258 15.8382" strokeWidth="1.49996" strokeLinecap="round" strokeLinejoin="round"/>
            <path  style={strokeStyle} stroke={props.style?.color?props.style.color:"#00913A"} d="M7.48052 15.8364V0.874512" strokeWidth="1.49996" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function WalletIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.style?.width?props.style.width:"20px"} height={props.style?.height?props.style.height:"20px"} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.4502 11.64V12.64C19.4502 12.91 19.2402 13.13 18.9602 13.14H17.5002C16.9702 13.14 16.4902 12.75 16.4502 12.23C16.4202 11.92 16.5402 11.63 16.7402 11.43C16.9202 11.24 17.1702 11.14 17.4402 11.14H18.9502C19.2402 11.15 19.4502 11.37 19.4502 11.64Z" style={fillStyle} fill={props.style?.color?props.style.color:"#101020"}/>
            <path d="M15.9902 10.69C15.4902 11.18 15.2502 11.91 15.4502 12.67C15.7102 13.6 16.6202 14.19 17.5802 14.19H18.4502C19.0002 14.19 19.4502 14.64 19.4502 15.19V15.38C19.4502 17.45 17.7602 19.14 15.6902 19.14H4.2102C2.1402 19.14 0.450195 17.45 0.450195 15.38V8.65C0.450195 7.42 1.0402 6.33 1.9502 5.65C2.5802 5.17 3.3602 4.89 4.2102 4.89H15.6902C17.7602 4.89 19.4502 6.58 19.4502 8.65V9.09C19.4502 9.64 19.0002 10.09 18.4502 10.09H17.4302C16.8702 10.09 16.3602 10.31 15.9902 10.69Z" style={fillStyle} fill={props.style?.color?props.style.color:"#101020"}/>
            <path d="M14.2002 2.82C14.4702 3.09 14.2402 3.51 13.8602 3.51L6.1802 3.5C5.7402 3.5 5.5102 2.96 5.8302 2.65L7.4502 1.02C8.8202 -0.34 11.0402 -0.34 12.4102 1.02L14.1602 2.79C14.1702 2.8 14.1902 2.81 14.2002 2.82Z" style={fillStyle} fill={props.style?.color?props.style.color:"#101020"}/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function BalanceIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.style?.width?props.style.width:"17px"} height={props.style?.height?props.style.height:"17px"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"} fillRule="evenodd" clipRule="evenodd" d="M4.16076 3.83316C4.03478 3.95917 3.9173 4.09764 3.81659 4.24899C2.96234 4.40701 2.23631 4.8139 1.71201 5.42903C1.13873 6.10163 0.833374 6.99146 0.833374 8.00004V11.3334C0.833374 12.447 1.20676 13.4139 1.89649 14.1036C2.58621 14.7933 3.55308 15.1667 4.66671 15.1667H11.3334C12.447 15.1667 13.4139 14.7933 14.1036 14.1036C14.7933 13.4139 15.1667 12.447 15.1667 11.3334V8.00004C15.1667 6.98357 14.8556 6.08779 14.2736 5.41337C13.7708 4.83071 13.0861 4.43705 12.2834 4.26731C12.1783 3.74076 11.9185 3.24497 11.5076 2.83954L10.3432 1.66182L10.3399 1.65853C9.23161 0.558325 7.43702 0.55832 6.32872 1.65853L4.16076 3.83316ZM7.0341 2.36736L5.24028 4.16671H11.2155C11.1271 3.94303 10.9902 3.73347 10.8036 3.54972L10.7987 3.54496L9.63384 2.36668C8.91563 1.65538 7.75203 1.65561 7.0341 2.36736ZM14.1632 7.83337C14.1318 7.09979 13.893 6.50303 13.5165 6.0667C13.1128 5.59885 12.5235 5.28364 11.7756 5.19669C11.7674 5.19574 11.7593 5.19458 11.7512 5.19323C11.6454 5.1756 11.5281 5.16844 11.39 5.16699C11.3718 5.16681 11.3533 5.16672 11.3343 5.16672H4.66765C4.50481 5.16672 4.3503 5.17834 4.20368 5.2009C4.19553 5.20215 4.18738 5.2032 4.17924 5.20405C3.44565 5.29823 2.86869 5.61356 2.47307 6.07771C2.07469 6.54511 1.83337 7.19528 1.83337 8.00004V11.3334C1.83337 12.2197 2.12665 12.9195 2.60359 13.3965C3.08054 13.8734 3.78033 14.1667 4.66671 14.1667H11.3334C12.2198 14.1667 12.9195 13.8734 13.3965 13.3965C13.8431 12.9498 14.1287 12.3078 14.1632 11.5H12.6667C11.6572 11.5 10.8334 10.6762 10.8334 9.66671C10.8334 8.65723 11.6572 7.83337 12.6667 7.83337H14.1632ZM14.1667 10.5H12.6667C12.2095 10.5 11.8334 10.1239 11.8334 9.66671C11.8334 9.20952 12.2095 8.83337 12.6667 8.83337H14.1667V10.5Z" />
        </svg>
        );
    return (
        <Icon component={svg} {...props} />
    );
}

export function CouponIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.style?.width?props.style.width:"1em"} height={props.style?.height?props.style.height:"1em"} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"} fillRule="evenodd" clipRule="evenodd" d="M96.768 618.617905c57.222095 0 103.619048-46.713905 103.619048-104.326095 0-57.10019-45.592381-103.472762-102.107429-104.301715V243.809524a73.142857 73.142857 0 0 1 73.142857-73.142857h682.666667a73.142857 73.142857 0 0 1 73.142857 73.142857v166.229333l-3.486476 0.073143c-54.905905 2.633143-98.596571 48.274286-98.596572 104.17981 0 57.10019 45.543619 103.497143 102.058667 104.326095L927.232 780.190476a73.142857 73.142857 0 0 1-73.142857 73.142857h-682.666667a73.142857 73.142857 0 0 1-73.142857-73.142857v-161.596952l-1.511619 0.024381z m74.654476 56.563809V780.190476h682.666667v-104.984381a177.566476 177.566476 0 0 1-102.083048-160.914285 176.956952 176.956952 0 0 1 102.083048-160.49981V243.809524h-682.666667v109.592381a177.566476 177.566476 0 0 1 102.107429 160.914285 177.566476 177.566476 0 0 1-96.304762 158.037334l-5.802667 2.852571z m195.047619-65.657904h77.726476v97.523809H366.445714v-97.523809z m0-146.285715h77.726476v97.52381H366.445714v-97.52381z m0-146.285714h77.726476v97.523809H366.445714v-97.523809z">
            </path>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function DiscordIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1709" width={props.style?.width?props.style.width:"1em"} height={props.style?.height?props.style.height:"1em"}>
            <path d="M0 512a512 512 0 1 0 1024 0A512 512 0 1 0 0 512z" fill="#738BD8" p-id="1710"></path>
            <path d="M190.915 234.305h642.169v477.288H190.915z" fill="#FFFFFF" p-id="1711"></path>
            <path d="M698.157 932.274L157.288 862.85c-58.43-7.5-55.4-191.167-50.26-249.853l26.034-297.22c5.14-58.686 74.356-120.22 132.7-128.362l466.441-65.085c58.346-8.14 177.24 212.65 176.09 271.548l-8.677 445.108M512 300.373c-114.347 0-194.56 49.067-194.56 49.067 43.947-39.253 120.747-61.867 120.747-61.867l-7.254-7.253c-72.106 1.28-137.386 51.2-137.386 51.2-73.387 153.173-68.694 285.44-68.694 285.44 59.734 77.227 148.48 71.68 148.48 71.68l30.294-38.4c-53.334-11.52-87.04-58.88-87.04-58.88S396.8 645.973 512 645.973c115.2 0 195.413-54.613 195.413-54.613s-33.706 47.36-87.04 58.88l30.294 38.4s88.746 5.547 148.48-71.68c0 0 4.693-132.267-68.694-285.44 0 0-65.28-49.92-137.386-51.2l-7.254 7.253s76.8 22.614 120.747 61.867c0 0-80.213-49.067-194.56-49.067M423.68 462.08c27.733 0 50.347 24.32 49.92 54.187 0 29.44-22.187 54.186-49.92 54.186-27.307 0-49.493-24.746-49.493-54.186 0-29.867 21.76-54.187 49.493-54.187m177.92 0c27.733 0 49.92 24.32 49.92 54.187 0 29.44-22.187 54.186-49.92 54.186-27.307 0-49.493-24.746-49.493-54.186 0-29.867 21.76-54.187 49.493-54.187z" fill="#738BD8" p-id="1712"></path>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}


export function MinerIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.width?props.width:"1em"} height={props.height?props.height:"1em"} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path style={fillStyle} d="M7.00008 6.02223C7.00008 5.88548 7.0092 5.74873 7.01831 5.60286V5.56639C7.03655 5.39317 7.05478 5.22907 7.08213 5.05585C7.08213 5.03762 7.09125 5.01027 7.09125 4.98292C7.1186 4.82793 7.15507 4.68206 7.19153 4.52708L7.21888 4.41767C7.25535 4.28092 7.30094 4.15329 7.35564 4.02565C7.37387 3.98007 7.3921 3.92537 7.41034 3.87978C7.45592 3.76126 7.51062 3.65186 7.56532 3.53334C7.59267 3.47864 7.62002 3.42394 7.64737 3.36012C7.70208 3.25072 7.76589 3.15044 7.82971 3.05015C7.86618 2.99545 7.89353 2.93163 7.93 2.87693C8.00293 2.76753 8.07586 2.66725 8.15792 2.56696C8.18527 2.53049 8.2035 2.50314 8.23085 2.46668L8.2035 2.43933C7.95735 2.19317 7.95735 1.79203 8.2035 1.54588C8.44965 1.29972 8.85079 1.29972 9.09695 1.54588L9.1243 1.57323C10.0177 0.862118 11.1026 0.433628 12.2422 0.351577C12.4428 0.333343 12.6525 0.333344 12.8531 0.333344L12.844 0.634198L12.9625 1.56411C12.0417 1.8285 11.1938 2.28434 10.4554 2.89517L13.4821 5.92195C13.7283 6.1681 13.7283 6.56924 13.4821 6.81539C13.236 7.06155 12.8348 7.06155 12.5887 6.81539L9.5619 3.78861C8.95108 4.52708 8.49524 5.37494 8.23085 6.29574L7.00008 6.13163V5.99488V6.02223Z" fill={props.style?.color?props.style?.color:"#101020"}/>
            <path style={fillStyle} d="M12.4639 13.6667H1.25836C0.803326 13.6667 0.482013 13.2209 0.625909 12.7892L2.75002 6.41687C3.11024 5.33619 4.57217 5.17571 5.15825 6.15252L7.28644 9.69949C7.48983 10.0385 7.94184 10.127 8.2581 9.88983L9.75276 8.76883C10.0652 8.53454 10.5111 8.61769 10.7181 8.94883L13.0292 12.6467C13.3068 13.0907 12.9875 13.6667 12.4639 13.6667Z" fill={props.style?.color?props.style?.color:"#101020"}/>
            <path style={fillStyle} d="M3.00008 4.00001C3.00008 4.5523 2.55237 5.00001 2.00008 5.00001C1.4478 5.00001 1.00008 4.5523 1.00008 4.00001C1.00008 3.44773 1.4478 3.00001 2.00008 3.00001C2.55237 3.00001 3.00008 3.44773 3.00008 4.00001Z" fill={props.style?.color?props.style?.color:"#101020"}/>
            <path style={fillStyle} d="M6.33341 1.66668C6.33341 2.03487 6.03494 2.33334 5.66675 2.33334C5.29856 2.33334 5.00008 2.03487 5.00008 1.66668C5.00008 1.29849 5.29856 1.00001 5.66675 1.00001C6.03494 1.00001 6.33341 1.29849 6.33341 1.66668Z" fill={props.style?.color?props.style?.color:"#101020"}/>
            <path style={fillStyle} d="M13.0001 9.66668C13.0001 10.0349 12.7016 10.3333 12.3334 10.3333C11.9652 10.3333 11.6667 10.0349 11.6667 9.66668C11.6667 9.29849 11.9652 9.00001 12.3334 9.00001C12.7016 9.00001 13.0001 9.29849 13.0001 9.66668Z" fill={props.style?.color?props.style?.color:"#101020"}/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function ArrowDownMinerIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.width?props.width:"24px"} height={props.height?props.height:"24px"} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path style={strokeStyle} d="M12 5.44922V19.4492" stroke={props.style?.color?props.style?.color:"#101020"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path style={strokeStyle} d="M19 12.4492L12 19.4492L5 12.4492" stroke={props.style?.color?props.style?.color:"#101020"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}




export function RankIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.width?props.width:"1em"} height={props.height?props.height:"1em"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path style={fillStyle} d="M20 4.75C20.4142 4.75 20.75 5.08579 20.75 5.5C20.75 5.91421 20.4142 6.25 20 6.25H4C3.58579 6.25 3.25 5.91421 3.25 5.5C3.25 5.08579 3.58579 4.75 4 4.75H20Z" fill={props.style?.color?props.style?.color:"#00913A"}/>
            <path style={fillStyle} d="M20.75 18.5C20.75 18.0858 20.4142 17.75 20 17.75H4C3.58579 17.75 3.25 18.0858 3.25 18.5C3.25 18.9142 3.58579 19.25 4 19.25H20C20.4142 19.25 20.75 18.9142 20.75 18.5Z" fill={props.style?.color?props.style?.color:"#00913A"}/>
            <path style={fillStyle} d="M20 11.25C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H20Z" fill={props.style?.color?props.style?.color:"#00913A"}/>
        </svg>

    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function ArrowUpIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path style={fillStyle} fill={props.style?.color?props.style?.color:"#E16969"} d="M6.35355 2.14645C6.15829 1.95118 5.84171 1.95118 5.64645 2.14645L2.14645 5.64645C1.95118 5.84171 1.95118 6.15829 2.14645 6.35355C2.34171 6.54882 2.65829 6.54882 2.85355 6.35355L5.5 3.70711V9.5C5.5 9.77614 5.72386 10 6 10C6.27614 10 6.5 9.77614 6.5 9.5V3.70711L9.14645 6.35355C9.34171 6.54882 9.65829 6.54882 9.85356 6.35355C10.0488 6.15829 10.0488 5.84171 9.85356 5.64645L6.35355 2.14645Z"/>
        </svg>

    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function ArrowDownIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
    
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path style={fillStyle} fill={props.style?.color?props.style?.color:"#0072DB"} d="M6.35355 9.85355C6.15829 10.0488 5.84171 10.0488 5.64645 9.85355L2.14645 6.35355C1.95118 6.15829 1.95118 5.84171 2.14645 5.64645C2.34171 5.45118 2.65829 5.45118 2.85355 5.64645L5.5 8.29289V2.5C5.5 2.22386 5.72386 2 6 2C6.27614 2 6.5 2.22386 6.5 2.5V8.29289L9.14645 5.64645C9.34171 5.45118 9.65829 5.45118 9.85356 5.64645C10.0488 5.84171 10.0488 6.15829 9.85356 6.35355L6.35355 9.85355Z"/>
        </svg>

    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function ExpiredTimeIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.style?.width?props.style.width:"14.33px"} height={props.style?.height?props.style.height:"14.33px"} viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.10661 1.28707C1.55611 0.990706 2.1401 0.833252 2.84006 0.833252H7.16006C7.86002 0.833252 8.44402 0.990706 8.89351 1.28707C9.34739 1.58632 9.63655 2.00987 9.76378 2.48355C10.0142 3.41583 9.62952 4.47032 8.84261 5.18363C8.84258 5.18366 8.84264 5.18361 8.84261 5.18363L5.74352 7.99992L8.84252 10.8161C8.84244 10.816 8.8426 10.8162 8.84252 10.8161C9.62933 11.5294 10.0142 12.5841 9.76378 13.5163C9.63655 13.99 9.34739 14.4135 8.89351 14.7128C8.44401 15.0091 7.86002 15.1666 7.16006 15.1666H2.84006C2.1401 15.1666 1.55611 15.0091 1.10661 14.7128C0.652728 14.4135 0.363576 13.99 0.236343 13.5163C-0.0140319 12.5842 0.370478 11.5299 1.15713 10.8166L4.2566 7.99992L1.1576 5.18372C1.15752 5.18364 1.15769 5.18379 1.1576 5.18372C0.370805 4.47041 -0.0140553 3.41577 0.236343 2.48355C0.363576 2.00987 0.652728 1.58632 1.10661 1.28707ZM5.00006 7.3243L8.17046 4.44322C8.73683 3.92986 8.93258 3.24397 8.79801 2.74296C8.73274 2.49997 8.58815 2.28352 8.34307 2.12194C8.09361 1.95746 7.71343 1.83325 7.16006 1.83325H2.84006C2.28669 1.83325 1.90651 1.95746 1.65705 2.12194C1.41198 2.28352 1.26738 2.49997 1.20211 2.74296C1.06754 3.24397 1.26282 3.92943 1.82918 4.44279L5.00006 7.3243ZM5.00006 8.67553L1.82966 11.5566C1.2633 12.07 1.06754 12.7559 1.20211 13.2569C1.26738 13.4999 1.41198 13.7163 1.65705 13.8779C1.90651 14.0424 2.28669 14.1666 2.84006 14.1666H7.16006C7.71343 14.1666 8.09361 14.0424 8.34307 13.8779C8.58815 13.7163 8.73274 13.4999 8.79801 13.2569C8.93258 12.7559 8.7373 12.0704 8.17094 11.5571L5.00006 8.67553Z" style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"}/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function OnboardingTimeIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.style?.width?props.style.width:"14.33px"} height={props.style?.height?props.style.height:"14.33px"} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.99996 0.833252C4.72382 0.833252 4.49996 1.05711 4.49996 1.33325C4.49996 1.60939 4.72382 1.83325 4.99996 1.83325H8.99996C9.2761 1.83325 9.49996 1.60939 9.49996 1.33325C9.49996 1.05711 9.2761 0.833252 8.99996 0.833252H4.99996Z" style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"}/>
            <path d="M6.99996 4.83325C7.2761 4.83325 7.49996 5.05711 7.49996 5.33325V8.66659C7.49996 8.94273 7.2761 9.16659 6.99996 9.16659C6.72382 9.16659 6.49996 8.94273 6.49996 8.66659V5.33325C6.49996 5.05711 6.72382 4.83325 6.99996 4.83325Z" style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"}/>
            <path fillRule="evenodd" clipRule="evenodd" d="M0.666626 8.83325C0.666626 5.33711 3.50382 2.49992 6.99996 2.49992C10.4961 2.49992 13.3333 5.33711 13.3333 8.83325C13.3333 12.3294 10.4961 15.1666 6.99996 15.1666C3.50382 15.1666 0.666626 12.3294 0.666626 8.83325ZM6.99996 3.49992C4.0561 3.49992 1.66663 5.88939 1.66663 8.83325C1.66663 11.7771 4.0561 14.1666 6.99996 14.1666C9.94382 14.1666 12.3333 11.7771 12.3333 8.83325C12.3333 5.88939 9.94382 3.49992 6.99996 3.49992Z" style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"}/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}


export function MakerIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.style?.width?props.style.width:"14.33px"} height={props.style?.height?props.style.height:"14.33px"} viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.53974 4.29427C2.53249 2.38328 4.08433 0.833252 5.99307 0.833252C7.90255 0.833252 9.45307 2.38378 9.45307 4.29325C9.45307 6.16296 7.97257 7.68388 6.12327 7.7463C6.10104 7.74705 6.07879 7.74632 6.05665 7.7441C6.02451 7.74089 5.97647 7.74046 5.93167 7.74453C5.91104 7.74641 5.89031 7.747 5.86961 7.7463C4.01314 7.6839 2.54027 6.16272 2.53974 4.29427ZM5.99307 1.83325C4.63548 1.83325 3.5342 2.93601 3.53973 4.29121L3.53974 4.29325C3.53974 5.61527 4.57246 6.68791 5.87633 6.74582C5.95538 6.74032 6.0389 6.74005 6.11769 6.74576C7.41529 6.68714 8.45307 5.61401 8.45307 4.29325C8.45307 2.93606 7.35026 1.83325 5.99307 1.83325Z" style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"}/>
            <path d="M9.5 11.6666C9.5 11.3904 9.27614 11.1666 9 11.1666C8.72386 11.1666 8.5 11.3904 8.5 11.6666V12.4999H7.66667C7.39052 12.4999 7.16667 12.7238 7.16667 12.9999C7.16667 13.2761 7.39052 13.4999 7.66667 13.4999H8.5V14.3333C8.5 14.6094 8.72386 14.8333 9 14.8333C9.27614 14.8333 9.5 14.6094 9.5 14.3333V13.4999H10.3333C10.6095 13.4999 10.8333 13.2761 10.8333 12.9999C10.8333 12.7238 10.6095 12.4999 10.3333 12.4999H9.5V11.6666Z" style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"}/>
            <path d="M2.93141 10.1221C3.7486 9.57537 4.85608 9.28658 5.99003 9.28658C7.12397 9.28658 8.23145 9.57537 9.04865 10.1221C9.27815 10.2757 9.58869 10.2141 9.74225 9.98463C9.89581 9.75512 9.83425 9.44458 9.60474 9.29102C8.5886 8.61113 7.27608 8.28658 5.99003 8.28658C4.7042 8.28658 3.39193 8.61101 2.37586 9.29066C1.46515 9.89674 0.943359 10.7464 0.943359 11.6607C0.943359 12.575 1.46499 13.4261 2.37522 14.0354L2.37601 14.0359C3.39492 14.7152 4.70361 15.0399 5.99336 15.0399C6.2695 15.0399 6.49336 14.8161 6.49336 14.5399C6.49336 14.2638 6.2695 14.0399 5.99336 14.0399C4.85663 14.0399 3.75217 13.7514 2.93112 13.2042C2.22829 12.7335 1.94336 12.1648 1.94336 11.6607C1.94336 11.1569 2.22803 10.5901 2.93031 10.1229L2.93141 10.1221Z" style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"}/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}


export function TypeIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.style?.width?props.style.width:"14.33px"} height={props.style?.height?props.style.height:"14.33px"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.47982 1.47994C1.93999 1.01977 2.58964 0.833496 3.33337 0.833496H4.66671C5.41045 0.833496 6.06009 1.01977 6.52026 1.47994C6.98043 1.94012 7.16671 2.58976 7.16671 3.3335V4.66683C7.16671 5.41057 6.98043 6.06021 6.52026 6.52038C6.06009 6.98056 5.41045 7.16683 4.66671 7.16683H3.33337C2.58964 7.16683 1.93999 6.98056 1.47982 6.52038C1.01965 6.06021 0.833374 5.41057 0.833374 4.66683V3.3335C0.833374 2.58976 1.01965 1.94012 1.47982 1.47994ZM2.18693 2.18705C1.98043 2.39354 1.83337 2.7439 1.83337 3.3335V4.66683C1.83337 5.25642 1.98043 5.60678 2.18693 5.81328C2.39342 6.01977 2.74378 6.16683 3.33337 6.16683H4.66671C5.2563 6.16683 5.60666 6.01977 5.81315 5.81328C6.01965 5.60678 6.16671 5.25642 6.16671 4.66683V3.3335C6.16671 2.7439 6.01965 2.39354 5.81315 2.18705C5.60666 1.98056 5.2563 1.8335 4.66671 1.8335H3.33337C2.74378 1.8335 2.39342 1.98056 2.18693 2.18705Z" style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"}/>
            <path fillRule="evenodd" clipRule="evenodd" d="M9.47982 1.47994C9.93999 1.01977 10.5896 0.833496 11.3334 0.833496H12.6667C13.4104 0.833496 14.0601 1.01977 14.5203 1.47994C14.9804 1.94012 15.1667 2.58976 15.1667 3.3335V4.66683C15.1667 5.41057 14.9804 6.06021 14.5203 6.52038C14.0601 6.98056 13.4104 7.16683 12.6667 7.16683H11.3334C10.5896 7.16683 9.93999 6.98056 9.47982 6.52038C9.01965 6.06021 8.83337 5.41057 8.83337 4.66683V3.3335C8.83337 2.58976 9.01965 1.94012 9.47982 1.47994ZM10.1869 2.18705C9.98043 2.39354 9.83337 2.7439 9.83337 3.3335V4.66683C9.83337 5.25642 9.98043 5.60678 10.1869 5.81328C10.3934 6.01977 10.7438 6.16683 11.3334 6.16683H12.6667C13.2563 6.16683 13.6067 6.01977 13.8132 5.81328C14.0196 5.60678 14.1667 5.25642 14.1667 4.66683V3.3335C14.1667 2.7439 14.0196 2.39354 13.8132 2.18705C13.6067 1.98056 13.2563 1.8335 12.6667 1.8335H11.3334C10.7438 1.8335 10.3934 1.98056 10.1869 2.18705Z" style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"}/>
            <path fillRule="evenodd" clipRule="evenodd" d="M9.47982 9.47994C9.93999 9.01977 10.5896 8.8335 11.3334 8.8335H12.6667C13.4104 8.8335 14.0601 9.01977 14.5203 9.47994C14.9804 9.94012 15.1667 10.5898 15.1667 11.3335V12.6668C15.1667 13.4106 14.9804 14.0602 14.5203 14.5204C14.0601 14.9806 13.4104 15.1668 12.6667 15.1668H11.3334C10.5896 15.1668 9.93999 14.9806 9.47982 14.5204C9.01965 14.0602 8.83337 13.4106 8.83337 12.6668V11.3335C8.83337 10.5898 9.01965 9.94012 9.47982 9.47994ZM10.1869 10.187C9.98043 10.3935 9.83337 10.7439 9.83337 11.3335V12.6668C9.83337 13.2564 9.98043 13.6068 10.1869 13.8133C10.3934 14.0198 10.7438 14.1668 11.3334 14.1668H12.6667C13.2563 14.1668 13.6067 14.0198 13.8132 13.8133C14.0196 13.6068 14.1667 13.2564 14.1667 12.6668V11.3335C14.1667 10.7439 14.0196 10.3935 13.8132 10.187C13.6067 9.98056 13.2563 9.8335 12.6667 9.8335H11.3334C10.7438 9.8335 10.3934 9.98056 10.1869 10.187Z" style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"}/>
            <path fillRule="evenodd" clipRule="evenodd" d="M1.47982 9.47994C1.93999 9.01977 2.58964 8.8335 3.33337 8.8335H4.66671C5.41045 8.8335 6.06009 9.01977 6.52026 9.47994C6.98043 9.94012 7.16671 10.5898 7.16671 11.3335V12.6668C7.16671 13.4106 6.98043 14.0602 6.52026 14.5204C6.06009 14.9806 5.41045 15.1668 4.66671 15.1668H3.33337C2.58964 15.1668 1.93999 14.9806 1.47982 14.5204C1.01965 14.0602 0.833374 13.4106 0.833374 12.6668V11.3335C0.833374 10.5898 1.01965 9.94012 1.47982 9.47994ZM2.18693 10.187C1.98043 10.3935 1.83337 10.7439 1.83337 11.3335V12.6668C1.83337 13.2564 1.98043 13.6068 2.18693 13.8133C2.39342 14.0198 2.74378 14.1668 3.33337 14.1668H4.66671C5.2563 14.1668 5.60666 14.0198 5.81315 13.8133C6.01965 13.6068 6.16671 13.2564 6.16671 12.6668V11.3335C6.16671 10.7439 6.01965 10.3935 5.81315 10.187C5.60666 9.98056 5.2563 9.8335 4.66671 9.8335H3.33337C2.74378 9.8335 2.39342 9.98056 2.18693 10.187Z" style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"}/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}


export function QrCodeIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.width?props.width:"1.1em"} height={props.height?props.height:"1.1em"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_889_6980)">
            <path d="M2 2.66667C2 2.29848 2.29848 2 2.66667 2H6.66667C7.03486 2 7.33333 2.29848 7.33333 2.66667V6.66667C7.33333 7.03486 7.03486 7.33333 6.66667 7.33333H2.66667C2.29848 7.33333 2 7.03486 2 6.66667V2.66667Z" style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"}/>
            <path d="M8.66667 2.66667C8.66667 2.29848 8.96514 2 9.33333 2H13.3333C13.7015 2 14 2.29848 14 2.66667V6.66667C14 7.03486 13.7015 7.33333 13.3333 7.33333H9.33333C8.96514 7.33333 8.66667 7.03486 8.66667 6.66667V2.66667Z" style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"}/>
            <path d="M2 9.33333C2 8.96514 2.29848 8.66667 2.66667 8.66667H6.66667C7.03486 8.66667 7.33333 8.96514 7.33333 9.33333V13.3333C7.33333 13.7015 7.03486 14 6.66667 14H2.66667C2.29848 14 2 13.7015 2 13.3333V9.33333Z" style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"}/>
            <path d="M8.66667 10.6667C8.66667 10.2985 8.96514 10 9.33333 10H10C10.3682 10 10.6667 10.2985 10.6667 10.6667V13.3333C10.6667 13.7015 10.3682 14 10 14H9.33333C8.96514 14 8.66667 13.7015 8.66667 13.3333V10.6667Z" style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"}/>
            <path d="M12 9.33333C12 8.96514 12.2985 8.66667 12.6667 8.66667H13.3333C13.7015 8.66667 14 8.96514 14 9.33333V13.3333C14 13.7015 13.7015 14 13.3333 14H12.6667C12.2985 14 12 13.7015 12 13.3333V9.33333Z" style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"}/>
            </g>
            <defs>
            <clipPath id="clip0_889_6980">
            <rect width={props.width?props.width:"1em"} height={props.height?props.height:"1em"} fill="white"/>
            </clipPath>
            </defs>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}


export function NetworkIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.style?.width?props.style.width:"20px"} height={props.style?.height?props.style.height:"20px"} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.65 18.91C5.62 18.91 5.58 18.93 5.55 18.93C3.61 17.97 2.03 16.38 1.06 14.44C1.06 14.41 1.08 14.37 1.08 14.34C2.3 14.7 3.56 14.97 4.81 15.18C5.03 16.44 5.29 17.69 5.65 18.91Z" style={fillStyle} fill={props.style?.color?props.style.color:"#101020"}/>
            <path d="M18.94 14.45C17.95 16.44 16.3 18.05 14.29 19.02C14.67 17.75 14.99 16.47 15.2 15.18C16.46 14.97 17.7 14.7 18.92 14.34C18.91 14.38 18.94 14.42 18.94 14.45Z" style={fillStyle} fill={props.style?.color?props.style.color:"#101020"}/>
            <path d="M19.02 5.71C17.76 5.33 16.49 5.02 15.2 4.8C14.99 3.51 14.68 2.23 14.29 0.98C16.36 1.97 18.03 3.64 19.02 5.71Z" style={fillStyle} fill={props.style?.color?props.style.color:"#101020"}/>
            <path d="M5.65 1.09C5.29 2.31 5.03 3.55 4.82 4.81C3.53 5.01 2.25 5.33 0.98 5.71C1.95 3.7 3.56 2.05 5.55 1.06C5.58 1.06 5.62 1.09 5.65 1.09Z" style={fillStyle} fill={props.style?.color?props.style.color:"#101020"}/>
            <path d="M13.49 4.59C11.17 4.33 8.83 4.33 6.51 4.59C6.76 3.22 7.08 1.85 7.53 0.53C7.55 0.45 7.54 0.39 7.55 0.31C8.34 0.12 9.15 0 10 0C10.84 0 11.66 0.12 12.44 0.31C12.45 0.39 12.45 0.45 12.47 0.53C12.92 1.86 13.24 3.22 13.49 4.59Z" style={fillStyle} fill={props.style?.color?props.style.color:"#101020"}/>
            <path d="M4.59 13.49C3.21 13.24 1.85 12.92 0.53 12.47C0.45 12.45 0.39 12.46 0.31 12.45C0.12 11.66 0 10.85 0 10C0 9.16 0.12 8.34 0.31 7.56C0.39 7.55 0.45 7.55 0.53 7.53C1.86 7.09 3.21 6.76 4.59 6.51C4.34 8.83 4.34 11.17 4.59 13.49Z" style={fillStyle} fill={props.style?.color?props.style.color:"#101020"}/>
            <path d="M20 10C20 10.85 19.88 11.66 19.69 12.45C19.61 12.46 19.55 12.45 19.47 12.47C18.14 12.91 16.78 13.24 15.41 13.49C15.67 11.17 15.67 8.83 15.41 6.51C16.78 6.76 18.15 7.08 19.47 7.53C19.55 7.55 19.61 7.56 19.69 7.56C19.88 8.35 20 9.16 20 10Z" style={fillStyle} fill={props.style?.color?props.style.color:"#101020"}/>
            <path d="M13.49 15.41C13.24 16.79 12.92 18.15 12.47 19.47C12.45 19.55 12.45 19.61 12.44 19.69C11.66 19.88 10.84 20 10 20C9.15 20 8.34 19.88 7.55 19.69C7.54 19.61 7.55 19.55 7.53 19.47C7.09 18.14 6.76 16.79 6.51 15.41C7.67 15.54 8.83 15.63 10 15.63C11.17 15.63 12.34 15.54 13.49 15.41Z" style={fillStyle} fill={props.style?.color?props.style.color:"#101020"}/>
            <path d="M13.7633 13.7633C11.2622 14.0789 8.73776 14.0789 6.23667 13.7633C5.92111 11.2622 5.92111 8.73776 6.23667 6.23667C8.73776 5.92111 11.2622 5.92111 13.7633 6.23667C14.0789 8.73776 14.0789 11.2622 13.7633 13.7633Z" style={fillStyle} fill={props.style?.color?props.style.color:"#101020"}/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function ValidatorIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.style?.width?props.style.width:"20px"} height={props.style?.height?props.style.height:"20px"} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM6.53 11.47C6.82 11.76 6.82 12.24 6.53 12.53C6.38 12.68 6.19 12.75 6 12.75C5.81 12.75 5.62 12.68 5.47 12.53L3.47 10.53C3.18 10.24 3.18 9.76 3.47 9.47L5.47 7.47C5.76 7.18 6.24 7.18 6.53 7.47C6.82 7.76 6.82 8.24 6.53 8.53L5.06 10L6.53 11.47ZM11.69 7.96L9.69 12.63C9.57 12.91 9.29 13.08 9 13.08C8.9 13.08 8.8 13.06 8.71 13.02C8.33 12.86 8.15 12.42 8.32 12.03L10.32 7.36C10.48 6.98 10.92 6.8 11.3 6.97C11.68 7.14 11.85 7.58 11.69 7.96ZM16.53 10.53L14.53 12.53C14.38 12.68 14.19 12.75 14 12.75C13.81 12.75 13.62 12.68 13.47 12.53C13.18 12.24 13.18 11.76 13.47 11.47L14.94 10L13.47 8.53C13.18 8.24 13.18 7.76 13.47 7.47C13.76 7.18 14.24 7.18 14.53 7.47L16.53 9.47C16.82 9.76 16.82 10.24 16.53 10.53Z" style={fillStyle} fill={props.style?.color?props.style.color:"#101020"}/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function Maker2Icon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.style?.width?props.style.width:"20px"} height={props.style?.height?props.style.height:"20px"}  viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.99996 0C5.37996 0 3.24996 2.13 3.24996 4.75C3.24996 7.32 5.25996 9.4 7.87996 9.49C7.95996 9.48 8.03996 9.48 8.09996 9.49C8.11996 9.49 8.12996 9.49 8.14996 9.49C8.15996 9.49 8.15996 9.49 8.16996 9.49C10.73 9.4 12.74 7.32 12.75 4.75C12.75 2.13 10.62 0 7.99996 0Z" style={fillStyle} fill={props.style?.color?props.style.color:"#101020"}/>
            <path d="M13.08 12.15C10.29 10.29 5.73996 10.29 2.92996 12.15C1.65996 13 0.959961 14.15 0.959961 15.38C0.959961 16.61 1.65996 17.75 2.91996 18.59C4.31996 19.53 6.15996 20 7.99996 20C9.83996 20 11.68 19.53 13.08 18.59C14.34 17.74 15.04 16.6 15.04 15.36C15.03 14.13 14.34 12.99 13.08 12.15ZM9.99996 16.13H8.74996V17.38C8.74996 17.79 8.40996 18.13 7.99996 18.13C7.58996 18.13 7.24996 17.79 7.24996 17.38V16.13H5.99996C5.58996 16.13 5.24996 15.79 5.24996 15.38C5.24996 14.97 5.58996 14.63 5.99996 14.63H7.24996V13.38C7.24996 12.97 7.58996 12.63 7.99996 12.63C8.40996 12.63 8.74996 12.97 8.74996 13.38V14.63H9.99996C10.41 14.63 10.75 14.97 10.75 15.38C10.75 15.79 10.41 16.13 9.99996 16.13Z" style={fillStyle} fill={props.style?.color?props.style.color:"#101020"}/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function DangerIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props?.width?props.width:"1.05em"} height={props?.height?props.height:"1.05em"} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.99992 13.6666C10.6818 13.6666 13.6666 10.6818 13.6666 6.99992C13.6666 3.31802 10.6818 0.333252 6.99992 0.333252C3.31802 0.333252 0.333252 3.31802 0.333252 6.99992C0.333252 10.6818 3.31802 13.6666 6.99992 13.6666ZM5.92251 4.744C5.59707 4.41856 5.06943 4.41856 4.744 4.744C4.41856 5.06943 4.41856 5.59707 4.744 5.92251L5.82141 6.99992L4.744 8.07733C4.41856 8.40277 4.41856 8.9304 4.744 9.25584C5.06943 9.58128 5.59707 9.58128 5.92251 9.25584L6.99992 8.17843L8.07733 9.25584C8.40277 9.58128 8.9304 9.58128 9.25584 9.25584C9.58128 8.9304 9.58128 8.40277 9.25584 8.07733L8.17843 6.99992L9.25584 5.92251C9.58128 5.59707 9.58128 5.06943 9.25584 4.744C8.9304 4.41856 8.40277 4.41856 8.07733 4.744L6.99992 5.82141L5.92251 4.744Z" style={fillStyle} fill={props.style?.color?props.style.color:"#101020"}/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function SuccessIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.width?props.width:"1em"} height={props.height?props.height:"1em"} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM14.6339 8.38388C15.122 7.89573 15.122 7.10427 14.6339 6.61612C14.1457 6.12796 13.3543 6.12796 12.8661 6.61612L8.75 10.7322L7.13388 9.11612C6.64573 8.62796 5.85427 8.62796 5.36612 9.11612C4.87796 9.60427 4.87796 10.3957 5.36612 10.8839L7.86612 13.3839C8.35427 13.872 9.14573 13.872 9.63388 13.3839L14.6339 8.38388Z" style={fillStyle} fill={props.style?.color?props.style.color:"#101020"}/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function ErrorIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.width?props.width:"1em"} height={props.height?props.height:"1em"} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM8.38388 6.61612C7.89573 6.12796 7.10427 6.12796 6.61612 6.61612C6.12796 7.10427 6.12796 7.89573 6.61612 8.38388L8.23223 10L6.61612 11.6161C6.12796 12.1043 6.12796 12.8957 6.61612 13.3839C7.10427 13.872 7.89573 13.872 8.38388 13.3839L10 11.7678L11.6161 13.3839C12.1043 13.872 12.8957 13.872 13.3839 13.3839C13.872 12.8957 13.872 12.1043 13.3839 11.6161L11.7678 10L13.3839 8.38388C13.872 7.89573 13.872 7.10427 13.3839 6.61612C12.8957 6.12796 12.1043 6.12796 11.6161 6.61612L10 8.23223L8.38388 6.61612Z" style={fillStyle} fill={props.style?.color?props.style.color:"#101020"}/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function WarningIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.width?props.width:"1em"} height={props.height?props.height:"1em"} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM11.25 15C11.25 15.6904 10.6904 16.25 10 16.25C9.30964 16.25 8.75 15.6904 8.75 15C8.75 14.3096 9.30964 13.75 10 13.75C10.6904 13.75 11.25 14.3096 11.25 15ZM10 3.75C9.30964 3.75 8.75 4.30964 8.75 5V10C8.75 10.6904 9.30964 11.25 10 11.25C10.6904 11.25 11.25 10.6904 11.25 10V5C11.25 4.30964 10.6904 3.75 10 3.75Z" style={fillStyle} fill={props.style?.color?props.style.color:"#101020"}/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function EllipseIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.style?.width?props.style.width:"6px"} height={props.style?.height?props.style.height:"6px"} viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3" cy="3" r="3" style={fillStyle} fill={props.style?.color?props.style.color:"#19BEBE"}/>
        </svg>
    );
    return (
        <span style={{width:'12.67px',height:'12.67px',lineHeight:'12.67px',display:'inline-block',marginTop:'-6px',verticalAlign:'middle'}}><Icon component={svg} {...props} /></span>
    );
}

export function MinerLineIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={(props.style?.width)?props.style.width:"1em"} height={(props.style?.height)?props.style.height:"1em"} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0001 8.53333C10.0001 8.3282 10.0137 8.12308 10.0274 7.90427V7.84957C10.0548 7.58974 10.0821 7.34359 10.1231 7.08376C10.1231 7.05641 10.1368 7.01538 10.1368 6.97436C10.1778 6.74188 10.2325 6.52308 10.2872 6.2906L10.3283 6.1265C10.383 5.92137 10.4513 5.72991 10.5334 5.53846C10.5607 5.47009 10.5881 5.38803 10.6154 5.31966C10.6838 5.14188 10.7659 4.97778 10.8479 4.8C10.8889 4.71795 10.93 4.6359 10.971 4.54017C11.0531 4.37607 11.1488 4.22564 11.2445 4.07521C11.2992 3.99316 11.3402 3.89744 11.3949 3.81538C11.5043 3.65128 11.6137 3.50085 11.7368 3.35043C11.7778 3.29573 11.8052 3.2547 11.8462 3.2L11.8052 3.15897C11.436 2.78974 11.436 2.18803 11.8052 1.8188C12.1744 1.44957 12.7761 1.44957 13.1454 1.8188L13.1864 1.85983C14.5266 0.793162 16.1539 0.150427 17.8633 0.0273501C18.1642 -3.53903e-07 18.4787 0 18.7795 0L18.7659 0.451282L18.9436 1.84615C17.5625 2.24273 16.2907 2.9265 15.183 3.84273L19.7231 8.38291C20.0924 8.75214 20.0924 9.35385 19.7231 9.72308C19.3539 10.0923 18.7522 10.0923 18.383 9.72308L13.8428 5.18291C12.9266 6.2906 12.2428 7.56239 11.8462 8.94359L10.0001 8.69744V8.49231V8.53333Z" style={fillStyle} fill={props.style?.color?props.style.color:"#101020"}/>
            <path d="M4.00006 5.5C4.00006 6.32843 3.32849 7 2.50006 7C1.67163 7 1.00006 6.32843 1.00006 5.5C1.00006 4.67157 1.67163 4 2.50006 4C3.32849 4 4.00006 4.67157 4.00006 5.5Z" style={fillStyle} fill={props.style?.color?props.style.color:"#101020"}/>
            <path d="M9.00006 2C9.00006 2.55228 8.55234 3 8.00006 3C7.44777 3 7.00006 2.55228 7.00006 2C7.00006 1.44772 7.44777 1 8.00006 1C8.55234 1 9.00006 1.44772 9.00006 2Z" style={fillStyle} fill={props.style?.color?props.style.color:"#101020"}/>
            <path d="M19.0001 14C19.0001 14.5523 18.5523 15 18.0001 15C17.4478 15 17.0001 14.5523 17.0001 14C17.0001 13.4477 17.4478 13 18.0001 13C18.5523 13 19.0001 13.4477 19.0001 14Z" style={fillStyle} fill={props.style?.color?props.style.color:"#101020"}/>
            <path fillRule="evenodd" clipRule="evenodd" d="M15.5771 12.9232C15.2666 12.4265 14.5977 12.3018 14.1291 12.6532L11.8871 14.3347C11.4127 14.6905 10.7347 14.5577 10.4296 14.0492L7.23732 8.72876C6.35819 7.26356 4.1653 7.50427 3.62496 9.12529L0.438802 18.6838C0.222958 19.3313 0.704928 20 1.38749 20H18.1958C18.9812 20 19.4601 19.136 19.0438 18.47L15.5771 12.9232ZM17.2937 18.5L14.5936 14.1798L12.7871 15.5347C11.6011 16.4242 9.90608 16.0922 9.14336 14.821L5.95108 9.5005C5.73129 9.1342 5.18307 9.19438 5.04799 9.59964L2.0812 18.5H17.2937Z" style={fillStyle} fill={props.style?.color?props.style.color:"#101020"}/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function OwnerIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.style?.width?props.style.width:"1em"} height={props.style?.height?props.style.height:"1em"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.31319 6.33991C5.31319 4.85809 6.50939 3.65324 7.99986 3.65324C9.48267 3.65324 10.6865 4.8571 10.6865 6.33991V6.34273C10.6784 7.78831 9.54131 8.97037 8.09689 9.01962C8.06756 9.02061 8.0382 9.01903 8.00915 9.01488C8.01202 9.01529 8.01258 9.01525 8.01074 9.01513C8.00986 9.01508 8.00869 9.01502 8.00726 9.01498C8.00586 9.01493 8.00422 9.01491 8.00236 9.01491C7.99416 9.01491 7.9866 9.01545 7.98188 9.01604C7.95566 9.01932 7.92923 9.02052 7.90282 9.01962C6.46093 8.97046 5.31319 7.79021 5.31319 6.33991ZM7.99986 4.65324C7.06366 4.65324 6.31319 5.40839 6.31319 6.33991C6.31319 7.23909 7.01561 7.97225 7.90563 8.01884C7.96694 8.01383 8.03232 8.01339 8.09582 8.01875C8.98201 7.9714 9.6807 7.24109 9.68652 6.33849C9.68576 5.40862 8.92991 4.65324 7.99986 4.65324Z" style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"}/>
            <path fillRule="evenodd" clipRule="evenodd" d="M7.94952 15.1664C4.01473 15.1392 0.833374 11.9411 0.833374 7.99992C0.833374 4.04188 4.042 0.833252 8.00004 0.833252C11.9581 0.833252 15.1667 4.04188 15.1667 7.99992C15.1667 11.6562 12.4287 14.6729 8.89124 15.1117C8.59926 15.1479 8.30183 15.1666 8.00004 15.1666C7.99999 15.1666 8.00009 15.1666 8.00004 15.1666C7.98324 15.1666 7.9663 15.1665 7.94952 15.1664ZM1.83337 7.99992C1.83337 4.59416 4.59428 1.83325 8.00004 1.83325C11.4058 1.83325 14.1667 4.59416 14.1667 7.99992C14.1667 9.5157 13.6198 10.9037 12.7126 11.9775C12.4711 11.5246 12.0873 11.1181 11.5924 10.7851L11.5913 10.7844C10.5848 10.1109 9.28213 9.78992 8.00489 9.78992C6.72749 9.78992 5.42228 10.111 4.40991 10.7834L4.40742 10.7851C3.91258 11.1181 3.52884 11.5245 3.2873 11.9773C2.38019 10.9036 1.83337 9.51559 1.83337 7.99992ZM7.96241 14.1665C7.35785 14.1629 6.77392 14.0723 6.22249 13.9065C5.41758 13.6642 4.68253 13.2611 4.05214 12.7333C4.16398 12.3572 4.45099 11.9614 4.96445 11.6156C5.77862 11.0752 6.87953 10.7899 8.00489 10.7899C9.13072 10.7899 10.2278 11.0755 11.0346 11.6151C11.5485 11.9611 11.8357 12.357 11.9476 12.7333C10.9091 13.6029 9.58656 14.1339 8.13556 14.1651C8.09046 14.1661 8.04523 14.1666 7.99989 14.1666C7.98739 14.1666 7.97489 14.1665 7.96241 14.1665Z" style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"}/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function CapacityIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    //
    const fillStyle = {fill: 'currentColor'}
    const svg = () => (
        <svg width={props.style?.width?props.style.width:"1em"} height={props.style?.height?props.style.height:"1em"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.3547 5.98076C11.4021 6.02845 11.4379 6.08332 11.4621 6.14186C11.4865 6.20081 11.5 6.26546 11.5 6.33325V7.66659C11.5 7.94273 11.2762 8.16659 11 8.16659C10.7239 8.16659 10.5 7.94273 10.5 7.66659V7.54036L8.55359 9.4868C8.44767 9.59273 8.29984 9.64558 8.15077 9.63082C8.0017 9.61606 7.86711 9.53524 7.78402 9.4106L7.05566 8.31807L5.35359 10.0201C5.15833 10.2154 4.84175 10.2154 4.64649 10.0201C4.45123 9.82488 4.45123 9.5083 4.64649 9.31303L6.77982 7.1797C6.88574 7.07378 7.03358 7.02093 7.18264 7.03569C7.33171 7.05045 7.46631 7.13126 7.5494 7.2559L8.27775 8.34843L9.79293 6.83325H9.66671C9.39057 6.83325 9.16671 6.60939 9.16671 6.33325C9.16671 6.05711 9.39057 5.83325 9.66671 5.83325H11C11.0678 5.83325 11.1325 5.84675 11.1914 5.87119C11.25 5.89541 11.3048 5.93123 11.3525 5.97864L11.3536 5.9797L11.3547 5.98076Z" style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"}/>
            <path fillRule="evenodd" clipRule="evenodd" d="M6.00004 0.833252C4.28406 0.833252 2.9528 1.17339 2.06315 2.06303C1.17351 2.95268 0.833374 4.28394 0.833374 5.99992V9.99992C0.833374 11.7159 1.17351 13.0472 2.06315 13.9368C2.9528 14.8265 4.28406 15.1666 6.00004 15.1666H10C11.716 15.1666 13.0473 14.8265 13.9369 13.9368C14.8266 13.0472 15.1667 11.7159 15.1667 9.99992V5.99992C15.1667 4.28394 14.8266 2.95268 13.9369 2.06303C13.0473 1.17339 11.716 0.833252 10 0.833252H6.00004ZM1.83337 5.99992C1.83337 4.38257 2.15991 3.38049 2.77026 2.77014C3.38061 2.15978 4.38269 1.83325 6.00004 1.83325H10C11.6174 1.83325 12.6195 2.15978 13.2298 2.77014C13.8402 3.38049 14.1667 4.38257 14.1667 5.99992V9.99992C14.1667 11.6173 13.8402 12.6193 13.2298 13.2297C12.6195 13.8401 11.6174 14.1666 10 14.1666H6.00004C4.38269 14.1666 3.38061 13.8401 2.77026 13.2297C2.15991 12.6193 1.83337 11.6173 1.83337 9.99992V5.99992Z" style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"}/>
        </svg>
    );
    //
    return (
        <Icon component={svg} {...props} />
    );
}

export function EnergyIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    //
    const fillStyle = {fill: 'currentColor'}
    const svg = () => (
        <svg width={props.style?.width?props.style.width:"1em"} height={props.style?.height?props.style.height:"1em"} viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.22913 1.48587C8.33106 1.73256 8.37338 2.0277 8.37338 2.3466V6.6466H9.93338C10.4628 6.6466 11.0339 6.80856 11.2641 7.31831C11.4944 7.82828 11.2376 8.3628 10.8882 8.75757L10.8877 8.75812L5.84203 14.4903C5.63134 14.7295 5.40453 14.9231 5.16527 15.0411C4.9239 15.1601 4.63084 15.2188 4.34014 15.1097C4.04917 15.0005 3.86723 14.7631 3.7643 14.514C3.66236 14.2673 3.62005 13.9722 3.62005 13.6533V9.35327H2.06005C1.53438 9.35327 0.965139 9.19324 0.734639 8.68468C0.504644 8.17723 0.757495 7.64296 1.10244 7.24553L1.10472 7.2429L6.1514 1.50957C6.36208 1.27042 6.5889 1.0768 6.82815 0.958801C7.06953 0.839753 7.36258 0.781033 7.65328 0.89017C7.94426 0.99941 8.1262 1.23676 8.22913 1.48587ZM6.90203 2.1703C7.06128 1.98955 7.18789 1.89639 7.27048 1.85565C7.27956 1.85118 7.28757 1.84756 7.29459 1.84464C7.29778 1.85121 7.30125 1.85886 7.30492 1.86776C7.33986 1.95232 7.37338 2.1055 7.37338 2.3466V7.1466C7.37338 7.42274 7.59724 7.6466 7.87338 7.6466H9.93338C10.1214 7.6466 10.2398 7.67621 10.3046 7.70503C10.3289 7.71582 10.3428 7.725 10.3502 7.73091C10.3497 7.74025 10.3474 7.7564 10.3396 7.7811C10.3185 7.848 10.2628 7.95542 10.1391 8.09508L10.1381 8.09624L5.09153 13.8294C4.93222 14.0103 4.80556 14.1035 4.72294 14.1442C4.71387 14.1487 4.70586 14.1523 4.69884 14.1552C4.69565 14.1487 4.69218 14.141 4.68851 14.1321C4.65356 14.0476 4.62005 13.8944 4.62005 13.6533V8.85327C4.62005 8.57713 4.39619 8.35327 4.12005 8.35327H2.06005C1.87346 8.35327 1.7562 8.324 1.69219 8.2956C1.66873 8.2852 1.65515 8.27635 1.64783 8.2706C1.64826 8.26107 1.65052 8.24446 1.65841 8.21894C1.67932 8.15124 1.73452 8.04314 1.8566 7.90222L6.90203 2.1703Z" style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"}/>
        </svg>

    );
    //
    return (
        <Icon component={svg} {...props} />
    );
}


export function RegionIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    //
    const fillStyle = {fill: 'currentColor'}
    const svg = () => (
        <svg width={props.style?.width?props.style.width:"1em"} height={props.style?.height?props.style.height:"1em"} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.67053 1.90713C5.65798 0.0309577 8.34132 0.0309577 9.32878 1.90713L13.3959 9.63472C14.5794 11.8948 12.18 14.3592 9.88938 13.2139L7.72938 12.1339C7.27014 11.9043 6.72916 11.9043 6.26993 12.1339L4.10993 13.2139C1.82293 14.3574 -0.589542 11.8978 0.603861 9.63379L4.67053 1.90713ZM8.44386 2.37287C7.83132 1.20904 6.16799 1.20904 5.55545 2.37287L1.48878 10.0995C0.749257 11.5021 2.24315 13.0292 3.66271 12.3195L5.82271 11.2395C6.56348 10.8691 7.43583 10.8691 8.17659 11.2395L10.3366 12.3195C11.7525 13.0274 13.2463 11.5055 12.5103 10.0991L8.44386 2.37287Z" style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"}/>
        </svg>

    );
    //
    return (
        <Icon component={svg} {...props} />
    );
}

export function PriceIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    //
    const fillStyle = {fill: 'currentColor'}
    const svg = () => (
        <svg width={props.style?.width?props.style.width:"1em"} height={props.style?.height?props.style.height:"1em"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.99967 3.50001C8.27582 3.50001 8.49967 3.72387 8.49967 4.00001V4.39324H8.74759C9.86637 4.39324 10.7276 5.33363 10.7276 6.44657C10.7276 6.72271 10.5037 6.94657 10.2276 6.94657C9.95145 6.94657 9.72759 6.72271 9.72759 6.44657C9.72759 5.83952 9.26881 5.39324 8.74759 5.39324H8.49967V7.6427L9.51463 7.99529C9.81405 8.10141 10.1388 8.26049 10.3786 8.56644C10.6231 8.87831 10.7276 9.27502 10.7276 9.75324C10.7276 10.7545 9.9448 11.6066 8.93426 11.6066H8.49967V12C8.49967 12.2762 8.27582 12.5 7.99967 12.5C7.72353 12.5 7.49967 12.2762 7.49967 12V11.6066H7.26092C6.14214 11.6066 5.28092 10.6662 5.28092 9.55324C5.28092 9.2771 5.50478 9.05324 5.78092 9.05324C6.05707 9.05324 6.28092 9.2771 6.28092 9.55324C6.28092 10.1603 6.73971 10.6066 7.26092 10.6066H7.49967V8.35393L6.49389 8.00452C6.19446 7.8984 5.86975 7.73933 5.62992 7.43337C5.38545 7.12151 5.28092 6.72479 5.28092 6.24657C5.28092 5.24531 6.06371 4.39324 7.07426 4.39324H7.49967V4.00001C7.49967 3.72387 7.72353 3.50001 7.99967 3.50001ZM7.07426 5.39324H7.49967V7.29531L6.82655 7.06147C6.60024 6.9811 6.48529 6.90364 6.41693 6.81644C6.35307 6.73497 6.28092 6.58169 6.28092 6.24657C6.28092 5.7545 6.65814 5.39324 7.07426 5.39324ZM8.49967 10.6066V8.70132L9.18198 8.93835C9.40828 9.01871 9.52323 9.09618 9.59159 9.18337C9.65545 9.26484 9.72759 9.41812 9.72759 9.75324C9.72759 10.2453 9.35038 10.6066 8.93426 10.6066H8.49967Z" style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"}/>
            <path fillRule="evenodd" clipRule="evenodd" d="M7.99967 0.833344C4.04163 0.833344 0.833008 4.04197 0.833008 8.00001C0.833008 11.9581 4.04163 15.1667 7.99967 15.1667C11.9577 15.1667 15.1663 11.9581 15.1663 8.00001C15.1663 4.04197 11.9577 0.833344 7.99967 0.833344ZM1.83301 8.00001C1.83301 4.59425 4.59392 1.83334 7.99967 1.83334C11.4054 1.83334 14.1663 4.59425 14.1663 8.00001C14.1663 11.4058 11.4054 14.1667 7.99967 14.1667C4.59392 14.1667 1.83301 11.4058 1.83301 8.00001Z" style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"}/>
        </svg>
    );
    //
    return (
        <Icon component={svg} {...props} />
    );
}



export function ShopIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    //
    const fillStyle = {fill: 'currentColor'}
    const svg = () => (
        <svg width={props.style?.width?props.style.width:"1em"} height={props.style?.height?props.style.height:"1em"} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" style={fillStyle} fill={props.style?.color?props.style.color:"#101020"} d="M2.24403 1.27407C3.06973 0.511374 4.2036 0.25 5.59043 0.25H8.64043L8.65494 0.25014L8.66955 0.25H16.3498C17.7366 0.25 18.8705 0.511374 19.6962 1.27407C20.512 2.02763 20.8851 3.14208 21.0727 4.49714C21.074 4.50608 21.075 4.51505 21.076 4.52403L21.3561 7.27574C21.4572 8.29174 21.2025 9.23456 20.6939 9.99015C20.7172 10.0626 20.7298 10.1398 20.7298 10.22V14.71C20.7298 17.0293 20.2694 18.8485 19.0488 20.069C17.8283 21.2896 16.0091 21.75 13.6898 21.75H13.5068C13.5046 21.75 13.5023 21.75 13.5 21.75H8.5C8.49772 21.75 8.49544 21.75 8.49316 21.75H8.29977C5.98039 21.75 4.16123 21.2896 2.94069 20.069C1.72014 18.8485 1.25977 17.0293 1.25977 14.71V10.22C1.25977 10.1545 1.26815 10.0911 1.28389 10.0306C0.757048 9.26842 0.491296 8.31026 0.594058 7.27627L0.864014 4.52672C0.864984 4.51683 0.86615 4.50697 0.867512 4.49714C1.05514 3.14208 1.42821 2.02763 2.24403 1.27407ZM12.75 20.25H9.25V18.5C9.25 17.7795 9.42866 17.3795 9.65408 17.1541C9.8795 16.9287 10.2795 16.75 11 16.75C11.7205 16.75 12.1205 16.9287 12.3459 17.1541C12.5713 17.3795 12.75 17.7795 12.75 18.5V20.25ZM14.25 20.2396V18.5C14.25 17.5505 14.0137 16.7005 13.4066 16.0934C12.7995 15.4863 11.9495 15.25 11 15.25C10.0505 15.25 9.2005 15.4863 8.59342 16.0934C7.98634 16.7005 7.75 17.5505 7.75 18.5V20.24C5.90148 20.1704 4.73324 19.7403 4.00135 19.0084C3.19939 18.2064 2.75977 16.8806 2.75977 14.71V11.313C3.31635 11.5928 3.95354 11.75 4.64042 11.75C5.91877 11.75 7.11106 11.1052 7.86933 10.1202C8.53505 11.1079 9.66788 11.75 10.9996 11.75C12.3152 11.75 13.4368 11.1231 14.1056 10.1554C14.8669 11.1202 16.0455 11.75 17.3098 11.75C18.0129 11.75 18.664 11.5853 19.2298 11.293V14.71C19.2298 16.8806 18.7901 18.2064 17.9882 19.0084C17.2577 19.7389 16.0925 20.1688 14.25 20.2396ZM2.35536 4.68835L2.08684 7.42328C1.93061 8.9934 3.0655 10.25 4.64042 10.25C5.90704 10.25 7.07147 9.20047 7.19393 7.93761L7.19411 7.93571L7.81168 1.75H5.59043C4.35725 1.75 3.68112 1.98863 3.26182 2.37593C2.83431 2.77082 2.52811 3.45258 2.35536 4.68835ZM12.621 1.75L13.2535 8.08452L13.2538 8.08687C13.256 8.10904 13.2585 8.13117 13.2612 8.15325C13.1893 9.35016 12.2489 10.25 10.9996 10.25C9.61472 10.25 8.60956 9.14371 8.74595 7.75342L9.34809 1.75H12.621ZM14.7651 8.07594C14.9649 9.27844 16.092 10.25 17.3098 10.25C18.8844 10.25 20.0193 8.99482 19.8636 7.4251L19.5851 4.68966C19.4123 3.45307 19.1061 2.77096 18.6784 2.37593C18.2591 1.98863 17.583 1.75 16.3498 1.75H14.1673L14.7459 7.60626C14.7615 7.76492 14.7678 7.92165 14.7651 8.07594Z"/>
        </svg>
    );
    //
    return (
        <Icon component={svg} {...props} />
    );
}

export function WithdrawIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    //
    const fillStyle = {fill: 'currentColor'}
    const svg = () => (

        <svg width={props.style?.width?props.style.width:"1em"} height={props.style?.height?props.style.height:"1em"} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"}  d="M1.75052 5.75C1.76311 4.08843 2.00245 3.32103 2.41607 2.91207C2.84409 2.48888 3.659 2.25 5.44 2.25H13.5C13.9142 2.25 14.25 1.91421 14.25 1.5C14.25 1.08579 13.9142 0.75 13.5 0.75H5.44C3.671 0.75 2.26591 0.951126 1.36143 1.84543C0.453993 2.74265 0.25 4.13883 0.25 5.89V14.11C0.25 15.8612 0.453993 17.2574 1.36143 18.1546C2.26591 19.0489 3.671 19.25 5.44 19.25H16.56C18.329 19.25 19.7341 19.0489 20.6386 18.1546C21.546 17.2574 21.75 15.8612 21.75 14.11V12.03C21.75 11.6158 21.4142 11.28 21 11.28C20.5858 11.28 20.25 11.6158 20.25 12.03V14.11C20.25 15.8688 20.009 16.6676 19.5839 17.0879C19.1559 17.5111 18.341 17.75 16.56 17.75H5.44C3.659 17.75 2.84409 17.5111 2.41607 17.0879C1.99101 16.6676 1.75 15.8688 1.75 14.11V7.25H13.5C13.9142 7.25 14.25 6.91421 14.25 6.5C14.25 6.08579 13.9142 5.75 13.5 5.75H1.75052Z"/>
            <path fillRule="evenodd" clipRule="evenodd" style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"}  d="M5 13.75C4.58579 13.75 4.25 14.0858 4.25 14.5C4.25 14.9142 4.58579 15.25 5 15.25H7C7.41421 15.25 7.75 14.9142 7.75 14.5C7.75 14.0858 7.41421 13.75 7 13.75H5Z"/>
            <path fillRule="evenodd" clipRule="evenodd" style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"}  d="M8.75 14.5C8.75 14.0858 9.08579 13.75 9.5 13.75H13.5C13.9142 13.75 14.25 14.0858 14.25 14.5C14.25 14.9142 13.9142 15.25 13.5 15.25H9.5C9.08579 15.25 8.75 14.9142 8.75 14.5Z"/>
            <path fillRule="evenodd" clipRule="evenodd" style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"}  d="M19.5338 0.973129L19.5303 0.96967C19.3835 0.822871 19.191 0.749647 18.9986 0.750001C18.983 0.750027 18.9673 0.750541 18.9517 0.75155C18.7857 0.762204 18.6226 0.827801 18.4919 0.948341C18.4836 0.955944 18.4756 0.963723 18.4677 0.97167L16.4697 2.96967C16.1768 3.26256 16.1768 3.73744 16.4697 4.03033C16.7626 4.32322 17.2374 4.32322 17.5303 4.03033L18.25 3.31066V7.50002C18.25 7.91424 18.5858 8.25002 19 8.25002C19.4142 8.25002 19.75 7.91424 19.75 7.50002V3.31068L20.4697 4.03035C20.7626 4.32325 21.2374 4.32325 21.5303 4.03035C21.8232 3.73746 21.8232 3.26259 21.5303 2.96969L19.5338 0.973129Z"/>
        </svg>
    );
    //
    return (
        <Icon component={svg} {...props} />
    );
}

export function SettingsIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    //
    const fillStyle = {fill: 'currentColor'}
    const svg = () => (
        <svg width={props.style?.width?props.style.width:"1em"} height={props.style?.height?props.style.height:"1em"} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"} d="M512 597.333333v85.333334a256 256 0 0 0-256 256H170.666667a341.333333 341.333333 0 0 1 341.333333-341.333334z m0-42.666666c-141.44 0-256-114.56-256-256s114.56-256 256-256 256 114.56 256 256-114.56 256-256 256z m0-85.333334c94.293333 0 170.666667-76.373333 170.666667-170.666666s-76.373333-170.666667-170.666667-170.666667-170.666667 76.373333-170.666667 170.666667 76.373333 170.666667 170.666667 170.666666z m110.72 333.312a149.76 149.76 0 0 1 0-69.248l-42.325333-24.448 42.666666-73.898666 42.325334 24.448c16.981333-16.085333 37.546667-27.946667 59.946666-34.645334V576h85.333334v48.853333c22.698667 6.741333 43.178667 18.773333 59.946666 34.645334l42.325334-24.448 42.666666 73.898666-42.325333 24.448a149.802667 149.802667 0 0 1 0 69.205334l42.325333 24.448-42.666666 73.898666-42.325334-24.448c-16.981333 16.085333-37.546667 27.946667-59.946666 34.645334V960h-85.333334v-48.853333a149.205333 149.205333 0 0 1-59.946666-34.645334l-42.325334 24.448-42.666666-73.898666 42.325333-24.405334zM768 832a64 64 0 1 0 0-128 64 64 0 0 0 0 128z"></path>
        </svg>
    );
    //
    return (
        <Icon component={svg} {...props} />
    );
}

export function ImpactLineIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    //
    const fillStyle = {fill: 'currentColor'}
    const svg = () => (
        <svg width={props.width?props.width:"1em"} height={props.height?props.height:"1em"} viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6066 3.06866L12.1307 0L9.73531 1.9883L6.66665 1.4641L8.65494 3.85954L8.13075 6.9282L10.5262 4.93991L13.5948 5.4641L11.6066 3.06866Z" style={fillStyle} fill={props.style?.color?props.style.color:"#00913A"}/>
            <path fillRule="evenodd" clipRule="evenodd" d="M26.5722 4.49507C26.2214 3.34085 24.9079 3.0589 24.0553 3.59484C22.8437 4.35653 21.4208 4.93276 20.0059 5.46584C19.7995 5.54362 19.5914 5.62104 19.3834 5.69846L19.382 5.699C18.217 6.13251 17.0525 6.56589 16.1764 7.0588C13.7537 8.42183 12.1361 9.9958 11.1457 11.6639C10.2459 10.931 9.03227 10.2687 7.74617 9.81958C5.87853 9.16739 3.60806 8.8767 1.62855 9.66853L1.13165 9.8673L1.0214 10.391C0.545665 12.6507 0.528051 16.0804 2.12276 18.9938C3.76784 21.9992 7.02349 24.2636 12.6666 24.2636C12.7158 24.2636 12.7642 24.2601 12.8116 24.2532L12.819 24.2637H13.3337C17.0418 24.2637 19.9119 23.4849 22.0813 22.1389C24.2583 20.7883 25.6611 18.9087 26.4967 16.8318C28.1477 12.7278 27.5924 7.8518 26.5722 4.49507ZM11.5039 22.2266C11.0662 21.4269 10.673 20.5429 10.3817 19.6018C9.93491 18.7942 8.97668 17.902 7.85809 17.1148C6.70589 16.304 5.56091 15.7269 5.01736 15.5457C4.49341 15.3711 4.21025 14.8047 4.3849 14.2808C4.55955 13.7569 5.12587 13.4737 5.64981 13.6483C6.43959 13.9116 7.76127 14.6011 9.00908 15.4792C9.29297 15.679 9.58264 15.8951 9.86829 16.1254C9.86989 16.0537 9.8723 15.9819 9.87553 15.91C9.91059 15.1297 10.0419 14.3491 10.2853 13.5785C9.67099 12.9513 8.50938 12.2045 7.0868 11.7078C5.65158 11.2066 4.14127 11.0272 2.87733 11.3592C2.57905 13.2879 2.70037 15.8836 3.87714 18.0335C5.02105 20.1233 7.24616 21.9471 11.5039 22.2266ZM12.5536 19.7591C12.4694 19.5421 12.3913 19.3219 12.3202 19.0988C12.3061 19.0149 12.2811 18.9316 12.2444 18.8509C11.9754 17.9306 11.83 16.9674 11.8735 15.9997C11.9805 13.6187 13.24 11.0056 17.157 8.80187C17.884 8.39285 18.8691 8.02538 20.045 7.58675C20.2607 7.50627 20.4829 7.42338 20.7111 7.33741C22.0172 6.8453 23.4682 6.26799 24.7805 5.49449C25.6461 8.58982 25.9925 12.7264 24.6412 16.0853C23.9447 17.8166 22.7997 19.3396 21.0269 20.4394C19.4152 21.4394 17.2287 22.1239 14.2829 22.2446C14.3156 22.1458 14.3333 22.0401 14.3333 21.9304C14.3333 19.0733 15.7201 16.6413 17.556 14.7215C19.395 12.7985 21.6112 11.4706 23.0606 10.8495C23.5682 10.6319 23.8033 10.0441 23.5858 9.53643C23.3682 9.0288 22.7804 8.79365 22.2727 9.01121C20.6109 9.72341 18.1605 11.1956 16.1106 13.3392C14.494 15.0297 13.0812 17.1881 12.5536 19.7591Z" style={fillStyle} fill={props.style?.color?props.style.color:"#00913A"}/>
            <path d="M3.99998 24.6667L4.56566 26.101L5.99998 26.6667L4.56566 27.2324L3.99998 28.6667L3.43429 27.2324L1.99998 26.6667L3.43429 26.101L3.99998 24.6667Z" style={fillStyle} fill={props.style?.color?props.style.color:"#00913A"}/>
            <path d="M24.8 24L25.4142 22.5858L24 23.2L22.5858 22.5858L23.2 24L22.5858 25.4142L24 24.8L25.4142 25.4142L24.8 24Z" style={fillStyle} fill={props.style?.color?props.style.color:"#00913A"}/>
        </svg>
    );
    //
    return (
        <Icon component={svg} {...props} />
    );
}

export function GreenEnergyLineIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    //
    const fillStyle = {fill: 'currentColor'}
    const svg = () => (
        <svg width={props.width?props.width:"1em"} height={props.height?props.height:"1em"} viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path style={fillStyle} fill={props.style?.color?props.style.color:"#101020"} fillRule="evenodd" clipRule="evenodd" d="M12.3436 1.2289C12.4965 1.59893 12.56 2.04165 12.56 2.52V8.97H14.9C15.6941 8.97 16.5507 9.21294 16.896 9.97756C17.2415 10.7425 16.8564 11.5443 16.3322 12.1365L16.3315 12.1373L8.76298 20.7355C8.44695 21.0943 8.10673 21.3847 7.74785 21.5617C7.38578 21.7403 6.9462 21.8284 6.51015 21.6646C6.07369 21.5008 5.80079 21.1448 5.64638 20.7711C5.49348 20.4011 5.43001 19.9584 5.43001 19.48V13.03H3.09001C2.30151 13.03 1.44765 12.79 1.1019 12.0271C0.756905 11.2659 1.13618 10.4645 1.65359 9.8684L1.65702 9.86444L9.22704 1.26446C9.54306 0.905726 9.88328 0.615303 10.2422 0.438301C10.6042 0.259728 11.0438 0.171649 11.4799 0.335354C11.9163 0.499215 12.1892 0.855233 12.3436 1.2289ZM10.353 2.25555C10.5919 1.98443 10.7818 1.84468 10.9057 1.78358C10.9193 1.77687 10.9313 1.77144 10.9418 1.76706C10.9466 1.77691 10.9518 1.7884 10.9573 1.80173C11.0097 1.92857 11.06 2.15836 11.06 2.52V9.72C11.06 10.1342 11.3958 10.47 11.81 10.47H14.9C15.182 10.47 15.3596 10.5144 15.4568 10.5576C15.4932 10.5738 15.5141 10.5876 15.5253 10.5965C15.5245 10.6105 15.521 10.6347 15.5093 10.6717C15.4777 10.7721 15.3941 10.9332 15.2086 11.1427L15.207 11.1445L7.63724 19.7442C7.39826 20.0155 7.20828 20.1553 7.08435 20.2164C7.07075 20.2231 7.05872 20.2286 7.0482 20.2329C7.04341 20.2231 7.03821 20.2116 7.0327 20.1983C6.98029 20.0714 6.93001 19.8416 6.93001 19.48V12.28C6.93001 11.8658 6.59422 11.53 6.18001 11.53H3.09001C2.81013 11.53 2.63423 11.4861 2.53822 11.4435C2.50303 11.4279 2.48266 11.4146 2.47168 11.406C2.47233 11.3917 2.47573 11.3668 2.48755 11.3285C2.51891 11.227 2.60171 11.0648 2.78484 10.8534L10.353 2.25555Z"/>
        </svg>
    );
    //
    return (
        <Icon component={svg} {...props} />
    );
}

export function PvCapacityLineIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    //
    const fillStyle = {fill: 'currentColor'}
    const svg = () => (
        <svg width={props.width?props.width:"1em"} height={props.height?props.height:"1em"} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1C12 0.447715 11.5523 0 11 0C10.4477 0 10 0.447715 10 1V1.08C10 1.63228 10.4477 2.08 11 2.08C11.5523 2.08 12 1.63228 12 1.08V1Z" style={fillStyle} fill={props.style?.color?props.style.color:"#101020"}/>
            <path d="M4.56711 3.15289C4.17658 2.76237 3.54342 2.76237 3.15289 3.15289C2.76237 3.54342 2.76237 4.17658 3.15289 4.56711L3.28289 4.69711C3.67342 5.08763 4.30658 5.08763 4.69711 4.69711C5.08763 4.30658 5.08763 3.67342 4.69711 3.28289L4.56711 3.15289Z" style={fillStyle} fill={props.style?.color?props.style.color:"#101020"}/>
            <path d="M18.8471 4.56711C19.2376 4.17658 19.2376 3.54342 18.8471 3.15289C18.4566 2.76237 17.8234 2.76237 17.4329 3.15289L17.3029 3.28289C16.9124 3.67342 16.9124 4.30658 17.3029 4.69711C17.6934 5.08763 18.3266 5.08763 18.7171 4.69711L18.8471 4.56711Z" style={fillStyle} fill={props.style?.color?props.style.color:"#101020"}/>
            <path d="M1 10C0.447715 10 0 10.4477 0 11C0 11.5523 0.447715 12 1 12H1.08C1.63228 12 2.08 11.5523 2.08 11C2.08 10.4477 1.63228 10 1.08 10H1Z" style={fillStyle} fill={props.style?.color?props.style.color:"#101020"}/>
            <path d="M20.92 10C20.3677 10 19.92 10.4477 19.92 11C19.92 11.5523 20.3677 12 20.92 12H21C21.5523 12 22 11.5523 22 11C22 10.4477 21.5523 10 21 10H20.92Z" style={fillStyle} fill={props.style?.color?props.style.color:"#101020"}/>
            <path d="M4.69711 18.7171C5.08763 18.3266 5.08763 17.6934 4.69711 17.3029C4.30658 16.9124 3.67342 16.9124 3.28289 17.3029L3.15289 17.4329C2.76237 17.8234 2.76237 18.4566 3.15289 18.8471C3.54342 19.2376 4.17658 19.2376 4.56711 18.8471L4.69711 18.7171Z" style={fillStyle} fill={props.style?.color?props.style.color:"#101020"}/>
            <path d="M18.7171 17.3029C18.3266 16.9124 17.6934 16.9124 17.3029 17.3029C16.9124 17.6934 16.9124 18.3266 17.3029 18.7171L17.4329 18.8471C17.8234 19.2376 18.4566 19.2376 18.8471 18.8471C19.2376 18.4566 19.2376 17.8234 18.8471 17.4329L18.7171 17.3029Z" style={fillStyle} fill={props.style?.color?props.style.color:"#101020"}/>
            <path d="M12 20.92C12 20.3677 11.5523 19.92 11 19.92C10.4477 19.92 10 20.3677 10 20.92V21C10 21.5523 10.4477 22 11 22C11.5523 22 12 21.5523 12 21V20.92Z" style={fillStyle} fill={props.style?.color?props.style.color:"#101020"}/>
            <path fillRule="evenodd" clipRule="evenodd" d="M11 3.75C6.99594 3.75 3.75 6.99594 3.75 11C3.75 15.0041 6.99594 18.25 11 18.25C15.0041 18.25 18.25 15.0041 18.25 11C18.25 6.99594 15.0041 3.75 11 3.75ZM5.25 11C5.25 7.82436 7.82436 5.25 11 5.25C14.1756 5.25 16.75 7.82436 16.75 11C16.75 14.1756 14.1756 16.75 11 16.75C7.82436 16.75 5.25 14.1756 5.25 11Z" style={fillStyle} fill={props.style?.color?props.style.color:"#101020"}/>
        </svg>
    );
    //
    return (
        <Icon component={svg} {...props} />
    );
}

export function CO2Icon(props: Partial<CustomIconComponentProps>): JSX.Element {
    //
    const svg = () => (

        <svg width="38" height="20" viewBox="0 0 38 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="38" height="20" rx="6" fill="#CCE9D8"/>
            <path d="M10.064 15.584C9.2 15.584 8.39467 15.4453 7.648 15.168C6.912 14.88 6.272 14.4747 5.728 13.952C5.184 13.4293 4.75733 12.816 4.448 12.112C4.14933 11.408 4 10.6347 4 9.792C4 8.94933 4.14933 8.176 4.448 7.472C4.75733 6.768 5.184 6.15467 5.728 5.632C6.28267 5.10933 6.928 4.70933 7.664 4.432C8.4 4.144 9.20533 4 10.08 4C11.0507 4 11.9253 4.17067 12.704 4.512C13.4933 4.84267 14.1547 5.33333 14.688 5.984L13.024 7.52C12.64 7.08267 12.2133 6.75733 11.744 6.544C11.2747 6.32 10.7627 6.208 10.208 6.208C9.68533 6.208 9.20533 6.29333 8.768 6.464C8.33067 6.63467 7.952 6.88 7.632 7.2C7.312 7.52 7.06133 7.89867 6.88 8.336C6.70933 8.77333 6.624 9.25867 6.624 9.792C6.624 10.3253 6.70933 10.8107 6.88 11.248C7.06133 11.6853 7.312 12.064 7.632 12.384C7.952 12.704 8.33067 12.9493 8.768 13.12C9.20533 13.2907 9.68533 13.376 10.208 13.376C10.7627 13.376 11.2747 13.2693 11.744 13.056C12.2133 12.832 12.64 12.496 13.024 12.048L14.688 13.584C14.1547 14.2347 13.4933 14.7307 12.704 15.072C11.9253 15.4133 11.0453 15.584 10.064 15.584Z" fill="#00913A"/>
            <path d="M21.644 15.584C20.7587 15.584 19.9373 15.44 19.18 15.152C18.4333 14.864 17.7827 14.4587 17.228 13.936C16.684 13.4133 16.2573 12.8 15.948 12.096C15.6493 11.392 15.5 10.624 15.5 9.792C15.5 8.96 15.6493 8.192 15.948 7.488C16.2573 6.784 16.6893 6.17067 17.244 5.648C17.7987 5.12533 18.4493 4.72 19.196 4.432C19.9427 4.144 20.7533 4 21.628 4C22.5133 4 23.324 4.144 24.06 4.432C24.8067 4.72 25.452 5.12533 25.996 5.648C26.5507 6.17067 26.9827 6.784 27.292 7.488C27.6013 8.18133 27.756 8.94933 27.756 9.792C27.756 10.624 27.6013 11.3973 27.292 12.112C26.9827 12.816 26.5507 13.4293 25.996 13.952C25.452 14.464 24.8067 14.864 24.06 15.152C23.324 15.44 22.5187 15.584 21.644 15.584ZM21.628 13.376C22.1293 13.376 22.588 13.2907 23.004 13.12C23.4307 12.9493 23.804 12.704 24.124 12.384C24.444 12.064 24.6893 11.6853 24.86 11.248C25.0413 10.8107 25.132 10.3253 25.132 9.792C25.132 9.25867 25.0413 8.77333 24.86 8.336C24.6893 7.89867 24.444 7.52 24.124 7.2C23.8147 6.88 23.4467 6.63467 23.02 6.464C22.5933 6.29333 22.1293 6.208 21.628 6.208C21.1267 6.208 20.6627 6.29333 20.236 6.464C19.82 6.63467 19.452 6.88 19.132 7.2C18.812 7.52 18.5613 7.89867 18.38 8.336C18.2093 8.77333 18.124 9.25867 18.124 9.792C18.124 10.3147 18.2093 10.8 18.38 11.248C18.5613 11.6853 18.8067 12.064 19.116 12.384C19.436 12.704 19.8093 12.9493 20.236 13.12C20.6627 13.2907 21.1267 13.376 21.628 13.376Z" fill="#00913A"/>
            <path d="M29.0259 15.342V14.472L31.8059 11.832C32.0392 11.612 32.2125 11.4187 32.3259 11.252C32.4392 11.0853 32.5125 10.932 32.5459 10.792C32.5859 10.6453 32.6059 10.5087 32.6059 10.382C32.6059 10.062 32.4959 9.81535 32.2759 9.64201C32.0559 9.46201 31.7325 9.37201 31.3059 9.37201C30.9659 9.37201 30.6559 9.43201 30.3759 9.55201C30.1025 9.67201 29.8659 9.85535 29.6659 10.102L28.7559 9.40201C29.0292 9.03535 29.3959 8.75201 29.8559 8.55201C30.3225 8.34535 30.8425 8.24201 31.4159 8.24201C31.9225 8.24201 32.3625 8.32535 32.7359 8.49201C33.1159 8.65201 33.4059 8.88201 33.6059 9.18201C33.8125 9.48201 33.9159 9.83868 33.9159 10.252C33.9159 10.4787 33.8859 10.7053 33.8259 10.932C33.7659 11.152 33.6525 11.3853 33.4859 11.632C33.3192 11.8787 33.0759 12.1553 32.7559 12.462L30.3659 14.732L30.0959 14.242H34.1859V15.342H29.0259Z" fill="#00913A"/>
        </svg>

    );
    //
    return (
        <Icon component={svg} {...props} />
    );
}

export function RewardIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    //
    const svg = () => (
        <svg width={props.style?.width?props.style.width:"14.33px"} height={props.style?.height?props.style.height:"14.33px"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"} d="M1.83337 8.00004C1.83337 4.59618 4.59618 1.83337 8.00004 1.83337C8.27618 1.83337 8.50004 1.60952 8.50004 1.33337C8.50004 1.05723 8.27618 0.833374 8.00004 0.833374C4.0439 0.833374 0.833374 4.0439 0.833374 8.00004C0.833374 11.9562 4.0439 15.1667 8.00004 15.1667C11.9562 15.1667 15.1667 11.9562 15.1667 8.00004C15.1667 7.7239 14.9429 7.50004 14.6667 7.50004C14.3906 7.50004 14.1667 7.7239 14.1667 8.00004C14.1667 11.4039 11.4039 14.1667 8.00004 14.1667C4.59618 14.1667 1.83337 11.4039 1.83337 8.00004Z"/>
            <path style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"} fillRule="evenodd" clipRule="evenodd" d="M8.00004 4.50004C8.27618 4.50004 8.50004 4.7239 8.50004 5.00004V5.16003H8.56004C9.47022 5.16003 10.1734 5.92507 10.1734 6.8267C10.1734 7.10284 9.94952 7.3267 9.67338 7.3267C9.39724 7.3267 9.17338 7.10284 9.17338 6.8267C9.17338 6.435 8.87652 6.16003 8.56004 6.16003H8.50004V7.64041L9.17438 7.87564C9.40932 7.95926 9.67777 8.09051 9.87829 8.3473C10.0833 8.60977 10.1667 8.93714 10.1667 9.31336C10.1667 10.1318 9.53325 10.8334 8.70003 10.8334H8.50004V11C8.50004 11.2762 8.27618 11.5 8.00004 11.5C7.7239 11.5 7.50004 11.2762 7.50004 11V10.8334H7.44672C6.53653 10.8334 5.83337 10.0683 5.83337 9.1667C5.83337 8.89056 6.05723 8.6667 6.33337 8.6667C6.60952 8.6667 6.83337 8.89056 6.83337 9.1667C6.83337 9.5584 7.13023 9.83336 7.44672 9.83336H7.50004V8.35067L6.83238 8.11776C6.6006 8.03526 6.33088 7.90636 6.12931 7.64968C5.92294 7.38689 5.84005 7.05832 5.84005 6.68003C5.84005 5.87044 6.4714 5.16003 7.3067 5.16003H7.50004V5.00004C7.50004 4.7239 7.7239 4.50004 8.00004 4.50004ZM7.3067 6.16003H7.50004V7.29157L7.16632 7.17515C7.0058 7.11787 6.94578 7.07026 6.91578 7.03205C6.89049 6.99985 6.84005 6.91508 6.84005 6.68003C6.84005 6.36963 7.07533 6.16003 7.3067 6.16003ZM8.50004 9.83336V8.6995L8.84047 8.81826C8.99782 8.87442 9.05908 8.92301 9.09013 8.96277C9.11683 8.99696 9.16671 9.08292 9.16671 9.31336C9.16671 9.62824 8.93348 9.83336 8.70003 9.83336H8.50004Z"/>
            <path style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"} d="M11.3334 1.50004C11.6095 1.50004 11.8334 1.7239 11.8334 2.00004V3.4596L14.3132 0.979821C14.5084 0.784559 14.825 0.784559 15.0203 0.979821C15.2155 1.17508 15.2155 1.49167 15.0203 1.68693L12.5405 4.16671H14C14.2762 4.16671 14.5 4.39056 14.5 4.66671C14.5 4.94285 14.2762 5.16671 14 5.16671H11.3334C11.1958 5.16671 11.0713 5.11118 10.9809 5.02132L10.9798 5.02026L10.9788 5.0192C10.9313 4.97151 10.8955 4.91664 10.8713 4.8581C10.8469 4.79915 10.8334 4.7345 10.8334 4.66671V2.00004C10.8334 1.7239 11.0572 1.50004 11.3334 1.50004Z"/>
        </svg>
    );
    //
    return (
        <Icon component={svg} {...props} />
    );
}

export function Symbol1Icon(props: Partial<CustomIconComponentProps>): JSX.Element {
    //
    const svg = () => (
        <svg width={props.style?.width?props.style.width:"14.33px"} height={props.style?.height?props.style.height:"14.33px"} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.03878 1.13536V3.44512C6.03878 3.75832 5.78486 4.01224 5.47166 4.01224C4.35398 4.01224 3.74606 5.15848 3.66182 7.42096H5.47166C5.78486 7.42096 6.03878 7.67512 6.03878 7.98808V12.8649C6.03878 13.1781 5.78486 13.432 5.47166 13.432H0.646221C0.332781 13.432 0.0791016 13.1778 0.0791016 12.8649V7.98808C0.0791016 6.90352 0.188302 5.90824 0.403582 5.0296C0.624382 4.12864 0.963261 3.34096 1.41062 2.68816C1.87094 2.01736 2.4467 1.49104 3.12206 1.12432C3.80198 0.755437 4.59254 0.568237 5.4719 0.568237C5.78486 0.568237 6.03878 0.822157 6.03878 1.13536ZM13.3537 4.01224C13.6669 4.01224 13.9209 3.75808 13.9209 3.44512V1.13536C13.9209 0.822157 13.6669 0.568237 13.3537 0.568237C12.4746 0.568237 11.6841 0.755437 11.0041 1.12432C10.3288 1.49104 9.75278 2.01736 9.29246 2.68816C8.8451 3.34096 8.50622 4.12864 8.28542 5.02984C8.07038 5.90872 7.96118 6.904 7.96118 7.98808V12.8649C7.96118 13.1781 8.2151 13.432 8.5283 13.432H13.3535C13.6667 13.432 13.9206 13.1778 13.9206 12.8649V7.98808C13.9206 7.67488 13.6667 7.42096 13.3535 7.42096H11.5696C11.6526 5.15848 12.2517 4.01224 13.3537 4.01224Z" fill="#B7B7BC"/>
        </svg>
    );
    //
    return (
        <Icon component={svg} {...props} />
    );
}

export function Symbol2Icon(props: Partial<CustomIconComponentProps>): JSX.Element {
    //
    const svg = () => (
        <svg width={props.style?.width?props.style.width:"14.33px"} height={props.style?.height?props.style.height:"14.33px"} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.96122 12.8649L7.96122 10.5551C7.96122 10.2419 8.21514 9.98801 8.52834 9.98801C9.64602 9.98801 10.2539 8.84177 10.3382 6.57929L8.52834 6.57929C8.21514 6.57929 7.96122 6.32513 7.96122 6.01217L7.96122 1.13537C7.96122 0.822168 8.21514 0.568247 8.52834 0.568247L13.3538 0.568247C13.6672 0.568247 13.9209 0.822408 13.9209 1.13537L13.9209 6.01217C13.9209 7.09673 13.8117 8.09201 13.5964 8.97065C13.3756 9.87161 13.0367 10.6593 12.5894 11.3121C12.1291 11.9829 11.5533 12.5092 10.8779 12.8759C10.198 13.2448 9.40746 13.432 8.5281 13.432C8.21514 13.432 7.96122 13.1781 7.96122 12.8649ZM0.646258 9.98801C0.333058 9.98801 0.0791375 10.2422 0.0791376 10.5551L0.0791378 12.8649C0.0791378 13.1781 0.333058 13.432 0.646258 13.432C1.52538 13.432 2.31594 13.2448 2.99586 12.8759C3.67122 12.5092 4.24722 11.9829 4.70754 11.3121C5.1549 10.6593 5.49378 9.87161 5.71458 8.97041C5.92962 8.09153 6.03882 7.09625 6.03882 6.01217L6.03882 1.13537C6.03882 0.822168 5.7849 0.568248 5.4717 0.568248L0.646498 0.568248C0.333298 0.568248 0.079377 0.822409 0.0793771 1.13537L0.0793775 6.01217C0.0793775 6.32537 0.333298 6.57929 0.646498 6.57929L2.43042 6.57929C2.34738 8.84177 1.74834 9.98801 0.646258 9.98801Z" fill="#B7B7BC"/>
        </svg>

    );
    //
    return (
        <Icon component={svg} {...props} />
    );
}

export function RewardDashboardIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    //
    const svg = () => (
        
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.00004 3.50001C8.27618 3.50001 8.50004 3.72387 8.50004 4.00001V4.39324H8.74796C9.86674 4.39324 10.728 5.33363 10.728 6.44657C10.728 6.72271 10.5041 6.94657 10.228 6.94657C9.95182 6.94657 9.72796 6.72271 9.72796 6.44657C9.72796 5.83952 9.26918 5.39324 8.74796 5.39324H8.50004V7.6427L9.515 7.99529C9.81442 8.10141 10.1391 8.26049 10.379 8.56644C10.6234 8.87831 10.728 9.27502 10.728 9.75324C10.728 10.7545 9.94517 11.6066 8.93462 11.6066H8.50004V12C8.50004 12.2762 8.27618 12.5 8.00004 12.5C7.7239 12.5 7.50004 12.2762 7.50004 12V11.6066H7.26129C6.14251 11.6066 5.28129 10.6662 5.28129 9.55324C5.28129 9.2771 5.50515 9.05324 5.78129 9.05324C6.05743 9.05324 6.28129 9.2771 6.28129 9.55324C6.28129 10.1603 6.74007 10.6066 7.26129 10.6066H7.50004V8.35393L6.49425 8.00452C6.19483 7.8984 5.87012 7.73933 5.63028 7.43337C5.38581 7.12151 5.28129 6.72479 5.28129 6.24657C5.28129 5.24531 6.06408 4.39324 7.07462 4.39324H7.50004V4.00001C7.50004 3.72387 7.7239 3.50001 8.00004 3.50001ZM7.07462 5.39324H7.50004V7.29531L6.82692 7.06147C6.60061 6.9811 6.48565 6.90364 6.4173 6.81644C6.35344 6.73497 6.28129 6.58169 6.28129 6.24657C6.28129 5.7545 6.6585 5.39324 7.07462 5.39324ZM8.50004 10.6066V8.70132L9.18234 8.93835C9.40865 9.01871 9.5236 9.09618 9.59195 9.18337C9.65581 9.26484 9.72796 9.41812 9.72796 9.75324C9.72796 10.2453 9.35075 10.6066 8.93462 10.6066H8.50004Z" fill="#40404D"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M6.00004 0.833344C4.28406 0.833344 2.9528 1.17348 2.06315 2.06312C1.17351 2.95277 0.833374 4.28403 0.833374 6.00001V10C0.833374 11.716 1.17351 13.0473 2.06315 13.9369C2.9528 14.8265 4.28406 15.1667 6.00004 15.1667H10C11.716 15.1667 13.0473 14.8265 13.9369 13.9369C14.8266 13.0473 15.1667 11.716 15.1667 10V6.00001C15.1667 4.28403 14.8266 2.95277 13.9369 2.06312C13.0473 1.17348 11.716 0.833344 10 0.833344H6.00004ZM1.83337 6.00001C1.83337 4.38266 2.15991 3.38058 2.77026 2.77023C3.38061 2.15988 4.38269 1.83334 6.00004 1.83334H10C11.6174 1.83334 12.6195 2.15988 13.2298 2.77023C13.8402 3.38058 14.1667 4.38266 14.1667 6.00001V10C14.1667 11.6174 13.8402 12.6194 13.2298 13.2298C12.6195 13.8401 11.6174 14.1667 10 14.1667H6.00004C4.38269 14.1667 3.38061 13.8401 2.77026 13.2298C2.15991 12.6194 1.83337 11.6174 1.83337 10V6.00001Z" fill="#40404D"/>
        </svg>

    );
    //
    return (
        <Icon component={svg} {...props} />
    );
}


export function StatusIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    //
    const fillStyle = {fill: 'currentColor'}
    const svg = () => (
        <svg width={props.style?.width?props.style.width:"1em"} height={props.style?.height?props.style.height:"1em"} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.41341 6.02014C9.60867 5.82488 9.60867 5.50829 9.41341 5.31303C9.21815 5.11777 8.90156 5.11777 8.7063 5.31303L6.39319 7.62615L5.74674 6.9797C5.55148 6.78444 5.2349 6.78444 5.03964 6.9797C4.84437 7.17496 4.84437 7.49154 5.03964 7.68681L6.03964 8.68681C6.2349 8.88207 6.55148 8.88207 6.74674 8.68681L9.41341 6.02014Z" style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"}/>
            <path fillRule="evenodd" clipRule="evenodd" d="M3.78683 0.833252C2.08985 0.833252 0.713501 2.21795 0.713501 3.90659V13.2999C0.713501 14.0104 0.972388 14.6382 1.52143 14.9616C2.07009 15.2847 2.74516 15.2075 3.36801 14.8646L3.36958 14.8637L6.6237 13.0566C6.70486 13.0113 6.84252 12.9749 7.006 12.9749C7.16998 12.9749 7.30396 13.0115 7.37967 13.0546L10.6374 14.8637C11.2596 15.2101 11.9356 15.2905 12.4856 14.9666C13.0355 14.6427 13.2935 14.0124 13.2935 13.2999L13.2935 3.90659L13.2935 3.90423C13.2855 2.2179 11.9109 0.833252 10.2135 0.833252H3.78683ZM1.7135 3.90659C1.7135 2.76855 2.64382 1.83325 3.78683 1.83325H10.2135C11.3557 1.83325 12.2876 2.76805 12.2935 3.90792V13.2999C12.2935 13.7941 12.1215 14.0205 11.9781 14.1049C11.8349 14.1892 11.5539 14.2295 11.1229 13.9895L8.55309 12.5624L7.87155 12.1839C7.60775 12.0346 7.29281 11.9749 7.006 11.9749C6.71793 11.9749 6.40207 12.0353 6.13663 12.1832L2.88566 13.9886L2.88487 13.989C2.45484 14.2256 2.17349 14.1851 2.0289 14.0999C1.88461 14.0149 1.7135 13.7894 1.7135 13.2999V5.0107V3.90659Z" style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"}/>
        </svg>

    );
    //
    return (
        <Icon component={svg} {...props} />
    );
}

export function ArkreenLogoSingleIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.6819 12.5353L8.34781 19.4687C7.93156 20.1347 8.41031 21 9.19563 21H24.5788C25.4622 21 26.0009 20.0281 25.5328 19.2787L14.4841 1.60093C13.7984 0.504056 12.2028 0.504056 11.5153 1.60093L0.347814 19.4687C-0.0684361 20.1347 0.410314 21 1.19563 21H3.69281C3.82001 21 3.94511 20.9676 4.05636 20.906C4.1676 20.8443 4.26134 20.7554 4.32875 20.6475L12.6819 7.28124C12.7156 7.22725 12.7625 7.18273 12.8181 7.15186C12.8738 7.12099 12.9364 7.10479 13 7.10479C13.0636 7.10479 13.1262 7.12099 13.1819 7.15186C13.2375 7.18273 13.2844 7.22725 13.3181 7.28124L19.0328 16.425C19.0686 16.4818 19.0885 16.5471 19.0904 16.6142C19.0924 16.6813 19.0763 16.7477 19.0438 16.8064C19.0113 16.8651 18.9637 16.9141 18.9059 16.9481C18.848 16.9822 18.7821 17.0001 18.715 17H15.285C15.2182 16.9997 15.1527 16.9815 15.0953 16.9474C15.0379 16.9133 14.9906 16.8645 14.9583 16.806C14.9261 16.7475 14.9101 16.6815 14.9119 16.6147C14.9137 16.5479 14.9334 16.4829 14.9688 16.4262L15.2344 16C15.2716 15.9404 15.2914 15.8715 15.2914 15.8012C15.2914 15.731 15.2716 15.6621 15.2344 15.6025L13.3181 12.5366C13.2845 12.4825 13.2377 12.4379 13.1821 12.4069C13.1266 12.3759 13.064 12.3596 13.0003 12.3595C12.9367 12.3594 12.8741 12.3754 12.8184 12.4062C12.7626 12.4369 12.7157 12.4814 12.6819 12.5353Z" fill="#00913A"/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function ArkreenLogoRadiusIcon(props: Partial<CustomIconComponentProps>): JSX.Element{
    const svg = () => (
        <svg width={props.width?props.width:"1em"} height={props.height?props.height:"1em"} viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1024 512C1024 794.77 794.77 1024 512 1024C229.23 1024 0 794.77 0 512C0 229.23 229.23 0 512 0C794.77 0 1024 229.23 1024 512Z" fill="#00913A"/>
        <path d="M504.487 509.052L399.157 677.744C389.041 693.947 400.676 715 419.761 715H793.617C815.087 715 828.18 691.354 816.803 673.121L548.286 243.015C531.623 216.328 492.845 216.328 476.136 243.015L204.733 677.744C194.617 693.947 206.252 715 225.337 715H286.026C289.118 715 292.158 714.212 294.862 712.712C297.565 711.212 299.843 709.048 301.482 706.424L504.487 381.219C505.306 379.905 506.446 378.822 507.798 378.071C509.151 377.32 510.672 376.926 512.219 376.926C513.765 376.926 515.287 377.32 516.639 378.071C517.992 378.822 519.131 379.905 519.95 381.219L658.834 603.689C659.704 605.07 660.188 606.66 660.235 608.292C660.282 609.925 659.89 611.539 659.101 612.969C658.312 614.398 657.154 615.589 655.749 616.417C654.343 617.246 652.741 617.681 651.11 617.679H567.751C566.128 617.671 564.536 617.23 563.14 616.4C561.745 615.57 560.596 614.383 559.812 612.959C559.028 611.536 558.639 609.929 558.683 608.305C558.728 606.68 559.205 605.097 560.065 603.719L566.521 593.349C567.426 591.899 567.906 590.223 567.906 588.513C567.906 586.803 567.426 585.127 566.521 583.677L519.95 509.082C519.134 507.767 517.996 506.681 516.645 505.928C515.294 505.174 513.774 504.777 512.227 504.774C510.68 504.771 509.158 505.162 507.804 505.91C506.45 506.659 505.309 507.74 504.487 509.052Z" fill="white"/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function ArkreenLogoTextUnionIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width="116" height="26" viewBox="0 0 116 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M108.015 1.2833L105.697 0.425074C105.495 0.345024 105.254 0.465098 105.173 0.665224C105.092 0.865349 105.213 1.1055 105.415 1.18555L106.762 1.68419L105.455 2.14582C105.254 2.22587 105.133 2.46602 105.214 2.66614C105.254 2.82624 105.415 2.94632 105.576 2.94632C105.617 2.94632 105.657 2.94632 105.738 2.90629L108.011 2.1027C108.099 2.09195 108.183 2.05537 108.242 1.98626C108.363 1.87597 108.42 1.69894 108.358 1.54544C108.301 1.40357 108.162 1.30193 108.015 1.2833Z" fill="#00913A"/>
            <path d="M99.61 4.50747C99.4488 4.50747 99.3278 4.42742 99.2472 4.26732C99.1666 4.06719 99.2472 3.82704 99.4488 3.74699L101.787 2.70634C101.839 2.68559 101.894 2.6756 101.948 2.67566C102.002 2.67559 102.057 2.68559 102.11 2.70634C102.161 2.72663 102.204 2.75721 102.239 2.79482C102.269 2.82627 102.294 2.86361 102.311 2.90646C102.32 2.92929 102.327 2.95264 102.332 2.97621C102.35 3.05734 102.344 3.14531 102.311 3.22666L101.223 5.46807C101.142 5.62817 100.981 5.70822 100.86 5.70822C100.82 5.70822 100.739 5.70822 100.699 5.66819C100.497 5.58814 100.417 5.34799 100.497 5.14787L101.119 3.86767L99.7713 4.46744C99.731 4.50747 99.6906 4.50747 99.61 4.50747Z" fill="#00913A"/>
            <path d="M40.0697 25.1996C40.9162 25.5999 41.7628 25.8 42.6899 25.8C43.0931 25.8 43.5365 25.76 44.0605 25.6799C44.5443 25.5999 44.8668 25.5198 45.028 25.4398V24.6393C44.5846 24.5593 44.1008 24.2791 43.5768 23.8789C43.0931 23.4786 42.5287 22.8783 41.9643 22.0778L37.5704 16.1543L40.755 12.192C41.2387 11.5916 41.7628 11.1914 42.2868 10.9112C42.8109 10.6311 43.4156 10.511 44.0605 10.511V9.63049H43.4155C42.2465 9.63049 41.3193 9.87064 40.6744 10.3109C40.0294 10.7512 39.3441 11.3915 38.6588 12.232L34.6679 17.235V7.62932C34.6679 6.50866 34.547 5.62814 34.3857 4.98776C34.2245 4.34739 33.9423 3.90713 33.4989 3.62697C33.0555 3.3468 32.4508 3.22673 31.6849 3.22673H27.7343V4.22732H28.0568C29.0646 4.22732 29.6693 4.54751 29.9515 5.14786C30.2336 5.74821 30.3546 6.58871 30.3546 7.58929V25.4398H34.6276V18.8359L37.7719 23.0784C38.4975 24.119 39.2635 24.7994 40.0697 25.1996Z" fill="#00913A"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M5.68394 25.7998C4.75677 25.7998 3.95054 25.6797 3.22493 25.4796C2.53963 25.2395 1.93496 24.9593 1.45122 24.5591C0.967481 24.1588 0.604675 23.6786 0.362805 23.1182C0.120935 22.5579 0 21.9175 0 21.2371C0 20.1565 0.24187 19.236 0.765921 18.4755C1.24966 17.7151 2.17683 17.1547 3.4668 16.7545C4.75677 16.3543 6.61111 16.1541 8.98949 16.1541H9.47323C9.47323 14.7933 9.3523 13.7127 9.11043 12.9122C8.86856 12.1118 8.50575 11.5514 8.02201 11.2312C7.53827 10.9111 6.97391 10.7109 6.32893 10.7109C5.56301 10.7109 4.91802 10.9111 4.31335 11.2713C3.70867 11.6715 3.26524 12.472 3.02337 13.7527H1.20935C1.20935 13.1524 1.24966 12.552 1.33028 11.9517C1.41091 11.3513 1.65278 10.791 2.0559 10.3507C2.45901 9.91047 3.104 9.59028 4.03116 9.43019C4.95833 9.27009 5.96612 9.19005 7.05453 9.19005C8.14295 9.19005 9.11043 9.35014 9.95697 9.63031C10.8035 9.91047 11.5291 10.3507 12.0935 10.9511C12.6982 11.5514 13.1416 12.2719 13.4238 13.1924C13.706 14.0729 13.8672 15.1536 13.8672 16.3543V25.5196H11.0454L9.87635 23.9988H9.7151C9.43292 24.479 8.94918 24.9193 8.26388 25.2795C7.49796 25.5997 6.69173 25.7998 5.68394 25.7998ZM6.69173 24.0788C7.41734 24.0788 8.02202 23.8387 8.50576 23.3184C8.98949 22.8381 9.31199 22.3178 9.51355 21.8375V17.635H8.98949C7.37703 17.635 6.2483 17.9152 5.563 18.5155C4.87771 19.1159 4.5149 19.9964 4.5149 21.1971C4.5149 22.1577 4.71646 22.8781 5.07927 23.3584C5.48238 23.8387 6.00643 24.0788 6.69173 24.0788Z" fill="#00913A"/>
            <path d="M18.0193 25.4395V13.9928C18.0193 12.9922 17.8984 12.1517 17.6162 11.5513C17.334 10.951 16.7293 10.6308 15.7215 10.6308H15.4394V9.6302H18.7046C19.4705 9.6302 20.0349 9.71025 20.4783 9.91037C20.9217 10.1105 21.2442 10.4307 21.4861 10.8709C21.8892 10.5107 22.4133 10.1505 23.0986 9.79029C23.7839 9.43008 24.6304 9.26999 25.6382 9.26999C26.1219 9.26999 26.5654 9.31001 26.9685 9.43008C27.3716 9.55015 27.6941 9.71025 27.9763 9.95039C28.3391 10.2306 28.6213 10.5507 28.8228 10.911C28.9941 11.251 29.0781 11.4178 29.0994 11.4356L27.4119 12.752C27.2104 12.4719 26.9282 12.1517 26.5251 11.8715C26.1219 11.5914 25.6785 11.4313 25.1142 11.4313C24.4289 11.4313 23.8242 11.5513 23.3404 11.7514C22.8567 11.9516 22.4536 12.1917 22.1714 12.5119C22.1798 12.5954 22.1882 12.6755 22.1963 12.752C22.2268 13.0423 22.252 13.2824 22.252 13.4725C22.2923 13.7126 22.2923 13.9527 22.2923 14.1128V25.4395H18.0193Z" fill="#00913A"/>
            <path d="M29.105 11.4313L29.0994 11.4356C29.1032 11.4388 29.105 11.4373 29.105 11.4313Z" fill="#00913A"/>
            <path d="M47.9708 25.4395V13.9928C47.9708 12.9922 47.8499 12.1517 47.5677 11.5513C47.2855 10.951 46.6809 10.6308 45.6731 10.6308H45.3506V9.6302H48.6158C49.3817 9.6302 49.9461 9.71025 50.3895 9.91037C50.833 10.1105 51.1554 10.4307 51.3973 10.8709C51.8004 10.5107 52.3245 10.1505 53.0098 9.79029C53.6951 9.43008 54.5416 9.26999 55.5494 9.26999C56.0332 9.26999 56.4766 9.31001 56.8797 9.43008C57.2828 9.55015 57.6053 9.71025 57.8875 9.95039C58.2503 10.2306 58.5325 10.5507 58.734 10.911C58.9053 11.2511 58.9893 11.4178 59.0106 11.4356L57.3231 12.752C57.1216 12.4719 56.8394 12.1517 56.4363 11.8715C56.0332 11.5914 55.5897 11.4313 55.0254 11.4313C54.3401 11.4313 53.7354 11.5513 53.2517 11.7514C52.7679 11.9516 52.3648 12.1917 52.0826 12.5119C52.091 12.5955 52.0994 12.6756 52.1075 12.7521C52.138 13.0424 52.1632 13.2825 52.1632 13.4725C52.2035 13.7126 52.2035 13.9527 52.2035 14.1128V25.4395H47.9708Z" fill="#00913A"/>
            <path d="M59.0162 11.4313L59.0106 11.4356C59.0144 11.4388 59.0162 11.4373 59.0162 11.4313Z" fill="#00913A"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M62.5635 24.7191C63.7325 25.4395 65.0628 25.7997 66.5947 25.7997C67.804 25.7997 68.8118 25.5996 69.6987 25.1593C70.5049 24.7591 71.1499 24.3188 71.6739 23.7585C72.198 23.1982 72.6011 22.6779 72.9236 22.1976L71.9158 21.4371C71.3514 22.2376 70.7065 22.918 69.9808 23.4383C69.2552 23.9586 68.3281 24.2388 67.1993 24.2388C66.1109 24.2388 65.2644 23.7585 64.5791 22.838C63.8938 21.9174 63.5713 20.3565 63.5713 18.1152H73.488L73.6089 15.9939C73.6089 14.6732 73.2864 13.4725 72.6414 12.4719C71.9964 11.4713 71.1096 10.6708 70.0212 10.1105C68.8924 9.55016 67.6831 9.26999 66.3125 9.26999C64.9419 9.26999 63.6922 9.59018 62.6038 10.2306C61.4751 10.8309 60.6285 11.7514 59.9836 12.9922C59.3386 14.1929 59.0161 15.7138 59.0161 17.5148C59.0161 19.1158 59.3386 20.5166 59.9432 21.7573C60.5479 22.9981 61.4348 23.9986 62.5635 24.7191ZM69.0537 16.6343H63.4504C63.4504 15.1534 63.6116 13.9928 63.8535 13.1122C64.1357 12.2718 64.4582 11.6714 64.9016 11.3112C65.345 10.951 65.7884 10.7909 66.2722 10.7909C67.0784 10.7909 67.7637 11.1911 68.2878 12.0316C68.8118 12.8721 69.0537 14.393 69.0537 16.6343Z" fill="#00913A"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M82.9613 25.7997C81.4294 25.7997 80.0991 25.4395 78.9301 24.7191C77.8014 23.9986 76.9145 22.9981 76.3098 21.7573C75.7052 20.5166 75.3827 19.1158 75.3827 17.5148C75.3827 15.7138 75.7052 14.1929 76.3502 12.9922C76.9951 11.7514 77.8417 10.8309 78.9704 10.2306C80.0588 9.59018 81.3085 9.26999 82.6791 9.26999C84.0497 9.26999 85.259 9.55016 86.3877 10.1105C87.4762 10.6708 88.363 11.4713 89.008 12.4719C89.653 13.4725 89.9755 14.6732 89.9755 15.9939L89.8546 18.1152H79.9379C79.9379 20.3565 80.2604 21.9174 80.9457 22.838C81.631 23.7585 82.4775 24.2388 83.5659 24.2388C84.6947 24.2388 85.6218 23.9586 86.3474 23.4383C87.073 22.918 87.718 22.2376 88.2824 21.4371L89.2902 22.1976C88.9677 22.6779 88.5646 23.1982 88.0405 23.7585C87.5165 24.3188 86.8715 24.7591 86.0653 25.1593C85.1784 25.5996 84.1706 25.7997 82.9613 25.7997ZM79.817 16.6343H85.4203C85.4203 14.393 85.1784 12.8721 84.6544 12.0316C84.1303 11.1911 83.445 10.7909 82.6388 10.7909C82.155 10.7909 81.7116 10.951 81.2682 11.3112C80.8247 11.6714 80.5023 12.2718 80.2201 13.1122C79.9782 13.9928 79.817 15.1534 79.817 16.6343Z" fill="#00913A"/>
            <path d="M93.1599 13.9928V25.4395H97.5136V11.7915C97.8361 11.5513 98.1989 11.3512 98.6826 11.1911C99.126 11.031 99.6904 10.951 100.295 10.951C100.9 10.951 101.464 11.1111 101.908 11.3912C102.351 11.6714 102.714 12.1517 102.996 12.7921C103.278 13.4725 103.399 14.313 103.399 15.4336V25.4395H107.672V15.4736C107.672 13.9928 107.43 12.8321 106.946 11.9115C106.463 10.991 105.777 10.3506 104.85 9.91037C103.923 9.47011 102.754 9.26999 101.383 9.26999C100.053 9.26999 99.0051 9.47011 98.2795 9.79029C97.5539 10.1105 96.9895 10.4707 96.5864 10.8709C96.3445 10.4307 96.022 10.1105 95.5786 9.91037C95.1352 9.71025 94.5708 9.6302 93.8049 9.6302H90.5397V10.6308H90.8622C91.8699 10.6308 92.4746 10.951 92.7568 11.5513C93.039 12.1517 93.1599 12.9922 93.1599 13.9928Z" fill="#00913A"/>
            <path d="M112.388 4.16403L111.099 3.54686C110.897 3.46681 110.656 3.54686 110.575 3.74699C110.494 3.94711 110.575 4.18726 110.776 4.26731L112.966 5.31528C112.994 5.33669 113.025 5.35337 113.058 5.36533C113.101 5.38802 113.162 5.38801 113.195 5.38799L113.198 5.38799C113.24 5.38796 113.317 5.38694 113.356 5.34797C113.448 5.31157 113.515 5.24209 113.553 5.15832C113.554 5.15486 113.556 5.15139 113.558 5.14786C113.574 5.1081 113.584 5.06675 113.587 5.02539C113.59 4.99823 113.589 4.97065 113.587 4.94311C113.583 4.9041 113.573 4.86516 113.558 4.82764L112.51 2.50619C112.429 2.30607 112.187 2.22602 111.986 2.30607C111.784 2.38612 111.704 2.62627 111.784 2.82639L112.388 4.16403Z" fill="#00913A"/>
            <path d="M114.098 10.8915C114.083 11.063 114.192 11.2396 114.357 11.3086C114.371 11.3159 114.385 11.3223 114.4 11.3278C114.458 11.3513 114.491 11.3513 114.525 11.3513C114.578 11.3513 114.614 11.3513 114.644 11.3399C114.73 11.3211 114.795 11.2784 114.839 11.2062C114.916 11.1226 114.96 11.0097 114.953 10.8982L115.775 8.70968C115.855 8.50955 115.734 8.2694 115.533 8.18935C115.331 8.1093 115.089 8.22937 115.009 8.4295L114.535 9.69235L114.082 8.4295C114.001 8.22937 113.759 8.1093 113.558 8.18935C113.356 8.2694 113.235 8.50955 113.316 8.70968L114.098 10.8915Z" fill="#00913A"/>
            <path d="M110.902 16.3242C110.901 16.321 110.899 16.3177 110.897 16.3144C110.882 16.2769 110.873 16.238 110.869 16.1989C110.865 16.1661 110.866 16.1332 110.87 16.1011C110.874 16.065 110.883 16.0291 110.897 15.9944L111.986 13.753C112.066 13.5529 112.308 13.4728 112.51 13.5529C112.711 13.6329 112.792 13.8731 112.711 14.0732L112.095 15.3431L113.397 14.7534C113.598 14.6734 113.84 14.7534 113.921 14.9536C114.001 15.1537 113.921 15.3938 113.719 15.4739L111.508 16.4579C111.43 16.5225 111.337 16.5548 111.26 16.5548C111.226 16.5548 111.165 16.5548 111.122 16.5315C111.073 16.5138 111.03 16.486 110.992 16.448C110.953 16.4133 110.923 16.371 110.902 16.3242Z" fill="#00913A"/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function AccountLineIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.width?props.width:"1em"} height={props.height?props.height:"1em"} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path style={fillStyle} fill={props.style?.color?props.style.color:"#101020"} fillRule="evenodd" clipRule="evenodd" d="M6.96973 8.50998C6.96973 6.28726 8.76402 4.47998 10.9997 4.47998C13.2239 4.47998 15.0297 6.28577 15.0297 8.50998V8.51422C15.0175 10.6826 13.3119 12.4557 11.1453 12.5295C11.1013 12.531 11.0572 12.5287 11.0137 12.5224C11.018 12.5231 11.0188 12.523 11.016 12.5228C11.0147 12.5227 11.013 12.5227 11.0108 12.5226C11.0087 12.5225 11.0063 12.5225 11.0035 12.5225C10.9912 12.5225 10.9798 12.5233 10.9728 12.5242C10.9334 12.5291 10.8938 12.5309 10.8542 12.5295C8.69134 12.4558 6.96973 10.6854 6.96973 8.50998ZM10.9997 5.97998C9.59543 5.97998 8.46973 7.1127 8.46973 8.50998C8.46973 9.85876 9.52336 10.9585 10.8584 11.0284C10.9504 11.0209 11.0484 11.0202 11.1437 11.0282C12.473 10.9572 13.521 9.86176 13.5297 8.50786C13.5286 7.11305 12.3948 5.97998 10.9997 5.97998Z" />
            <path style={fillStyle} fill={props.style?.color?props.style.color:"#101020"} fillRule="evenodd" clipRule="evenodd" d="M10.9242 21.7497C5.02204 21.709 0.25 16.9118 0.25 11C0.25 5.06294 5.06294 0.25 11 0.25C16.9371 0.25 21.75 5.06294 21.75 11C21.75 16.4844 17.643 21.0095 12.3368 21.6677C11.8988 21.722 11.4527 21.75 11 21.75C10.9999 21.75 11.0001 21.75 11 21.75C10.9748 21.75 10.9494 21.7499 10.9242 21.7497ZM1.75 11C1.75 5.89137 5.89137 1.75 11 1.75C16.1086 1.75 20.25 5.89137 20.25 11C20.25 13.2737 19.4297 15.3557 18.0688 16.9664C17.7065 16.287 17.1309 15.6773 16.3885 15.1778L16.3869 15.1767C14.8771 14.1665 12.9231 13.685 11.0073 13.685C9.09117 13.685 7.13336 14.1666 5.6148 15.1753L5.61107 15.1778C4.86881 15.6772 4.2932 16.2868 3.93088 16.9661C2.57022 15.3555 1.75 13.2735 1.75 11ZM10.9436 20.2498C10.0367 20.2444 9.16081 20.1085 8.33367 19.8599C7.12631 19.4965 6.02373 18.8918 5.07815 18.1C5.2459 17.5359 5.67642 16.9422 6.44661 16.4235C7.66787 15.613 9.31923 15.185 11.0073 15.185C12.696 15.185 14.3416 15.6133 15.5519 16.4228C16.3227 16.9417 16.7536 17.5356 16.9214 18.1C15.3636 19.4045 13.3798 20.201 11.2033 20.2478C11.1356 20.2493 11.0678 20.25 10.9998 20.25C10.981 20.25 10.9623 20.2499 10.9436 20.2498Z"/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}


export function RiseLineIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.width?props.width:"1em"} height={props.height?props.height:"1em"} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.1266 6.44712L19.9486 6.44862L20.1106 6.47112L20.2801 6.52062L20.4331 6.59262L20.4901 6.62712L20.5636 6.67962L20.6776 6.78012L20.8036 6.93162L20.8921 7.08162L20.9536 7.23912L20.9881 7.38612L21.0031 7.57212V14.3281C21.003 14.6132 20.8947 14.8875 20.7001 15.0958C20.5055 15.3041 20.2391 15.4307 19.9548 15.4502C19.6704 15.4696 19.3893 15.3803 19.1681 15.2005C18.947 15.0206 18.8024 14.7635 18.7636 14.4811L18.7546 14.3281L18.7516 10.2871L12.4216 16.6216C12.2309 16.8129 11.9778 16.9293 11.7085 16.9494C11.4391 16.9695 11.1715 16.892 10.9546 16.7311L10.8286 16.6216L8.62659 14.4121L4.92159 18.1186C4.72085 18.3199 4.45135 18.4377 4.16728 18.4484C3.8832 18.4591 3.60561 18.3618 3.39033 18.1762C3.17504 17.9906 3.03801 17.7303 3.0068 17.4477C2.97559 17.1652 3.05251 16.8813 3.22209 16.6531L3.33159 16.5271L7.82859 12.0271C8.01916 11.8362 8.27199 11.7201 8.54099 11.7C8.80999 11.6799 9.07726 11.7571 9.29409 11.9176L9.42009 12.0271L11.6266 14.2366L17.1631 8.69712H13.1266C12.8547 8.69711 12.5921 8.59866 12.3872 8.41997C12.1823 8.24128 12.0491 7.99445 12.0121 7.72512L12.0016 7.57212C12.0016 6.95112 12.5056 6.44712 13.1266 6.44712Z" style={fillStyle} fill={props.style?.color?props.style.color:"#00913A"}/>
        </svg>

    );
    return (
        <Icon component={svg} {...props} />
    );
}


export function DecLineIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.width?props.width:"1em"} height={props.height?props.height:"1em"} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.1266 18.4513L19.9486 18.4498L20.1106 18.4273L20.2801 18.3778L20.4331 18.3058L20.4901 18.2713L20.5636 18.2188L20.6776 18.1183L20.8036 17.9668L20.8921 17.8168L20.9536 17.6593L20.9881 17.5123L21.0031 17.3263V10.5703C21.003 10.2853 20.8947 10.0109 20.7001 9.80263C20.5055 9.59435 20.2391 9.46771 19.9548 9.44828C19.6704 9.42885 19.3893 9.51809 19.1681 9.69797C18.947 9.87784 18.8024 10.1349 18.7636 10.4173L18.7546 10.5703L18.7516 14.6113L12.4216 8.27682C12.2309 8.0855 11.9778 7.96917 11.7085 7.94906C11.4391 7.92896 11.1715 8.00643 10.9546 8.16732L10.8286 8.27682L8.62659 10.4863L4.92159 6.77982C4.72085 6.57853 4.45135 6.4607 4.16728 6.45001C3.8832 6.43933 3.60561 6.53659 3.39033 6.72224C3.17504 6.90788 3.03801 7.16815 3.0068 7.4507C2.97559 7.73326 3.05251 8.01716 3.22209 8.24532L3.33159 8.37132L7.82859 12.8713C8.01916 13.0622 8.27199 13.1783 8.54099 13.1984C8.80999 13.2185 9.07726 13.1413 9.29409 12.9808L9.42009 12.8713L11.6266 10.6618L17.1631 16.2013H13.1266C12.8547 16.2013 12.5921 16.2998 12.3872 16.4785C12.1823 16.6572 12.0491 16.904 12.0121 17.1733L12.0016 17.3263C12.0016 17.9473 12.5056 18.4513 13.1266 18.4513Z" style={fillStyle} fill={props.style?.color?props.style.color:"#0072DB"}/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}



export function USDTIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="811" width={props.width?props.width:"1em"} height={props.height?props.height:"1em"}>
            <path d="M1023.082985 511.821692c0 281.370746-228.08199 509.452736-509.452736 509.452736-281.360557 0-509.452736-228.08199-509.452737-509.452736 0-281.365652 228.092179-509.452736 509.452737-509.452737 281.370746 0 509.452736 228.087085 509.452736 509.452737" fill="#1BA27A" p-id="812" />
            <path d="M752.731701 259.265592h-482.400796v116.460896h182.969951v171.176119h116.460895v-171.176119h182.96995z" fill="#FFFFFF" p-id="813" />
            <path d="M512.636816 565.13592c-151.358408 0-274.070289-23.954468-274.070289-53.50782 0-29.548259 122.706786-53.507821 274.070289-53.507821 151.358408 0 274.065194 23.959562 274.065194 53.507821 0 29.553353-122.706786 53.507821-274.065194 53.50782m307.734925-44.587303c0-38.107065-137.776398-68.995184-307.734925-68.995184-169.953433 0-307.74002 30.888119-307.74002 68.995184 0 33.557652 106.837333 61.516418 248.409154 67.711363v245.729433h116.450707v-245.632637c142.66205-6.001353 250.615085-34.077294 250.615084-67.808159" fill="#FFFFFF" p-id="814" />
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function CheckIcon(props: Partial<CustomIconComponentProps>): JSX.Element {

    const svg = () => (
        <svg width={props.width?props.width:"1em"} height={props.height?props.height:"1em"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );

    
}

export function RadioNotCheckIcon(props: Partial<CustomIconComponentProps>): JSX.Element {

    const svg = () => (
        <svg width={props.width?props.width:"24px"} height={props.height?props.height:"24px"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path stroke={props.style?.color?props.style.color:"#A0A1A1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"  strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function RadioCheckIcon(props: Partial<CustomIconComponentProps>): JSX.Element {

    const svg = () => (
        <svg width={props.width?props.width:"24px"} height={props.height?props.height:"24px"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#00913A"/>
            <path d="M16.9922 9.00023L11 14.9925L8 11.9925" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function IconBySrc(src:any): JSX.Element {
    return (
        <Icon src={src} />
    );
}


export function TransactionLineIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.width?props.width:"1em"} height={props.height?props.height:"1em"} viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.3149 1.23499C10.8561 1.02983 10.3021 0.945007 9.78953 0.945007C9.27694 0.945007 8.72294 1.02983 8.26415 1.23499L8.26303 1.23549L2.3668 3.85382C1.4418 4.2621 0.644531 4.94813 0.644531 5.91001C0.644531 6.87185 1.44095 7.55751 2.36591 7.9658L8.26303 10.5845L8.26431 10.5851C8.72307 10.7902 9.27699 10.875 9.78953 10.875C10.3021 10.875 10.856 10.7902 11.3148 10.5851L11.316 10.5845L17.2123 7.9662C18.1373 7.55791 18.9345 6.87189 18.9345 5.91001C18.9345 4.9481 18.138 4.2624 17.213 3.85413L11.316 1.23549L11.3149 1.23499ZM9.78953 2.44501C9.41754 2.44501 9.08702 2.51005 8.87603 2.60452L8.87392 2.60547L2.97226 5.2262C2.19761 5.56796 2.14453 5.87716 2.14453 5.91001C2.14453 5.94285 2.19761 6.25206 2.97226 6.59382L2.97392 6.59455L8.87603 9.21549C9.08702 9.30997 9.41754 9.37501 9.78953 9.37501C10.1615 9.37501 10.492 9.30997 10.703 9.21549L10.7051 9.21455L16.6051 6.59455L16.6068 6.59382C17.3815 6.25206 17.4345 5.94285 17.4345 5.91001C17.4345 5.87716 17.3815 5.56796 16.6068 5.2262L10.7051 2.60546L10.703 2.60452C10.492 2.51005 10.1615 2.44501 9.78953 2.44501Z" style={fillStyle} fill={props.style?.color?props.style.color:"#101020"}/>
            <path d="M1 9.25C1.41421 9.25 1.75 9.58579 1.75 10C1.75 10.2434 1.84628 10.5559 2.0399 10.8535C2.23351 11.151 2.48007 11.3655 2.70295 11.4639L2.70479 11.4647L9.49338 14.4841C9.82187 14.6291 10.1898 14.6269 10.5017 14.4863L10.5052 14.4847L17.2952 11.4647L17.2971 11.4639C17.5199 11.3655 17.7665 11.151 17.9601 10.8535C18.1537 10.5559 18.25 10.2434 18.25 10C18.25 9.58579 18.5858 9.25 19 9.25C19.4142 9.25 19.75 9.58579 19.75 10C19.75 10.5966 19.5313 11.1891 19.2174 11.6715C18.9037 12.1537 18.4505 12.5941 17.9038 12.8357L11.1183 15.8537L11.1163 15.8546C10.4089 16.1729 9.59727 16.1702 8.88662 15.8559L2.09705 12.8361L2.09603 12.8356C1.54937 12.594 1.0963 12.1537 0.782602 11.6715C0.468717 11.1891 0.25 10.5966 0.25 10C0.25 9.58579 0.585786 9.25 1 9.25Z" style={fillStyle} fill={props.style?.color?props.style.color:"#101020"}/>
            <path d="M1.75 15C1.75 14.5858 1.41421 14.25 1 14.25C0.585786 14.25 0.25 14.5858 0.25 15C0.25 16.229 0.976812 17.3353 2.0939 17.8347L8.88662 20.8559C9.59727 21.1702 10.4089 21.1729 11.1163 20.8546L11.1183 20.8537L17.9048 17.8353L17.9061 17.8347C19.0232 17.3353 19.75 16.229 19.75 15C19.75 14.5858 19.4142 14.25 19 14.25C18.5858 14.25 18.25 14.5858 18.25 15C18.25 15.6308 17.8765 16.2046 17.2939 16.4653L10.5052 19.4847L10.5017 19.4863C10.1898 19.6269 9.82187 19.6291 9.49338 19.4841L2.70554 16.4651C2.12295 16.2043 1.75 15.6308 1.75 15Z" style={fillStyle} fill={props.style?.color?props.style.color:"#101020"}/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function BlockLineIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.width?props.width:"1em"} height={props.height?props.height:"1em"} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.9791 1.25428C9.75438 0.547197 8.24547 0.547196 7.02076 1.25428L2.41553 3.91312C1.19082 4.62021 0.436361 5.92696 0.436361 7.34113V12.6588C0.436361 14.073 1.19081 15.3797 2.41553 16.0868L7.02076 18.7456C8.24547 19.4527 9.75438 19.4527 10.9791 18.7456L15.5843 16.0868C16.809 15.3797 17.5635 14.073 17.5635 12.6588V7.34113C17.5635 5.92696 16.809 4.62021 15.5843 3.91312L10.9791 1.25428ZM7.64576 2.33682C8.48372 1.85302 9.51613 1.85302 10.3541 2.33682L14.9593 4.99565C15.3066 5.19617 15.5987 5.46717 15.8216 5.78468L8.99989 9.73613L2.17641 5.78732C2.39956 5.46867 2.69226 5.19672 3.04053 4.99565L7.64576 2.33682ZM1.7128 6.96325C1.69532 7.08742 1.68636 7.21364 1.68636 7.34113V12.6588C1.68636 13.6264 2.20257 14.5205 3.04053 15.0043L7.64576 17.6631C7.87678 17.7965 8.12257 17.8931 8.375 17.9529V10.8187L1.7128 6.96325ZM9.625 17.9529C9.87738 17.8931 10.1231 17.7965 10.3541 17.6631L14.9593 15.0043C15.7973 14.5205 16.3135 13.6264 16.3135 12.6588V7.34113C16.3135 7.21249 16.3044 7.08515 16.2866 6.9599L9.625 10.8186V17.9529Z" style={fillStyle} fill={props.style?.color?props.style.color:"#101020"}/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function ArkreenHomeIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.width?props.width:"1em"} height={props.height?props.height:"1em"} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 14.2499C7.58579 14.2499 7.25 14.5857 7.25 14.9999C7.25 15.4142 7.58579 15.7499 8 15.7499H14C14.4142 15.7499 14.75 15.4142 14.75 14.9999C14.75 14.5857 14.4142 14.2499 14 14.2499H8Z" fill="#101020"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M13.4501 1.10549C12.5961 0.507656 11.5191 0.24459 10.4837 0.268869C9.44825 0.293148 8.38375 0.606854 7.55901 1.24831L2.16901 5.44831C1.60552 5.88676 1.134 6.53609 0.804179 7.2083C0.474406 7.88042 0.25 8.64944 0.25 9.35991V16.7699C0.25 19.5018 2.47347 21.7399 5.21 21.7399H16.79C19.5254 21.7399 21.75 19.503 21.75 16.7799V9.49991C21.75 8.74271 21.5017 7.93324 21.1361 7.23285C20.7707 6.53277 20.2484 5.86666 19.6288 5.43461L13.4501 1.10549ZM3.09099 6.63151L8.48046 2.43193C9.00571 2.02351 9.74188 1.78667 10.5188 1.76846C11.2958 1.75024 12.044 1.95229 12.5899 2.33434L18.7696 6.66415L18.7712 6.66521C19.1413 6.92318 19.5195 7.37731 19.8064 7.92697C20.0933 8.47659 20.25 9.04712 20.25 9.49991V16.7799C20.25 18.6769 18.6946 20.2399 16.79 20.2399H5.21C3.30653 20.2399 1.75 18.678 1.75 16.7699V9.35991C1.75 8.94038 1.89059 8.3994 2.15082 7.86902C2.4109 7.33895 2.75471 6.89306 3.09099 6.63151Z" fill="#101020"/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function ArkreenConsoleIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.width?props.width:"1em"} height={props.height?props.height:"1em"} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.75 8C11.75 7.58579 11.4142 7.25 11 7.25C10.5858 7.25 10.25 7.58579 10.25 8V14.68C10.25 15.0942 10.5858 15.43 11 15.43C11.4142 15.43 11.75 15.0942 11.75 14.68V8Z" fill="#101020"/>
            <path d="M6.75 9.73999C6.75 9.32578 6.41421 8.98999 6 8.98999C5.58579 8.98999 5.25 9.32578 5.25 9.73999V12.94C5.25 13.3542 5.58579 13.69 6 13.69C6.41421 13.69 6.75 13.3542 6.75 12.94V9.73999Z" fill="#101020"/>
            <path d="M16 8.98999C16.4142 8.98999 16.75 9.32578 16.75 9.73999V12.94C16.75 13.3542 16.4142 13.69 16 13.69C15.5858 13.69 15.25 13.3542 15.25 12.94V9.73999C15.25 9.32578 15.5858 8.98999 16 8.98999Z" fill="#101020"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M8 0.25C5.42603 0.25 3.42914 0.760201 2.09467 2.09467C0.760201 3.42914 0.25 5.42603 0.25 8V14C0.25 16.574 0.760201 18.5709 2.09467 19.9053C3.42914 21.2398 5.42603 21.75 8 21.75H14C16.574 21.75 18.5709 21.2398 19.9053 19.9053C21.2398 18.5709 21.75 16.574 21.75 14V8C21.75 5.42603 21.2398 3.42914 19.9053 2.09467C18.5709 0.760201 16.574 0.25 14 0.25H8ZM1.75 8C1.75 5.57397 2.2398 4.07086 3.15533 3.15533C4.07086 2.2398 5.57397 1.75 8 1.75H14C16.426 1.75 17.9291 2.2398 18.8447 3.15533C19.7602 4.07086 20.25 5.57397 20.25 8V14C20.25 16.426 19.7602 17.9291 18.8447 18.8447C17.9291 19.7602 16.426 20.25 14 20.25H8C5.57397 20.25 4.07086 19.7602 3.15533 18.8447C2.2398 17.9291 1.75 16.426 1.75 14V8Z" fill="#101020"/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function ArkreenExplorerIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.width?props.width:"1em"} height={props.height?props.height:"1em"} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.7318 4.92246C15.7772 4.30054 17.7202 6.21851 17.0654 8.27515L14.7262 15.8123L14.7257 15.814C13.9513 18.2893 10.4625 18.3465 9.63884 15.8684L9.63804 15.866L8.93948 13.8003L8.93844 13.7972C8.8205 13.4434 8.54342 13.1692 8.2141 13.0652L8.20073 13.0609L6.12278 12.3615L6.1218 12.3612C3.66432 11.5411 3.69848 8.02792 6.18982 7.27306L13.7318 4.92246ZM6.62658 8.7081L14.1703 6.35692C15.083 6.08123 15.9174 6.94021 15.6356 7.82161L13.2939 15.3668C12.9482 16.4699 11.4196 16.4733 11.0619 15.3941L10.3615 13.3229L10.3609 13.3211C10.0993 12.5381 9.47963 11.8945 8.67308 11.6372L6.59918 10.9392L6.59712 10.9385C5.51675 10.5784 5.54174 9.03537 6.62658 8.7081Z" fill="#101020"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M8 0.25C5.42603 0.25 3.42914 0.760201 2.09467 2.09467C0.760201 3.42914 0.25 5.42603 0.25 8V14C0.25 16.574 0.760201 18.5709 2.09467 19.9053C3.42914 21.2398 5.42603 21.75 8 21.75H14C16.574 21.75 18.5709 21.2398 19.9053 19.9053C21.2398 18.5709 21.75 16.574 21.75 14V8C21.75 5.42603 21.2398 3.42914 19.9053 2.09467C18.5709 0.760201 16.574 0.25 14 0.25H8ZM1.75 8C1.75 5.57397 2.2398 4.07086 3.15533 3.15533C4.07086 2.2398 5.57397 1.75 8 1.75H14C16.426 1.75 17.9291 2.2398 18.8447 3.15533C19.7602 4.07086 20.25 5.57397 20.25 8V14C20.25 16.426 19.7602 17.9291 18.8447 18.8447C17.9291 19.7602 16.426 20.25 14 20.25H8C5.57397 20.25 4.07086 19.7602 3.15533 18.8447C2.2398 17.9291 1.75 16.426 1.75 14V8Z" fill="#101020"/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function ArkreenDocsIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.width?props.width:"1em"} height={props.height?props.height:"1em"} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 8C6.5 7.58579 6.83579 7.25 7.25 7.25H14.75C15.1642 7.25 15.5 7.58579 15.5 8C15.5 8.41421 15.1642 8.75 14.75 8.75H7.25C6.83579 8.75 6.5 8.41421 6.5 8Z" fill="#101020"/>
            <path d="M7.25 13.25C6.83579 13.25 6.5 13.5858 6.5 14C6.5 14.4142 6.83579 14.75 7.25 14.75H14.75C15.1642 14.75 15.5 14.4142 15.5 14C15.5 13.5858 15.1642 13.25 14.75 13.25H7.25Z" fill="#101020"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M2.09467 2.09467C3.42914 0.760201 5.42603 0.25 8 0.25H14C16.574 0.25 18.5709 0.760201 19.9053 2.09467C21.2398 3.42914 21.75 5.42603 21.75 8V14C21.75 16.574 21.2398 18.5709 19.9053 19.9053C18.5709 21.2398 16.574 21.75 14 21.75H8C5.42603 21.75 3.42914 21.2398 2.09467 19.9053C0.760201 18.5709 0.25 16.574 0.25 14V8C0.25 5.42603 0.760201 3.42914 2.09467 2.09467ZM3.15533 3.15533C2.2398 4.07086 1.75 5.57397 1.75 8V14C1.75 16.426 2.2398 17.9291 3.15533 18.8447C4.07086 19.7602 5.57397 20.25 8 20.25H14C16.426 20.25 17.9291 19.7602 18.8447 18.8447C19.7602 17.9291 20.25 16.426 20.25 14V8C20.25 5.57397 19.7602 4.07086 18.8447 3.15533C17.9291 2.2398 16.426 1.75 14 1.75H8C5.57397 1.75 4.07086 2.2398 3.15533 3.15533Z" fill="#101020"/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function DashboardLineIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.width?props.width:"1em"} height={props.height?props.height:"1em"} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path style={fillStyle} fill={props.style?.color?props.style.color:"#101020"} fillRule="evenodd" clipRule="evenodd" d="M15.4907 1.24017C13.823 0.752066 12.4381 0.680888 11.4719 1.37624C10.4917 2.0817 10.25 3.35009 10.25 4.67998V7.55998C10.25 8.86048 10.5129 9.94231 11.1928 10.697C11.8886 11.4694 12.8836 11.75 14 11.75H17.32C18.6499 11.75 19.9183 11.5083 20.6237 10.5281C21.3191 9.56191 21.2479 8.177 20.7598 6.5093C20.0379 4.05467 17.9453 1.96212 15.4907 1.24017ZM11.75 4.67998C11.75 3.40986 12.0083 2.83826 12.3481 2.59371C12.7019 2.33909 13.4569 2.20791 15.0689 2.67966C17.034 3.25784 18.7423 4.96628 19.3204 6.93136C19.7921 8.54317 19.6609 9.29809 19.4063 9.65187C19.1617 9.99165 18.5901 10.25 17.32 10.25H14C13.1164 10.25 12.6114 10.0306 12.3072 9.69298C11.9871 9.33764 11.75 8.69948 11.75 7.55998V4.67998Z"/>
            <path style={fillStyle} fill={props.style?.color?props.style.color:"#101020"} d="M8.40954 3.74485C8.8154 3.6621 9.07733 3.26599 8.99457 2.86013C8.91182 2.45427 8.51571 2.19234 8.10985 2.2751C3.11889 3.29277 -0.496793 8.09919 0.379234 13.5392L0.379533 13.5411C1.05143 17.6483 4.35026 20.9484 8.45949 21.6103C13.9222 22.4973 18.7285 18.8585 19.735 13.8477C19.8166 13.4416 19.5535 13.0462 19.1474 12.9647C18.7413 12.8831 18.346 13.1462 18.2644 13.5523C17.4109 17.8015 13.3372 20.8827 8.6999 20.1297L8.69887 20.1295C5.22887 19.571 2.42836 16.7717 1.86 13.2997C1.11662 8.68017 4.1808 4.60711 8.40954 3.74485Z"/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function ArkreenMenuSwitchLeftIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.width?props.width:"1em"} height={props.height?props.height:"1em"} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 0.75C0.585786 0.75 0.25 1.08579 0.25 1.5C0.25 1.91421 0.585786 2.25 1 2.25H17C17.4142 2.25 17.75 1.91421 17.75 1.5C17.75 1.08579 17.4142 0.75 17 0.75H1Z" fill={props.style?.color?props.style?.color:"#222432"}/>
            <path d="M0.300122 7.72986C0.26775 7.81368 0.25 7.90477 0.25 8C0.25 8.10929 0.273376 8.21312 0.315401 8.30676C0.343251 8.36894 0.379997 8.4281 0.425637 8.48232C0.441041 8.50065 0.457307 8.51822 0.47437 8.53499L3.29807 11.3587C3.59096 11.6516 4.06583 11.6516 4.35873 11.3587C4.65162 11.0659 4.65163 10.591 4.35874 10.2981L2.81068 8.75H17C17.4142 8.75 17.75 8.41421 17.75 8C17.75 7.58579 17.4142 7.25 17 7.25H2.8106L4.35874 5.70183C4.65163 5.40894 4.65162 4.93406 4.35873 4.64117C4.06583 4.34828 3.59096 4.34829 3.29807 4.64118L0.469665 7.46963C0.393174 7.54613 0.33666 7.63503 0.300122 7.72986Z" fill={props.style?.color?props.style?.color:"#222432"}/>
            <path d="M0.25 14.5C0.25 14.0858 0.585786 13.75 1 13.75H17C17.4142 13.75 17.75 14.0858 17.75 14.5C17.75 14.9142 17.4142 15.25 17 15.25H1C0.585786 15.25 0.25 14.9142 0.25 14.5Z" fill={props.style?.color?props.style?.color:"#222432"}/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function ArkreenMenuSwitchRightIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.width?props.width:"1em"} height={props.height?props.height:"1em"} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 0.75C17.4142 0.75 17.75 1.08579 17.75 1.5C17.75 1.91421 17.4142 2.25 17 2.25H1C0.585787 2.25 0.25 1.91421 0.25 1.5C0.25 1.08579 0.585787 0.75 1 0.75H17Z" fill={props.style?.color?props.style?.color:"#222432"}/>
            <path d="M17.6999 7.72986C17.7323 7.81368 17.75 7.90477 17.75 8C17.75 8.10929 17.7266 8.21312 17.6846 8.30676C17.6567 8.36894 17.62 8.4281 17.5744 8.48232C17.559 8.50065 17.5427 8.51822 17.5256 8.53499L14.7019 11.3587C14.409 11.6516 13.9342 11.6516 13.6413 11.3587C13.3484 11.0659 13.3484 10.591 13.6413 10.2981L15.1893 8.75H1C0.585787 8.75 0.25 8.41421 0.25 8C0.25 7.58579 0.585787 7.25 1 7.25H15.1894L13.6413 5.70183C13.3484 5.40894 13.3484 4.93406 13.6413 4.64117C13.9342 4.34828 14.409 4.34829 14.7019 4.64118L17.5303 7.46963C17.6068 7.54613 17.6633 7.63503 17.6999 7.72986Z" fill={props.style?.color?props.style?.color:"#222432"}/>
            <path d="M17.75 14.5C17.75 14.0858 17.4142 13.75 17 13.75H1C0.585787 13.75 0.25 14.0858 0.25 14.5C0.25 14.9142 0.585787 15.25 1 15.25H17C17.4142 15.25 17.75 14.9142 17.75 14.5Z" fill={props.style?.color?props.style?.color:"#222432"}/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function SearchIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.width?props.width:"1em"} height={props.height?props.height:"1em"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path style={fillStyle} fillRule="evenodd" clipRule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C14.6986 22.75 17.165 21.7556 19.0527 20.1133L21.4697 22.5303C21.7626 22.8232 22.2374 22.8232 22.5303 22.5303C22.8232 22.2374 22.8232 21.7626 22.5303 21.4697L20.1133 19.0527C21.7556 17.165 22.75 14.6986 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z" fill={props.style?.color?props.style?.color:"#101020"}/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function MenuIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.style?.width?props.style.width:"1em"} height={props.style?.height?props.style.height:"1em"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4.75C20.4142 4.75 20.75 5.08579 20.75 5.5C20.75 5.91421 20.4142 6.25 20 6.25H4C3.58579 6.25 3.25 5.91421 3.25 5.5C3.25 5.08579 3.58579 4.75 4 4.75H20Z" style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"}/>
            <path d="M20.75 18.5C20.75 18.0858 20.4142 17.75 20 17.75H4C3.58579 17.75 3.25 18.0858 3.25 18.5C3.25 18.9142 3.58579 19.25 4 19.25H20C20.4142 19.25 20.75 18.9142 20.75 18.5Z" style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"}/>
            <path d="M20 11.25C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H20Z" style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"}/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function CloseMenuIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.style?.width?props.style.width:"24px"} height={props.style?.height?props.style.height:"24px"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.16639 5.10541C5.87349 4.81252 5.39862 4.81252 5.10573 5.10541C4.81283 5.39831 4.81283 5.87318 5.10573 6.16607L10.9394 11.9997L5.10572 17.8333C4.81282 18.1262 4.81282 18.6011 5.10572 18.894C5.39861 19.1869 5.87348 19.1869 6.16638 18.894L12 13.0604L17.8336 18.894C18.1265 19.1869 18.6014 19.1869 18.8943 18.894C19.1872 18.6011 19.1872 18.1262 18.8943 17.8333L13.0607 11.9997L18.8943 6.16608C19.1872 5.87319 19.1872 5.39831 18.8943 5.10542C18.6014 4.81253 18.1265 4.81253 17.8336 5.10542L12 10.939L6.16639 5.10541Z" style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"}/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function Error404Icon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect width="240" height="240" fill="url(#pattern0)"/>
            <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_1243_11188" transform="scale(0.00178571)"/>
                </pattern>
                <image id="image0_1243_11188" width="560" height="560" xlinkHref="data:image/png;base64,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"/>
            </defs>
        </svg>
    );
    return (
    <span><Icon component={svg} {...props} /></span>
    );
}

export function BackIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.width?props.width:"1em"} height={props.height?props.height:"1em"} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path style={fillStyle} d="M7.50016 0.333313C3.82016 0.333313 0.833496 3.31998 0.833496 6.99998C0.833496 10.68 3.82016 13.6666 7.50016 13.6666C11.1802 13.6666 14.1668 10.68 14.1668 6.99998C14.1668 3.31998 11.1802 0.333313 7.50016 0.333313ZM9.8335 7.49998H6.3735L7.52016 8.64665C7.7135 8.83998 7.7135 9.15998 7.52016 9.35331C7.42016 9.45331 7.2935 9.49998 7.16683 9.49998C7.04016 9.49998 6.9135 9.45331 6.8135 9.35331L4.8135 7.35331C4.62016 7.15998 4.62016 6.83998 4.8135 6.64665L6.8135 4.64665C7.00683 4.45331 7.32683 4.45331 7.52016 4.64665C7.7135 4.83998 7.7135 5.15998 7.52016 5.35331L6.3735 6.49998H9.8335C10.1068 6.49998 10.3335 6.72665 10.3335 6.99998C10.3335 7.27331 10.1068 7.49998 9.8335 7.49998Z" fill={props.style?.color?props.style.color:"#101020"}/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function LeftIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.width?props.width:"1em"} height={props.height?props.height:"1em"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.3536 3.64645C10.5488 3.84171 10.5488 4.15829 10.3536 4.35355L6.70711 8L10.3536 11.6464C10.5488 11.8417 10.5488 12.1583 10.3536 12.3536C10.1583 12.5488 9.84171 12.5488 9.64645 12.3536L5.64645 8.35355C5.45118 8.15829 5.45118 7.84171 5.64645 7.64645L9.64645 3.64645C9.84171 3.45118 10.1583 3.45118 10.3536 3.64645Z" style={fillStyle} fill={props.style?.color?props.style.color:"#9F9FA6"}/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function RightIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.width?props.width:"1em"} height={props.height?props.height:"1em"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.64645 12.3536C5.45119 12.1583 5.45119 11.8417 5.64645 11.6464L9.29289 8L5.64645 4.35355C5.45118 4.15829 5.45118 3.84171 5.64645 3.64645C5.84171 3.45118 6.15829 3.45118 6.35355 3.64645L10.3536 7.64645C10.5488 7.84171 10.5488 8.15829 10.3536 8.35355L6.35356 12.3536C6.15829 12.5488 5.84171 12.5488 5.64645 12.3536Z" style={fillStyle} fill={props.style?.color?props.style.color:"#9F9FA6"}/>
        </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}

export function CopyIcon(props: Partial<CustomIconComponentProps>): JSX.Element {
    const svg = () => (
        <svg width={props.width?props.width:"1em"} height={props.height?props.height:"1em"} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.66659 7.60004V10.4C9.66659 12.7334 8.73325 13.6667 6.39992 13.6667H3.59992C1.26659 13.6667 0.333252 12.7334 0.333252 10.4V7.60004C0.333252 5.26671 1.26659 4.33337 3.59992 4.33337H6.39992C8.73325 4.33337 9.66659 5.26671 9.66659 7.60004Z" style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"}/>
    <path d="M10.3999 0.333374H7.59992C5.54453 0.333374 4.58057 1.06277 4.37975 2.82605C4.33773 3.19494 4.64325 3.50004 5.01452 3.50004H6.39992C9.19992 3.50004 10.4999 4.80004 10.4999 7.60004V8.98544C10.4999 9.35671 10.805 9.66223 11.1739 9.62021C12.9372 9.41939 13.6666 8.45543 13.6666 6.40004V3.60004C13.6666 1.26671 12.7333 0.333374 10.3999 0.333374Z" style={fillStyle} fill={props.style?.color?props.style.color:"#40404D"}/>
  </svg>
    );
    return (
        <Icon component={svg} {...props} />
    );
}


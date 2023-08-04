import { Tag } from 'antd';
import { WalletIcon, EllipseIcon, MinerIcon, NetworkIcon, ValidatorIcon, Maker2Icon, DangerIcon, SuccessIcon, WarningIcon } from '@/components/icons/ArkreenIcon'

const accountTypeList = [
    { index: 1, name: 'Wallet' },
    { index: 2, name: 'Miner' },
    { index: 3, name: 'Network' },
    { index: 4, name: 'Validator' },
    { index: 5, name: 'Maker' }
]

const minerTypeList = [
    { index: 1, name: 'Gaming Miner' },
    { index: 2, name: 'Remote Miner' },
    { index: 3, name: 'Api Miner' },
    { index: 4, name: 'Standard Miner' },
    { index: 5, name: 'Standard Miner' },
    { index: 6, name: 'Standard Miner' },
    { index: 7, name: 'Standard Miner' }
]

const txTypeList = [
    { index: 1, name: 'TX_Register_miner' },
    { index: 2, name: 'TX_Onboard_Miner' },
    { index: 3, name: 'TX_Transfer_Miner' },
    { index: 4, name: 'TX_Terminate_Miner' },
    { index: 5, name: 'TX_Airdrop_Miner' },
    { index: 6, name: 'TX_Claim_Miner' },
    { index: 7, name: 'TX_Commit_PoGG' },
    { index: 8, name: 'TX_Report_PoGG' },
    { index: 9, name: 'TX_Reward_PoGG' },
    { index: 10, name: 'TX_Transfer' },
    { index: 11, name: 'TX_Withdraw' },
    { index: 13, name: 'TX_Airdrop_AKRE' },
]

export function formatTxTypeTag(txType: number) {
    const type = txTypeList[txType - 1]
    const style = { color: '#19BEBE', borderRadius: '4px', background: '#E8F9F9', paddingInline: '12px', fontSize: '12px', height: '22px', display: 'inline-block', lineHeight: '22px' }
    if (type.index === 1 || type.index === 2) {
        style.background = '#E8F9F9'
        style.color = '#19BEBE'
    } else if (type.index === 3 || type.index === 4) {
        style.background = '#E9F6F3'
        style.color = '#1FA484'
    } else if (type.index === 5 || type.index === 6 || type.index === 13) {
        style.background = '#E6F4EB'
        style.color = '#00913A'
    } else if (type.index === 7 || type.index === 8 || type.index === 9) {
        style.background = '#FCF5EC'
        style.color = '#DF9742'
    } else if (type.index === 10 || type.index === 11) {
        style.background = '#F5F0FE'
        style.color = '#9D68F6'
    }
    return <span style={style}>{type.name}</span>
}

export function formatStatusTag(type: number) {
    const style = { color: '#19BEBE', borderRadius: '4px', background: '#E8F9F9', paddingInline: '12px', fontSize: '12px', height: '22px', display: 'inline-block', lineHeight: '22px' }
    let name = ''
    if (type === 0) {
        style.background = '#FCF5EC'
        style.color = '#DF9742'
        name = 'Pending'
    } else if (type === 1) {
        style.background = '#E9F6F3'
        style.color = '#1FA484'
        name = 'Success'
    } else {
        style.background = '#FCF0F0'
        style.color = '#E16969'
        name = 'Failed'
    }
    return <span style={style}>{name}</span>
}

export function formatMinerTypeTag(minerType: number) {
    const type = minerTypeList[minerType - 1]
    if (type.index === 1) {
        return <Tag icon={<EllipseIcon />} color=" #E8F9F9" style={{ color: '#19BEBE' }}>{type.name}</Tag>
    } else if (type.index === 2) {
        return <Tag icon={<EllipseIcon />} color=" #FCF5EC" style={{ color: '#DF9742' }}>{type.name}</Tag>
    } else if (type.index === 3) {
        return <Tag icon={<EllipseIcon />} color=" #E6F4EB" style={{ color: '#00913A' }}>{type.name}</Tag>
    } else if (type.index === 4) {
        return <Tag icon={<EllipseIcon />} color=" #E6F4EB" style={{ color: '#00913A' }}>{type.name}</Tag>
    } else if (type.index === 5) {
        return <Tag icon={<EllipseIcon />} color=" #E6F4EB" style={{ color: '#00913A' }}>{type.name}</Tag>
    } else if (type.index === 6) {
        return <Tag icon={<EllipseIcon />} color=" #E6F4EB" style={{ color: '#00913A' }}>{type.name}</Tag>
    } else if (type.index === 7) {
        return <Tag icon={<EllipseIcon />} color=" #E6F4EB" style={{ color: '#00913A' }}>{type.name}</Tag>
    }
}

export function formatStatusIcon(type?: string, text?: string) {
    if (type === 'success') {
        return <Tag icon={<SuccessIcon style={{ width: '12.67px', height: '12.67px' }} />} color=" #E9F6F3" style={{ color: '#1FA484' }}>{text}</Tag>
    } else if (type === 'warning') {
        return <Tag icon={<WarningIcon style={{ width: '12.67px', height: '12.67px' }} />} color=" #FCF5EC" style={{ color: '#DF9742' }}>{text}</Tag>
    } else if (type === 'danger') {
        return <Tag icon={<DangerIcon style={{ width: '12.67px', height: '12.67px' }} />} color=" #FCF0F0" style={{ color: '#E16969' }}>{text}</Tag>
    } else if (type === 'pending') {
        return <Tag icon={<MinerIcon style={{ width: '12.67px', height: '12.67px' }} />} color=" #E8F9F9" style={{ color: '#19BEBE' }}>{text}</Tag>
    } else {
        return <Tag icon={<SuccessIcon style={{ width: '12.67px', height: '12.67px' }} />} color=" #E9F6F3" style={{ color: '#1FA484' }}>{text}</Tag>
    }
}

export function formatAccountTypeIcon(accountType: number) {
    const type = accountTypeList[accountType - 1]
    if (type.index === 1) {
        return <Tag icon={<WalletIcon style={{ width: '12.67px', height: '12.67px' }} />} color=" #E9F6F3" style={{ color: '#1FA484' }}>{type.name}</Tag>
    } else if (type.index === 2) {
        return <Tag icon={<MinerIcon style={{ width: '12.67px', height: '12.67px' }} />} color=" #E6F4EB" style={{ color: '#00913A' }}>{type.name}</Tag>
    } else if (type.index === 3) {
        return <Tag icon={<NetworkIcon style={{ width: '12.67px', height: '12.67px' }} />} color=" #FCF5EC" style={{ color: '#DF9742' }}>{type.name}</Tag>
    } else if (type.index === 4) {
        return <Tag icon={<ValidatorIcon style={{ width: '12.67px', height: '12.67px' }} />} color=" #E8F9F9" style={{ color: '#19BEBE' }}>{type.name}</Tag>
    } else if (type.index === 5) {
        return <Tag icon={<Maker2Icon style={{ width: '12.67px', height: '12.67px' }} />} color=" #F5F0FE" style={{ color: '#9D68F6' }}>{type.name}</Tag>
    }
}

export function formatDate(value: number, format: string) {
    if (!value) { return; }
    if (!format) { format = 'yyyy-MM-dd'; }
    if (value < 100000000000) {
        value = value * 1000
    }
    let time = new Date(value);
    if (time instanceof Date) {
        const dict: any = {
            yyyy: time.getFullYear(),
            M: time.getMonth() + 1,
            d: time.getDate(),
            H: time.getHours(),
            m: time.getMinutes(),
            s: time.getSeconds(),
            MM: ('' + (time.getMonth() + 101)).substr(1),
            dd: ('' + (time.getDate() + 100)).substr(1),
            HH: ('' + (time.getHours() + 100)).substr(1),
            mm: ('' + (time.getMinutes() + 100)).substr(1),
            ss: ('' + (time.getSeconds() + 100)).substr(1),
        };
        return format.replace(/(yyyy|MM?|dd?|HH?|mm?|ss?)/g, function () {
            return dict[arguments[0]];
        });
    }
}

const arrr = [' years ', ' months ', ' weeks ', ' days ', ' hrs ', ' mins ', ' secs '];
const arrn = [31536000, 2592000, 604800, 86400, 3600, 60, 1];
export function formatVisualizationDate(value: number) {
    if (value === 0 || Number.isNaN(value)) {
        return ''
    }
    if (value < 100000000000) {
        value = value * 1000
    }
    let mistiming = Math.round(Number(new Date()) / 1000) - (value / 1000);
    const postfix = mistiming > 0 ? 'ago' : 'after';
    mistiming = Math.abs(mistiming)
    let str = "";

    let d = day(mistiming);
    if (d > 0) {
        str += d + arrr[3];
        mistiming = mistiming - (arrn[3] * d);
    }
    let h = hour(mistiming);
    if (h > 0) {
        str += h + arrr[4];
        mistiming = mistiming - (arrn[4] * h);
    }
    if (d > 0) {
        return str + postfix;
    }
    let min = minutes(mistiming);
    if (min > 0) {
        str += min + arrr[5];
        mistiming = mistiming - (arrn[5] * min);
    }
    if (h > 0 || d > 0) {
        return str + postfix;
    }
    let s = second(mistiming);
    if (s > 0) {
        str += s + arrr[6];
    }

    return str === "" ? "1 secs ago" : str + postfix;
}

export function formatVisualizationDateUnity(value: number) {
    if (value < 100000000000) {
        value = value * 1000
    }
    let mistiming = Math.round(Number(new Date()) / 1000) - (value / 1000);
    const postfix = mistiming > 0 ? 'ago' : 'after';
    mistiming = Math.abs(mistiming)
    let str = "";
    let y = year(mistiming);
    if (y > 0) {
        str += y + arrr[0];
        mistiming = mistiming - (arrn[0] * y);
    }
    let d = day(mistiming);
    if (d > 0) {
        str += d + arrr[3];
    }
    return str === "" ? "1 secs ago" : str + postfix;
}

export function formatSec2Days(value: number) {
    return (value / arrn[3]) + " day(s)";
}

export function formatDateUnity(value: number) {
    if (value < 100000000000) {
        value = value * 1000
    }
    let mistiming = Math.round(Number(new Date()) / 1000) - (value / 1000);
    mistiming = Math.abs(mistiming)
    let str = "";
    let d = day(mistiming);
    if (d > 0) {
        str += d + " day(s)";
    }
    return "In " + str;
}

function second(mistiming: number) {
    return fun(mistiming, arrn[6]);
}

function minutes(mistiming: number) {
    return fun(mistiming, arrn[5]);
}

function hour(mistiming: number) {
    return fun(mistiming, arrn[4]);
}

function day(mistiming: number) {
    return fun(mistiming, arrn[3]);
}

function year(mistiming: number) {
    return fun(mistiming, arrn[0]);
}

function fun(mistiming: number, number: number) {
    if (mistiming >= number) {
        const inm = Math.floor(mistiming / number);
        if (inm !== 0) {
            return inm;
        }
    }
    return 0;
}

export function formatCountdownDate(value: number) {
    if (value === 0 || Number.isNaN(value)) {
        return ''
    }
    if (value < 100000000000) {
        value = value * 1000
    }
    if (value <= Date.now()) {
        return ''
    }
    let mistiming = Math.round(Number(new Date()) / 1000) - (value / 1000);
    mistiming = Math.abs(mistiming)
    let str = "";
    //
    let d = day(mistiming);
    if (d > 0) {
        str += d + "d ";
        mistiming = mistiming - (arrn[3] * d);
    }
    //
    let h = hour(mistiming);
    if (h > 0) {
        str += h + ':';
        mistiming = mistiming - (arrn[4] * h);
    }
    let min = minutes(mistiming);
    if (min >= 10) {
        str = str + min + ':';
        mistiming = mistiming - (arrn[5] * min);
    } else if (min >= 0) {
        str = str + '0' + min + ':';
        mistiming = mistiming - (arrn[5] * min);
    } else {
        str = '00:';
    }
    let s = second(mistiming);
    if (s >= 10) {
        str += s;
    } else if (s >= 0) {
        str += '0' + s;
    } else {
        str += '00'
    }
    return str === "" ? "00:00:00" : str;
}

export function formatCountdownDateAndDay(value: number) {
    if (value === 0 || Number.isNaN(value)) {
        return ''
    }
    if (value < 100000000000) {
        value = value * 1000
    }
    if (value <= Date.now()) {
        return ''
    }
    let mistiming = Math.round(Number(new Date()) / 1000) - (value / 1000);
    mistiming = Math.abs(mistiming)
    let str = "";
    //*
    let d = day(mistiming);
    if (d > 0) {
        str += d + "d";
        mistiming = mistiming - (arrn[3] * d);
    }
    //*/
    let h = hour(mistiming);
    if (h > 0) {
        str += h + 'h';
        mistiming = mistiming - (arrn[4] * h);
    }
    let min = minutes(mistiming);
    if (min >= 10) {
        str = str + min + 'm';
        mistiming = mistiming - (arrn[5] * min);
    } else if (min >= 0) {
        str = str + '0' + min + 'm';
        mistiming = mistiming - (arrn[5] * min);
    } else {
        str = '00m';
    }
    let s = second(mistiming);
    if (s >= 10) {
        str += s;
    } else if (s >= 0) {
        str += '0' + s;
    } else {
        str += '00'
    }
    return str === "" ? "00:00:00" : str + 's';
}

export function formatString(value: string, index: number) {
    if (value == null || value === undefined) {
        return value;
    }
    if (index == null || index === undefined || index < 1) {
        index = 20;
    }
    if (value.length > index) {
        return value.substring(0, index) + "..."
    } else {
        return value;
    }
}

export function formatPower(value: number, fixed?: number) {
    if (value == null || value === undefined) {
        return "0 W";
    }
    if (value > 10000000000) {
        return Number((value / 1000 / 1000 / 1000).toFixed(fixed ? fixed : 3)).toLocaleString() + " GW";
    } else if (value > 10000000) {
        return Number((value / 1000 / 1000).toFixed(fixed ? fixed : 3)).toLocaleString() + " MW";
    } else if (value > 10000) {
        return Number((value / 1000).toFixed(fixed ? fixed : 3)).toLocaleString() + " kW";
    } else {
        return Number(Number(value).toFixed(fixed ? fixed : 3)).toLocaleString() + " W";
    }
}

export function formatNumberValue(value: number, fixed?: number) {
    if (value == null || value === undefined) {
        return "0";
    }
    let prefix = '';
    let suffix = '';
    if (value >= 1000000000) {
        value = (value / 1000 / 1000 / 1000)
        suffix = " G";
    } else if (value >= 1000000) {
        value = (value / 1000 / 1000)
        suffix = " M";
    } else if (value >= 1000) {
        value = (value / 1000)
        suffix = " K";
    }
    if (value < 10) {
        prefix = '   '
    } else if (value < 100) {
        prefix = '  '
    }
    if (suffix === '') {
        prefix = '  '
    }
    return prefix + value.toFixed(fixed !== undefined ? fixed : 3) + suffix;
}

export function formatElectricity(value: number, fixed?: number) {
    if (value == null || value === undefined) {
        return "0 Wh";
    }

    // mW -> W
    value = value / 1000

    if (value > 10000000000) {
        let power = Number((value / 1000 / 1000 / 1000)).toFixed(fixed !== undefined ? fixed : 3);
        return Number(power).toLocaleString() + " GWh";
    } else if (value > 10000000) {
        let power = Number((value / 1000 / 1000)).toFixed(fixed !== undefined ? fixed : 3);
        return Number(power).toLocaleString() + " MWh";
    } else if (value > 10000) {
        let power = Number((value / 1000)).toFixed(fixed !== undefined ? fixed : 3);
        return Number(power).toLocaleString() + " kWh";
    } else {
        return Number(Number(value).toFixed(fixed !== undefined ? fixed : 3)).toLocaleString() + " Wh";
    }
}

export function formatWeight(value: number, fixed?: number) {
    if (value == null || value === undefined) {
        return "0 kg";
    }
    if (value < 1) {
        return Number(Number(value * 1000).toFixed(fixed !== undefined ? fixed : 3)).toLocaleString() + " kg";
    } else if (value < 1000) {
        return Number(value).toFixed(fixed !== undefined ? fixed : 3) + " ton";
    } else if (value < 1000000) {
        return Number(value / 1000).toFixed(fixed !== undefined ? fixed : 3) + " k ton";
    } else {
        return Number(value / 1000 / 1000).toFixed(fixed !== undefined ? fixed : 3).toLocaleString() + " m ton";
    }
}

export function formatElectricity2(value: number) {
    if (value == null || value === undefined) {
        return "0";
    }
    let power = Number((value / 1000)).toFixed(5);
    return Number(power).toLocaleString() + "";
}

export function formatNumber(value: number | string) {
    if (value == null || value === undefined) {
        return 0;
    }
    let str = value.toString();
    let strArr = str.split(".");
    if (strArr[1] === undefined) {
        return Number(strArr[0]).toLocaleString();
    }
    return Number(strArr[0]).toLocaleString() + "." + strArr[1];

}

export function formatLocation(locationType: number, latitude: number | string, longitude: number | string) {
    if (latitude == null || latitude === undefined) {
        return "Unknown";
    }
    if (longitude == null || longitude === undefined) {
        return "Unknown";
    }
    if (locationType == null || locationType === undefined) {
        locationType = 1;
    }
    if (locationType === 1) {
        return latitude + "," + longitude
    } else {
        return latitude + "," + longitude
    }
}

export function formatToken(value: number) {
    if (value == null || value === undefined || value === 0) {
        return 0;
    }
    let fixed = getTokenFixed(value);
    const num = Number(value).toFixed(fixed)
    return formatNumber(num);
}

export function getTokenFixed(value: number) {
    let fixed = 0;
    if (value == null || value === undefined || value === 0) {
        return fixed;
    }
    if (value > 1000) {
        fixed = 0;
    } else if (value > 100 && value <= 1000) {
        fixed = 1;
    } else if (value > 10 && value <= 100) {
        fixed = 2;
    } else if (value > 1 && value <= 10) {
        fixed = 4;
    } else if (value > 0.1 && value <= 1) {
        let str = value.toString();
        let strArr = str.split(".");
        if (strArr[1] === undefined) {
            fixed = 0;
        } else if (strArr[1].length > 8) {
            fixed = 4;
        } else {
            fixed = strArr[1].length;
        }
    } else {
        let str = value.toString();
        let strArr = str.split(".");
        if (strArr[1] === undefined) {
            fixed = 0;
        } else if (strArr[1].length > 8) {
            fixed = 8;
        } else {
            fixed = strArr[1].length;
        }
    }
    return fixed;
}

export function getAddress(value: string) {
    return value.substring(0, 6) + "..." + value.substring(value.length - 4)
}

export function formatPowerNotUnit(value: number) {
    if (value == null || value === undefined) {
        return "0";
    }
    const power = value / 1000 / 1000;
    if (power > 10000) {
        return Number((power / 1000).toFixed(3)).toLocaleString();
    } else {
        return Number(power.toFixed(3)).toLocaleString();
    }
}

export function formatElectricityNotUnit(value: number) {
    if (value == null || value === undefined) {
        return "0";
    }
    if (value > 10000) {
        return Number((value / 1000).toFixed(3)).toLocaleString();
    } else {
        return Number(value.toFixed(3)).toLocaleString();
    }
}

export function formatPowerUnit(value: number) {
    if (value == null || value === undefined) {
        return "0 Wp";
    }
    if (value > 10000) {
        return Number((value / 1000).toFixed(3)).toLocaleString() + " kWp";
    } else {
        return Number(Number(value).toFixed(3)).toLocaleString() + " Wp";
    }
}

export function formatPowerUnit2(value: number) {
    if (value == null || value === undefined) {
        return "0";
    }
    return Number(Number(value).toFixed(3)).toLocaleString() + "";
}

export function formatTxType(txType: number) {
    return txTypeList[txType - 1].name
}

export function formatAccountType(accountType: number) {
    return accountTypeList[accountType - 1].name
}

export function formatMinerType(minerType: number) {
    return minerTypeList[minerType - 1].name
}

export function formatLongString(str: string, prefix: number, suffix: number) {
    if (!str) {
        return '';
    }
    if (str?.length <= prefix + suffix) {
        return str;
    } else {
        const prefixStr = str.substring(0, prefix);
        const suffixStr = str.substring(str.length - suffix);
        return prefixStr + "..." + suffixStr
    }
}

export function bytesToHex(bytes: any) {
    for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
    }
    return hex.join("");
}

export function hexToBytes(hex: any) {
    let bytes = []
    for (let c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
    return bytes;
}
import type {Item} from "../../Interface.ts";

import AdamantiteRepeaterImg from "../../../assets/icon/RangedWeapons/BowsAndRepeaters/Adamantite_Repeater.webp"
import ChlorophyteShotbowImg from "../../../assets/icon/RangedWeapons/BowsAndRepeaters/Chlorophyte_Shotbow.webp"
import CobaltRepeaterImg from "../../../assets/icon/RangedWeapons/BowsAndRepeaters/Cobalt_Repeater.webp"
import HallowedRepeaterImg from "../../../assets/icon/RangedWeapons/BowsAndRepeaters/Hallowed_Repeater.webp"
import MythrilRepeaterImg from "../../../assets/icon/RangedWeapons/BowsAndRepeaters/Mythril_Repeater.webp"
import OrichalcumRepeaterImg from "../../../assets/icon/RangedWeapons/BowsAndRepeaters/Orichalcum_Repeater.webp"
import PalladiumRepeaterImg from "../../../assets/icon/RangedWeapons/BowsAndRepeaters/Palladium_Repeater.webp"
import StakeLauncherImg from "../../../assets/icon/RangedWeapons/BowsAndRepeaters/Stake_Launcher.webp"
import TitaniumRepeaterImg from "../../../assets/icon/RangedWeapons/BowsAndRepeaters/Titanium_Repeater.webp"

import {RangedWeapons} from "../dataCategory.zh-CN.ts";
import {Repeaters} from "../dataSubcategory.zh-CN.ts";

export const CobaltRepeater:Item={
    icon:CobaltRepeaterImg,
    isCollection:false,
    id:435,
    name: "钴连弩",
    Category:RangedWeapons,
    Subcategory:Repeaters,
    comments:'',
}

export const PalladiumRepeater:Item={
    icon:PalladiumRepeaterImg,
    isCollection:false,
    id:1187,
    name: "钯金连弩",
    Category:RangedWeapons,
    Subcategory:Repeaters,
    comments:'',
}

export const MythrilRepeater:Item={
    icon:MythrilRepeaterImg,
    isCollection:false,
    id:436,
    name: "秘银连弩",
    Category:RangedWeapons,
    Subcategory:Repeaters,
    comments:'',
}

export const OrichalcumRepeater:Item={
    icon:OrichalcumRepeaterImg,
    isCollection:false,
    id:1194,
    name: "山铜连弩",
    Category:RangedWeapons,
    Subcategory:Repeaters,
    comments:'',
}

export const AdamantiteRepeater:Item={
    icon:AdamantiteRepeaterImg,
    isCollection:false,
    id:481,
    name: "精金连弩",
    Category:RangedWeapons,
    Subcategory:Repeaters,
    comments:'',
}

export const TitaniumRepeater:Item={
    icon:TitaniumRepeaterImg,
    isCollection:false,
    id:1201,
    name: "钛金连弩",
    Category:RangedWeapons,
    Subcategory:Repeaters,
    comments:'',
}

export const HallowedRepeater:Item={
    icon:HallowedRepeaterImg,
    isCollection:false,
    id:578,
    name: "神圣连弩",
    Category:RangedWeapons,
    Subcategory:Repeaters,
    comments:'',
}

export const ChlorophyteShotbow:Item={
    icon:ChlorophyteShotbowImg,
    isCollection:false,
    id:1229,
    name: "叶绿连弩",
    Category:RangedWeapons,
    Subcategory:Repeaters,
    comments:'',
}

export const StakeLauncher:Item={
    icon:StakeLauncherImg,
    isCollection:false,
    id:1835,
    name: "尖桩发射器",
    Category:RangedWeapons,
    Subcategory:Repeaters,
    comments:'',
}

export const RepeatersList =[
    CobaltRepeater,
    PalladiumRepeater,
    MythrilRepeater,
    OrichalcumRepeater,
    AdamantiteRepeater,
    TitaniumRepeater,
    HallowedRepeater,
    ChlorophyteShotbow,
    StakeLauncher
]
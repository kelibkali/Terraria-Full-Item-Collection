import type {Item} from "../../Interface.ts";

import CoolWhipImg from "../../../assets/icon/SummoningWeapons/Whips/Cool_Whip.webp"
import DarkHarvestImg from "../../../assets/icon/SummoningWeapons/Whips/Dark_Harvest.webp"
import DurendalImg from "../../../assets/icon/SummoningWeapons/Whips/Durendal.webp"
import FirecrackerImg from "../../../assets/icon/SummoningWeapons/Whips/Firecracker.webp"
import KaleidoscopeImg from "../../../assets/icon/SummoningWeapons/Whips/Kaleidoscope.webp"
import LeatherWhipImg from "../../../assets/icon/SummoningWeapons/Whips/Leather_Whip.webp"
import MorningStarImg from "../../../assets/icon/SummoningWeapons/Whips/Morning_Star.webp"
import SnapthornImg from "../../../assets/icon/SummoningWeapons/Whips/Snapthorn.webp"
import SpinalTapImg from "../../../assets/icon/SummoningWeapons/Whips/Spinal_Tap.webp"

import {SummoningWeapons} from "../data.Category.zh-CN.ts";
import {Whips} from "../data.Subcategory.zh-CN.ts";

export const LeatherWhip: Item = {
    icon: LeatherWhipImg,
    isCollection: false,
    id: 4672,
    name: "皮鞭",
    Category: SummoningWeapons,
    Subcategory: Whips,
    comments: '',
}

export const Snapthorn: Item = {
    icon: SnapthornImg,
    isCollection: false,
    id: 4913,
    name: "荆鞭",
    Category: SummoningWeapons,
    Subcategory: Whips,
    comments: '',
}

export const SpinalTap: Item = {
    icon: SpinalTapImg,
    isCollection: false,
    id: 5074,
    name: "脊柱骨鞭",
    Category: SummoningWeapons,
    Subcategory: Whips,
    comments: '',
}

export const Firecracker: Item = {
    icon: FirecrackerImg,
    isCollection: false,
    id: 4912,
    name: "鞭炮",
    Category: SummoningWeapons,
    Subcategory: Whips,
    comments: '',
}

export const CoolWhip: Item = {
    icon: CoolWhipImg,
    isCollection: false,
    id: 4911,
    name: "冷鞭",
    Category: SummoningWeapons,
    Subcategory: Whips,
    comments: '',
}

export const Durendal: Item = {
    icon: DurendalImg,
    isCollection: false,
    id: 4678,
    name: "迪朗达尔",
    Category: SummoningWeapons,
    Subcategory: Whips,
    comments: '',
}

export const MorningStar: Item = {
    icon: MorningStarImg,
    isCollection: false,
    id: 4679,
    name: "晨星",
    Category: SummoningWeapons,
    Subcategory: Whips,
    comments: '',
}

export const DarkHarvest: Item = {
    icon: DarkHarvestImg,
    isCollection: false,
    id: 4680,
    name: "暗黑收割",
    Category: SummoningWeapons,
    Subcategory: Whips,
    comments: '',
}

export const Kaleidoscope: Item = {
    icon: KaleidoscopeImg,
    isCollection: false,
    id: 4914,
    name: "万花筒",
    Category: SummoningWeapons,
    Subcategory: Whips,
    comments: '',
}

export const WhipsList = [
    LeatherWhip,
    Snapthorn,
    SpinalTap,
    Firecracker,
    CoolWhip,
    Durendal,
    MorningStar,
    DarkHarvest,
    Kaleidoscope
]
import type {Item} from "../../Interface.ts";

import BeeGunImg from "../../../assets/icon/MagicWeapons/MagicGuns/Bee_Gun.webp"
import BubbleGunImg from "../../../assets/icon/MagicWeapons/MagicGuns/Bubble_Gun.webp"
import ChargedBlasterCannonImg from "../../../assets/icon/MagicWeapons/MagicGuns/Charged_Blaster_Cannon.webp"
import GrayZapinatorImg from "../../../assets/icon/MagicWeapons/MagicGuns/Gray_Zapinator.webp"
import HeatRayImg from "../../../assets/icon/MagicWeapons/MagicGuns/Heat_Ray.webp"
import LaserMachinegunImg from "../../../assets/icon/MagicWeapons/MagicGuns/Laser_Machinegun.webp"
import LaserRifleImg from "../../../assets/icon/MagicWeapons/MagicGuns/Laser_Rifle.webp"
import LeafBlowerImg from "../../../assets/icon/MagicWeapons/MagicGuns/Leaf_Blower.webp"
import OrangeZapinatorImg from "../../../assets/icon/MagicWeapons/MagicGuns/Orange_Zapinator.webp"
import RainbowGunImg from "../../../assets/icon/MagicWeapons/MagicGuns/Rainbow_Gun.webp"
import SpaceGunImg from "../../../assets/icon/MagicWeapons/MagicGuns/Space_Gun.webp"
import WaspGunImg from "../../../assets/icon/MagicWeapons/MagicGuns/Wasp_Gun.webp"

import {MagicWeapons} from "../dataCategory.zh-CN.ts";
import {MagicGuns} from "../dataSubcategory.zh-CN.ts";

export const SpaceGun: Item = {
    icon: SpaceGunImg,
    isCollection: false,
    id: 127,
    name: "太空枪",
    Category: MagicWeapons,
    Subcategory: MagicGuns,
    comments: '',
}

export const BeeGun: Item = {
    icon: BeeGunImg,
    isCollection: false,
    id: 1121,
    name: "蜜蜂枪",
    Category: MagicWeapons,
    Subcategory: MagicGuns,
    comments: '',
}

export const GrayZapinator: Item = {
    icon: GrayZapinatorImg,
    isCollection: false,
    id: 4347,
    name: "灰冲击枪",
    Category: MagicWeapons,
    Subcategory: MagicGuns,
    comments: '必须肉前获取',
}

export const LaserRifle: Item = {
    icon: LaserRifleImg,
    isCollection: false,
    id: 514,
    name: "激光步枪",
    Category: MagicWeapons,
    Subcategory: MagicGuns,
    comments: '',
}

export const OrangeZapinator: Item = {
    icon: OrangeZapinatorImg,
    isCollection: false,
    id: 4348,
    name: "橙冲击枪",
    Category: MagicWeapons,
    Subcategory: MagicGuns,
    comments: '',
}

export const WaspGun: Item = {
    icon: WaspGunImg,
    isCollection: false,
    id: 1155,
    name: "胡蜂枪",
    Category: MagicWeapons,
    Subcategory: MagicGuns,
    comments: '',
}

export const LeafBlower: Item = {
    icon: LeafBlowerImg,
    isCollection: false,
    id: 1178,
    name: "吹叶机",
    Category: MagicWeapons,
    Subcategory: MagicGuns,
    comments: '',
}

export const RainbowGun: Item = {
    icon: RainbowGunImg,
    isCollection: false,
    id: 1260,
    name: "彩虹枪",
    Category: MagicWeapons,
    Subcategory: MagicGuns,
    comments: '',
}

export const HeatRay: Item = {
    icon: HeatRayImg,
    isCollection: false,
    id: 1295,
    name: "高温射线枪",
    Category: MagicWeapons,
    Subcategory: MagicGuns,
    comments: '',
}

export const LaserMachinegun: Item = {
    icon: LaserMachinegunImg,
    isCollection: false,
    id: 2795,
    name: "激光机枪",
    Category: MagicWeapons,
    Subcategory: MagicGuns,
    comments: '',
}

export const ChargedBlasterCannon: Item = {
    icon: ChargedBlasterCannonImg,
    isCollection: false,
    id: 2882,
    name: "充能爆破炮",
    Category: MagicWeapons,
    Subcategory: MagicGuns,
    comments: '',
}

export const BubbleGun: Item = {
    icon: BubbleGunImg,
    isCollection: false,
    id: 2623,
    name: "泡泡枪",
    Category: MagicWeapons,
    Subcategory: MagicGuns,
    comments: '',
}

export const MagicGunsList = [
    SpaceGun,
    BeeGun,
    GrayZapinator,
    LaserRifle,
    OrangeZapinator,
    WaspGun,
    LeafBlower,
    RainbowGun,
    HeatRay,
    LaserMachinegun,
    ChargedBlasterCannon,
    BubbleGun
]
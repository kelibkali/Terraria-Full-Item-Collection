import type {Item} from "../../Interface.ts";

import BlueFlareImg from "../../../assets/icon/RangedWeapons/OtherBullets/Blue_Flare.webp"
import BlueRocketImg from "../../../assets/icon/RangedWeapons/OtherBullets/Blue_Rocket.webp"
import CrystalDartImg from "../../../assets/icon/RangedWeapons/OtherBullets/Crystal_Dart.webp"
import CursedDartImg from "../../../assets/icon/RangedWeapons/OtherBullets/Cursed_Dart.webp"
import CursedFlareImg from "../../../assets/icon/RangedWeapons/OtherBullets/Cursed_Flare.webp"
import FlareImg from "../../../assets/icon/RangedWeapons/OtherBullets/Flare.webp"
import GreenRocketImg from "../../../assets/icon/RangedWeapons/OtherBullets/Green_Rocket.webp"
import IchorDartImg from "../../../assets/icon/RangedWeapons/OtherBullets/Ichor_Dart.webp"
import PoisonDartImg from "../../../assets/icon/RangedWeapons/OtherBullets/Poison_Dart.webp"
import RainbowFlareImg from "../../../assets/icon/RangedWeapons/OtherBullets/Rainbow_Flare.webp"
import RedRocketImg from "../../../assets/icon/RangedWeapons/OtherBullets/Red_Rocket.webp"
import SeedImg from "../../../assets/icon/RangedWeapons/OtherBullets/Seed.webp"
import ShimmerFlareImg from "../../../assets/icon/RangedWeapons/OtherBullets/Shimmer_Flare.webp"
import SpelunkerFlareImg from "../../../assets/icon/RangedWeapons/OtherBullets/Spelunker_Flare.webp"
import YellowRocketImg from "../../../assets/icon/RangedWeapons/OtherBullets/Yellow_Rocket.webp"

import {RangedWeapons} from "../dataCategory.zh-CN.ts";
import {OtherBullets} from "../dataSubcategory.zh-CN.ts";

export const Flare:Item={
        icon:FlareImg,
        isCollection:false,
        id:931,
        name: "照明弹",
        Category:RangedWeapons,
        Subcategory:OtherBullets,
        comments:'',
    }

export const BlueFlare:Item={
        icon:BlueFlareImg,
        isCollection:false,
        id:1614,
        name: "蓝照明弹",
        Category:RangedWeapons,
        Subcategory:OtherBullets,
        comments:'',
    }

export const SpelunkerFlare:Item={
        icon:SpelunkerFlareImg,
        isCollection:false,
        id:5377,
        name: "洞穴探险照明弹",
        Category:RangedWeapons,
        Subcategory:OtherBullets,
        comments:'',
    }

export const CursedFlare:Item={
        icon:CursedFlareImg,
        isCollection:false,
        id:5378,
        name: "诅咒照明弹",
        Category:RangedWeapons,
        Subcategory:OtherBullets,
        comments:'',
    }

export const RainbowFlare:Item={
        icon:RainbowFlareImg,
        isCollection:false,
        id:5379,
        name: "彩虹照明弹",
        Category:RangedWeapons,
        Subcategory:OtherBullets,
        comments:'',
    }

export const ShimmerFlare:Item={
        icon:ShimmerFlareImg,
        isCollection:false,
        id:5380,
        name: "微光照明弹",
        Category:RangedWeapons,
        Subcategory:OtherBullets,
        comments:'',
    }

export const Seed:Item={
        icon:SeedImg,
        isCollection:false,
        id:283,
        name: "种子",
        Category:RangedWeapons,
        Subcategory:OtherBullets,
        comments:'',
    }

export const PoisonDart:Item={
        icon:PoisonDartImg,
        isCollection:false,
        id:1310,
        name: "毒镖",
        Category:RangedWeapons,
        Subcategory:OtherBullets,
        comments:'',
    }

export const CrystalDart:Item={
        icon:CrystalDartImg,
        isCollection:false,
        id:3009,
        name: "水晶镖",
        Category:RangedWeapons,
        Subcategory:OtherBullets,
        comments:'',
    }

export const CursedDart:Item={
        icon:CursedDartImg,
        isCollection:false,
        id:3010,
        name: "诅咒镖",
        Category:RangedWeapons,
        Subcategory:OtherBullets,
        comments:'',
    }

export const IchorDart:Item={
        icon:IchorDartImg,
        isCollection:false,
        id:3011,
        name: "灵液镖",
        Category:RangedWeapons,
        Subcategory:OtherBullets,
        comments:'',
    }

export const RedRocket:Item={
        icon:RedRocketImg,
        isCollection:false,
        id:970,
        name: "红火箭",
        Category:RangedWeapons,
        Subcategory:OtherBullets,
        comments:'',
    }

export const GreenRocket:Item={
        icon:GreenRocketImg,
        isCollection:false,
        id:971,
        name: "绿火箭",
        Category:RangedWeapons,
        Subcategory:OtherBullets,
        comments:'',
    }

export const BlueRocket:Item={
        icon:BlueRocketImg,
        isCollection:false,
        id:972,
        name: "蓝火箭",
        Category:RangedWeapons,
        Subcategory:OtherBullets,
        comments:'',
    }

export const YellowRocket:Item={
        icon:YellowRocketImg,
        isCollection:false,
        id:973,
        name: "黄火箭",
        Category:RangedWeapons,
        Subcategory:OtherBullets,
        comments:'',
    }

export const OtherBulletsList =[
Flare,
BlueFlare,
SpelunkerFlare,
CursedFlare,
RainbowFlare,
ShimmerFlare,
Seed,
PoisonDart,
CrystalDart,
CursedDart,
IchorDart,
RedRocket,
GreenRocket,
BlueRocket,
YellowRocket]
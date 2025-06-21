import type {Item} from "../../Interface.ts";

import BlackBeltImg from "../../../assets/icon/Accessories/FrogAndNinja/Black_Belt.webp"
import ClimbingClawsImg from "../../../assets/icon/Accessories/FrogAndNinja/Climbing_Claws.webp"
import FrogFlipperImg from "../../../assets/icon/Accessories/FrogAndNinja/Frog_Flipper.webp"
import FrogGearImg from "../../../assets/icon/Accessories/FrogAndNinja/Frog_Gear.webp"
import FrogLegImg from "../../../assets/icon/Accessories/FrogAndNinja/Frog_Leg.webp"
import FrogWebbingImg from "../../../assets/icon/Accessories/FrogAndNinja/Frog_Webbing.webp"
import MasterNinjaGearImg from "../../../assets/icon/Accessories/FrogAndNinja/Master_Ninja_Gear.webp"
import ShoeSpikesImg from "../../../assets/icon/Accessories/FrogAndNinja/Shoe_Spikes.webp"
import TabiImg from "../../../assets/icon/Accessories/FrogAndNinja/Tabi.webp"
import TigerClimbingGearImg from "../../../assets/icon/Accessories/FrogAndNinja/Tiger_Climbing_Gear.webp"

import {Accessories} from "../data.Category.zh-CN.ts";
import {FrogAndNinja} from "../data.Subcategory.zh-CN.ts";

export const ClimbingClaws: Item = {
    icon: ClimbingClawsImg,
    isCollection: false,
    id: 953,
    name: "攀爬爪",
    Category: Accessories,
    Subcategory: FrogAndNinja,
    comments: '',
}

export const ShoeSpikes: Item = {
    icon: ShoeSpikesImg,
    isCollection: false,
    id: 975,
    name: "鞋钉",
    Category: Accessories,
    Subcategory: FrogAndNinja,
    comments: '',
}

export const TigerClimbingGear: Item = {
    icon: TigerClimbingGearImg,
    isCollection: false,
    id: 976,
    name: "猛虎攀爬装备",
    Category: Accessories,
    Subcategory: FrogAndNinja,
    comments: '',
}

export const BlackBelt: Item = {
    icon: BlackBeltImg,
    isCollection: false,
    id: 963,
    name: "黑腰带",
    Category: Accessories,
    Subcategory: FrogAndNinja,
    comments: '',
}

export const Tabi: Item = {
    icon: TabiImg,
    isCollection: false,
    id: 977,
    name: "分趾厚底袜",
    Category: Accessories,
    Subcategory: FrogAndNinja,
    comments: '',
}

export const MasterNinjaGear: Item = {
    icon: MasterNinjaGearImg,
    isCollection: false,
    id: 984,
    name: "忍者大师装备",
    Category: Accessories,
    Subcategory: FrogAndNinja,
    comments: '',
}

export const FrogLeg: Item = {
    icon: FrogLegImg,
    isCollection: false,
    id: 2423,
    name: "蛙腿",
    Category: Accessories,
    Subcategory: FrogAndNinja,
    comments: '',
}

export const FrogFlipper: Item = {
    icon: FrogFlipperImg,
    isCollection: false,
    id: 3994,
    name: "青蛙脚蹼",
    Category: Accessories,
    Subcategory: FrogAndNinja,
    comments: '',
}

export const FrogWebbing: Item = {
    icon: FrogWebbingImg,
    isCollection: false,
    id: 3996,
    name: "青蛙蹼",
    Category: Accessories,
    Subcategory: FrogAndNinja,
    comments: '',
}

export const FrogGear: Item = {
    icon: FrogGearImg,
    isCollection: false,
    id: 3995,
    name: "青蛙装备",
    Category: Accessories,
    Subcategory: FrogAndNinja,
    comments: '',
}

export const FrogAndNinjaList = [
    ClimbingClaws,
    ShoeSpikes,
    TigerClimbingGear,
    BlackBelt,
    Tabi,
    MasterNinjaGear,
    FrogLeg,
    FrogFlipper,
    FrogWebbing,
    FrogGear]
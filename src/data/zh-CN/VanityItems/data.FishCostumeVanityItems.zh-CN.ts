import type { Item } from "../../Interface.ts";

import FishCostumeMaskImg from "../../../assets/icon/VanityItems/FishCostume/Fish_Costume_Mask.webp"
import FishCostumeShirtImg from "../../../assets/icon/VanityItems/FishCostume/Fish_Costume_Shirt.webp"
import FishCostumeFinskirtImg from "../../../assets/icon/VanityItems/FishCostume/Fish_Costume_Finskirt.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {FishCostumeVanityItems} from "../data.Subcategory.zh-CN.ts";
export const FishCostumeMask:Item={
    icon:FishCostumeMaskImg,
    isCollection:false,
    id:2498,
    name: "鱼装面具",
    Category:VanityItems,
    Subcategory:FishCostumeVanityItems,
    comments:"渔夫任务",
}
export const FishCostumeShirt:Item={
    icon:FishCostumeShirtImg,
    isCollection:false,
    id:2499,
    name: "鱼装衣",
    Category:VanityItems,
    Subcategory:FishCostumeVanityItems,
    comments:"渔夫任务",
}
export const FishCostumeFinskirt:Item={
    icon:FishCostumeFinskirtImg,
    isCollection:false,
    id:2500,
    name: "鱼装鳍裙",
    Category:VanityItems,
    Subcategory:FishCostumeVanityItems,
    comments:"渔夫任务",
}
export const FishCostumeVanityItemsList =[
FishCostumeMask,
FishCostumeShirt,
FishCostumeFinskirt]
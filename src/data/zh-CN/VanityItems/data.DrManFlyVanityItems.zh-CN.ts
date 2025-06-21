import type { Item } from "../../Interface.ts";

import DrManFlyMaskImg from "../../../assets/icon/VanityItems/DrManFly/Dr_Man_Fly_Mask.webp"
import DrManFlysLabCoatImg from "../../../assets/icon/VanityItems/DrManFly/Dr_Man_Flys_Lab_Coat.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {DrManFlyVanityItems} from "../data.Subcategory.zh-CN.ts";
export const DrManFlyMask:Item={
    icon:DrManFlyMaskImg,
    isCollection:false,
    id:4738,
    name: "苍蝇人博士面具",
    Category:VanityItems,
    Subcategory:DrManFlyVanityItems,
    comments:"苍蝇人博士",
}
export const DrManFlysLabCoat:Item={
    icon:DrManFlysLabCoatImg,
    isCollection:false,
    id:4739,
    name: "苍蝇人博士实验服",
    Category:VanityItems,
    Subcategory:DrManFlyVanityItems,
    comments:"苍蝇人博士",
}
export const DrManFlyVanityItemsList =[
DrManFlyMask,
DrManFlysLabCoat
]
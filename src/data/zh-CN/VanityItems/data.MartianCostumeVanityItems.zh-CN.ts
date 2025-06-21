import type { Item } from "../../Interface.ts";

import MartianCostumeMaskImg from "../../../assets/icon/VanityItems/MartianCostume/Martian_Costume_Mask.webp"
import MartianCostumeShirtImg from "../../../assets/icon/VanityItems/MartianCostume/Martian_Costume_Shirt.webp"
import MartianCostumePantsImg from "../../../assets/icon/VanityItems/MartianCostume/Martian_Costume_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {MartianCostumeVanityItems} from "../data.Subcategory.zh-CN.ts";
export const MartianCostumeMask:Item={
    icon:MartianCostumeMaskImg,
    isCollection:false,
    id:2803,
    name: "火星装面具",
    Category:VanityItems,
    Subcategory:MartianCostumeVanityItems,
    comments:"火星入侵",
}
export const MartianCostumeShirt:Item={
    icon:MartianCostumeShirtImg,
    isCollection:false,
    id:2804,
    name: "火星装衣",
    Category:VanityItems,
    Subcategory:MartianCostumeVanityItems,
    comments:"火星入侵",
}
export const MartianCostumePants:Item={
    icon:MartianCostumePantsImg,
    isCollection:false,
    id:2805,
    name: "火星装裤",
    Category:VanityItems,
    Subcategory:MartianCostumeVanityItems,
    comments:"火星入侵",
}
export const MartianCostumeVanityItemsList =[
MartianCostumeMask,
MartianCostumeShirt,
MartianCostumePants]
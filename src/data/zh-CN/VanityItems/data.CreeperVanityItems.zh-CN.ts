import type { Item } from "../../Interface.ts";

import CreeperMaskImg from "../../../assets/icon/VanityItems/Creeper/Creeper_Mask.webp"
import CreeperShirtImg from "../../../assets/icon/VanityItems/Creeper/Creeper_Shirt.webp"
import CreeperPantsImg from "../../../assets/icon/VanityItems/Creeper/Creeper_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {CreeperVanityItems} from "../data.Subcategory.zh-CN.ts";
export const CreeperMask:Item={
    icon:CreeperMaskImg,
    isCollection:false,
    id:1746,
    name: "苦力怕面具",
    Category:VanityItems,
    Subcategory:CreeperVanityItems,
    comments:"礼袋",
}
export const CreeperShirt:Item={
    icon:CreeperShirtImg,
    isCollection:false,
    id:1747,
    name: "苦力怕衣",
    Category:VanityItems,
    Subcategory:CreeperVanityItems,
    comments:"礼袋",
}
export const CreeperPants:Item={
    icon:CreeperPantsImg,
    isCollection:false,
    id:1748,
    name: "苦力怕裤",
    Category:VanityItems,
    Subcategory:CreeperVanityItems,
    comments:"礼袋",
}
export const CreeperVanityItemsList =[
CreeperMask,
CreeperShirt,
CreeperPants]
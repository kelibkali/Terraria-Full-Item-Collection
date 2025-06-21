import type { Item } from "../../Interface.ts";

import WolfMaskImg from "../../../assets/icon/VanityItems/Wolf/Wolf_Mask.webp"
import WolfShirtImg from "../../../assets/icon/VanityItems/Wolf/Wolf_Shirt.webp"
import WolfPantsImg from "../../../assets/icon/VanityItems/Wolf/Wolf_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {WolfVanityItems} from "../data.Subcategory.zh-CN.ts";
export const WolfMask:Item={
    icon:WolfMaskImg,
    isCollection:false,
    id:1841,
    name: "狼面具",
    Category:VanityItems,
    Subcategory:WolfVanityItems,
    comments:"礼袋",
}
export const WolfShirt:Item={
    icon:WolfShirtImg,
    isCollection:false,
    id:1842,
    name: "狼衣",
    Category:VanityItems,
    Subcategory:WolfVanityItems,
    comments:"礼袋",
}
export const WolfPants:Item={
    icon:WolfPantsImg,
    isCollection:false,
    id:1843,
    name: "狼裤",
    Category:VanityItems,
    Subcategory:WolfVanityItems,
    comments:"礼袋",
}
export const WolfVanityItemsList =[
WolfMask,
WolfShirt,
WolfPants]
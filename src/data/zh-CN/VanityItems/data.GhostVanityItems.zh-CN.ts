import type { Item } from "../../Interface.ts";

import GhostMaskImg from "../../../assets/icon/VanityItems/Ghost/Ghost_Mask.webp"
import GhostShirtImg from "../../../assets/icon/VanityItems/Ghost/Ghost_Shirt.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {GhostVanityItems} from "../data.Subcategory.zh-CN.ts";
export const GhostMask:Item={
    icon:GhostMaskImg,
    isCollection:false,
    id:1752,
    name: "鬼魂面具",
    Category:VanityItems,
    Subcategory:GhostVanityItems,
    comments:"礼袋",
}
export const GhostShirt:Item={
    icon:GhostShirtImg,
    isCollection:false,
    id:1753,
    name: "鬼魂衣",
    Category:VanityItems,
    Subcategory:GhostVanityItems,
    comments:"礼袋",
}
export const GhostVanityItemsList =[
GhostMask,
GhostShirt]
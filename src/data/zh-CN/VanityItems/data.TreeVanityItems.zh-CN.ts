import type { Item } from "../../Interface.ts";

import TreeMaskImg from "../../../assets/icon/VanityItems/Tree/Tree_Mask.webp"
import TreeShirtImg from "../../../assets/icon/VanityItems/Tree/Tree_Shirt.webp"
import TreeTrunksImg from "../../../assets/icon/VanityItems/Tree/Tree_Trunks.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {TreeVanityItems} from "../data.Subcategory.zh-CN.ts";
export const TreeMask:Item={
    icon:TreeMaskImg,
    isCollection:false,
    id:1940,
    name: "树面具",
    Category:VanityItems,
    Subcategory:TreeVanityItems,
    comments:"礼物",
}
export const TreeShirt:Item={
    icon:TreeShirtImg,
    isCollection:false,
    id:1941,
    name: "树衣",
    Category:VanityItems,
    Subcategory:TreeVanityItems,
    comments:"礼物",
}
export const TreeTrunks:Item={
    icon:TreeTrunksImg,
    isCollection:false,
    id:1942,
    name: "树干",
    Category:VanityItems,
    Subcategory:TreeVanityItems,
    comments:"礼物",
}
export const TreeVanityItemsList =[
TreeMask,
TreeShirt,
TreeTrunks]
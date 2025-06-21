import type { Item } from "../../Interface.ts";

import PharaohsMaskImg from "../../../assets/icon/VanityItems/Pharaoh/Pharaohs_Mask.webp"
import PharaohsRobeImg from "../../../assets/icon/VanityItems/Pharaoh/Pharaohs_Robe.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {PharaohVanityItems} from "../data.Subcategory.zh-CN.ts";
export const PharaohsMask:Item={
    icon:PharaohsMaskImg,
    isCollection:false,
    id:848,
    name: "法老面具",
    Category:VanityItems,
    Subcategory:PharaohVanityItems,
    comments:"沙暴瓶 嬗变",
}
export const PharaohsRobe:Item={
    icon:PharaohsRobeImg,
    isCollection:false,
    id:866,
    name: "法老长袍",
    Category:VanityItems,
    Subcategory:PharaohVanityItems,
    comments:"飞毯 嬗变",
}
export const PharaohVanityItemsList =[
PharaohsMask,
PharaohsRobe]
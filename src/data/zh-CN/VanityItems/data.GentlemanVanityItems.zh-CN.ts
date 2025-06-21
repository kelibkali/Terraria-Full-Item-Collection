import type { Item } from "../../Interface.ts";

import GentlemansVestImg from "../../../assets/icon/VanityItems/Gentleman/Gentlemans_Vest.webp"
import GentlemansTrousersImg from "../../../assets/icon/VanityItems/Gentleman/Gentlemans_Trousers.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {GentlemanVanityItems} from "../data.Subcategory.zh-CN.ts";
export const GentlemansVest:Item={
    icon:GentlemansVestImg,
    isCollection:false,
    id:5102,
    name: "绅士马甲",
    Category:VanityItems,
    Subcategory:GentlemanVanityItems,
    comments:"丝绸",
}
export const GentlemansTrousers:Item={
    icon:GentlemansTrousersImg,
    isCollection:false,
    id:5103,
    name: "绅士裤子",
    Category:VanityItems,
    Subcategory:GentlemanVanityItems,
    comments:"丝绸",
}
export const GentlemanVanityItemsList =[
GentlemansVest,
GentlemansTrousers]
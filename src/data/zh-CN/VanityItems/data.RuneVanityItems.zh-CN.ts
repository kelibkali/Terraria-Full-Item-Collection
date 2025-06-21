import type { Item } from "../../Interface.ts";

import RuneHatImg from "../../../assets/icon/VanityItems/Rune/Rune_Hat.webp"
import RuneRobeImg from "../../../assets/icon/VanityItems/Rune/Rune_Robe.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {RuneVanityItems} from "../data.Subcategory.zh-CN.ts";
export const RuneHat:Item={
    icon:RuneHatImg,
    isCollection:false,
    id:754,
    name: "符文帽",
    Category:VanityItems,
    Subcategory:RuneVanityItems,
    comments:"符文巫师",
}
export const RuneRobe:Item={
    icon:RuneRobeImg,
    isCollection:false,
    id:755,
    name: "符文长袍",
    Category:VanityItems,
    Subcategory:RuneVanityItems,
    comments:"符文巫师",
}
export const RuneVanityItemsList =[
RuneHat,
RuneRobe]
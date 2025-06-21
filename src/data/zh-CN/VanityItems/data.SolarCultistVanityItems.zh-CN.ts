import type { Item } from "../../Interface.ts";

import SolarCultistHoodImg from "../../../assets/icon/VanityItems/SolarCultist/Solar_Cultist_Hood.webp"
import SolarCultistRobeImg from "../../../assets/icon/VanityItems/SolarCultist/Solar_Cultist_Robe.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {SolarCultistVanityItems} from "../data.Subcategory.zh-CN.ts";
export const SolarCultistHood:Item={
    icon:SolarCultistHoodImg,
    isCollection:false,
    id:2856,
    name: "日耀邪教徒兜帽",
    Category:VanityItems,
    Subcategory:SolarCultistVanityItems,
    comments:"教徒后 白天 服装商",
}
export const SolarCultistRobe:Item={
    icon:SolarCultistRobeImg,
    isCollection:false,
    id:2858,
    name: "日耀邪教徒长袍",
    Category:VanityItems,
    Subcategory:SolarCultistVanityItems,
    comments:"教徒后 白天 服装商",
}
export const SolarCultistVanityItemsList =[
SolarCultistHood,
SolarCultistRobe]
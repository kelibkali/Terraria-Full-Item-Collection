import type { Item } from "../../Interface.ts";

import LunarCultistHoodImg from "../../../assets/icon/VanityItems/LunarCultist/Lunar_Cultist_Hood.webp"
import LunarCultistRobeImg from "../../../assets/icon/VanityItems/LunarCultist/Lunar_Cultist_Robe.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {LunarCultistVanityItems} from "../data.Subcategory.zh-CN.ts";
export const LunarCultistHood:Item={
    icon:LunarCultistHoodImg,
    isCollection:false,
    id:2857,
    name: "月亮邪教徒兜帽",
    Category:VanityItems,
    Subcategory:LunarCultistVanityItems,
    comments:"教徒后 夜晚 服装商",
}
export const LunarCultistRobe:Item={
    icon:LunarCultistRobeImg,
    isCollection:false,
    id:2859,
    name: "月亮邪教徒长袍",
    Category:VanityItems,
    Subcategory:LunarCultistVanityItems,
    comments:"教徒后 夜晚 服装商",
}
export const LunarCultistVanityItemsList =[
LunarCultistHood,
LunarCultistRobe]
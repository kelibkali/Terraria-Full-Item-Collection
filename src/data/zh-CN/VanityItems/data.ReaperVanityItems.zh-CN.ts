import type { Item } from "../../Interface.ts";

import ReaperHoodImg from "../../../assets/icon/VanityItems/Reaper/Reaper_Hood.webp"
import ReaperRobeImg from "../../../assets/icon/VanityItems/Reaper/Reaper_Robe.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {ReaperVanityItems} from "../data.Subcategory.zh-CN.ts";
export const ReaperHood:Item={
    icon:ReaperHoodImg,
    isCollection:false,
    id:1819,
    name: "死神兜帽",
    Category:VanityItems,
    Subcategory:ReaperVanityItems,
    comments:"礼袋",
}
export const ReaperRobe:Item={
    icon:ReaperRobeImg,
    isCollection:false,
    id:1820,
    name: "死神长袍",
    Category:VanityItems,
    Subcategory:ReaperVanityItems,
    comments:"礼袋",
}
export const ReaperVanityItemsList =[
ReaperHood,
ReaperRobe]
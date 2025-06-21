import type { Item } from "../../Interface.ts";

import DyeTradersTurbanImg from "../../../assets/icon/VanityItems/DyeTrader/Dye_Traders_Turban.webp"
import DyeTraderRobeImg from "../../../assets/icon/VanityItems/DyeTrader/Dye_Trader_Robe.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {DyeTraderVanityItems} from "../data.Subcategory.zh-CN.ts";
export const DyeTradersTurban:Item={
    icon:DyeTradersTurbanImg,
    isCollection:false,
    id:3248,
    name: "染料商头巾",
    Category:VanityItems,
    Subcategory:DyeTraderVanityItems,
    comments:"万圣节 染料商",
}
export const DyeTraderRobe:Item={
    icon:DyeTraderRobeImg,
    isCollection:false,
    id:1741,
    name: "染料商长袍",
    Category:VanityItems,
    Subcategory:DyeTraderVanityItems,
    comments:"万圣节 染料商",
}
export const DyeTraderVanityItemsList =[
DyeTradersTurban,
DyeTraderRobe]
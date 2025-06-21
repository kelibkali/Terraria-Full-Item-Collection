import type { Item } from "../../Interface.ts";

import PrettyPinkDressImg from "../../../assets/icon/VanityItems/PrettyPink/Pretty_Pink_Dress.webp"
import PrettyPinkStockingsImg from "../../../assets/icon/VanityItems/PrettyPink/Pretty_Pink_Stockings.webp"
import PrettyPinkRibbonImg from "../../../assets/icon/VanityItems/PrettyPink/Pretty_Pink_Ribbon.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {PrettyPinkVanityItems} from "../data.Subcategory.zh-CN.ts";
export const PrettyPinkDress:Item={
    icon:PrettyPinkDressImg,
    isCollection:false,
    id:4664,
    name: "漂亮粉连衣裙",
    Category:VanityItems,
    Subcategory:PrettyPinkVanityItems,
    comments:"旅商",
}
export const PrettyPinkStockings:Item={
    icon:PrettyPinkStockingsImg,
    isCollection:false,
    id:4665,
    name: "漂亮粉长袜",
    Category:VanityItems,
    Subcategory:PrettyPinkVanityItems,
    comments:"旅商",
}
export const PrettyPinkRibbon:Item={
    icon:PrettyPinkRibbonImg,
    isCollection:false,
    id:4666,
    name: "漂亮粉丝带",
    Category:VanityItems,
    Subcategory:PrettyPinkVanityItems,
    comments:"旅商",
}
export const PrettyPinkVanityItemsList =[
PrettyPinkDress,
PrettyPinkStockings,
PrettyPinkRibbon]
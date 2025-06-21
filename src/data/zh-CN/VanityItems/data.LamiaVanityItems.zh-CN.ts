import type { Item } from "../../Interface.ts";

import LamiaTailImg from "../../../assets/icon/VanityItems/Lamia/Lamia_Tail.webp"
import LamiaWrapsImg from "../../../assets/icon/VanityItems/Lamia/Lamia_Wraps.webp"
import LamiaMaskImg from "../../../assets/icon/VanityItems/Lamia/Lamia_Mask.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {LamiaVanityItems} from "../data.Subcategory.zh-CN.ts";
export const LamiaTail:Item={
    icon:LamiaTailImg,
    isCollection:false,
    id:3784,
    name: "拉弥亚蛇尾裤",
    Category:VanityItems,
    Subcategory:LamiaVanityItems,
    comments:"拉弥亚",
}
export const LamiaWraps:Item={
    icon:LamiaWrapsImg,
    isCollection:false,
    id:3785,
    name: "拉弥亚披肩",
    Category:VanityItems,
    Subcategory:LamiaVanityItems,
    comments:"拉弥亚",
}
export const LamiaMask:Item={
    icon:LamiaMaskImg,
    isCollection:false,
    id:3786,
    name: "拉弥亚面具",
    Category:VanityItems,
    Subcategory:LamiaVanityItems,
    comments:"拉弥亚",
}
export const LamiaVanityItemsList =[
LamiaTail,
LamiaWraps,
LamiaMask]
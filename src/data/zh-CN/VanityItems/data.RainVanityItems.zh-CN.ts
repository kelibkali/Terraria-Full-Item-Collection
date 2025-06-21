import type { Item } from "../../Interface.ts";

import RainHatImg from "../../../assets/icon/VanityItems/Rain/Rain_Hat.webp"
import RainCoatImg from "../../../assets/icon/VanityItems/Rain/Rain_Coat.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {RainVanityItems} from "../data.Subcategory.zh-CN.ts";
export const RainHat:Item={
    icon:RainHatImg,
    isCollection:false,
    id:1135,
    name: "雨帽",
    Category:VanityItems,
    Subcategory:RainVanityItems,
    comments:"雨衣僵尸",
}
export const RainCoat:Item={
    icon:RainCoatImg,
    isCollection:false,
    id:1136,
    name: "雨衣",
    Category:VanityItems,
    Subcategory:RainVanityItems,
    comments:"雨衣僵尸",
}
export const RainVanityItemsList =[
RainHat,
RainCoat]
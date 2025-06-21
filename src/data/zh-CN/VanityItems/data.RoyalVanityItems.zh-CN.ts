import type { Item } from "../../Interface.ts";

import RoyalTiaraImg from "../../../assets/icon/VanityItems/Royal/Royal_Tiara.webp"
import RoyalBlouseImg from "../../../assets/icon/VanityItems/Royal/Royal_Blouse.webp"
import RoyalDressImg from "../../../assets/icon/VanityItems/Royal/Royal_Dress.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {RoyalVanityItems} from "../data.Subcategory.zh-CN.ts";
export const RoyalTiara:Item={
    icon:RoyalTiaraImg,
    isCollection:false,
    id:5071,
    name: "皇家头冠",
    Category:VanityItems,
    Subcategory:RoyalVanityItems,
    comments:"公主",
}
export const RoyalBlouse:Item={
    icon:RoyalBlouseImg,
    isCollection:false,
    id:5072,
    name: "皇家女衫",
    Category:VanityItems,
    Subcategory:RoyalVanityItems,
    comments:"公主",
}
export const RoyalDress:Item={
    icon:RoyalDressImg,
    isCollection:false,
    id:5073,
    name: "皇家礼服裙",
    Category:VanityItems,
    Subcategory:RoyalVanityItems,
    comments:"公主",
}
export const RoyalVanityItemsList =[
RoyalTiara,
RoyalBlouse,
RoyalDress]
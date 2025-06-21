import type { Item } from "../../Interface.ts";

import PrincessHatImg from "../../../assets/icon/VanityItems/PrincessB/Princess_Hat.webp"
import PrincessDressImg from "../../../assets/icon/VanityItems/PrincessB/Princess_Dress.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {PrincessBVanityItems} from "../data.Subcategory.zh-CN.ts";
export const PrincessHat:Item={
    icon:PrincessHatImg,
    isCollection:false,
    id:1772,
    name: "公主帽",
    Category:VanityItems,
    Subcategory:PrincessBVanityItems,
    comments:"礼袋",
}
export const PrincessDress:Item={
    icon:PrincessDressImg,
    isCollection:false,
    id:1773,
    name: "公主裙",
    Category:VanityItems,
    Subcategory:PrincessBVanityItems,
    comments:"礼袋",
}
export const PrincessBVanityItemsList =[
PrincessHat,
PrincessDress]
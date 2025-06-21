import type { Item } from "../../Interface.ts";

import TiaraImg from "../../../assets/icon/VanityItems/PrincessA/Tiara.webp"
import PrincessHatImg from "../../../assets/icon/VanityItems/PrincessB/Princess_Hat.webp"
import PrincessADressImg from "../../../assets/icon/VanityItems/PrincessA/Princess_Dress.webp"
import PrincessBDressImg from "../../../assets/icon/VanityItems/PrincessB/Princess_Dress.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {PrincessAVanityItems, PrincessBVanityItems} from "../data.Subcategory.zh-CN.ts";

export const Tiara:Item={
    icon:TiaraImg,
    isCollection:false,
    id:864,
    name: "头冠",
    Category:VanityItems,
    Subcategory:PrincessAVanityItems,
    comments:"肉后 新月 服装商",
}
export const PrincessDressA:Item={
    icon:PrincessADressImg,
    isCollection:false,
    id:865,
    name: "公主裙",
    Category:VanityItems,
    Subcategory:PrincessAVanityItems,
    comments:"肉后 新月 服装商",
}

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
    icon:PrincessBDressImg,
    isCollection:false,
    id:1773,
    name: "公主裙",
    Category:VanityItems,
    Subcategory:PrincessBVanityItems,
    comments:"礼袋",
}
export const PrincessVanityItemsList =[
Tiara,
PrincessDressA,
PrincessHat,
PrincessDress]
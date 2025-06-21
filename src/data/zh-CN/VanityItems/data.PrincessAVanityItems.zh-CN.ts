import type { Item } from "../../Interface.ts";

import TiaraImg from "../../../assets/icon/VanityItems/PrincessA/Tiara.webp"
import PrincessDressImg from "../../../assets/icon/VanityItems/PrincessA/Princess_Dress.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {PrincessAVanityItems} from "../data.Subcategory.zh-CN.ts";
export const Tiara:Item={
    icon:TiaraImg,
    isCollection:false,
    id:864,
    name: "头冠",
    Category:VanityItems,
    Subcategory:PrincessAVanityItems,
    comments:"肉后 新月 服装商",
}
export const PrincessDress:Item={
    icon:PrincessDressImg,
    isCollection:false,
    id:865,
    name: "公主裙",
    Category:VanityItems,
    Subcategory:PrincessAVanityItems,
    comments:"肉后 新月 服装商",
}
export const PrincessAVanityItemsList =[
Tiara,
PrincessDress]
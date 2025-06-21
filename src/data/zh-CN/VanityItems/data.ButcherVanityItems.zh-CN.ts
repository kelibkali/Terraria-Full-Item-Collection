import type { Item } from "../../Interface.ts";

import ButcherMaskImg from "../../../assets/icon/VanityItems/Butcher/Butcher_Mask.webp"
import ButchersBloodstainedApronImg from "../../../assets/icon/VanityItems/Butcher/Butchers_Bloodstained_Apron.webp"
import ButchersBloodstainedPantsImg from "../../../assets/icon/VanityItems/Butcher/Butchers_Bloodstained_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {ButcherVanityItems} from "../data.Subcategory.zh-CN.ts";
export const ButcherMask:Item={
    icon:ButcherMaskImg,
    isCollection:false,
    id:4740,
    name: "屠夫面具",
    Category:VanityItems,
    Subcategory:ButcherVanityItems,
    comments:"屠夫",
}
export const ButchersBloodstainedApron:Item={
    icon:ButchersBloodstainedApronImg,
    isCollection:false,
    id:4741,
    name: "屠夫的染血围裙",
    Category:VanityItems,
    Subcategory:ButcherVanityItems,
    comments:"屠夫",
}
export const ButchersBloodstainedPants:Item={
    icon:ButchersBloodstainedPantsImg,
    isCollection:false,
    id:4742,
    name: "屠夫的染血裤",
    Category:VanityItems,
    Subcategory:ButcherVanityItems,
    comments:"屠夫",
}
export const ButcherVanityItemsList =[
ButcherMask,
ButchersBloodstainedApron,
ButchersBloodstainedPants]
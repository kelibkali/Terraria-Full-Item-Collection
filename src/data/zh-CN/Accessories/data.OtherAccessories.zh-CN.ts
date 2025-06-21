import type { Item } from "../../Interface.ts";

import Guide_to_Plant_Fiber_CordageImg from "../../../assets/icon/Accessories/OtherAccessories/Guide_to_Plant_Fiber_Cordage.webp"
import Hand_WarmerImg from "../../../assets/icon/Accessories/OtherAccessories/Hand_Warmer.webp"

import { Accessories} from "../data.Category.zh-CN.ts";
import {OtherAccessories} from "../data.Subcategory.zh-CN.ts";

export const Guide_to_Plant_Fiber_Cordage:Item={
    icon:Guide_to_Plant_Fiber_CordageImg,
    isCollection:false,
    id:3068,
    name: "植物纤维绳索宝典",
    Category:Accessories,
    Subcategory:OtherAccessories,
    comments:'',
}

export const Hand_Warmer:Item={
    icon:Hand_WarmerImg,
    isCollection:false,
    id:1921,
    name: "暖手宝",
    Category:Accessories,
    Subcategory:OtherAccessories,
    comments:'',
}
export const OtherAccessoriesList =[
Guide_to_Plant_Fiber_Cordage,
Hand_Warmer]
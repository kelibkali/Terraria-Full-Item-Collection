import type { Item } from "../../Interface.ts";

import MaidBonnetImg from "../../../assets/icon/VanityItems/Maid/Maid_Bonnet.webp"
import MaidDressImg from "../../../assets/icon/VanityItems/Maid/Maid_Dress.webp"
import MaidShoesImg from "../../../assets/icon/VanityItems/Maid/Maid_Shoes.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {MaidVanityItems} from "../data.Subcategory.zh-CN.ts";
export const MaidBonnet:Item={
    icon:MaidBonnetImg,
    isCollection:false,
    id:4128,
    name: "女仆帽",
    Category:VanityItems,
    Subcategory:MaidVanityItems,
    comments:"黑线+丝绸",
}
export const MaidDress:Item={
    icon:MaidDressImg,
    isCollection:false,
    id:4129,
    name: "女仆裙",
    Category:VanityItems,
    Subcategory:MaidVanityItems,
    comments:"黑线+丝绸",
}
export const MaidShoes:Item={
    icon:MaidShoesImg,
    isCollection:false,
    id:4130,
    name: "女仆鞋",
    Category:VanityItems,
    Subcategory:MaidVanityItems,
    comments:"黑线+丝绸",
}
export const MaidVanityItemsList =[
MaidBonnet,
MaidDress,
MaidShoes]
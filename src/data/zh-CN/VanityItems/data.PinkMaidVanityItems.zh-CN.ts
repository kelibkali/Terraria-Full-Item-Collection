import type { Item } from "../../Interface.ts";

import PinkMaidBonnetImg from "../../../assets/icon/VanityItems/PinkMaid/Pink_Maid_Bonnet.webp"
import PinkMaidDressImg from "../../../assets/icon/VanityItems/PinkMaid/Pink_Maid_Dress.webp"
import PinkMaidShoesImg from "../../../assets/icon/VanityItems/PinkMaid/Pink_Maid_Shoes.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {PinkMaidVanityItems} from "../data.Subcategory.zh-CN.ts";
export const PinkMaidBonnet:Item={
    icon:PinkMaidBonnetImg,
    isCollection:false,
    id:4132,
    name: "粉女仆帽",
    Category:VanityItems,
    Subcategory:PinkMaidVanityItems,
    comments:"粉线+丝绸",
}
export const PinkMaidDress:Item={
    icon:PinkMaidDressImg,
    isCollection:false,
    id:4133,
    name: "粉女仆裙",
    Category:VanityItems,
    Subcategory:PinkMaidVanityItems,
    comments:"粉线+丝绸",
}
export const PinkMaidShoes:Item={
    icon:PinkMaidShoesImg,
    isCollection:false,
    id:4134,
    name: "粉女仆鞋",
    Category:VanityItems,
    Subcategory:PinkMaidVanityItems,
    comments:"粉线+丝绸",
}
export const PinkMaidVanityItemsList =[
PinkMaidBonnet,
PinkMaidDress,
PinkMaidShoes]
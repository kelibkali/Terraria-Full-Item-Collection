import type { Item } from "../../Interface.ts";

import MrsClausHatImg from "../../../assets/icon/VanityItems/MrsClaus/Mrs_Claus_Hat.webp"
import MrsClausShirtImg from "../../../assets/icon/VanityItems/MrsClaus/Mrs_Claus_Shirt.webp"
import MrsClausHeelsImg from "../../../assets/icon/VanityItems/MrsClaus/Mrs_Claus_Heels.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {MrsClausVanityItems} from "../data.Subcategory.zh-CN.ts";
export const MrsClausHat:Item={
    icon:MrsClausHatImg,
    isCollection:false,
    id:1932,
    name: "圣诞夫人帽",
    Category:VanityItems,
    Subcategory:MrsClausVanityItems,
    comments:"礼物",
}
export const MrsClausShirt:Item={
    icon:MrsClausShirtImg,
    isCollection:false,
    id:1933,
    name: "圣诞夫人衣",
    Category:VanityItems,
    Subcategory:MrsClausVanityItems,
    comments:"礼物",
}
export const MrsClausHeels:Item={
    icon:MrsClausHeelsImg,
    isCollection:false,
    id:1934,
    name: "圣诞夫人高跟鞋",
    Category:VanityItems,
    Subcategory:MrsClausVanityItems,
    comments:"礼物",
}
export const MrsClausVanityItemsList =[
MrsClausHat,
MrsClausShirt,
MrsClausHeels]
import type { Item } from "../../Interface.ts";

import ClownHatImg from "../../../assets/icon/VanityItems/Clown/Clown_Hat.webp"
import ClownShirtImg from "../../../assets/icon/VanityItems/Clown/Clown_Shirt.webp"
import ClownPantsImg from "../../../assets/icon/VanityItems/Clown/Clown_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {ClownVanityItems} from "../data.Subcategory.zh-CN.ts";
export const ClownHat:Item={
    icon:ClownHatImg,
    isCollection:false,
    id:503,
    name: "小丑帽",
    Category:VanityItems,
    Subcategory:ClownVanityItems,
    comments:"打败小丑后 服装商",
}
export const ClownShirt:Item={
    icon:ClownShirtImg,
    isCollection:false,
    id:504,
    name: "小丑衣",
    Category:VanityItems,
    Subcategory:ClownVanityItems,
    comments:"打败小丑后 服装商",
}
export const ClownPants:Item={
    icon:ClownPantsImg,
    isCollection:false,
    id:505,
    name: "小丑裤",
    Category:VanityItems,
    Subcategory:ClownVanityItems,
    comments:"打败小丑后 服装商",
}
export const ClownVanityItemsList =[
ClownHat,
ClownShirt,
ClownPants]
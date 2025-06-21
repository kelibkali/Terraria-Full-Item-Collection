import type { Item } from "../../Interface.ts";

import SteampunkHatImg from "../../../assets/icon/VanityItems/Steampunk/Steampunk_Hat.webp"
import SteampunkShirtImg from "../../../assets/icon/VanityItems/Steampunk/Steampunk_Shirt.webp"
import SteampunkPantsImg from "../../../assets/icon/VanityItems/Steampunk/Steampunk_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {SteampunkVanityItems} from "../data.Subcategory.zh-CN.ts";
export const SteampunkHat:Item={
    icon:SteampunkHatImg,
    isCollection:false,
    id:839,
    name: "蒸汽朋克帽",
    Category:VanityItems,
    Subcategory:SteampunkVanityItems,
    comments:"满月至残月 蒸汽朋克",
}
export const SteampunkShirt:Item={
    icon:SteampunkShirtImg,
    isCollection:false,
    id:840,
    name: "蒸汽朋克衣",
    Category:VanityItems,
    Subcategory:SteampunkVanityItems,
    comments:"满月至残月 蒸汽朋克",
}
export const SteampunkPants:Item={
    icon:SteampunkPantsImg,
    isCollection:false,
    id:841,
    name: "蒸汽朋克裤",
    Category:VanityItems,
    Subcategory:SteampunkVanityItems,
    comments:"满月至残月 蒸汽朋克",
}
export const SteampunkVanityItemsList =[
SteampunkHat,
SteampunkShirt,
SteampunkPants]
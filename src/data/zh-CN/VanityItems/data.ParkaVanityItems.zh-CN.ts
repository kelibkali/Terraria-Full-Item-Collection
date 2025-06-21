import type { Item } from "../../Interface.ts";

import ParkaHoodImg from "../../../assets/icon/VanityItems/Parka/Parka_Hood.webp"
import ParkaCoatImg from "../../../assets/icon/VanityItems/Parka/Parka_Coat.webp"
import ParkaPantsImg from "../../../assets/icon/VanityItems/Parka/Parka_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {ParkaVanityItems} from "../data.Subcategory.zh-CN.ts";
export const ParkaHood:Item={
    icon:ParkaHoodImg,
    isCollection:false,
    id:1935,
    name: "派克兜帽",
    Category:VanityItems,
    Subcategory:ParkaVanityItems,
    comments:"礼物",
}
export const ParkaCoat:Item={
    icon:ParkaCoatImg,
    isCollection:false,
    id:1936,
    name: "派克大衣",
    Category:VanityItems,
    Subcategory:ParkaVanityItems,
    comments:"礼物",
}
export const ParkaPants:Item={
    icon:ParkaPantsImg,
    isCollection:false,
    id:1937,
    name: "派克裤",
    Category:VanityItems,
    Subcategory:ParkaVanityItems,
    comments:"礼物",
}
export const ParkaVanityItemsList =[
ParkaHood,
ParkaCoat,
ParkaPants]
import type { Item } from "../../Interface.ts";

import CowboyHatImg from "../../../assets/icon/VanityItems/Cowboy/Cowboy_Hat.webp"
import CowboyJacketImg from "../../../assets/icon/VanityItems/Cowboy/Cowboy_Jacket.webp"
import CowboyPantsImg from "../../../assets/icon/VanityItems/Cowboy/Cowboy_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {CowboyVanityItems} from "../data.Subcategory.zh-CN.ts";
export const CowboyHat:Item={
    icon:CowboyHatImg,
    isCollection:false,
    id:873,
    name: "牛仔帽",
    Category:VanityItems,
    Subcategory:CowboyVanityItems,
    comments:"肉后 上弦月 服装商",
}
export const CowboyJacket:Item={
    icon:CowboyJacketImg,
    isCollection:false,
    id:874,
    name: "牛仔夹克",
    Category:VanityItems,
    Subcategory:CowboyVanityItems,
    comments:"肉后 上弦月 服装商",
}
export const CowboyPants:Item={
    icon:CowboyPantsImg,
    isCollection:false,
    id:875,
    name: "牛仔裤",
    Category:VanityItems,
    Subcategory:CowboyVanityItems,
    comments:"肉后 上弦月 服装商",
}
export const CowboyVanityItemsList =[
CowboyHat,
CowboyJacket,
CowboyPants]
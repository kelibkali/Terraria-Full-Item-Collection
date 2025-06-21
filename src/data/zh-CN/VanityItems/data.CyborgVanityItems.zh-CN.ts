import type { Item } from "../../Interface.ts";

import CyborgHelmetImg from "../../../assets/icon/VanityItems/Cyborg/Cyborg_Helmet.webp"
import CyborgShirtImg from "../../../assets/icon/VanityItems/Cyborg/Cyborg_Shirt.webp"
import CyborgPantsImg from "../../../assets/icon/VanityItems/Cyborg/Cyborg_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {CyborgVanityItems} from "../data.Subcategory.zh-CN.ts";
export const CyborgHelmet:Item={
    icon:CyborgHelmetImg,
    isCollection:false,
    id:1743,
    name: "机器侠头盔",
    Category:VanityItems,
    Subcategory:CyborgVanityItems,
    comments:"万圣节 机器侠",
}
export const CyborgShirt:Item={
    icon:CyborgShirtImg,
    isCollection:false,
    id:1744,
    name: "机器侠衣",
    Category:VanityItems,
    Subcategory:CyborgVanityItems,
    comments:"万圣节 机器侠",
}
export const CyborgPants:Item={
    icon:CyborgPantsImg,
    isCollection:false,
    id:1745,
    name: "机器侠裤",
    Category:VanityItems,
    Subcategory:CyborgVanityItems,
    comments:"万圣节 机器侠",
}
export const CyborgVanityItemsList =[
CyborgHelmet,
CyborgShirt,
CyborgPants]
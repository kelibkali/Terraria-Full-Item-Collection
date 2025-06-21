import type { Item } from "../../Interface.ts";

import KarateTortoiseMaskImg from "../../../assets/icon/VanityItems/KarateTortoise/Karate_Tortoise_Mask.webp"
import KarateTortoiseShirtImg from "../../../assets/icon/VanityItems/KarateTortoise/Karate_Tortoise_Shirt.webp"
import KarateTortoisePantsImg from "../../../assets/icon/VanityItems/KarateTortoise/Karate_Tortoise_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {KarateTortoiseVanityItems} from "../data.Subcategory.zh-CN.ts";
export const KarateTortoiseMask:Item={
    icon:KarateTortoiseMaskImg,
    isCollection:false,
    id:1779,
    name: "空手道陆龟面具",
    Category:VanityItems,
    Subcategory:KarateTortoiseVanityItems,
    comments:"礼袋",
}
export const KarateTortoiseShirt:Item={
    icon:KarateTortoiseShirtImg,
    isCollection:false,
    id:1780,
    name: "空手道陆龟衣",
    Category:VanityItems,
    Subcategory:KarateTortoiseVanityItems,
    comments:"礼袋",
}
export const KarateTortoisePants:Item={
    icon:KarateTortoisePantsImg,
    isCollection:false,
    id:1781,
    name: "空手道陆龟裤",
    Category:VanityItems,
    Subcategory:KarateTortoiseVanityItems,
    comments:"礼袋",
}
export const KarateTortoiseVanityItemsList =[
KarateTortoiseMask,
KarateTortoiseShirt,
KarateTortoisePants]
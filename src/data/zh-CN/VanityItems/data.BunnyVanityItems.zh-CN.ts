import type { Item } from "../../Interface.ts";

import BunnyEarsImg from "../../../assets/icon/VanityItems/Bunny/Bunny_Ears.webp"
import BunnyTailImg from "../../../assets/icon/VanityItems/Bunny/Bunny_Tail.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {BunnyVanityItems} from "../data.Subcategory.zh-CN.ts";
export const BunnyEars:Item={
    icon:BunnyEarsImg,
    isCollection:false,
    id:4560,
    name: "兔耳朵",
    Category:VanityItems,
    Subcategory:BunnyVanityItems,
    comments:"上弦月 动物学家",
}
export const BunnyTail:Item={
    icon:BunnyTailImg,
    isCollection:false,
    id:4775,
    name: "兔尾巴",
    Category:VanityItems,
    Subcategory:BunnyVanityItems,
    comments:"上弦月 动物学家",
}
export const BunnyVanityItemsList =[
BunnyEars,
BunnyTail]
import type { Item } from "../../Interface.ts";

import DogEarsImg from "../../../assets/icon/VanityItems/Dog/Dog_Ears.webp"
import DogTailImg from "../../../assets/icon/VanityItems/Dog/Dog_Tail.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {DogVanityItems} from "../data.Subcategory.zh-CN.ts";
export const DogEars:Item={
    icon:DogEarsImg,
    isCollection:false,
    id:4768,
    name: "狗耳朵",
    Category:VanityItems,
    Subcategory:DogVanityItems,
    comments:"满月 动物学家",
}
export const DogTail:Item={
    icon:DogTailImg,
    isCollection:false,
    id:4769,
    name: "狗尾巴",
    Category:VanityItems,
    Subcategory:DogVanityItems,
    comments:"满月 动物学家",
}
export const DogVanityItemsList =[
DogEars,
DogTail]
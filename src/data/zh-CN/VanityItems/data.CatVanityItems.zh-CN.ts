import type { Item } from "../../Interface.ts";

import CatMaskImg from "../../../assets/icon/VanityItems/Cat/Cat_Mask.webp"
import CatShirtImg from "../../../assets/icon/VanityItems/Cat/Cat_Shirt.webp"
import CatPantsImg from "../../../assets/icon/VanityItems/Cat/Cat_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {CatVanityItems} from "../data.Subcategory.zh-CN.ts";
export const CatMask:Item={
    icon:CatMaskImg,
    isCollection:false,
    id:1749,
    name: "猫咪面具",
    Category:VanityItems,
    Subcategory:CatVanityItems,
    comments:"礼袋",
}
export const CatShirt:Item={
    icon:CatShirtImg,
    isCollection:false,
    id:1750,
    name: "猫咪衣",
    Category:VanityItems,
    Subcategory:CatVanityItems,
    comments:"礼袋",
}
export const CatPants:Item={
    icon:CatPantsImg,
    isCollection:false,
    id:1751,
    name: "猫咪裤",
    Category:VanityItems,
    Subcategory:CatVanityItems,
    comments:"礼袋",
}
export const CatVanityItemsList =[
CatMask,
CatShirt,
CatPants]
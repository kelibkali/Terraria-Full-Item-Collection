import type { Item } from "../../Interface.ts";

import WhiteTuxedoShirtImg from "../../../assets/icon/VanityItems/WhiteTuxedo/White_Tuxedo_Shirt.webp"
import WhiteTuxedoPantsImg from "../../../assets/icon/VanityItems/WhiteTuxedo/White_Tuxedo_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {WhiteTuxedoVanityItems} from "../data.Subcategory.zh-CN.ts";
export const WhiteTuxedoShirt:Item={
    icon:WhiteTuxedoShirtImg,
    isCollection:false,
    id:1288,
    name: "白西装衣",
    Category:VanityItems,
    Subcategory:WhiteTuxedoVanityItems,
    comments:"满月 夜晚 服装商",
}
export const WhiteTuxedoPants:Item={
    icon:WhiteTuxedoPantsImg,
    isCollection:false,
    id:1289,
    name: "白西装裤",
    Category:VanityItems,
    Subcategory:WhiteTuxedoVanityItems,
    comments:"满月 夜晚 服装商",
}
export const WhiteTuxedoVanityItemsList =[
WhiteTuxedoShirt,
WhiteTuxedoPants]
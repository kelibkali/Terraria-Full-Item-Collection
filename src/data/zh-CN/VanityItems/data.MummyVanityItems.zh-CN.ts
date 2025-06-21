import type { Item } from "../../Interface.ts";

import MummyMaskImg from "../../../assets/icon/VanityItems/Mummy/Mummy_Mask.webp"
import MummyShirtImg from "../../../assets/icon/VanityItems/Mummy/Mummy_Shirt.webp"
import MummyPantsImg from "../../../assets/icon/VanityItems/Mummy/Mummy_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {MummyVanityItems} from "../data.Subcategory.zh-CN.ts";
export const MummyMask:Item={
    icon:MummyMaskImg,
    isCollection:false,
    id:870,
    name: "木乃伊面具",
    Category:VanityItems,
    Subcategory:MummyVanityItems,
    comments:"木乃伊",
}
export const MummyShirt:Item={
    icon:MummyShirtImg,
    isCollection:false,
    id:871,
    name: "木乃伊衣",
    Category:VanityItems,
    Subcategory:MummyVanityItems,
    comments:"木乃伊",
}
export const MummyPants:Item={
    icon:MummyPantsImg,
    isCollection:false,
    id:872,
    name: "木乃伊裤",
    Category:VanityItems,
    Subcategory:MummyVanityItems,
    comments:"木乃伊",
}
export const MummyVanityItemsList =[
MummyMask,
MummyShirt,
MummyPants]
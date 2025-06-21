import type { Item } from "../../Interface.ts";

import FloretProtectorHelmetImg from "../../../assets/icon/VanityItems/FloretProtector/Floret_Protector_Helmet.webp"
import FloretProtectorShirtImg from "../../../assets/icon/VanityItems/FloretProtector/Floret_Protector_Shirt.webp"
import FloretProtectorPantsImg from "../../../assets/icon/VanityItems/FloretProtector/Floret_Protector_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {FloretProtectorVanityItems} from "../data.Subcategory.zh-CN.ts";
export const FloretProtectorHelmet:Item={
    icon:FloretProtectorHelmetImg,
    isCollection:false,
    id:5054,
    name: "护花者头盔",
    Category:VanityItems,
    Subcategory:FloretProtectorVanityItems,
    comments:"丝绸+土块+玻璃+太阳花",
}
export const FloretProtectorShirt:Item={
    icon:FloretProtectorShirtImg,
    isCollection:false,
    id:5055,
    name: "护花者衬衫",
    Category:VanityItems,
    Subcategory:FloretProtectorVanityItems,
    comments:"丝绸+土块+玻璃+太阳花",
}
export const FloretProtectorPants:Item={
    icon:FloretProtectorPantsImg,
    isCollection:false,
    id:5056,
    name: "护花者裤子",
    Category:VanityItems,
    Subcategory:FloretProtectorVanityItems,
    comments:"丝绸+土块+玻璃+太阳花",
}
export const FloretProtectorVanityItemsList =[
FloretProtectorHelmet,
FloretProtectorShirt,
FloretProtectorPants]
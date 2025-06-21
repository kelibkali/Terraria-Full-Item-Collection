import type { Item } from "../../Interface.ts";

import LeprechaunHatImg from "../../../assets/icon/VanityItems/Leprechaun/Leprechaun_Hat.webp"
import LeprechaunShirtImg from "../../../assets/icon/VanityItems/Leprechaun/Leprechaun_Shirt.webp"
import LeprechaunPantsImg from "../../../assets/icon/VanityItems/Leprechaun/Leprechaun_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {LeprechaunVanityItems} from "../data.Subcategory.zh-CN.ts";
export const LeprechaunHat:Item={
    icon:LeprechaunHatImg,
    isCollection:false,
    id:1767,
    name: "矮妖帽",
    Category:VanityItems,
    Subcategory:LeprechaunVanityItems,
    comments:"礼袋",
}
export const LeprechaunShirt:Item={
    icon:LeprechaunShirtImg,
    isCollection:false,
    id:1768,
    name: "矮妖衣",
    Category:VanityItems,
    Subcategory:LeprechaunVanityItems,
    comments:"礼袋",
}
export const LeprechaunPants:Item={
    icon:LeprechaunPantsImg,
    isCollection:false,
    id:1769,
    name: "矮妖裤",
    Category:VanityItems,
    Subcategory:LeprechaunVanityItems,
    comments:"礼袋",
}
export const LeprechaunVanityItemsList =[
LeprechaunHat,
LeprechaunShirt,
LeprechaunPants]
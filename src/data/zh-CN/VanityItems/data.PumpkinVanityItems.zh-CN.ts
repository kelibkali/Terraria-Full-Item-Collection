import type { Item } from "../../Interface.ts";

import PumpkinMaskImg from "../../../assets/icon/VanityItems/Pumpkin/Pumpkin_Mask.webp"
import PumpkinShirtImg from "../../../assets/icon/VanityItems/Pumpkin/Pumpkin_Shirt.webp"
import PumpkinPantsImg from "../../../assets/icon/VanityItems/Pumpkin/Pumpkin_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {PumpkinVanityItems} from "../data.Subcategory.zh-CN.ts";
export const PumpkinMask:Item={
    icon:PumpkinMaskImg,
    isCollection:false,
    id:1754,
    name: "南瓜面具",
    Category:VanityItems,
    Subcategory:PumpkinVanityItems,
    comments:"礼袋",
}
export const PumpkinShirt:Item={
    icon:PumpkinShirtImg,
    isCollection:false,
    id:1755,
    name: "南瓜衣",
    Category:VanityItems,
    Subcategory:PumpkinVanityItems,
    comments:"礼袋",
}
export const PumpkinPants:Item={
    icon:PumpkinPantsImg,
    isCollection:false,
    id:1756,
    name: "南瓜裤",
    Category:VanityItems,
    Subcategory:PumpkinVanityItems,
    comments:"礼袋",
}
export const PumpkinVanityItemsList =[
PumpkinMask,
PumpkinShirt,
PumpkinPants]
import type { Item } from "../../Interface.ts";

import VampireMaskImg from "../../../assets/icon/VanityItems/Vampire/Vampire_Mask.webp"
import VampireShirtImg from "../../../assets/icon/VanityItems/Vampire/Vampire_Shirt.webp"
import VampirePantsImg from "../../../assets/icon/VanityItems/Vampire/Vampire_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {VampireVanityItems} from "../data.Subcategory.zh-CN.ts";
export const VampireMask:Item={
    icon:VampireMaskImg,
    isCollection:false,
    id:1763,
    name: "吸血鬼面具",
    Category:VanityItems,
    Subcategory:VampireVanityItems,
    comments:"礼袋",
}
export const VampireShirt:Item={
    icon:VampireShirtImg,
    isCollection:false,
    id:1764,
    name: "吸血鬼衣",
    Category:VanityItems,
    Subcategory:VampireVanityItems,
    comments:"礼袋",
}
export const VampirePants:Item={
    icon:VampirePantsImg,
    isCollection:false,
    id:1765,
    name: "吸血鬼裤",
    Category:VanityItems,
    Subcategory:VampireVanityItems,
    comments:"礼袋",
}
export const VampireVanityItemsList =[
VampireMask,
VampireShirt,
VampirePants]
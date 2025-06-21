import type { Item } from "../../Interface.ts";

import PixieShirtImg from "../../../assets/icon/VanityItems/Pixie/Pixie_Shirt.webp"
import PixiePantsImg from "../../../assets/icon/VanityItems/Pixie/Pixie_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {PixieVanityItems} from "../data.Subcategory.zh-CN.ts";
export const PixieShirt:Item={
    icon:PixieShirtImg,
    isCollection:false,
    id:1770,
    name: "妖精衣",
    Category:VanityItems,
    Subcategory:PixieVanityItems,
    comments:"礼袋",
}
export const PixiePants:Item={
    icon:PixiePantsImg,
    isCollection:false,
    id:1771,
    name: "妖精裤",
    Category:VanityItems,
    Subcategory:PixieVanityItems,
    comments:"礼袋",
}
export const PixieVanityItemsList =[
PixieShirt,
PixiePants]
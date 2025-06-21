import type { Item } from "../../Interface.ts";

import UnicornMaskImg from "../../../assets/icon/VanityItems/Unicorn/Unicorn_Mask.webp"
import UnicornShirtImg from "../../../assets/icon/VanityItems/Unicorn/Unicorn_Shirt.webp"
import UnicornPantsImg from "../../../assets/icon/VanityItems/Unicorn/Unicorn_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {UnicornVanityItems} from "../data.Subcategory.zh-CN.ts";
export const UnicornMask:Item={
    icon:UnicornMaskImg,
    isCollection:false,
    id:1760,
    name: "独角兽面具",
    Category:VanityItems,
    Subcategory:UnicornVanityItems,
    comments:"礼袋",
}
export const UnicornShirt:Item={
    icon:UnicornShirtImg,
    isCollection:false,
    id:1761,
    name: "独角兽衣",
    Category:VanityItems,
    Subcategory:UnicornVanityItems,
    comments:"礼袋",
}
export const UnicornPants:Item={
    icon:UnicornPantsImg,
    isCollection:false,
    id:1762,
    name: "独角兽裤",
    Category:VanityItems,
    Subcategory:UnicornVanityItems,
    comments:"礼袋",
}
export const UnicornVanityItemsList =[
UnicornMask,
UnicornShirt,
UnicornPants]
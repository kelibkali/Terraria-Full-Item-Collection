import type { Item } from "../../Interface.ts";

import ScarecrowHatImg from "../../../assets/icon/VanityItems/Scarecrow/Scarecrow_Hat.webp"
import ScarecrowShirtImg from "../../../assets/icon/VanityItems/Scarecrow/Scarecrow_Shirt.webp"
import ScarecrowPantsImg from "../../../assets/icon/VanityItems/Scarecrow/Scarecrow_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {ScarecrowVanityItems} from "../data.Subcategory.zh-CN.ts";
export const ScarecrowHat:Item={
    icon:ScarecrowHatImg,
    isCollection:false,
    id:1788,
    name: "稻草人帽",
    Category:VanityItems,
    Subcategory:ScarecrowVanityItems,
    comments:"南瓜月 稻草人",
}
export const ScarecrowShirt:Item={
    icon:ScarecrowShirtImg,
    isCollection:false,
    id:1789,
    name: "稻草人衣",
    Category:VanityItems,
    Subcategory:ScarecrowVanityItems,
    comments:"南瓜月 稻草人",
}
export const ScarecrowPants:Item={
    icon:ScarecrowPantsImg,
    isCollection:false,
    id:1790,
    name: "稻草人裤",
    Category:VanityItems,
    Subcategory:ScarecrowVanityItems,
    comments:"南瓜月 稻草人",
}
export const ScarecrowVanityItemsList =[
ScarecrowHat,
ScarecrowShirt,
ScarecrowPants]
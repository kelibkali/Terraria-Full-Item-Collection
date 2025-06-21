import type { Item } from "../../Interface.ts";

import StarPrincessCrownImg from "../../../assets/icon/VanityItems/StarPrincess/Star_Princess_Crown.webp"
import StarPrincessDressImg from "../../../assets/icon/VanityItems/StarPrincess/Star_Princess_Dress.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {StarPrincessVanityItems} from "../data.Subcategory.zh-CN.ts";
export const StarPrincessCrown:Item={
    icon:StarPrincessCrownImg,
    isCollection:false,
    id:4323,
    name: "星星公主王冠",
    Category:VanityItems,
    Subcategory:StarPrincessVanityItems,
    comments:"旅商",
}
export const StarPrincessDress:Item={
    icon:StarPrincessDressImg,
    isCollection:false,
    id:4324,
    name: "星星公主裙",
    Category:VanityItems,
    Subcategory:StarPrincessVanityItems,
    comments:"旅商",
}
export const StarPrincessVanityItemsList =[
StarPrincessCrown,
StarPrincessDress]
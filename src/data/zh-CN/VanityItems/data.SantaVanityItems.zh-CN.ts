import type { Item } from "../../Interface.ts";

import SantaHatImg from "../../../assets/icon/VanityItems/Santa/Santa_Hat.webp"
import SantaShirtImg from "../../../assets/icon/VanityItems/Santa/Santa_Shirt.webp"
import SantaPantsImg from "../../../assets/icon/VanityItems/Santa/Santa_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {SantaVanityItems} from "../data.Subcategory.zh-CN.ts";
export const SantaHat:Item={
    icon:SantaHatImg,
    isCollection:false,
    id:588,
    name: "圣诞帽",
    Category:VanityItems,
    Subcategory:SantaVanityItems,
    comments:"击败雪人军团 圣诞老人",
}
export const SantaShirt:Item={
    icon:SantaShirtImg,
    isCollection:false,
    id:589,
    name: "圣诞衣",
    Category:VanityItems,
    Subcategory:SantaVanityItems,
    comments:"击败雪人军团 圣诞老人",
}
export const SantaPants:Item={
    icon:SantaPantsImg,
    isCollection:false,
    id:590,
    name: "圣诞裤",
    Category:VanityItems,
    Subcategory:SantaVanityItems,
    comments:"击败雪人军团 圣诞老人",
}
export const SantaVanityItemsList =[
SantaHat,
SantaShirt,
SantaPants]
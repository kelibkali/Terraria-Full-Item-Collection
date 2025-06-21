import type { Item } from "../../Interface.ts";

import HerosHatImg from "../../../assets/icon/VanityItems/Hero/Heros_Hat.webp"
import HerosShirtImg from "../../../assets/icon/VanityItems/Hero/Heros_Shirt.webp"
import HerosPantsImg from "../../../assets/icon/VanityItems/Hero/Heros_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {HeroVanityItems} from "../data.Subcategory.zh-CN.ts";
export const HerosHat:Item={
    icon:HerosHatImg,
    isCollection:false,
    id:247,
    name: "英雄帽",
    Category:VanityItems,
    Subcategory:HeroVanityItems,
    comments:"绿线",
}
export const HerosShirt:Item={
    icon:HerosShirtImg,
    isCollection:false,
    id:248,
    name: "英雄衣",
    Category:VanityItems,
    Subcategory:HeroVanityItems,
    comments:"绿线",
}
export const HerosPants:Item={
    icon:HerosPantsImg,
    isCollection:false,
    id:249,
    name: "英雄裤",
    Category:VanityItems,
    Subcategory:HeroVanityItems,
    comments:"绿线",
}
export const HeroVanityItemsList =[
HerosHat,
HerosShirt,
HerosPants]
import type { Item } from "../../Interface.ts";

import SillySunflowerPetalsImg from "../../../assets/icon/VanityItems/SillySunflower/Silly_Sunflower_Petals.webp"
import SillySunflowerTopsImg from "../../../assets/icon/VanityItems/SillySunflower/Silly_Sunflower_Tops.webp"
import SillySunflowerBottomsImg from "../../../assets/icon/VanityItems/SillySunflower/Silly_Sunflower_Bottoms.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {SillySunflowerVanityItems} from "../data.Subcategory.zh-CN.ts";
export const SillySunflowerPetals:Item={
    icon:SillySunflowerPetalsImg,
    isCollection:false,
    id:3733,
    name: "呆萌向日葵花瓣头盔",
    Category:VanityItems,
    Subcategory:SillySunflowerVanityItems,
    comments:"派对 服装商",
}
export const SillySunflowerTops:Item={
    icon:SillySunflowerTopsImg,
    isCollection:false,
    id:3734,
    name: "呆萌向日葵上衣",
    Category:VanityItems,
    Subcategory:SillySunflowerVanityItems,
    comments:"派对 服装商",
}
export const SillySunflowerBottoms:Item={
    icon:SillySunflowerBottomsImg,
    isCollection:false,
    id:3735,
    name: "呆萌向日葵裤装",
    Category:VanityItems,
    Subcategory:SillySunflowerVanityItems,
    comments:"派对 服装商",
}
export const SillySunflowerVanityItemsList =[
SillySunflowerPetals,
SillySunflowerTops,
SillySunflowerBottoms]
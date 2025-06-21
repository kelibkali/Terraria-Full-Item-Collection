import type { Item } from "../../Interface.ts";

import ChefHatImg from "../../../assets/icon/VanityItems/Chef/Chef_Hat.webp"
import ChefUniformImg from "../../../assets/icon/VanityItems/Chef/Chef_Uniform.webp"
import ChefPantsImg from "../../../assets/icon/VanityItems/Chef/Chef_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {ChefVanityItems} from "../data.Subcategory.zh-CN.ts";
export const ChefHat:Item={
    icon:ChefHatImg,
    isCollection:false,
    id:4555,
    name: "厨师帽",
    Category:VanityItems,
    Subcategory:ChefVanityItems,
    comments:"旅商",
}
export const ChefUniform:Item={
    icon:ChefUniformImg,
    isCollection:false,
    id:4556,
    name: "厨师服",
    Category:VanityItems,
    Subcategory:ChefVanityItems,
    comments:"旅商",
}
export const ChefPants:Item={
    icon:ChefPantsImg,
    isCollection:false,
    id:4557,
    name: "厨师裤",
    Category:VanityItems,
    Subcategory:ChefVanityItems,
    comments:"旅商",
}
export const ChefVanityItemsList =[
ChefHat,
ChefUniform,
ChefPants]
import type { Item } from "../../Interface.ts";

import FirestartersSweaterImg from "../../../assets/icon/VanityItems/Firestarter/Firestarters_Sweater.webp"
import FirestartersSkirtImg from "../../../assets/icon/VanityItems/Firestarter/Firestarters_Skirt.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {FirestarterVanityItems} from "../data.Subcategory.zh-CN.ts";
export const FirestartersSweater:Item={
    icon:FirestartersSweaterImg,
    isCollection:false,
    id:5115,
    name: "纵火者毛衣",
    Category:VanityItems,
    Subcategory:FirestarterVanityItems,
    comments:"丝绸",
}
export const FirestartersSkirt:Item={
    icon:FirestartersSkirtImg,
    isCollection:false,
    id:5116,
    name: "纵火者裙",
    Category:VanityItems,
    Subcategory:FirestarterVanityItems,
    comments:"丝绸",
}
export const FirestarterVanityItemsList =[
FirestartersSweater,
FirestartersSkirt]
import type { Item } from "../../Interface.ts";

import RedsWingsImg from "../../../assets/icon/Developers/Red/Reds_Wings.webp"
import RedsHelmetImg from "../../../assets/icon/Developers/Red/Reds_Helmet.webp"
import RedsBreastplateImg from "../../../assets/icon/Developers/Red/Reds_Breastplate.webp"
import RedsLeggingsImg from "../../../assets/icon/Developers/Red/Reds_Leggings.webp"

import { Developers} from "../data.Category.zh-CN.ts";
import {RedDevelopers} from "../data.Subcategory.zh-CN.ts";
export const RedsWings:Item={
    icon:RedsWingsImg,
    isCollection:false,
    id:665,
    name: "Red的翅膀",
    Category:Developers,
    Subcategory:RedDevelopers,
    comments:"",
}
export const RedsHelmet:Item={
    icon:RedsHelmetImg,
    isCollection:false,
    id:666,
    name: "Red的头盔",
    Category:Developers,
    Subcategory:RedDevelopers,
    comments:"",
}
export const RedsBreastplate:Item={
    icon:RedsBreastplateImg,
    isCollection:false,
    id:667,
    name: "Red的胸甲",
    Category:Developers,
    Subcategory:RedDevelopers,
    comments:"",
}
export const RedsLeggings:Item={
    icon:RedsLeggingsImg,
    isCollection:false,
    id:668,
    name: "Red的护腿",
    Category:Developers,
    Subcategory:RedDevelopers,
    comments:"",
}
export const RedDevelopersList =[
RedsWings,
RedsHelmet,
RedsBreastplate,
RedsLeggings]
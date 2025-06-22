import type { Item } from "../../Interface.ts";

import DTownsHelmetImg from "../../../assets/icon/Developers/DTown/D-Towns_Helmet.webp"
import DTownsBreastplateImg from "../../../assets/icon/Developers/DTown/D-Towns_Breastplate.webp"
import DTownsLeggingsImg from "../../../assets/icon/Developers/DTown/D-Towns_Leggings.webp"
import DTownsWingsImg from "../../../assets/icon/Developers/DTown/D-Towns_Wings.webp"

import { Developers} from "../data.Category.zh-CN.ts";
import {DTownDevelopers} from "../data.Subcategory.zh-CN.ts";
export const DTownsHelmet:Item={
    icon:DTownsHelmetImg,
    isCollection:false,
    id:1580,
    name: "D-Town的头盔",
    Category:Developers,
    Subcategory:DTownDevelopers,
    comments:"",
}
export const DTownsBreastplate:Item={
    icon:DTownsBreastplateImg,
    isCollection:false,
    id:1581,
    name: "D-Town的胸甲",
    Category:Developers,
    Subcategory:DTownDevelopers,
    comments:"",
}
export const DTownsLeggings:Item={
    icon:DTownsLeggingsImg,
    isCollection:false,
    id:1582,
    name: "D-Town的护腿",
    Category:Developers,
    Subcategory:DTownDevelopers,
    comments:"",
}
export const DTownsWings:Item={
    icon:DTownsWingsImg,
    isCollection:false,
    id:1583,
    name: "D-Town的翅膀",
    Category:Developers,
    Subcategory:DTownDevelopers,
    comments:"",
}
export const DTownDevelopersList =[
DTownsHelmet,
DTownsBreastplate,
DTownsLeggings,
DTownsWings]
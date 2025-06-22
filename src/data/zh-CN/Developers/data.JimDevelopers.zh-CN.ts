import type { Item } from "../../Interface.ts";

import JimsHelmetImg from "../../../assets/icon/Developers/Jim/Jims_Helmet.webp"
import JimsBreastplateImg from "../../../assets/icon/Developers/Jim/Jims_Breastplate.webp"
import JimsLeggingsImg from "../../../assets/icon/Developers/Jim/Jims_Leggings.webp"
import JimsWingsImg from "../../../assets/icon/Developers/Jim/Jims_Wings.webp"

import { Developers} from "../data.Category.zh-CN.ts";
import {JimDevelopers} from "../data.Subcategory.zh-CN.ts";
export const JimsHelmet:Item={
    icon:JimsHelmetImg,
    isCollection:false,
    id:1563,
    name: "Jim的头盔",
    Category:Developers,
    Subcategory:JimDevelopers,
    comments:"",
}
export const JimsBreastplate:Item={
    icon:JimsBreastplateImg,
    isCollection:false,
    id:1564,
    name: "Jim的胸甲",
    Category:Developers,
    Subcategory:JimDevelopers,
    comments:"",
}
export const JimsLeggings:Item={
    icon:JimsLeggingsImg,
    isCollection:false,
    id:1565,
    name: "Jim的护腿",
    Category:Developers,
    Subcategory:JimDevelopers,
    comments:"",
}
export const JimsWings:Item={
    icon:JimsWingsImg,
    isCollection:false,
    id:3582,
    name: "Jim的翅膀",
    Category:Developers,
    Subcategory:JimDevelopers,
    comments:"",
}
export const JimDevelopersList =[
JimsHelmet,
JimsBreastplate,
JimsLeggings,
JimsWings]
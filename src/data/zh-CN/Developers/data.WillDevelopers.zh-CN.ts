import type { Item } from "../../Interface.ts";

import WillsWingsImg from "../../../assets/icon/Developers/Will/Wills_Wings.webp"
import WillsHelmetImg from "../../../assets/icon/Developers/Will/Wills_Helmet.webp"
import WillsBreastplateImg from "../../../assets/icon/Developers/Will/Wills_Breastplate.webp"
import WillsLeggingsImg from "../../../assets/icon/Developers/Will/Wills_Leggings.webp"

import { Developers} from "../data.Category.zh-CN.ts";
import {WillDevelopers} from "../data.Subcategory.zh-CN.ts";
export const WillsWings:Item={
    icon:WillsWingsImg,
    isCollection:false,
    id:1584,
    name: "Will的翅膀",
    Category:Developers,
    Subcategory:WillDevelopers,
    comments:"",
}
export const WillsHelmet:Item={
    icon:WillsHelmetImg,
    isCollection:false,
    id:1560,
    name: "Will的头盔",
    Category:Developers,
    Subcategory:WillDevelopers,
    comments:"",
}
export const WillsBreastplate:Item={
    icon:WillsBreastplateImg,
    isCollection:false,
    id:1561,
    name: "Will的胸甲",
    Category:Developers,
    Subcategory:WillDevelopers,
    comments:"",
}
export const WillsLeggings:Item={
    icon:WillsLeggingsImg,
    isCollection:false,
    id:1562,
    name: "Will的护腿",
    Category:Developers,
    Subcategory:WillDevelopers,
    comments:"",
}
export const WillDevelopersList =[
WillsWings,
WillsHelmet,
WillsBreastplate,
WillsLeggings]
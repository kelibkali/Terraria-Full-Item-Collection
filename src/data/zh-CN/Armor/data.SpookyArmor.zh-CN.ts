import type { Item } from "../../Interface.ts";

import Spooky_HelmetImg from "../../../assets/icon/Armor/SpookyArmor/Spooky_Helmet.webp"
import Spooky_BreastplateImg from "../../../assets/icon/Armor/SpookyArmor/Spooky_Breastplate.webp"
import Spooky_LeggingsImg from "../../../assets/icon/Armor/SpookyArmor/Spooky_Leggings.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {SpookyArmor} from "../data.Subcategory.zh-CN.ts";
export const Spooky_Helmet:Item={
    icon:Spooky_HelmetImg,
    isCollection:false,
    id:1832,
    name: "阴森头盔",
    Category:Armor,
    Subcategory:SpookyArmor,
    comments:'',
}
export const Spooky_Breastplate:Item={
    icon:Spooky_BreastplateImg,
    isCollection:false,
    id:1833,
    name: "阴森胸甲",
    Category:Armor,
    Subcategory:SpookyArmor,
    comments:'',
}
export const Spooky_Leggings:Item={
    icon:Spooky_LeggingsImg,
    isCollection:false,
    id:1834,
    name: "阴森护腿",
    Category:Armor,
    Subcategory:SpookyArmor,
    comments:'',
}
export const SpookyArmorList =[
Spooky_Helmet,
Spooky_Breastplate,
Spooky_Leggings]
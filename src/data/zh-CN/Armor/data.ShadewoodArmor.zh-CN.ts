import type { Item } from "../../Interface.ts";

import Shadewood_HelmetImg from "../../../assets/icon/Armor/ShadewoodArmor/Shadewood_Helmet.webp"
import Shadewood_BreastplateImg from "../../../assets/icon/Armor/ShadewoodArmor/Shadewood_Breastplate.webp"
import Shadewood_GreavesImg from "../../../assets/icon/Armor/ShadewoodArmor/Shadewood_Greaves.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {ShadewoodArmor} from "../data.Subcategory.zh-CN.ts";
export const Shadewood_Helmet:Item={
    icon:Shadewood_HelmetImg,
    isCollection:false,
    id:924,
    name: "暗影木头盔",
    Category:Armor,
    Subcategory:ShadewoodArmor,
    comments:'',
}
export const Shadewood_Breastplate:Item={
    icon:Shadewood_BreastplateImg,
    isCollection:false,
    id:925,
    name: "暗影木胸甲",
    Category:Armor,
    Subcategory:ShadewoodArmor,
    comments:'',
}
export const Shadewood_Greaves:Item={
    icon:Shadewood_GreavesImg,
    isCollection:false,
    id:926,
    name: "暗影木护胫",
    Category:Armor,
    Subcategory:ShadewoodArmor,
    comments:'',
}
export const ShadewoodArmorList =[
Shadewood_Helmet,
Shadewood_Breastplate,
Shadewood_Greaves]
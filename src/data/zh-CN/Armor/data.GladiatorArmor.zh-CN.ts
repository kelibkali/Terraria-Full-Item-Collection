import type { Item } from "../../Interface.ts";

import Gladiator_HelmetImg from "../../../assets/icon/Armor/GladiatorArmor/Gladiator_Helmet.webp"
import Gladiator_BreastplateImg from "../../../assets/icon/Armor/GladiatorArmor/Gladiator_Breastplate.webp"
import Gladiator_LeggingsImg from "../../../assets/icon/Armor/GladiatorArmor/Gladiator_Leggings.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {GladiatorArmor} from "../data.Subcategory.zh-CN.ts";
export const Gladiator_Helmet:Item={
    icon:Gladiator_HelmetImg,
    isCollection:false,
    id:3187,
    name: "角斗士头盔",
    Category:Armor,
    Subcategory:GladiatorArmor,
    comments:'',
}
export const Gladiator_Breastplate:Item={
    icon:Gladiator_BreastplateImg,
    isCollection:false,
    id:3188,
    name: "角斗士胸甲",
    Category:Armor,
    Subcategory:GladiatorArmor,
    comments:'',
}
export const Gladiator_Leggings:Item={
    icon:Gladiator_LeggingsImg,
    isCollection:false,
    id:3189,
    name: "角斗士护腿",
    Category:Armor,
    Subcategory:GladiatorArmor,
    comments:'',
}
export const GladiatorArmorList =[
Gladiator_Helmet,
Gladiator_Breastplate,
Gladiator_Leggings]
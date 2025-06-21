import type { Item } from "../../Interface.ts";

import Frost_HelmetImg from "../../../assets/icon/Armor/FrostArmor/Frost_Helmet.webp"
import Frost_BreastplateImg from "../../../assets/icon/Armor/FrostArmor/Frost_Breastplate.webp"
import Frost_LeggingsImg from "../../../assets/icon/Armor/FrostArmor/Frost_Leggings.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {FrostArmor} from "../data.Subcategory.zh-CN.ts";
export const Frost_Helmet:Item={
    icon:Frost_HelmetImg,
    isCollection:false,
    id:684,
    name: "寒霜头盔",
    Category:Armor,
    Subcategory:FrostArmor,
    comments:'',
}
export const Frost_Breastplate:Item={
    icon:Frost_BreastplateImg,
    isCollection:false,
    id:685,
    name: "寒霜胸甲",
    Category:Armor,
    Subcategory:FrostArmor,
    comments:'',
}
export const Frost_Leggings:Item={
    icon:Frost_LeggingsImg,
    isCollection:false,
    id:686,
    name: "寒霜护腿",
    Category:Armor,
    Subcategory:FrostArmor,
    comments:'',
}
export const FrostArmorList =[
Frost_Helmet,
Frost_Breastplate,
Frost_Leggings]
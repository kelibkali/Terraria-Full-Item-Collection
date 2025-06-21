import type { Item } from "../../Interface.ts";

import Shinobi_Infiltrators_HelmetImg from "../../../assets/icon/Armor/ShinobiInfiltratorsArmor/Shinobi_Infiltrators_Helmet.webp"
import Shinobi_Infiltrators_TorsoImg from "../../../assets/icon/Armor/ShinobiInfiltratorsArmor/Shinobi_Infiltrators_Torso.webp"
import Shinobi_Infiltrators_PantsImg from "../../../assets/icon/Armor/ShinobiInfiltratorsArmor/Shinobi_Infiltrators_Pants.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {ShinobiInfiltratorsArmor} from "../data.Subcategory.zh-CN.ts";
export const Shinobi_Infiltrators_Helmet:Item={
    icon:Shinobi_Infiltrators_HelmetImg,
    isCollection:false,
    id:3880,
    name: "渗透忍者头盔",
    Category:Armor,
    Subcategory:ShinobiInfiltratorsArmor,
    comments:'',
}
export const Shinobi_Infiltrators_Torso:Item={
    icon:Shinobi_Infiltrators_TorsoImg,
    isCollection:false,
    id:3881,
    name: "渗透忍者上衣",
    Category:Armor,
    Subcategory:ShinobiInfiltratorsArmor,
    comments:'',
}
export const Shinobi_Infiltrators_Pants:Item={
    icon:Shinobi_Infiltrators_PantsImg,
    isCollection:false,
    id:3882,
    name: "渗透忍者裤装",
    Category:Armor,
    Subcategory:ShinobiInfiltratorsArmor,
    comments:'',
}
export const ShinobiInfiltratorsArmorList =[
Shinobi_Infiltrators_Helmet,
Shinobi_Infiltrators_Torso,
Shinobi_Infiltrators_Pants]
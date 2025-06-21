import type { Item } from "../../Interface.ts";

import Valhalla_Knights_HelmImg from "../../../assets/icon/Armor/ValhallaKnightsArmor/Valhalla_Knights_Helm.webp"
import Valhalla_Knights_BreastplateImg from "../../../assets/icon/Armor/ValhallaKnightsArmor/Valhalla_Knights_Breastplate.webp"
import Valhalla_Knights_GreavesImg from "../../../assets/icon/Armor/ValhallaKnightsArmor/Valhalla_Knights_Greaves.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {ValhallaKnightsArmor} from "../data.Subcategory.zh-CN.ts";
export const Valhalla_Knights_Helm:Item={
    icon:Valhalla_Knights_HelmImg,
    isCollection:false,
    id:3871,
    name: "英灵殿骑士头盔",
    Category:Armor,
    Subcategory:ValhallaKnightsArmor,
    comments:'',
}
export const Valhalla_Knights_Breastplate:Item={
    icon:Valhalla_Knights_BreastplateImg,
    isCollection:false,
    id:3872,
    name: "英灵殿骑士胸甲",
    Category:Armor,
    Subcategory:ValhallaKnightsArmor,
    comments:'',
}
export const Valhalla_Knights_Greaves:Item={
    icon:Valhalla_Knights_GreavesImg,
    isCollection:false,
    id:3873,
    name: "英灵殿骑士护胫",
    Category:Armor,
    Subcategory:ValhallaKnightsArmor,
    comments:'',
}
export const ValhallaKnightsArmorList =[
Valhalla_Knights_Helm,
Valhalla_Knights_Breastplate,
Valhalla_Knights_Greaves]
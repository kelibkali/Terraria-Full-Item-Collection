import type { Item } from "../../Interface.ts";

import Nebula_HelmetImg from "../../../assets/icon/Armor/NebulaArmor/Nebula_Helmet.webp"
import Nebula_BreastplateImg from "../../../assets/icon/Armor/NebulaArmor/Nebula_Breastplate.webp"
import Nebula_LeggingsImg from "../../../assets/icon/Armor/NebulaArmor/Nebula_Leggings.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {NebulaArmor} from "../data.Subcategory.zh-CN.ts";
export const Nebula_Helmet:Item={
    icon:Nebula_HelmetImg,
    isCollection:false,
    id:2760,
    name: "星云头盔",
    Category:Armor,
    Subcategory:NebulaArmor,
    comments:'',
}
export const Nebula_Breastplate:Item={
    icon:Nebula_BreastplateImg,
    isCollection:false,
    id:2761,
    name: "星云胸甲",
    Category:Armor,
    Subcategory:NebulaArmor,
    comments:'',
}
export const Nebula_Leggings:Item={
    icon:Nebula_LeggingsImg,
    isCollection:false,
    id:2762,
    name: "星云护腿",
    Category:Armor,
    Subcategory:NebulaArmor,
    comments:'',
}
export const NebulaArmorList =[
Nebula_Helmet,
Nebula_Breastplate,
Nebula_Leggings]
import type { Item } from "../../Interface.ts";

import Vortex_HelmetImg from "../../../assets/icon/Armor/VortexArmor/Vortex_Helmet.webp"
import Vortex_BreastplateImg from "../../../assets/icon/Armor/VortexArmor/Vortex_Breastplate.webp"
import Vortex_LeggingsImg from "../../../assets/icon/Armor/VortexArmor/Vortex_Leggings.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {VortexArmor} from "../data.Subcategory.zh-CN.ts";
export const Vortex_Helmet:Item={
    icon:Vortex_HelmetImg,
    isCollection:false,
    id:2757,
    name: "星旋头盔",
    Category:Armor,
    Subcategory:VortexArmor,
    comments:'',
}
export const Vortex_Breastplate:Item={
    icon:Vortex_BreastplateImg,
    isCollection:false,
    id:2758,
    name: "星旋胸甲",
    Category:Armor,
    Subcategory:VortexArmor,
    comments:'',
}
export const Vortex_Leggings:Item={
    icon:Vortex_LeggingsImg,
    isCollection:false,
    id:2759,
    name: "星旋护腿",
    Category:Armor,
    Subcategory:VortexArmor,
    comments:'',
}
export const VortexArmorList =[
Vortex_Helmet,
Vortex_Breastplate,
Vortex_Leggings]
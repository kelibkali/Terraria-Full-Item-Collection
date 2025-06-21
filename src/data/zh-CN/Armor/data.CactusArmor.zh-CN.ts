import type { Item } from "../../Interface.ts";

import Cactus_HelmetImg from "../../../assets/icon/Armor/CactusArmor/Cactus_Helmet.webp"
import Cactus_BreastplateImg from "../../../assets/icon/Armor/CactusArmor/Cactus_Breastplate.webp"
import Cactus_LeggingsImg from "../../../assets/icon/Armor/CactusArmor/Cactus_Leggings.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {CactusArmor} from "../data.Subcategory.zh-CN.ts";
export const Cactus_Helmet:Item={
    icon:Cactus_HelmetImg,
    isCollection:false,
    id:894,
    name: "仙人掌头盔",
    Category:Armor,
    Subcategory:CactusArmor,
    comments:'',
}
export const Cactus_Breastplate:Item={
    icon:Cactus_BreastplateImg,
    isCollection:false,
    id:895,
    name: "仙人掌胸甲",
    Category:Armor,
    Subcategory:CactusArmor,
    comments:'',
}
export const Cactus_Leggings:Item={
    icon:Cactus_LeggingsImg,
    isCollection:false,
    id:896,
    name: "仙人掌护腿",
    Category:Armor,
    Subcategory:CactusArmor,
    comments:'',
}
export const CactusArmorList =[
Cactus_Helmet,
Cactus_Breastplate,
Cactus_Leggings]
import type { Item } from "../../Interface.ts";

import Pumpkin_HelmetImg from "../../../assets/icon/Armor/PumpkinArmor/Pumpkin_Helmet.webp"
import Pumpkin_BreastplateImg from "../../../assets/icon/Armor/PumpkinArmor/Pumpkin_Breastplate.webp"
import Pumpkin_LeggingsImg from "../../../assets/icon/Armor/PumpkinArmor/Pumpkin_Leggings.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {PumpkinArmor} from "../data.Subcategory.zh-CN.ts";
export const Pumpkin_Helmet:Item={
    icon:Pumpkin_HelmetImg,
    isCollection:false,
    id:1731,
    name: "南瓜头盔",
    Category:Armor,
    Subcategory:PumpkinArmor,
    comments:'',
}
export const Pumpkin_Breastplate:Item={
    icon:Pumpkin_BreastplateImg,
    isCollection:false,
    id:1732,
    name: "南瓜胸甲",
    Category:Armor,
    Subcategory:PumpkinArmor,
    comments:'',
}
export const Pumpkin_Leggings:Item={
    icon:Pumpkin_LeggingsImg,
    isCollection:false,
    id:1733,
    name: "南瓜护腿",
    Category:Armor,
    Subcategory:PumpkinArmor,
    comments:'',
}
export const PumpkinArmorList =[
Pumpkin_Helmet,
Pumpkin_Breastplate,
Pumpkin_Leggings]
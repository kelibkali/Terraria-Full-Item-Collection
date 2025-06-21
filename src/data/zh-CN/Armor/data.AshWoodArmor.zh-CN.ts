import type { Item } from "../../Interface.ts";

import Ash_Wood_HelmetImg from "../../../assets/icon/Armor/AshWoodArmor/Ash_Wood_Helmet.webp"
import Ash_Wood_BreastplateImg from "../../../assets/icon/Armor/AshWoodArmor/Ash_Wood_Breastplate.webp"
import Ash_Wood_GreavesImg from "../../../assets/icon/Armor/AshWoodArmor/Ash_Wood_Greaves.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {AshWoodArmor} from "../data.Subcategory.zh-CN.ts";
export const Ash_Wood_Helmet:Item={
    icon:Ash_Wood_HelmetImg,
    isCollection:false,
    id:5279,
    name: "灰烬木头盔",
    Category:Armor,
    Subcategory:AshWoodArmor,
    comments:'',
}
export const Ash_Wood_Breastplate:Item={
    icon:Ash_Wood_BreastplateImg,
    isCollection:false,
    id:5280,
    name: "灰烬木胸甲",
    Category:Armor,
    Subcategory:AshWoodArmor,
    comments:'',
}
export const Ash_Wood_Greaves:Item={
    icon:Ash_Wood_GreavesImg,
    isCollection:false,
    id:5281,
    name: "灰烬木护胫",
    Category:Armor,
    Subcategory:AshWoodArmor,
    comments:'',
}
export const AshWoodArmorList =[
Ash_Wood_Helmet,
Ash_Wood_Breastplate,
Ash_Wood_Greaves]
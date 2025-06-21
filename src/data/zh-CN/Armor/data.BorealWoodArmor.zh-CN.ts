import type { Item } from "../../Interface.ts";

import Boreal_Wood_HelmetImg from "../../../assets/icon/Armor/BorealWoodArmor/Boreal_Wood_Helmet.webp"
import Boreal_Wood_BreastplateImg from "../../../assets/icon/Armor/BorealWoodArmor/Boreal_Wood_Breastplate.webp"
import Boreal_Wood_GreavesImg from "../../../assets/icon/Armor/BorealWoodArmor/Boreal_Wood_Greaves.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {BorealWoodArmor} from "../data.Subcategory.zh-CN.ts";
export const Boreal_Wood_Helmet:Item={
    icon:Boreal_Wood_HelmetImg,
    isCollection:false,
    id:2509,
    name: "针叶木头盔",
    Category:Armor,
    Subcategory:BorealWoodArmor,
    comments:'',
}
export const Boreal_Wood_Breastplate:Item={
    icon:Boreal_Wood_BreastplateImg,
    isCollection:false,
    id:2510,
    name: "针叶木胸甲",
    Category:Armor,
    Subcategory:BorealWoodArmor,
    comments:'',
}
export const Boreal_Wood_Greaves:Item={
    icon:Boreal_Wood_GreavesImg,
    isCollection:false,
    id:2511,
    name: "针叶木护胫",
    Category:Armor,
    Subcategory:BorealWoodArmor,
    comments:'',
}
export const BorealWoodArmorList =[
Boreal_Wood_Helmet,
Boreal_Wood_Breastplate,
Boreal_Wood_Greaves]
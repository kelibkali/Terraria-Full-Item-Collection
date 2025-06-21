import type { Item } from "../../Interface.ts";

import Palm_Wood_HelmetImg from "../../../assets/icon/Armor/PalmWoodArmor/Palm_Wood_Helmet.webp"
import Palm_Wood_BreastplateImg from "../../../assets/icon/Armor/PalmWoodArmor/Palm_Wood_Breastplate.webp"
import Palm_Wood_GreavesImg from "../../../assets/icon/Armor/PalmWoodArmor/Palm_Wood_Greaves.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {PalmWoodArmor} from "../data.Subcategory.zh-CN.ts";
export const Palm_Wood_Helmet:Item={
    icon:Palm_Wood_HelmetImg,
    isCollection:false,
    id:2512,
    name: "棕榈木头盔",
    Category:Armor,
    Subcategory:PalmWoodArmor,
    comments:'',
}
export const Palm_Wood_Breastplate:Item={
    icon:Palm_Wood_BreastplateImg,
    isCollection:false,
    id:2513,
    name: "棕榈木胸甲",
    Category:Armor,
    Subcategory:PalmWoodArmor,
    comments:'',
}
export const Palm_Wood_Greaves:Item={
    icon:Palm_Wood_GreavesImg,
    isCollection:false,
    id:2514,
    name: "棕榈木护胫",
    Category:Armor,
    Subcategory:PalmWoodArmor,
    comments:'',
}
export const PalmWoodArmorList =[
Palm_Wood_Helmet,
Palm_Wood_Breastplate,
Palm_Wood_Greaves]
import type { Item } from "../../Interface.ts";

import Wood_HelmetImg from "../../../assets/icon/Armor/WoodArmor/Wood_Helmet.webp"
import Wood_BreastplateImg from "../../../assets/icon/Armor/WoodArmor/Wood_Breastplate.webp"
import Wood_GreavesImg from "../../../assets/icon/Armor/WoodArmor/Wood_Greaves.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {WoodArmor} from "../data.Subcategory.zh-CN.ts";
export const Wood_Helmet:Item={
    icon:Wood_HelmetImg,
    isCollection:false,
    id:727,
    name: "木头盔",
    Category:Armor,
    Subcategory:WoodArmor,
    comments:'',
}
export const Wood_Breastplate:Item={
    icon:Wood_BreastplateImg,
    isCollection:false,
    id:728,
    name: "木胸甲",
    Category:Armor,
    Subcategory:WoodArmor,
    comments:'',
}
export const Wood_Greaves:Item={
    icon:Wood_GreavesImg,
    isCollection:false,
    id:729,
    name: "木护胫",
    Category:Armor,
    Subcategory:WoodArmor,
    comments:'',
}
export const WoodArmorList =[
Wood_Helmet,
Wood_Breastplate,
Wood_Greaves]
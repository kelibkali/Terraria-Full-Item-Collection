import type { Item } from "../../Interface.ts";

import Rich_Mahogany_HelmetImg from "../../../assets/icon/Armor/RichMahoganyArmor/Rich_Mahogany_Helmet.webp"
import Rich_Mahogany_BreastplateImg from "../../../assets/icon/Armor/RichMahoganyArmor/Rich_Mahogany_Breastplate.webp"
import Rich_Mahogany_GreavesImg from "../../../assets/icon/Armor/RichMahoganyArmor/Rich_Mahogany_Greaves.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {RichMahoganyArmor} from "../data.Subcategory.zh-CN.ts";
export const Rich_Mahogany_Helmet:Item={
    icon:Rich_Mahogany_HelmetImg,
    isCollection:false,
    id:733,
    name: "红木头盔",
    Category:Armor,
    Subcategory:RichMahoganyArmor,
    comments:'',
}
export const Rich_Mahogany_Breastplate:Item={
    icon:Rich_Mahogany_BreastplateImg,
    isCollection:false,
    id:734,
    name: "红木胸甲",
    Category:Armor,
    Subcategory:RichMahoganyArmor,
    comments:'',
}
export const Rich_Mahogany_Greaves:Item={
    icon:Rich_Mahogany_GreavesImg,
    isCollection:false,
    id:735,
    name: "红木护胫",
    Category:Armor,
    Subcategory:RichMahoganyArmor,
    comments:'',
}
export const RichMahoganyArmorList =[
Rich_Mahogany_Helmet,
Rich_Mahogany_Breastplate,
Rich_Mahogany_Greaves]
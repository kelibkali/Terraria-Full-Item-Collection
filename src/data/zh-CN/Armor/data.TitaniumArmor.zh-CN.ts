import type { Item } from "../../Interface.ts";

import Titanium_MaskImg from "../../../assets/icon/Armor/TitaniumArmor/Titanium_Mask.webp"
import Titanium_HelmetImg from "../../../assets/icon/Armor/TitaniumArmor/Titanium_Helmet.webp"
import Titanium_HeadgearImg from "../../../assets/icon/Armor/TitaniumArmor/Titanium_Headgear.webp"
import Titanium_BreastplateImg from "../../../assets/icon/Armor/TitaniumArmor/Titanium_Breastplate.webp"
import Titanium_LeggingsImg from "../../../assets/icon/Armor/TitaniumArmor/Titanium_Leggings.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {TitaniumArmor} from "../data.Subcategory.zh-CN.ts";
export const Titanium_Mask:Item={
    icon:Titanium_MaskImg,
    isCollection:false,
    id:1215,
    name: "钛金面具",
    Category:Armor,
    Subcategory:TitaniumArmor,
    comments:'',
}
export const Titanium_Helmet:Item={
    icon:Titanium_HelmetImg,
    isCollection:false,
    id:1216,
    name: "钛金头盔",
    Category:Armor,
    Subcategory:TitaniumArmor,
    comments:'',
}
export const Titanium_Headgear:Item={
    icon:Titanium_HeadgearImg,
    isCollection:false,
    id:1217,
    name: "钛金头饰",
    Category:Armor,
    Subcategory:TitaniumArmor,
    comments:'',
}
export const Titanium_Breastplate:Item={
    icon:Titanium_BreastplateImg,
    isCollection:false,
    id:1218,
    name: "钛金胸甲",
    Category:Armor,
    Subcategory:TitaniumArmor,
    comments:'',
}
export const Titanium_Leggings:Item={
    icon:Titanium_LeggingsImg,
    isCollection:false,
    id:1219,
    name: "钛金护腿",
    Category:Armor,
    Subcategory:TitaniumArmor,
    comments:'',
}
export const TitaniumArmorList =[
Titanium_Mask,
Titanium_Helmet,
Titanium_Headgear,
Titanium_Breastplate,
Titanium_Leggings]
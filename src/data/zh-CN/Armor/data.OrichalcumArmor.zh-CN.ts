import type { Item } from "../../Interface.ts";

import Orichalcum_MaskImg from "../../../assets/icon/Armor/OrichalcumArmor/Orichalcum_Mask.webp"
import Orichalcum_HelmetImg from "../../../assets/icon/Armor/OrichalcumArmor/Orichalcum_Helmet.webp"
import Orichalcum_HeadgearImg from "../../../assets/icon/Armor/OrichalcumArmor/Orichalcum_Headgear.webp"
import Orichalcum_BreastplateImg from "../../../assets/icon/Armor/OrichalcumArmor/Orichalcum_Breastplate.webp"
import Orichalcum_LeggingsImg from "../../../assets/icon/Armor/OrichalcumArmor/Orichalcum_Leggings.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {OrichalcumArmor} from "../data.Subcategory.zh-CN.ts";
export const Orichalcum_Mask:Item={
    icon:Orichalcum_MaskImg,
    isCollection:false,
    id:1210,
    name: "山铜面具",
    Category:Armor,
    Subcategory:OrichalcumArmor,
    comments:'',
}
export const Orichalcum_Helmet:Item={
    icon:Orichalcum_HelmetImg,
    isCollection:false,
    id:1211,
    name: "山铜头盔",
    Category:Armor,
    Subcategory:OrichalcumArmor,
    comments:'',
}
export const Orichalcum_Headgear:Item={
    icon:Orichalcum_HeadgearImg,
    isCollection:false,
    id:1212,
    name: "山铜头饰",
    Category:Armor,
    Subcategory:OrichalcumArmor,
    comments:'',
}
export const Orichalcum_Breastplate:Item={
    icon:Orichalcum_BreastplateImg,
    isCollection:false,
    id:1213,
    name: "山铜胸甲",
    Category:Armor,
    Subcategory:OrichalcumArmor,
    comments:'',
}
export const Orichalcum_Leggings:Item={
    icon:Orichalcum_LeggingsImg,
    isCollection:false,
    id:1214,
    name: "山铜护腿",
    Category:Armor,
    Subcategory:OrichalcumArmor,
    comments:'',
}
export const OrichalcumArmorList =[
Orichalcum_Mask,
Orichalcum_Helmet,
Orichalcum_Headgear,
Orichalcum_Breastplate,
Orichalcum_Leggings]
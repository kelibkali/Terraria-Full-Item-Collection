import type { Item } from "../../Interface.ts";

import Adamantite_HeadgearImg from "../../../assets/icon/Armor/AdamantiteArmor/Adamantite_Headgear.webp"
import Adamantite_HelmetImg from "../../../assets/icon/Armor/AdamantiteArmor/Adamantite_Helmet.webp"
import Adamantite_MaskImg from "../../../assets/icon/Armor/AdamantiteArmor/Adamantite_Mask.webp"
import Adamantite_BreastplateImg from "../../../assets/icon/Armor/AdamantiteArmor/Adamantite_Breastplate.webp"
import Adamantite_LeggingsImg from "../../../assets/icon/Armor/AdamantiteArmor/Adamantite_Leggings.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {AdamantiteArmor} from "../data.Subcategory.zh-CN.ts";
export const Adamantite_Headgear:Item={
    icon:Adamantite_HeadgearImg,
    isCollection:false,
    id:400,
    name: "精金头饰",
    Category:Armor,
    Subcategory:AdamantiteArmor,
    comments:'',
}
export const Adamantite_Helmet:Item={
    icon:Adamantite_HelmetImg,
    isCollection:false,
    id:401,
    name: "精金头盔",
    Category:Armor,
    Subcategory:AdamantiteArmor,
    comments:'',
}
export const Adamantite_Mask:Item={
    icon:Adamantite_MaskImg,
    isCollection:false,
    id:402,
    name: "精金面具",
    Category:Armor,
    Subcategory:AdamantiteArmor,
    comments:'',
}
export const Adamantite_Breastplate:Item={
    icon:Adamantite_BreastplateImg,
    isCollection:false,
    id:403,
    name: "精金胸甲",
    Category:Armor,
    Subcategory:AdamantiteArmor,
    comments:'',
}
export const Adamantite_Leggings:Item={
    icon:Adamantite_LeggingsImg,
    isCollection:false,
    id:404,
    name: "精金护腿",
    Category:Armor,
    Subcategory:AdamantiteArmor,
    comments:'',
}
export const AdamantiteArmorList =[
Adamantite_Headgear,
Adamantite_Helmet,
Adamantite_Mask,
Adamantite_Breastplate,
Adamantite_Leggings]
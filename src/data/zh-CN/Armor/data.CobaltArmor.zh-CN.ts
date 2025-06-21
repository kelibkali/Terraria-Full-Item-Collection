import type { Item } from "../../Interface.ts";

import Cobalt_HatImg from "../../../assets/icon/Armor/CobaltArmor/Cobalt_Hat.webp"
import Cobalt_HelmetImg from "../../../assets/icon/Armor/CobaltArmor/Cobalt_Helmet.webp"
import Cobalt_MaskImg from "../../../assets/icon/Armor/CobaltArmor/Cobalt_Mask.webp"
import Cobalt_BreastplateImg from "../../../assets/icon/Armor/CobaltArmor/Cobalt_Breastplate.webp"
import Cobalt_LeggingsImg from "../../../assets/icon/Armor/CobaltArmor/Cobalt_Leggings.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {CobaltArmor} from "../data.Subcategory.zh-CN.ts";
export const Cobalt_Hat:Item={
    icon:Cobalt_HatImg,
    isCollection:false,
    id:371,
    name: "钴帽",
    Category:Armor,
    Subcategory:CobaltArmor,
    comments:'',
}
export const Cobalt_Helmet:Item={
    icon:Cobalt_HelmetImg,
    isCollection:false,
    id:372,
    name: "钴头盔",
    Category:Armor,
    Subcategory:CobaltArmor,
    comments:'',
}
export const Cobalt_Mask:Item={
    icon:Cobalt_MaskImg,
    isCollection:false,
    id:373,
    name: "钴面具",
    Category:Armor,
    Subcategory:CobaltArmor,
    comments:'',
}
export const Cobalt_Breastplate:Item={
    icon:Cobalt_BreastplateImg,
    isCollection:false,
    id:374,
    name: "钴胸甲",
    Category:Armor,
    Subcategory:CobaltArmor,
    comments:'',
}
export const Cobalt_Leggings:Item={
    icon:Cobalt_LeggingsImg,
    isCollection:false,
    id:375,
    name: "钴护腿",
    Category:Armor,
    Subcategory:CobaltArmor,
    comments:'',
}
export const CobaltArmorList =[
Cobalt_Hat,
Cobalt_Helmet,
Cobalt_Mask,
Cobalt_Breastplate,
Cobalt_Leggings]
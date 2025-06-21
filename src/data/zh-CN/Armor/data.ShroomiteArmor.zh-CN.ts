import type { Item } from "../../Interface.ts";

import Shroomite_HeadgearImg from "../../../assets/icon/Armor/ShroomiteArmor/Shroomite_Headgear.webp"
import Shroomite_MaskImg from "../../../assets/icon/Armor/ShroomiteArmor/Shroomite_Mask.webp"
import Shroomite_HelmetImg from "../../../assets/icon/Armor/ShroomiteArmor/Shroomite_Helmet.webp"
import Shroomite_BreastplateImg from "../../../assets/icon/Armor/ShroomiteArmor/Shroomite_Breastplate.webp"
import Shroomite_LeggingsImg from "../../../assets/icon/Armor/ShroomiteArmor/Shroomite_Leggings.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {ShroomiteArmor} from "../data.Subcategory.zh-CN.ts";
export const Shroomite_Headgear:Item={
    icon:Shroomite_HeadgearImg,
    isCollection:false,
    id:1546,
    name: "蘑菇矿头饰",
    Category:Armor,
    Subcategory:ShroomiteArmor,
    comments:'',
}
export const Shroomite_Mask:Item={
    icon:Shroomite_MaskImg,
    isCollection:false,
    id:1547,
    name: "蘑菇矿面具",
    Category:Armor,
    Subcategory:ShroomiteArmor,
    comments:'',
}
export const Shroomite_Helmet:Item={
    icon:Shroomite_HelmetImg,
    isCollection:false,
    id:1548,
    name: "蘑菇矿头盔",
    Category:Armor,
    Subcategory:ShroomiteArmor,
    comments:'',
}
export const Shroomite_Breastplate:Item={
    icon:Shroomite_BreastplateImg,
    isCollection:false,
    id:1549,
    name: "蘑菇矿胸甲",
    Category:Armor,
    Subcategory:ShroomiteArmor,
    comments:'',
}
export const Shroomite_Leggings:Item={
    icon:Shroomite_LeggingsImg,
    isCollection:false,
    id:1550,
    name: "蘑菇矿护腿",
    Category:Armor,
    Subcategory:ShroomiteArmor,
    comments:'',
}
export const ShroomiteArmorList =[
Shroomite_Headgear,
Shroomite_Mask,
Shroomite_Helmet,
Shroomite_Breastplate,
Shroomite_Leggings]
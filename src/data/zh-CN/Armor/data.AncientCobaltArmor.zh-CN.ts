import type { Item } from "../../Interface.ts";

import Ancient_Cobalt_HelmetImg from "../../../assets/icon/Armor/AncientCobaltArmor/Ancient_Cobalt_Helmet.webp"
import Ancient_Cobalt_BreastplateImg from "../../../assets/icon/Armor/AncientCobaltArmor/Ancient_Cobalt_Breastplate.webp"
import Ancient_Cobalt_LeggingsImg from "../../../assets/icon/Armor/AncientCobaltArmor/Ancient_Cobalt_Leggings.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {AncientCobaltArmor} from "../data.Subcategory.zh-CN.ts";
export const Ancient_Cobalt_Helmet:Item={
    icon:Ancient_Cobalt_HelmetImg,
    isCollection:false,
    id:960,
    name: "远古钴头盔",
    Category:Armor,
    Subcategory:AncientCobaltArmor,
    comments:'',
}
export const Ancient_Cobalt_Breastplate:Item={
    icon:Ancient_Cobalt_BreastplateImg,
    isCollection:false,
    id:961,
    name: "远古钴胸甲",
    Category:Armor,
    Subcategory:AncientCobaltArmor,
    comments:'',
}
export const Ancient_Cobalt_Leggings:Item={
    icon:Ancient_Cobalt_LeggingsImg,
    isCollection:false,
    id:962,
    name: "远古钴护腿",
    Category:Armor,
    Subcategory:AncientCobaltArmor,
    comments:'',
}
export const AncientCobaltArmorList =[
Ancient_Cobalt_Helmet,
Ancient_Cobalt_Breastplate,
Ancient_Cobalt_Leggings]
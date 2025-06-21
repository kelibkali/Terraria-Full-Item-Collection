import type { Item } from "../../Interface.ts";

import Ancient_Shadow_HelmetImg from "../../../assets/icon/Armor/AncientArmor/Ancient_Shadow_Helmet.webp"
import Ancient_Shadow_ScalemailImg from "../../../assets/icon/Armor/AncientArmor/Ancient_Shadow_Scalemail.webp"
import Ancient_Shadow_GreavesImg from "../../../assets/icon/Armor/AncientArmor/Ancient_Shadow_Greaves.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {AncientArmor} from "../data.Subcategory.zh-CN.ts";
export const Ancient_Shadow_Helmet:Item={
    icon:Ancient_Shadow_HelmetImg,
    isCollection:false,
    id:956,
    name: "远古暗影头盔",
    Category:Armor,
    Subcategory:AncientArmor,
    comments:'',
}
export const Ancient_Shadow_Scalemail:Item={
    icon:Ancient_Shadow_ScalemailImg,
    isCollection:false,
    id:957,
    name: "远古暗影鳞甲",
    Category:Armor,
    Subcategory:AncientArmor,
    comments:'',
}
export const Ancient_Shadow_Greaves:Item={
    icon:Ancient_Shadow_GreavesImg,
    isCollection:false,
    id:958,
    name: "远古暗影护胫",
    Category:Armor,
    Subcategory:AncientArmor,
    comments:'',
}
export const AncientArmorList =[
Ancient_Shadow_Helmet,
Ancient_Shadow_Scalemail,
Ancient_Shadow_Greaves]
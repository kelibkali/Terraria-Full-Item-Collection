import type { Item } from "../../Interface.ts";

import Shadow_HelmetImg from "../../../assets/icon/Armor/ShadowArmor/Shadow_Helmet.webp"
import Shadow_ScalemailImg from "../../../assets/icon/Armor/ShadowArmor/Shadow_Scalemail.webp"
import Shadow_GreavesImg from "../../../assets/icon/Armor/ShadowArmor/Shadow_Greaves.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {ShadowArmor} from "../data.Subcategory.zh-CN.ts";
export const Shadow_Helmet:Item={
    icon:Shadow_HelmetImg,
    isCollection:false,
    id:102,
    name: "暗影头盔",
    Category:Armor,
    Subcategory:ShadowArmor,
    comments:'',
}
export const Shadow_Scalemail:Item={
    icon:Shadow_ScalemailImg,
    isCollection:false,
    id:101,
    name: "暗影鳞甲",
    Category:Armor,
    Subcategory:ShadowArmor,
    comments:'',
}
export const Shadow_Greaves:Item={
    icon:Shadow_GreavesImg,
    isCollection:false,
    id:100,
    name: "暗影护胫",
    Category:Armor,
    Subcategory:ShadowArmor,
    comments:'',
}
export const ShadowArmorList =[
Shadow_Helmet,
Shadow_Scalemail,
Shadow_Greaves]
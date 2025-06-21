import type { Item } from "../../Interface.ts";

import Gold_HelmetImg from "../../../assets/icon/Armor/GoldArmor/Gold_Helmet.webp"
import Gold_ChainmailImg from "../../../assets/icon/Armor/GoldArmor/Gold_Chainmail.webp"
import Gold_GreavesImg from "../../../assets/icon/Armor/GoldArmor/Gold_Greaves.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {GoldArmor} from "../data.Subcategory.zh-CN.ts";
export const Gold_Helmet:Item={
    icon:Gold_HelmetImg,
    isCollection:false,
    id:92,
    name: "金头盔",
    Category:Armor,
    Subcategory:GoldArmor,
    comments:'',
}
export const Gold_Chainmail:Item={
    icon:Gold_ChainmailImg,
    isCollection:false,
    id:83,
    name: "金链甲",
    Category:Armor,
    Subcategory:GoldArmor,
    comments:'',
}
export const Gold_Greaves:Item={
    icon:Gold_GreavesImg,
    isCollection:false,
    id:79,
    name: "金护胫",
    Category:Armor,
    Subcategory:GoldArmor,
    comments:'',
}
export const GoldArmorList =[
Gold_Helmet,
Gold_Chainmail,
Gold_Greaves]
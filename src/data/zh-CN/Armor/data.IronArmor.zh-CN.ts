import type { Item } from "../../Interface.ts";

import Iron_HelmetImg from "../../../assets/icon/Armor/IronArmor/Iron_Helmet.webp"
import Iron_ChainmailImg from "../../../assets/icon/Armor/IronArmor/Iron_Chainmail.webp"
import Iron_GreavesImg from "../../../assets/icon/Armor/IronArmor/Iron_Greaves.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {IronArmor} from "../data.Subcategory.zh-CN.ts";
export const Iron_Helmet:Item={
    icon:Iron_HelmetImg,
    isCollection:false,
    id:90,
    name: "铁头盔",
    Category:Armor,
    Subcategory:IronArmor,
    comments:'',
}
export const Iron_Chainmail:Item={
    icon:Iron_ChainmailImg,
    isCollection:false,
    id:81,
    name: "铁链甲",
    Category:Armor,
    Subcategory:IronArmor,
    comments:'',
}
export const Iron_Greaves:Item={
    icon:Iron_GreavesImg,
    isCollection:false,
    id:77,
    name: "铁护胫",
    Category:Armor,
    Subcategory:IronArmor,
    comments:'',
}
export const IronArmorList =[
Iron_Helmet,
Iron_Chainmail,
Iron_Greaves]
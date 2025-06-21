import type { Item } from "../../Interface.ts";

import Tin_HelmetImg from "../../../assets/icon/Armor/TinArmor/Tin_Helmet.webp"
import Tin_ChainmailImg from "../../../assets/icon/Armor/TinArmor/Tin_Chainmail.webp"
import Tin_GreavesImg from "../../../assets/icon/Armor/TinArmor/Tin_Greaves.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {TinArmor} from "../data.Subcategory.zh-CN.ts";
export const Tin_Helmet:Item={
    icon:Tin_HelmetImg,
    isCollection:false,
    id:687,
    name: "锡头盔",
    Category:Armor,
    Subcategory:TinArmor,
    comments:'',
}
export const Tin_Chainmail:Item={
    icon:Tin_ChainmailImg,
    isCollection:false,
    id:688,
    name: "锡链甲",
    Category:Armor,
    Subcategory:TinArmor,
    comments:'',
}
export const Tin_Greaves:Item={
    icon:Tin_GreavesImg,
    isCollection:false,
    id:689,
    name: "锡护胫",
    Category:Armor,
    Subcategory:TinArmor,
    comments:'',
}
export const TinArmorList =[
Tin_Helmet,
Tin_Chainmail,
Tin_Greaves]
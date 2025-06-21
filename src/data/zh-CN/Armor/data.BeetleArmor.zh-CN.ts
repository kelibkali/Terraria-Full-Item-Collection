import type { Item } from "../../Interface.ts";

import Beetle_HelmetImg from "../../../assets/icon/Armor/BeetleArmor/Beetle_Helmet.webp"
import Beetle_Scale_MailImg from "../../../assets/icon/Armor/BeetleArmor/Beetle_Scale_Mail.webp"
import Beetle_ShellImg from "../../../assets/icon/Armor/BeetleArmor/Beetle_Shell.webp"
import Beetle_LeggingsImg from "../../../assets/icon/Armor/BeetleArmor/Beetle_Leggings.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {BeetleArmor} from "../data.Subcategory.zh-CN.ts";
export const Beetle_Helmet:Item={
    icon:Beetle_HelmetImg,
    isCollection:false,
    id:2199,
    name: "甲虫头盔",
    Category:Armor,
    Subcategory:BeetleArmor,
    comments:'',
}
export const Beetle_Scale_Mail:Item={
    icon:Beetle_Scale_MailImg,
    isCollection:false,
    id:2200,
    name: "甲虫铠甲",
    Category:Armor,
    Subcategory:BeetleArmor,
    comments:'',
}
export const Beetle_Shell:Item={
    icon:Beetle_ShellImg,
    isCollection:false,
    id:2201,
    name: "甲虫壳",
    Category:Armor,
    Subcategory:BeetleArmor,
    comments:'',
}
export const Beetle_Leggings:Item={
    icon:Beetle_LeggingsImg,
    isCollection:false,
    id:2202,
    name: "甲虫护腿",
    Category:Armor,
    Subcategory:BeetleArmor,
    comments:'',
}
export const BeetleArmorList =[
Beetle_Helmet,
Beetle_Scale_Mail,
Beetle_Shell,
Beetle_Leggings]
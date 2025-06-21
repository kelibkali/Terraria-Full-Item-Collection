import type { Item } from "../../Interface.ts";

import Lead_HelmetImg from "../../../assets/icon/Armor/LeadArmor/Lead_Helmet.webp"
import Lead_ChainmailImg from "../../../assets/icon/Armor/LeadArmor/Lead_Chainmail.webp"
import Lead_GreavesImg from "../../../assets/icon/Armor/LeadArmor/Lead_Greaves.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {LeadArmor} from "../data.Subcategory.zh-CN.ts";
export const Lead_Helmet:Item={
    icon:Lead_HelmetImg,
    isCollection:false,
    id:690,
    name: "铅头盔",
    Category:Armor,
    Subcategory:LeadArmor,
    comments:'',
}
export const Lead_Chainmail:Item={
    icon:Lead_ChainmailImg,
    isCollection:false,
    id:691,
    name: "铅链甲",
    Category:Armor,
    Subcategory:LeadArmor,
    comments:'',
}
export const Lead_Greaves:Item={
    icon:Lead_GreavesImg,
    isCollection:false,
    id:692,
    name: "铅护胫",
    Category:Armor,
    Subcategory:LeadArmor,
    comments:'',
}
export const LeadArmorList =[
Lead_Helmet,
Lead_Chainmail,
Lead_Greaves]
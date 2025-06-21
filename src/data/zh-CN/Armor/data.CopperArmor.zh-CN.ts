import type { Item } from "../../Interface.ts";

import Copper_HelmetImg from "../../../assets/icon/Armor/CopperArmor/Copper_Helmet.webp"
import Copper_ChainmailImg from "../../../assets/icon/Armor/CopperArmor/Copper_Chainmail.webp"
import Copper_GreavesImg from "../../../assets/icon/Armor/CopperArmor/Copper_Greaves.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {CopperArmor} from "../data.Subcategory.zh-CN.ts";
export const Copper_Helmet:Item={
    icon:Copper_HelmetImg,
    isCollection:false,
    id:89,
    name: "铜头盔",
    Category:Armor,
    Subcategory:CopperArmor,
    comments:'',
}
export const Copper_Chainmail:Item={
    icon:Copper_ChainmailImg,
    isCollection:false,
    id:80,
    name: "铜链甲",
    Category:Armor,
    Subcategory:CopperArmor,
    comments:'',
}
export const Copper_Greaves:Item={
    icon:Copper_GreavesImg,
    isCollection:false,
    id:76,
    name: "铜护胫",
    Category:Armor,
    Subcategory:CopperArmor,
    comments:'',
}
export const CopperArmorList =[
Copper_Helmet,
Copper_Chainmail,
Copper_Greaves]
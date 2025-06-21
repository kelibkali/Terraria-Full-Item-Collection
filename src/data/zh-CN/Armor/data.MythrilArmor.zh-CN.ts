import type { Item } from "../../Interface.ts";

import Mythril_HoodImg from "../../../assets/icon/Armor/MythrilArmor/Mythril_Hood.webp"
import Mythril_HelmetImg from "../../../assets/icon/Armor/MythrilArmor/Mythril_Helmet.webp"
import Mythril_HatImg from "../../../assets/icon/Armor/MythrilArmor/Mythril_Hat.webp"
import Mythril_ChainmailImg from "../../../assets/icon/Armor/MythrilArmor/Mythril_Chainmail.webp"
import Mythril_GreavesImg from "../../../assets/icon/Armor/MythrilArmor/Mythril_Greaves.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {MythrilArmor} from "../data.Subcategory.zh-CN.ts";
export const Mythril_Hood:Item={
    icon:Mythril_HoodImg,
    isCollection:false,
    id:376,
    name: "秘银兜帽",
    Category:Armor,
    Subcategory:MythrilArmor,
    comments:'',
}
export const Mythril_Helmet:Item={
    icon:Mythril_HelmetImg,
    isCollection:false,
    id:377,
    name: "秘银头盔",
    Category:Armor,
    Subcategory:MythrilArmor,
    comments:'',
}
export const Mythril_Hat:Item={
    icon:Mythril_HatImg,
    isCollection:false,
    id:378,
    name: "秘银帽",
    Category:Armor,
    Subcategory:MythrilArmor,
    comments:'',
}
export const Mythril_Chainmail:Item={
    icon:Mythril_ChainmailImg,
    isCollection:false,
    id:379,
    name: "秘银链甲",
    Category:Armor,
    Subcategory:MythrilArmor,
    comments:'',
}
export const Mythril_Greaves:Item={
    icon:Mythril_GreavesImg,
    isCollection:false,
    id:380,
    name: "秘银护胫",
    Category:Armor,
    Subcategory:MythrilArmor,
    comments:'',
}
export const MythrilArmorList =[
Mythril_Hood,
Mythril_Helmet,
Mythril_Hat,
Mythril_Chainmail,
Mythril_Greaves]
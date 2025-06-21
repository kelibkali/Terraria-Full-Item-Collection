import type { Item } from "../../Interface.ts";

import Platinum_HelmetImg from "../../../assets/icon/Armor/PlatinumArmor/Platinum_Helmet.webp"
import Platinum_ChainmailImg from "../../../assets/icon/Armor/PlatinumArmor/Platinum_Chainmail.webp"
import Platinum_GreavesImg from "../../../assets/icon/Armor/PlatinumArmor/Platinum_Greaves.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {PlatinumArmor} from "../data.Subcategory.zh-CN.ts";
export const Platinum_Helmet:Item={
    icon:Platinum_HelmetImg,
    isCollection:false,
    id:696,
    name: "铂金头盔",
    Category:Armor,
    Subcategory:PlatinumArmor,
    comments:'',
}
export const Platinum_Chainmail:Item={
    icon:Platinum_ChainmailImg,
    isCollection:false,
    id:697,
    name: "铂金链甲",
    Category:Armor,
    Subcategory:PlatinumArmor,
    comments:'',
}
export const Platinum_Greaves:Item={
    icon:Platinum_GreavesImg,
    isCollection:false,
    id:698,
    name: "铂金护胫",
    Category:Armor,
    Subcategory:PlatinumArmor,
    comments:'',
}
export const PlatinumArmorList =[
Platinum_Helmet,
Platinum_Chainmail,
Platinum_Greaves]
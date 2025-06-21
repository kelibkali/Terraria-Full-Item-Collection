import type { Item } from "../../Interface.ts";

import Silver_HelmetImg from "../../../assets/icon/Armor/SilverArmor/Silver_Helmet.webp"
import Silver_ChainmailImg from "../../../assets/icon/Armor/SilverArmor/Silver_Chainmail.webp"
import Silver_GreavesImg from "../../../assets/icon/Armor/SilverArmor/Silver_Greaves.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {SilverArmor} from "../data.Subcategory.zh-CN.ts";
export const Silver_Helmet:Item={
    icon:Silver_HelmetImg,
    isCollection:false,
    id:91,
    name: "银头盔",
    Category:Armor,
    Subcategory:SilverArmor,
    comments:'',
}
export const Silver_Chainmail:Item={
    icon:Silver_ChainmailImg,
    isCollection:false,
    id:82,
    name: "银链甲",
    Category:Armor,
    Subcategory:SilverArmor,
    comments:'',
}
export const Silver_Greaves:Item={
    icon:Silver_GreavesImg,
    isCollection:false,
    id:78,
    name: "银护胫",
    Category:Armor,
    Subcategory:SilverArmor,
    comments:'',
}
export const SilverArmorList =[
Silver_Helmet,
Silver_Chainmail,
Silver_Greaves]
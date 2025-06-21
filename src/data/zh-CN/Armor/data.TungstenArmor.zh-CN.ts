import type { Item } from "../../Interface.ts";

import Tungsten_HelmetImg from "../../../assets/icon/Armor/TungstenArmor/Tungsten_Helmet.webp"
import Tungsten_ChainmailImg from "../../../assets/icon/Armor/TungstenArmor/Tungsten_Chainmail.webp"
import Tungsten_GreavesImg from "../../../assets/icon/Armor/TungstenArmor/Tungsten_Greaves.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {TungstenArmor} from "../data.Subcategory.zh-CN.ts";
export const Tungsten_Helmet:Item={
    icon:Tungsten_HelmetImg,
    isCollection:false,
    id:693,
    name: "钨头盔",
    Category:Armor,
    Subcategory:TungstenArmor,
    comments:'',
}
export const Tungsten_Chainmail:Item={
    icon:Tungsten_ChainmailImg,
    isCollection:false,
    id:694,
    name: "钨链甲",
    Category:Armor,
    Subcategory:TungstenArmor,
    comments:'',
}
export const Tungsten_Greaves:Item={
    icon:Tungsten_GreavesImg,
    isCollection:false,
    id:695,
    name: "钨护胫",
    Category:Armor,
    Subcategory:TungstenArmor,
    comments:'',
}
export const TungstenArmorList =[
Tungsten_Helmet,
Tungsten_Chainmail,
Tungsten_Greaves]
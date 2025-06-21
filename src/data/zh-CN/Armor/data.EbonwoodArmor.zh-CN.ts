import type { Item } from "../../Interface.ts";

import Ebonwood_HelmetImg from "../../../assets/icon/Armor/EbonwoodArmor/Ebonwood_Helmet.webp"
import Ebonwood_BreastplateImg from "../../../assets/icon/Armor/EbonwoodArmor/Ebonwood_Breastplate.webp"
import Ebonwood_GreavesImg from "../../../assets/icon/Armor/EbonwoodArmor/Ebonwood_Greaves.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {EbonwoodArmor} from "../data.Subcategory.zh-CN.ts";
export const Ebonwood_Helmet:Item={
    icon:Ebonwood_HelmetImg,
    isCollection:false,
    id:730,
    name: "乌木头盔",
    Category:Armor,
    Subcategory:EbonwoodArmor,
    comments:'',
}
export const Ebonwood_Breastplate:Item={
    icon:Ebonwood_BreastplateImg,
    isCollection:false,
    id:731,
    name: "乌木胸甲",
    Category:Armor,
    Subcategory:EbonwoodArmor,
    comments:'',
}
export const Ebonwood_Greaves:Item={
    icon:Ebonwood_GreavesImg,
    isCollection:false,
    id:732,
    name: "乌木护胫",
    Category:Armor,
    Subcategory:EbonwoodArmor,
    comments:'',
}
export const EbonwoodArmorList =[
Ebonwood_Helmet,
Ebonwood_Breastplate,
Ebonwood_Greaves]
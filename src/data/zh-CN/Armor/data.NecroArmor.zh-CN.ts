import type { Item } from "../../Interface.ts";

import Necro_HelmetImg from "../../../assets/icon/Armor/NecroArmor/Necro_Helmet.webp"
import Necro_BreastplateImg from "../../../assets/icon/Armor/NecroArmor/Necro_Breastplate.webp"
import Necro_GreavesImg from "../../../assets/icon/Armor/NecroArmor/Necro_Greaves.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {NecroArmor} from "../data.Subcategory.zh-CN.ts";
export const Necro_Helmet:Item={
    icon:Necro_HelmetImg,
    isCollection:false,
    id:151,
    name: "死灵头盔",
    Category:Armor,
    Subcategory:NecroArmor,
    comments:'',
}
export const Necro_Breastplate:Item={
    icon:Necro_BreastplateImg,
    isCollection:false,
    id:152,
    name: "死灵胸甲",
    Category:Armor,
    Subcategory:NecroArmor,
    comments:'',
}
export const Necro_Greaves:Item={
    icon:Necro_GreavesImg,
    isCollection:false,
    id:153,
    name: "死灵护胫",
    Category:Armor,
    Subcategory:NecroArmor,
    comments:'',
}
export const NecroArmorList =[
Necro_Helmet,
Necro_Breastplate,
Necro_Greaves]
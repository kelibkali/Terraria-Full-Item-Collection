import type { Item } from "../../Interface.ts";

import Fossil_HelmetImg from "../../../assets/icon/Armor/FossilArmor/Fossil_Helmet.webp"
import Fossil_PlateImg from "../../../assets/icon/Armor/FossilArmor/Fossil_Plate.webp"
import Fossil_GreavesImg from "../../../assets/icon/Armor/FossilArmor/Fossil_Greaves.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {FossilArmor} from "../data.Subcategory.zh-CN.ts";
export const Fossil_Helmet:Item={
    icon:Fossil_HelmetImg,
    isCollection:false,
    id:3374,
    name: "化石头盔",
    Category:Armor,
    Subcategory:FossilArmor,
    comments:'',
}
export const Fossil_Plate:Item={
    icon:Fossil_PlateImg,
    isCollection:false,
    id:3375,
    name: "化石板甲",
    Category:Armor,
    Subcategory:FossilArmor,
    comments:'',
}
export const Fossil_Greaves:Item={
    icon:Fossil_GreavesImg,
    isCollection:false,
    id:3376,
    name: "化石护胫",
    Category:Armor,
    Subcategory:FossilArmor,
    comments:'',
}
export const FossilArmorList =[
Fossil_Helmet,
Fossil_Plate,
Fossil_Greaves]
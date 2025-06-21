import type { Item } from "../../Interface.ts";

import Pearlwood_HelmetImg from "../../../assets/icon/Armor/PearlwoodArmor/Pearlwood_Helmet.webp"
import Pearlwood_BreastplateImg from "../../../assets/icon/Armor/PearlwoodArmor/Pearlwood_Breastplate.webp"
import Pearlwood_GreavesImg from "../../../assets/icon/Armor/PearlwoodArmor/Pearlwood_Greaves.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {PearlwoodArmor} from "../data.Subcategory.zh-CN.ts";
export const Pearlwood_Helmet:Item={
    icon:Pearlwood_HelmetImg,
    isCollection:false,
    id:736,
    name: "珍珠木头盔",
    Category:Armor,
    Subcategory:PearlwoodArmor,
    comments:'',
}
export const Pearlwood_Breastplate:Item={
    icon:Pearlwood_BreastplateImg,
    isCollection:false,
    id:737,
    name: "珍珠木胸甲",
    Category:Armor,
    Subcategory:PearlwoodArmor,
    comments:'',
}
export const Pearlwood_Greaves:Item={
    icon:Pearlwood_GreavesImg,
    isCollection:false,
    id:738,
    name: "珍珠木护胫",
    Category:Armor,
    Subcategory:PearlwoodArmor,
    comments:'',
}
export const PearlwoodArmorList =[
Pearlwood_Helmet,
Pearlwood_Breastplate,
Pearlwood_Greaves]
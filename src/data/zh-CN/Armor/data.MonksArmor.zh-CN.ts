import type { Item } from "../../Interface.ts";

import Monks_Bushy_Brow_Bald_CapImg from "../../../assets/icon/Armor/MonksArmor/Monks_Bushy_Brow_Bald_Cap.webp"
import Monks_ShirtImg from "../../../assets/icon/Armor/MonksArmor/Monks_Shirt.webp"
import Monks_PantsImg from "../../../assets/icon/Armor/MonksArmor/Monks_Pants.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {MonksArmor} from "../data.Subcategory.zh-CN.ts";
export const Monks_Bushy_Brow_Bald_Cap:Item={
    icon:Monks_Bushy_Brow_Bald_CapImg,
    isCollection:false,
    id:3806,
    name: "武僧浓眉秃头帽",
    Category:Armor,
    Subcategory:MonksArmor,
    comments:'',
}
export const Monks_Shirt:Item={
    icon:Monks_ShirtImg,
    isCollection:false,
    id:3807,
    name: "武僧衣",
    Category:Armor,
    Subcategory:MonksArmor,
    comments:'',
}
export const Monks_Pants:Item={
    icon:Monks_PantsImg,
    isCollection:false,
    id:3808,
    name: "武僧裤",
    Category:Armor,
    Subcategory:MonksArmor,
    comments:'',
}
export const MonksArmorList =[
Monks_Bushy_Brow_Bald_Cap,
Monks_Shirt,
Monks_Pants]
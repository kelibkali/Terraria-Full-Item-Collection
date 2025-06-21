import type { Item } from "../../Interface.ts";

import Mining_HelmetImg from "../../../assets/icon/Armor/MiningArmor/Mining_Helmet.webp"
import Mining_ShirtImg from "../../../assets/icon/Armor/MiningArmor/Mining_Shirt.webp"
import Mining_PantsImg from "../../../assets/icon/Armor/MiningArmor/Mining_Pants.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {MiningArmor} from "../data.Subcategory.zh-CN.ts";
export const Mining_Helmet:Item={
    icon:Mining_HelmetImg,
    isCollection:false,
    id:88,
    name: "挖矿头盔",
    Category:Armor,
    Subcategory:MiningArmor,
    comments:'',
}
export const Mining_Shirt:Item={
    icon:Mining_ShirtImg,
    isCollection:false,
    id:410,
    name: "挖矿衣",
    Category:Armor,
    Subcategory:MiningArmor,
    comments:'',
}
export const Mining_Pants:Item={
    icon:Mining_PantsImg,
    isCollection:false,
    id:411,
    name: "挖矿裤",
    Category:Armor,
    Subcategory:MiningArmor,
    comments:'',
}
export const MiningArmorList =[
Mining_Helmet,
Mining_Shirt,
Mining_Pants]
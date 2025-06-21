import type { Item } from "../../Interface.ts";

import Red_Riding_HoodImg from "../../../assets/icon/Armor/RedRidingArmor/Red_Riding_Hood.webp"
import Red_Riding_DressImg from "../../../assets/icon/Armor/RedRidingArmor/Red_Riding_Dress.webp"
import Red_Riding_LeggingsImg from "../../../assets/icon/Armor/RedRidingArmor/Red_Riding_Leggings.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {RedRidingArmor} from "../data.Subcategory.zh-CN.ts";
export const Red_Riding_Hood:Item={
    icon:Red_Riding_HoodImg,
    isCollection:false,
    id:3877,
    name: "红色骑术兜帽",
    Category:Armor,
    Subcategory:RedRidingArmor,
    comments:'',
}
export const Red_Riding_Dress:Item={
    icon:Red_Riding_DressImg,
    isCollection:false,
    id:3878,
    name: "红色骑术服",
    Category:Armor,
    Subcategory:RedRidingArmor,
    comments:'',
}
export const Red_Riding_Leggings:Item={
    icon:Red_Riding_LeggingsImg,
    isCollection:false,
    id:3879,
    name: "红色骑术护腿",
    Category:Armor,
    Subcategory:RedRidingArmor,
    comments:'',
}
export const RedRidingArmorList =[
Red_Riding_Hood,
Red_Riding_Dress,
Red_Riding_Leggings]
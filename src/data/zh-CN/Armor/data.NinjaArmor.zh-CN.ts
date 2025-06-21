import type { Item } from "../../Interface.ts";

import Ninja_HoodImg from "../../../assets/icon/Armor/NinjaArmor/Ninja_Hood.webp"
import Ninja_ShirtImg from "../../../assets/icon/Armor/NinjaArmor/Ninja_Shirt.webp"
import Ninja_PantsImg from "../../../assets/icon/Armor/NinjaArmor/Ninja_Pants.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {NinjaArmor} from "../data.Subcategory.zh-CN.ts";
export const Ninja_Hood:Item={
    icon:Ninja_HoodImg,
    isCollection:false,
    id:256,
    name: "忍者兜帽",
    Category:Armor,
    Subcategory:NinjaArmor,
    comments:'',
}
export const Ninja_Shirt:Item={
    icon:Ninja_ShirtImg,
    isCollection:false,
    id:257,
    name: "忍者衣",
    Category:Armor,
    Subcategory:NinjaArmor,
    comments:'',
}
export const Ninja_Pants:Item={
    icon:Ninja_PantsImg,
    isCollection:false,
    id:258,
    name: "忍者裤",
    Category:Armor,
    Subcategory:NinjaArmor,
    comments:'',
}
export const NinjaArmorList =[
Ninja_Hood,
Ninja_Shirt,
Ninja_Pants]
import type { Item } from "../../Interface.ts";

import Snow_HoodImg from "../../../assets/icon/Armor/SnowArmor/Snow_Hood.webp"
import Snow_CoatImg from "../../../assets/icon/Armor/SnowArmor/Snow_Coat.webp"
import Snow_PantsImg from "../../../assets/icon/Armor/SnowArmor/Snow_Pants.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {SnowArmor} from "../data.Subcategory.zh-CN.ts";
export const Snow_Hood:Item={
    icon:Snow_HoodImg,
    isCollection:false,
    id:803,
    name: "防雪兜帽",
    Category:Armor,
    Subcategory:SnowArmor,
    comments:'',
}
export const Snow_Coat:Item={
    icon:Snow_CoatImg,
    isCollection:false,
    id:804,
    name: "防雪大衣",
    Category:Armor,
    Subcategory:SnowArmor,
    comments:'',
}
export const Snow_Pants:Item={
    icon:Snow_PantsImg,
    isCollection:false,
    id:805,
    name: "防雪裤",
    Category:Armor,
    Subcategory:SnowArmor,
    comments:'',
}
export const SnowArmorList =[
Snow_Hood,
Snow_Coat,
Snow_Pants]
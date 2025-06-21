import type { Item } from "../../Interface.ts";

import BlueGraduationCapImg from "../../../assets/icon/VanityItems/BlueGraduation/Blue_Graduation_Cap.webp"
import BlueGraduationGownImg from "../../../assets/icon/VanityItems/BlueGraduation/Blue_Graduation_Gown.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {BlueGraduationVanityItems} from "../data.Subcategory.zh-CN.ts";
export const BlueGraduationCap:Item={
    icon:BlueGraduationCapImg,
    isCollection:false,
    id:4994,
    name: "蓝毕业帽",
    Category:VanityItems,
    Subcategory:BlueGraduationVanityItems,
    comments:"肉后 残月 服装商",
}
export const BlueGraduationGown:Item={
    icon:BlueGraduationGownImg,
    isCollection:false,
    id:4997,
    name: "蓝毕业礼服",
    Category:VanityItems,
    Subcategory:BlueGraduationVanityItems,
    comments:"肉后 残月 服装商",
}
export const BlueGraduationVanityItemsList =[
BlueGraduationCap,
BlueGraduationGown]
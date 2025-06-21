import type { Item } from "../../Interface.ts";

import BlackGraduationCapImg from "../../../assets/icon/VanityItems/BlackGraduation/Black_Graduation_Cap.webp"
import BlackGraduationGownImg from "../../../assets/icon/VanityItems/BlackGraduation/Black_Graduation_Gown.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {BlackGraduationVanityItems} from "../data.Subcategory.zh-CN.ts";
export const BlackGraduationCap:Item={
    icon:BlackGraduationCapImg,
    isCollection:false,
    id:4996,
    name: "黑毕业帽",
    Category:VanityItems,
    Subcategory:BlackGraduationVanityItems,
    comments:"肉后 盈凸月 服装商",
}
export const BlackGraduationGown:Item={
    icon:BlackGraduationGownImg,
    isCollection:false,
    id:4999,
    name: "黑毕业礼服",
    Category:VanityItems,
    Subcategory:BlackGraduationVanityItems,
    comments:"肉后 盈凸月 服装商",
}
export const BlackGraduationVanityItemsList =[
BlackGraduationCap,
BlackGraduationGown]
import type { Item } from "../../Interface.ts";

import MaroonGraduationCapImg from "../../../assets/icon/VanityItems/MaroonGraduation/Maroon_Graduation_Cap.webp"
import MaroonGraduationGownImg from "../../../assets/icon/VanityItems/MaroonGraduation/Maroon_Graduation_Gown.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {MaroonGraduationVanityItems} from "../data.Subcategory.zh-CN.ts";
export const MaroonGraduationCap:Item={
    icon:MaroonGraduationCapImg,
    isCollection:false,
    id:4995,
    name: "褐红毕业帽",
    Category:VanityItems,
    Subcategory:MaroonGraduationVanityItems,
    comments:"肉后 峨眉月 服装商",
}
export const MaroonGraduationGown:Item={
    icon:MaroonGraduationGownImg,
    isCollection:false,
    id:4998,
    name: "褐红毕业礼服",
    Category:VanityItems,
    Subcategory:MaroonGraduationVanityItems,
    comments:"肉后 峨眉月 服装商",
}
export const MaroonGraduationVanityItemsList =[
MaroonGraduationCap,
MaroonGraduationGown]
import type { Item } from "../../Interface.ts";

import DryadCoveringsImg from "../../../assets/icon/VanityItems/Dryad/Dryad_Coverings.webp"
import DryadLoinclothImg from "../../../assets/icon/VanityItems/Dryad/Dryad_Loincloth.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {DryadVanityItems} from "../data.Subcategory.zh-CN.ts";
export const DryadCoverings:Item={
    icon:DryadCoveringsImg,
    isCollection:false,
    id:1853,
    name: "树妖遮体服",
    Category:VanityItems,
    Subcategory:DryadVanityItems,
    comments:"万圣节 树妖",
}
export const DryadLoincloth:Item={
    icon:DryadLoinclothImg,
    isCollection:false,
    id:1854,
    name: "树妖腰布",
    Category:VanityItems,
    Subcategory:DryadVanityItems,
    comments:"万圣节 树妖",
}
export const DryadVanityItemsList =[
DryadCoverings,
DryadLoincloth]
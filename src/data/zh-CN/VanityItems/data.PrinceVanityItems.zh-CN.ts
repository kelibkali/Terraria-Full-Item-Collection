import type { Item } from "../../Interface.ts";

import PrinceUniformImg from "../../../assets/icon/VanityItems/Prince/Prince_Uniform.webp"
import PrincePantsImg from "../../../assets/icon/VanityItems/Prince/Prince_Pants.webp"
import PrinceCapeImg from "../../../assets/icon/VanityItems/Prince/Prince_Cape.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {PrinceVanityItems} from "../data.Subcategory.zh-CN.ts";
export const PrinceUniform:Item={
    icon:PrinceUniformImg,
    isCollection:false,
    id:5078,
    name: "王子制服",
    Category:VanityItems,
    Subcategory:PrinceVanityItems,
    comments:"公主",
}
export const PrincePants:Item={
    icon:PrincePantsImg,
    isCollection:false,
    id:5079,
    name: "王子裤",
    Category:VanityItems,
    Subcategory:PrinceVanityItems,
    comments:"公主",
}
export const PrinceCape:Item={
    icon:PrinceCapeImg,
    isCollection:false,
    id:5080,
    name: "王子披风",
    Category:VanityItems,
    Subcategory:PrinceVanityItems,
    comments:"公主",
}
export const PrinceVanityItemsList =[
PrinceUniform,
PrincePants,
PrinceCape]
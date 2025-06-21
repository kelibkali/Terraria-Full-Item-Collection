import type { Item } from "../../Interface.ts";

import MartianUniformHelmetImg from "../../../assets/icon/VanityItems/MartianUniform/Martian_Uniform_Helmet.webp"
import MartianUniformTorsoImg from "../../../assets/icon/VanityItems/MartianUniform/Martian_Uniform_Torso.webp"
import MartianUniformPantsImg from "../../../assets/icon/VanityItems/MartianUniform/Martian_Uniform_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {MartianUniformVanityItems} from "../data.Subcategory.zh-CN.ts";
export const MartianUniformHelmet:Item={
    icon:MartianUniformHelmetImg,
    isCollection:false,
    id:2806,
    name: "火星制服头盔",
    Category:VanityItems,
    Subcategory:MartianUniformVanityItems,
    comments:"火星入侵",
}
export const MartianUniformTorso:Item={
    icon:MartianUniformTorsoImg,
    isCollection:false,
    id:2807,
    name: "火星制服上衣",
    Category:VanityItems,
    Subcategory:MartianUniformVanityItems,
    comments:"火星入侵",
}
export const MartianUniformPants:Item={
    icon:MartianUniformPantsImg,
    isCollection:false,
    id:2808,
    name: "火星制服裤",
    Category:VanityItems,
    Subcategory:MartianUniformVanityItems,
    comments:"火星入侵",
}
export const MartianUniformVanityItemsList =[
MartianUniformHelmet,
MartianUniformTorso,
MartianUniformPants]
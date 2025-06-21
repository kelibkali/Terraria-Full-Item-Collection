import type { Item } from "../../Interface.ts";

import LizardEarsImg from "../../../assets/icon/VanityItems/Lizard/Lizard_Ears.webp"
import LizardTailImg from "../../../assets/icon/VanityItems/Lizard/Lizard_Tail.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {LizardVanityItems} from "../data.Subcategory.zh-CN.ts";
export const LizardEars:Item={
    icon:LizardEarsImg,
    isCollection:false,
    id:4772,
    name: "蜥蜴耳朵",
    Category:VanityItems,
    Subcategory:LizardVanityItems,
    comments:"新月 动物学家",
}
export const LizardTail:Item={
    icon:LizardTailImg,
    isCollection:false,
    id:4773,
    name: "蜥蜴尾巴",
    Category:VanityItems,
    Subcategory:LizardVanityItems,
    comments:"新月 动物学家",
}
export const LizardVanityItemsList =[
LizardEars,
LizardTail
]
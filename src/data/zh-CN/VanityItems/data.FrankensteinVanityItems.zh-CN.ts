import type { Item } from "../../Interface.ts";

import BrideofFrankensteinMaskImg from "../../../assets/icon/VanityItems/Frankenstein/Bride_of_Frankenstein_Mask.webp"
import BrideofFrankensteinDressImg from "../../../assets/icon/VanityItems/Frankenstein/Bride_of_Frankenstein_Dress.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {FrankensteinVanityItems} from "../data.Subcategory.zh-CN.ts";
export const BrideofFrankensteinMask:Item={
    icon:BrideofFrankensteinMaskImg,
    isCollection:false,
    id:1777,
    name: "科学怪人新娘面具",
    Category:VanityItems,
    Subcategory:FrankensteinVanityItems,
    comments:"礼袋",
}
export const BrideofFrankensteinDress:Item={
    icon:BrideofFrankensteinDressImg,
    isCollection:false,
    id:1778,
    name: "科学怪人新娘服",
    Category:VanityItems,
    Subcategory:FrankensteinVanityItems,
    comments:"礼袋",
}
export const FrankensteinVanityItemsList =[
BrideofFrankensteinMask,
BrideofFrankensteinDress]
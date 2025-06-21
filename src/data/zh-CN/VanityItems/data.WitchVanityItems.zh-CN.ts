import type { Item } from "../../Interface.ts";

import WitchHatImg from "../../../assets/icon/VanityItems/Witch/Witch_Hat.webp"
import WitchDressImg from "../../../assets/icon/VanityItems/Witch/Witch_Dress.webp"
import WitchBootsImg from "../../../assets/icon/VanityItems/Witch/Witch_Boots.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {WitchVanityItems} from "../data.Subcategory.zh-CN.ts";
export const WitchHat:Item={
    icon:WitchHatImg,
    isCollection:false,
    id:1766,
    name: "女巫帽",
    Category:VanityItems,
    Subcategory:WitchVanityItems,
    comments:"礼袋",
}
export const WitchDress:Item={
    icon:WitchDressImg,
    isCollection:false,
    id:1775,
    name: "女巫服",
    Category:VanityItems,
    Subcategory:WitchVanityItems,
    comments:"礼袋",
}
export const WitchBoots:Item={
    icon:WitchBootsImg,
    isCollection:false,
    id:1776,
    name: "女巫靴",
    Category:VanityItems,
    Subcategory:WitchVanityItems,
    comments:"礼袋",
}
export const WitchVanityItemsList =[
WitchHat,
WitchDress,
WitchBoots]
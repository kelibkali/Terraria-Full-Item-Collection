import type { Item } from "../../Interface.ts";

import AncientHeaddressImg from "../../../assets/icon/VanityItems/Ancient/Ancient_Headdress.webp"
import AncientGarmentsImg from "../../../assets/icon/VanityItems/Ancient/Ancient_Garments.webp"
import AncientSlacksImg from "../../../assets/icon/VanityItems/Ancient/Ancient_Slacks.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {AncientVanityItems} from "../data.Subcategory.zh-CN.ts";
export const AncientHeaddress:Item={
    icon:AncientHeaddressImg,
    isCollection:false,
    id:3773,
    name: "远古头饰",
    Category:VanityItems,
    Subcategory:AncientVanityItems,
    comments:"丝绸+远古布匹",
}
export const AncientGarments:Item={
    icon:AncientGarmentsImg,
    isCollection:false,
    id:3774,
    name: "远古上衣",
    Category:VanityItems,
    Subcategory:AncientVanityItems,
    comments:"丝绸+远古布匹",
}
export const AncientSlacks:Item={
    icon:AncientSlacksImg,
    isCollection:false,
    id:3775,
    name: "远古裤",
    Category:VanityItems,
    Subcategory:AncientVanityItems,
    comments:"丝绸+远古布匹",
}
export const AncientVanityItemsList =[
AncientHeaddress,
AncientGarments,
AncientSlacks]
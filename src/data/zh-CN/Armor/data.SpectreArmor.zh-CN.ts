import type { Item } from "../../Interface.ts";

import Spectre_HoodImg from "../../../assets/icon/Armor/SpectreArmor/Spectre_Hood.webp"
import Spectre_MaskImg from "../../../assets/icon/Armor/SpectreArmor/Spectre_Mask.webp"
import Spectre_RobeImg from "../../../assets/icon/Armor/SpectreArmor/Spectre_Robe.webp"
import Spectre_PantsImg from "../../../assets/icon/Armor/SpectreArmor/Spectre_Pants.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {SpectreArmor} from "../data.Subcategory.zh-CN.ts";
export const Spectre_Hood:Item={
    icon:Spectre_HoodImg,
    isCollection:false,
    id:1503,
    name: "幽灵兜帽",
    Category:Armor,
    Subcategory:SpectreArmor,
    comments:'',
}
export const Spectre_Mask:Item={
    icon:Spectre_MaskImg,
    isCollection:false,
    id:2189,
    name: "幽灵面具",
    Category:Armor,
    Subcategory:SpectreArmor,
    comments:'',
}
export const Spectre_Robe:Item={
    icon:Spectre_RobeImg,
    isCollection:false,
    id:1504,
    name: "幽灵长袍",
    Category:Armor,
    Subcategory:SpectreArmor,
    comments:'',
}
export const Spectre_Pants:Item={
    icon:Spectre_PantsImg,
    isCollection:false,
    id:1505,
    name: "幽灵裤",
    Category:Armor,
    Subcategory:SpectreArmor,
    comments:'',
}
export const SpectreArmorList =[
Spectre_Hood,
Spectre_Mask,
Spectre_Robe,
Spectre_Pants]
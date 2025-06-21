import type { Item } from "../../Interface.ts";

import Forbidden_MaskImg from "../../../assets/icon/Armor/ForbiddenArmor/Forbidden_Mask.webp"
import Forbidden_RobesImg from "../../../assets/icon/Armor/ForbiddenArmor/Forbidden_Robes.webp"
import Forbidden_TreadsImg from "../../../assets/icon/Armor/ForbiddenArmor/Forbidden_Treads.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {ForbiddenArmor} from "../data.Subcategory.zh-CN.ts";
export const Forbidden_Mask:Item={
    icon:Forbidden_MaskImg,
    isCollection:false,
    id:3776,
    name: "禁戒面具",
    Category:Armor,
    Subcategory:ForbiddenArmor,
    comments:'',
}
export const Forbidden_Robes:Item={
    icon:Forbidden_RobesImg,
    isCollection:false,
    id:3777,
    name: "禁戒长袍",
    Category:Armor,
    Subcategory:ForbiddenArmor,
    comments:'',
}
export const Forbidden_Treads:Item={
    icon:Forbidden_TreadsImg,
    isCollection:false,
    id:3778,
    name: "禁戒裤",
    Category:Armor,
    Subcategory:ForbiddenArmor,
    comments:'',
}
export const ForbiddenArmorList =[
Forbidden_Mask,
Forbidden_Robes,
Forbidden_Treads]
import type { Item } from "../../Interface.ts";

import Tiki_MaskImg from "../../../assets/icon/Armor/TikiArmor/Tiki_Mask.webp"
import Tiki_ShirtImg from "../../../assets/icon/Armor/TikiArmor/Tiki_Shirt.webp"
import Tiki_PantsImg from "../../../assets/icon/Armor/TikiArmor/Tiki_Pants.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {TikiArmor} from "../data.Subcategory.zh-CN.ts";
export const Tiki_Mask:Item={
    icon:Tiki_MaskImg,
    isCollection:false,
    id:1159,
    name: "提基面具",
    Category:Armor,
    Subcategory:TikiArmor,
    comments:'',
}
export const Tiki_Shirt:Item={
    icon:Tiki_ShirtImg,
    isCollection:false,
    id:1160,
    name: "提基衣",
    Category:Armor,
    Subcategory:TikiArmor,
    comments:'',
}
export const Tiki_Pants:Item={
    icon:Tiki_PantsImg,
    isCollection:false,
    id:1161,
    name: "提基裤",
    Category:Armor,
    Subcategory:TikiArmor,
    comments:'',
}
export const TikiArmorList =[
Tiki_Mask,
Tiki_Shirt,
Tiki_Pants]
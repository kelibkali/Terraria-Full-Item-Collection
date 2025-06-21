import type { Item } from "../../Interface.ts";

import Crimson_HelmetImg from "../../../assets/icon/Armor/CrimsonArmor/Crimson_Helmet.webp"
import Crimson_ScalemailImg from "../../../assets/icon/Armor/CrimsonArmor/Crimson_Scalemail.webp"
import Crimson_GreavesImg from "../../../assets/icon/Armor/CrimsonArmor/Crimson_Greaves.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {CrimsonArmor} from "../data.Subcategory.zh-CN.ts";
export const Crimson_Helmet:Item={
    icon:Crimson_HelmetImg,
    isCollection:false,
    id:792,
    name: "猩红头盔",
    Category:Armor,
    Subcategory:CrimsonArmor,
    comments:'',
}
export const Crimson_Scalemail:Item={
    icon:Crimson_ScalemailImg,
    isCollection:false,
    id:793,
    name: "猩红鳞甲",
    Category:Armor,
    Subcategory:CrimsonArmor,
    comments:'',
}
export const Crimson_Greaves:Item={
    icon:Crimson_GreavesImg,
    isCollection:false,
    id:794,
    name: "猩红护胫",
    Category:Armor,
    Subcategory:CrimsonArmor,
    comments:'',
}
export const CrimsonArmorList =[
Crimson_Helmet,
Crimson_Scalemail,
Crimson_Greaves]
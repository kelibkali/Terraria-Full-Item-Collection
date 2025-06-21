import type { Item } from "../../Interface.ts";

import Stardust_HelmetImg from "../../../assets/icon/Armor/StardustArmor/Stardust_Helmet.webp"
import Stardust_PlateImg from "../../../assets/icon/Armor/StardustArmor/Stardust_Plate.webp"
import Stardust_LeggingsImg from "../../../assets/icon/Armor/StardustArmor/Stardust_Leggings.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {StardustArmor} from "../data.Subcategory.zh-CN.ts";
export const Stardust_Helmet:Item={
    icon:Stardust_HelmetImg,
    isCollection:false,
    id:3381,
    name: "星尘头盔",
    Category:Armor,
    Subcategory:StardustArmor,
    comments:'',
}
export const Stardust_Plate:Item={
    icon:Stardust_PlateImg,
    isCollection:false,
    id:3382,
    name: "星尘板甲",
    Category:Armor,
    Subcategory:StardustArmor,
    comments:'',
}
export const Stardust_Leggings:Item={
    icon:Stardust_LeggingsImg,
    isCollection:false,
    id:3383,
    name: "星尘护腿",
    Category:Armor,
    Subcategory:StardustArmor,
    comments:'',
}
export const StardustArmorList =[
Stardust_Helmet,
Stardust_Plate,
Stardust_Leggings]
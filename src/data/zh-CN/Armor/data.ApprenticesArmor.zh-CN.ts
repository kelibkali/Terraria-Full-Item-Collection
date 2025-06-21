import type { Item } from "../../Interface.ts";

import Apprentices_HatImg from "../../../assets/icon/Armor/ApprenticesArmor/Apprentices_Hat.webp"
import Apprentices_RobeImg from "../../../assets/icon/Armor/ApprenticesArmor/Apprentices_Robe.webp"
import Apprentices_TrousersImg from "../../../assets/icon/Armor/ApprenticesArmor/Apprentices_Trousers.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {ApprenticesArmor} from "../data.Subcategory.zh-CN.ts";
export const Apprentices_Hat:Item={
    icon:Apprentices_HatImg,
    isCollection:false,
    id:3797,
    name: "学徒帽",
    Category:Armor,
    Subcategory:ApprenticesArmor,
    comments:'',
}
export const Apprentices_Robe:Item={
    icon:Apprentices_RobeImg,
    isCollection:false,
    id:3798,
    name: "学徒长袍",
    Category:Armor,
    Subcategory:ApprenticesArmor,
    comments:'',
}
export const Apprentices_Trousers:Item={
    icon:Apprentices_TrousersImg,
    isCollection:false,
    id:3799,
    name: "学徒裤",
    Category:Armor,
    Subcategory:ApprenticesArmor,
    comments:'',
}
export const ApprenticesArmorList =[
Apprentices_Hat,
Apprentices_Robe,
Apprentices_Trousers]
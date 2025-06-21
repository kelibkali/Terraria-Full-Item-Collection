import type { Item } from "../../Interface.ts";

import Squires_Great_HelmImg from "../../../assets/icon/Armor/SquiresArmor/Squires_Great_Helm.webp"
import Squires_PlatingImg from "../../../assets/icon/Armor/SquiresArmor/Squires_Plating.webp"
import Squires_GreavesImg from "../../../assets/icon/Armor/SquiresArmor/Squires_Greaves.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {SquiresArmor} from "../data.Subcategory.zh-CN.ts";
export const Squires_Great_Helm:Item={
    icon:Squires_Great_HelmImg,
    isCollection:false,
    id:3800,
    name: "侍卫大头盔",
    Category:Armor,
    Subcategory:SquiresArmor,
    comments:'',
}
export const Squires_Plating:Item={
    icon:Squires_PlatingImg,
    isCollection:false,
    id:3801,
    name: "侍卫板甲",
    Category:Armor,
    Subcategory:SquiresArmor,
    comments:'',
}
export const Squires_Greaves:Item={
    icon:Squires_GreavesImg,
    isCollection:false,
    id:3802,
    name: "侍卫护胫",
    Category:Armor,
    Subcategory:SquiresArmor,
    comments:'',
}
export const SquiresArmorList =[
Squires_Great_Helm,
Squires_Plating,
Squires_Greaves]
import type { Item } from "../../Interface.ts";

import Dark_Artists_HatImg from "../../../assets/icon/Armor/DarkArtistsArmor/Dark_Artists_Hat.webp"
import Dark_Artists_RobesImg from "../../../assets/icon/Armor/DarkArtistsArmor/Dark_Artists_Robes.webp"
import Dark_Artists_LeggingsImg from "../../../assets/icon/Armor/DarkArtistsArmor/Dark_Artists_Leggings.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {DarkArtistsArmor} from "../data.Subcategory.zh-CN.ts";
export const Dark_Artists_Hat:Item={
    icon:Dark_Artists_HatImg,
    isCollection:false,
    id:3874,
    name: "暗黑艺术家帽子",
    Category:Armor,
    Subcategory:DarkArtistsArmor,
    comments:'',
}
export const Dark_Artists_Robes:Item={
    icon:Dark_Artists_RobesImg,
    isCollection:false,
    id:3875,
    name: "暗黑艺术家长袍",
    Category:Armor,
    Subcategory:DarkArtistsArmor,
    comments:'',
}
export const Dark_Artists_Leggings:Item={
    icon:Dark_Artists_LeggingsImg,
    isCollection:false,
    id:3876,
    name: "暗黑艺术家护腿",
    Category:Armor,
    Subcategory:DarkArtistsArmor,
    comments:'',
}
export const DarkArtistsArmorList =[
Dark_Artists_Hat,
Dark_Artists_Robes,
Dark_Artists_Leggings]
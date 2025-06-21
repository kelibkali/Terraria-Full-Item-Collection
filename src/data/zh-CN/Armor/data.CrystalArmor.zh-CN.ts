import type { Item } from "../../Interface.ts";

import Crystal_Assassin_HoodImg from "../../../assets/icon/Armor/CrystalArmor/Crystal_Assassin_Hood.webp"
import Crystal_Assassin_ShirtImg from "../../../assets/icon/Armor/CrystalArmor/Crystal_Assassin_Shirt.webp"
import Crystal_Assassin_PantsImg from "../../../assets/icon/Armor/CrystalArmor/Crystal_Assassin_Pants.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {CrystalArmor} from "../data.Subcategory.zh-CN.ts";
export const Crystal_Assassin_Hood:Item={
    icon:Crystal_Assassin_HoodImg,
    isCollection:false,
    id:4982,
    name: "水晶刺客兜帽",
    Category:Armor,
    Subcategory:CrystalArmor,
    comments:'',
}
export const Crystal_Assassin_Shirt:Item={
    icon:Crystal_Assassin_ShirtImg,
    isCollection:false,
    id:4983,
    name: "水晶刺客上衣",
    Category:Armor,
    Subcategory:CrystalArmor,
    comments:'',
}
export const Crystal_Assassin_Pants:Item={
    icon:Crystal_Assassin_PantsImg,
    isCollection:false,
    id:4984,
    name: "水晶刺客裤",
    Category:Armor,
    Subcategory:CrystalArmor,
    comments:'',
}
export const CrystalArmorList =[
Crystal_Assassin_Hood,
Crystal_Assassin_Shirt,
Crystal_Assassin_Pants]
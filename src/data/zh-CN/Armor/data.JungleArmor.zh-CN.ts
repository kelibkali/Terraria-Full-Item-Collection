import type { Item } from "../../Interface.ts";

import Jungle_HatImg from "../../../assets/icon/Armor/JungleArmor/Jungle_Hat.webp"
import Jungle_ShirtImg from "../../../assets/icon/Armor/JungleArmor/Jungle_Shirt.webp"
import Jungle_PantsImg from "../../../assets/icon/Armor/JungleArmor/Jungle_Pants.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {JungleArmor} from "../data.Subcategory.zh-CN.ts";
export const Jungle_Hat:Item={
    icon:Jungle_HatImg,
    isCollection:false,
    id:228,
    name: "丛林帽",
    Category:Armor,
    Subcategory:JungleArmor,
    comments:'',
}
export const Jungle_Shirt:Item={
    icon:Jungle_ShirtImg,
    isCollection:false,
    id:229,
    name: "丛林衣",
    Category:Armor,
    Subcategory:JungleArmor,
    comments:'',
}
export const Jungle_Pants:Item={
    icon:Jungle_PantsImg,
    isCollection:false,
    id:230,
    name: "丛林裤",
    Category:Armor,
    Subcategory:JungleArmor,
    comments:'',
}
export const JungleArmorList =[
Jungle_Hat,
Jungle_Shirt,
Jungle_Pants]
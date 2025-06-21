import type { Item } from "../../Interface.ts";

import Angler_HatImg from "../../../assets/icon/Armor/AnglerArmor/Angler_Hat.webp"
import Angler_VestImg from "../../../assets/icon/Armor/AnglerArmor/Angler_Vest.webp"
import Angler_PantsImg from "../../../assets/icon/Armor/AnglerArmor/Angler_Pants.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {AnglerArmor} from "../data.Subcategory.zh-CN.ts";
export const Angler_Hat:Item={
    icon:Angler_HatImg,
    isCollection:false,
    id:2367,
    name: "渔夫帽",
    Category:Armor,
    Subcategory:AnglerArmor,
    comments:'',
}
export const Angler_Vest:Item={
    icon:Angler_VestImg,
    isCollection:false,
    id:2368,
    name: "渔夫背心",
    Category:Armor,
    Subcategory:AnglerArmor,
    comments:'',
}
export const Angler_Pants:Item={
    icon:Angler_PantsImg,
    isCollection:false,
    id:2369,
    name: "渔夫裤",
    Category:Armor,
    Subcategory:AnglerArmor,
    comments:'',
}
export const AnglerArmorList =[
Angler_Hat,
Angler_Vest,
Angler_Pants]
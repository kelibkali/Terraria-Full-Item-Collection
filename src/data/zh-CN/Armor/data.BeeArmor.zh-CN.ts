import type { Item } from "../../Interface.ts";

import Bee_HeadgearImg from "../../../assets/icon/Armor/BeeArmor/Bee_Headgear.webp"
import Bee_BreastplateImg from "../../../assets/icon/Armor/BeeArmor/Bee_Breastplate.webp"
import Bee_GreavesImg from "../../../assets/icon/Armor/BeeArmor/Bee_Greaves.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {BeeArmor} from "../data.Subcategory.zh-CN.ts";
export const Bee_Headgear:Item={
    icon:Bee_HeadgearImg,
    isCollection:false,
    id:2361,
    name: "蜜蜂头饰",
    Category:Armor,
    Subcategory:BeeArmor,
    comments:'',
}
export const Bee_Breastplate:Item={
    icon:Bee_BreastplateImg,
    isCollection:false,
    id:2362,
    name: "蜜蜂胸甲",
    Category:Armor,
    Subcategory:BeeArmor,
    comments:'',
}
export const Bee_Greaves:Item={
    icon:Bee_GreavesImg,
    isCollection:false,
    id:2363,
    name: "蜜蜂护胫",
    Category:Armor,
    Subcategory:BeeArmor,
    comments:'',
}
export const BeeArmorList =[
Bee_Headgear,
Bee_Breastplate,
Bee_Greaves]
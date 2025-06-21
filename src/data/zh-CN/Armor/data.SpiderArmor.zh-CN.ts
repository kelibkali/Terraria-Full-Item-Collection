import type { Item } from "../../Interface.ts";

import Spider_MaskImg from "../../../assets/icon/Armor/SpiderArmor/Spider_Mask.webp"
import Spider_BreastplateImg from "../../../assets/icon/Armor/SpiderArmor/Spider_Breastplate.webp"
import Spider_GreavesImg from "../../../assets/icon/Armor/SpiderArmor/Spider_Greaves.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {SpiderArmor} from "../data.Subcategory.zh-CN.ts";
export const Spider_Mask:Item={
    icon:Spider_MaskImg,
    isCollection:false,
    id:2370,
    name: "蜘蛛面具",
    Category:Armor,
    Subcategory:SpiderArmor,
    comments:'',
}
export const Spider_Breastplate:Item={
    icon:Spider_BreastplateImg,
    isCollection:false,
    id:2371,
    name: "蜘蛛胸甲",
    Category:Armor,
    Subcategory:SpiderArmor,
    comments:'',
}
export const Spider_Greaves:Item={
    icon:Spider_GreavesImg,
    isCollection:false,
    id:2372,
    name: "蜘蛛护胫",
    Category:Armor,
    Subcategory:SpiderArmor,
    comments:'',
}
export const SpiderArmorList =[
Spider_Mask,
Spider_Breastplate,
Spider_Greaves]
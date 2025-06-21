import type { Item } from "../../Interface.ts";

import Magic_HatImg from "../../../assets/icon/Armor/TravelMerchantArmor/Magic_Hat.webp"
import GiImg from "../../../assets/icon/Armor/TravelMerchantArmor/Gi.webp"
import Mystic_RobeImg from "../../../assets/icon/Armor/TravelMerchantArmor/Mystic_Robe.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {TravelMerchantArmor} from "../data.Subcategory.zh-CN.ts";
export const Magic_Hat:Item={
    icon:Magic_HatImg,
    isCollection:false,
    id:2275,
    name: "魔法帽",
    Category:Armor,
    Subcategory:TravelMerchantArmor,
    comments:'',
}
export const Gi:Item={
    icon:GiImg,
    isCollection:false,
    id:2277,
    name: "稽古衣",
    Category:Armor,
    Subcategory:TravelMerchantArmor,
    comments:'',
}
export const Mystic_Robe:Item={
    icon:Mystic_RobeImg,
    isCollection:false,
    id:2279,
    name: "神秘长袍",
    Category:Armor,
    Subcategory:TravelMerchantArmor,
    comments:'',
}
export const TravelMerchantArmorList =[
Magic_Hat,
Gi,
Mystic_Robe]
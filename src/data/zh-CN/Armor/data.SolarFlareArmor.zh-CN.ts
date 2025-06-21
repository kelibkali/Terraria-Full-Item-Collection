import type { Item } from "../../Interface.ts";

import Solar_Flare_HelmetImg from "../../../assets/icon/Armor/SolarFlareArmor/Solar_Flare_Helmet.webp"
import Solar_Flare_BreastplateImg from "../../../assets/icon/Armor/SolarFlareArmor/Solar_Flare_Breastplate.webp"
import Solar_Flare_LeggingsImg from "../../../assets/icon/Armor/SolarFlareArmor/Solar_Flare_Leggings.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {SolarFlareArmor} from "../data.Subcategory.zh-CN.ts";
export const Solar_Flare_Helmet:Item={
    icon:Solar_Flare_HelmetImg,
    isCollection:false,
    id:2763,
    name: "耀斑头盔",
    Category:Armor,
    Subcategory:SolarFlareArmor,
    comments:'',
}
export const Solar_Flare_Breastplate:Item={
    icon:Solar_Flare_BreastplateImg,
    isCollection:false,
    id:2764,
    name: "耀斑胸甲",
    Category:Armor,
    Subcategory:SolarFlareArmor,
    comments:'',
}
export const Solar_Flare_Leggings:Item={
    icon:Solar_Flare_LeggingsImg,
    isCollection:false,
    id:2765,
    name: "耀斑护腿",
    Category:Armor,
    Subcategory:SolarFlareArmor,
    comments:'',
}
export const SolarFlareArmorList =[
Solar_Flare_Helmet,
Solar_Flare_Breastplate,
Solar_Flare_Leggings]
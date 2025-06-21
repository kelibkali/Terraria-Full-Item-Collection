import type { Item } from "../../Interface.ts";

import Molten_HelmetImg from "../../../assets/icon/Armor/MoltenArmor/Molten_Helmet.webp"
import Molten_BreastplateImg from "../../../assets/icon/Armor/MoltenArmor/Molten_Breastplate.webp"
import Molten_GreavesImg from "../../../assets/icon/Armor/MoltenArmor/Molten_Greaves.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {MoltenArmor} from "../data.Subcategory.zh-CN.ts";
export const Molten_Helmet:Item={
    icon:Molten_HelmetImg,
    isCollection:false,
    id:231,
    name: "熔岩头盔",
    Category:Armor,
    Subcategory:MoltenArmor,
    comments:'',
}
export const Molten_Breastplate:Item={
    icon:Molten_BreastplateImg,
    isCollection:false,
    id:232,
    name: "熔岩胸甲",
    Category:Armor,
    Subcategory:MoltenArmor,
    comments:'',
}
export const Molten_Greaves:Item={
    icon:Molten_GreavesImg,
    isCollection:false,
    id:233,
    name: "熔岩护胫",
    Category:Armor,
    Subcategory:MoltenArmor,
    comments:'',
}
export const MoltenArmorList =[
Molten_Helmet,
Molten_Breastplate,
Molten_Greaves]
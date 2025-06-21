import type { Item } from "../../Interface.ts";

import FlipperImg from "../../../assets/icon/Accessories/Diving/Flipper.webp"
import Diving_GearImg from "../../../assets/icon/Accessories/Diving/Diving_Gear.webp"
import Jellyfish_Diving_GearImg from "../../../assets/icon/Accessories/Diving/Jellyfish_Diving_Gear.webp"
import Arctic_Diving_GearImg from "../../../assets/icon/Accessories/Diving/Arctic_Diving_Gear.webp"

import { Accessories} from "../data.Category.zh-CN.ts";
import {Diving} from "../data.Subcategory.zh-CN.ts";
export const Flipper:Item={
    icon:FlipperImg,
    isCollection:false,
    id:187,
    name: "脚蹼",
    Category:Accessories,
    Subcategory:Diving,
    comments:'',
}
export const Diving_Gear:Item={
    icon:Diving_GearImg,
    isCollection:false,
    id:394,
    name: "潜水装备",
    Category:Accessories,
    Subcategory:Diving,
    comments:'',
}
export const Jellyfish_Diving_Gear:Item={
    icon:Jellyfish_Diving_GearImg,
    isCollection:false,
    id:1860,
    name: "水母潜水装备",
    Category:Accessories,
    Subcategory:Diving,
    comments:'',
}
export const Arctic_Diving_Gear:Item={
    icon:Arctic_Diving_GearImg,
    isCollection:false,
    id:1861,
    name: "北极潜水装备",
    Category:Accessories,
    Subcategory:Diving,
    comments:'',
}
export const DivingList =[
Flipper,
Diving_Gear,
Jellyfish_Diving_Gear,
Arctic_Diving_Gear]
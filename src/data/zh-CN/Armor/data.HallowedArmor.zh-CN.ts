import type { Item } from "../../Interface.ts";

import Hallowed_HelmetImg from "../../../assets/icon/Armor/HallowedArmor/Hallowed_Helmet.webp"
import Hallowed_HeadgearImg from "../../../assets/icon/Armor/HallowedArmor/Hallowed_Headgear.webp"
import Hallowed_MaskImg from "../../../assets/icon/Armor/HallowedArmor/Hallowed_Mask.webp"
import Hallowed_HoodImg from "../../../assets/icon/Armor/HallowedArmor/Hallowed_Hood.webp"
import Hallowed_Plate_MailImg from "../../../assets/icon/Armor/HallowedArmor/Hallowed_Plate_Mail.webp"
import Hallowed_GreavesImg from "../../../assets/icon/Armor/HallowedArmor/Hallowed_Greaves.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {HallowedArmor} from "../data.Subcategory.zh-CN.ts";
export const Hallowed_Helmet:Item={
    icon:Hallowed_HelmetImg,
    isCollection:false,
    id:553,
    name: "神圣头盔",
    Category:Armor,
    Subcategory:HallowedArmor,
    comments:'',
}
export const Hallowed_Headgear:Item={
    icon:Hallowed_HeadgearImg,
    isCollection:false,
    id:558,
    name: "神圣头饰",
    Category:Armor,
    Subcategory:HallowedArmor,
    comments:'',
}
export const Hallowed_Mask:Item={
    icon:Hallowed_MaskImg,
    isCollection:false,
    id:559,
    name: "神圣面具",
    Category:Armor,
    Subcategory:HallowedArmor,
    comments:'',
}
export const Hallowed_Hood:Item={
    icon:Hallowed_HoodImg,
    isCollection:false,
    id:4873,
    name: "神圣兜帽",
    Category:Armor,
    Subcategory:HallowedArmor,
    comments:'',
}
export const Hallowed_Plate_Mail:Item={
    icon:Hallowed_Plate_MailImg,
    isCollection:false,
    id:551,
    name: "神圣板甲",
    Category:Armor,
    Subcategory:HallowedArmor,
    comments:'',
}
export const Hallowed_Greaves:Item={
    icon:Hallowed_GreavesImg,
    isCollection:false,
    id:552,
    name: "神圣护胫",
    Category:Armor,
    Subcategory:HallowedArmor,
    comments:'',
}
export const HallowedArmorList =[
Hallowed_Helmet,
Hallowed_Headgear,
Hallowed_Mask,
Hallowed_Hood,
Hallowed_Plate_Mail,
Hallowed_Greaves]
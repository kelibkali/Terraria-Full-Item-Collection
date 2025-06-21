import type { Item } from "../../Interface.ts";

import Chlorophyte_MaskImg from "../../../assets/icon/Armor/ChlorophyteArmor/Chlorophyte_Mask.webp"
import Chlorophyte_HelmetImg from "../../../assets/icon/Armor/ChlorophyteArmor/Chlorophyte_Helmet.webp"
import Chlorophyte_HeadgearImg from "../../../assets/icon/Armor/ChlorophyteArmor/Chlorophyte_Headgear.webp"
import Chlorophyte_Plate_MailImg from "../../../assets/icon/Armor/ChlorophyteArmor/Chlorophyte_Plate_Mail.webp"
import Chlorophyte_GreavesImg from "../../../assets/icon/Armor/ChlorophyteArmor/Chlorophyte_Greaves.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {ChlorophyteArmor} from "../data.Subcategory.zh-CN.ts";
export const Chlorophyte_Mask:Item={
    icon:Chlorophyte_MaskImg,
    isCollection:false,
    id:1001,
    name: "叶绿面具",
    Category:Armor,
    Subcategory:ChlorophyteArmor,
    comments:'',
}
export const Chlorophyte_Helmet:Item={
    icon:Chlorophyte_HelmetImg,
    isCollection:false,
    id:1002,
    name: "叶绿头盔",
    Category:Armor,
    Subcategory:ChlorophyteArmor,
    comments:'',
}
export const Chlorophyte_Headgear:Item={
    icon:Chlorophyte_HeadgearImg,
    isCollection:false,
    id:1003,
    name: "叶绿头饰",
    Category:Armor,
    Subcategory:ChlorophyteArmor,
    comments:'',
}
export const Chlorophyte_Plate_Mail:Item={
    icon:Chlorophyte_Plate_MailImg,
    isCollection:false,
    id:1004,
    name: "叶绿板甲",
    Category:Armor,
    Subcategory:ChlorophyteArmor,
    comments:'',
}
export const Chlorophyte_Greaves:Item={
    icon:Chlorophyte_GreavesImg,
    isCollection:false,
    id:1005,
    name: "叶绿护胫",
    Category:Armor,
    Subcategory:ChlorophyteArmor,
    comments:'',
}
export const ChlorophyteArmorList =[
Chlorophyte_Mask,
Chlorophyte_Helmet,
Chlorophyte_Headgear,
Chlorophyte_Plate_Mail,
Chlorophyte_Greaves]
import type { Item } from "../../Interface.ts";

import Huntresss_WigImg from "../../../assets/icon/Armor/HuntresssArmor/Huntresss_Wig.webp"
import Huntresss_JerkinImg from "../../../assets/icon/Armor/HuntresssArmor/Huntresss_Jerkin.webp"
import Huntresss_PantsImg from "../../../assets/icon/Armor/HuntresssArmor/Huntresss_Pants.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {HuntresssArmor} from "../data.Subcategory.zh-CN.ts";
export const Huntresss_Wig:Item={
    icon:Huntresss_WigImg,
    isCollection:false,
    id:3803,
    name: "女猎人假发",
    Category:Armor,
    Subcategory:HuntresssArmor,
    comments:'',
}
export const Huntresss_Jerkin:Item={
    icon:Huntresss_JerkinImg,
    isCollection:false,
    id:3804,
    name: "女猎人上衣",
    Category:Armor,
    Subcategory:HuntresssArmor,
    comments:'',
}
export const Huntresss_Pants:Item={
    icon:Huntresss_PantsImg,
    isCollection:false,
    id:3805,
    name: "女猎人裤",
    Category:Armor,
    Subcategory:HuntresssArmor,
    comments:'',
}
export const HuntresssArmorList =[
Huntresss_Wig,
Huntresss_Jerkin,
Huntresss_Pants]
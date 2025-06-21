import type { Item } from "../../Interface.ts";

import Turtle_HelmetImg from "../../../assets/icon/Armor/TurtleArmor/Turtle_Helmet.webp"
import Turtle_Scale_MailImg from "../../../assets/icon/Armor/TurtleArmor/Turtle_Scale_Mail.webp"
import Turtle_LeggingsImg from "../../../assets/icon/Armor/TurtleArmor/Turtle_Leggings.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {TurtleArmor} from "../data.Subcategory.zh-CN.ts";
export const Turtle_Helmet:Item={
    icon:Turtle_HelmetImg,
    isCollection:false,
    id:1316,
    name: "海龟头盔",
    Category:Armor,
    Subcategory:TurtleArmor,
    comments:'',
}
export const Turtle_Scale_Mail:Item={
    icon:Turtle_Scale_MailImg,
    isCollection:false,
    id:1317,
    name: "海龟铠甲",
    Category:Armor,
    Subcategory:TurtleArmor,
    comments:'',
}
export const Turtle_Leggings:Item={
    icon:Turtle_LeggingsImg,
    isCollection:false,
    id:1318,
    name: "海龟护腿",
    Category:Armor,
    Subcategory:TurtleArmor,
    comments:'',
}
export const TurtleArmorList =[
Turtle_Helmet,
Turtle_Scale_Mail,
Turtle_Leggings]
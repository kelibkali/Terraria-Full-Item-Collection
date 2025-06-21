import type { Item } from "../../Interface.ts";

import Meteor_HelmetImg from "../../../assets/icon/Armor/MeteorArmor/Meteor_Helmet.webp"
import Meteor_SuitImg from "../../../assets/icon/Armor/MeteorArmor/Meteor_Suit.webp"
import Meteor_LeggingsImg from "../../../assets/icon/Armor/MeteorArmor/Meteor_Leggings.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {MeteorArmor} from "../data.Subcategory.zh-CN.ts";
export const Meteor_Helmet:Item={
    icon:Meteor_HelmetImg,
    isCollection:false,
    id:123,
    name: "流星头盔",
    Category:Armor,
    Subcategory:MeteorArmor,
    comments:'',
}
export const Meteor_Suit:Item={
    icon:Meteor_SuitImg,
    isCollection:false,
    id:124,
    name: "流星护甲",
    Category:Armor,
    Subcategory:MeteorArmor,
    comments:'',
}
export const Meteor_Leggings:Item={
    icon:Meteor_LeggingsImg,
    isCollection:false,
    id:125,
    name: "流星护腿",
    Category:Armor,
    Subcategory:MeteorArmor,
    comments:'',
}
export const MeteorArmorList =[
Meteor_Helmet,
Meteor_Suit,
Meteor_Leggings]
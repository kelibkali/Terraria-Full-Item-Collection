import type { Item } from "../../Interface.ts";

import GentlemansBeardImg from "../../../assets/icon/VanityItems/GentlemanBeard/Gentlemans_Beard.webp"
import GentlemansLongBeardImg from "../../../assets/icon/VanityItems/GentlemanBeard/Gentlemans_Long_Beard.webp"
import GentlemansMagnificentBeardImg from "../../../assets/icon/VanityItems/GentlemanBeard/Gentlemans_Magnificent_Beard.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {GentlemanBeardVanityItems} from "../data.Subcategory.zh-CN.ts";
export const GentlemansBeard:Item={
    icon:GentlemansBeardImg,
    isCollection:false,
    id:5104,
    name: "绅士胡子",
    Category:VanityItems,
    Subcategory:GentlemanBeardVanityItems,
    comments:"发型师",
}
export const GentlemansLongBeard:Item={
    icon:GentlemansLongBeardImg,
    isCollection:false,
    id:5105,
    name: "绅士长胡子",
    Category:VanityItems,
    Subcategory:GentlemanBeardVanityItems,
    comments:"绅士胡子生长获得",
}
export const GentlemansMagnificentBeard:Item={
    icon:GentlemansMagnificentBeardImg,
    isCollection:false,
    id:5106,
    name: "绅士大胡子",
    Category:VanityItems,
    Subcategory:GentlemanBeardVanityItems,
    comments:"绅士长胡子生长获得",
}
export const GentlemanBeardVanityItemsList =[
GentlemansBeard,
GentlemansLongBeard,
GentlemansMagnificentBeard]
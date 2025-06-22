import type { Item } from "../../Interface.ts";

import ArkhalisHoodImg from "../../../assets/icon/Developers/Arkhalis/Arkhalis_Hood.webp"
import ArkhalisBodiceImg from "../../../assets/icon/Developers/Arkhalis/Arkhalis_Bodice.webp"
import ArkhalisTightsImg from "../../../assets/icon/Developers/Arkhalis/Arkhalis_Tights.webp"
import ArkhalisLightwingsImg from "../../../assets/icon/Developers/Arkhalis/Arkhalis_Lightwings.webp"

import { Developers} from "../data.Category.zh-CN.ts";
import {ArkhalisDevelopers} from "../data.Subcategory.zh-CN.ts";
export const ArkhalisHood:Item={
    icon:ArkhalisHoodImg,
    isCollection:false,
    id:3921,
    name: "Arkhalis的兜帽",
    Category:Developers,
    Subcategory:ArkhalisDevelopers,
    comments:"",
}
export const ArkhalisBodice:Item={
    icon:ArkhalisBodiceImg,
    isCollection:false,
    id:3922,
    name: "Arkhalis的紧身衣",
    Category:Developers,
    Subcategory:ArkhalisDevelopers,
    comments:"",
}
export const ArkhalisTights:Item={
    icon:ArkhalisTightsImg,
    isCollection:false,
    id:3923,
    name: "Arkhalis的紧身服",
    Category:Developers,
    Subcategory:ArkhalisDevelopers,
    comments:"",
}
export const ArkhalisLightwings:Item={
    icon:ArkhalisLightwingsImg,
    isCollection:false,
    id:3924,
    name: "Arkhalis的飞翼",
    Category:Developers,
    Subcategory:ArkhalisDevelopers,
    comments:"",
}
export const ArkhalisDevelopersList =[
ArkhalisHood,
ArkhalisBodice,
ArkhalisTights,
ArkhalisLightwings]
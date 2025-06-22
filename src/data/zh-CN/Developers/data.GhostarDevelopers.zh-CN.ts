import type { Item } from "../../Interface.ts";

import GhostarsInfinityEightImg from "../../../assets/icon/Developers/Ghostar/Ghostars_Infinity_Eight.webp"
import GhostarsSoulJarImg from "../../../assets/icon/Developers/Ghostar/Ghostars_Soul_Jar.webp"
import GhostarsGarbImg from "../../../assets/icon/Developers/Ghostar/Ghostars_Garb.webp"
import GhostarsTightsImg from "../../../assets/icon/Developers/Ghostar/Ghostars_Tights.webp"

import { Developers} from "../data.Category.zh-CN.ts";
import {GhostarDevelopers} from "../data.Subcategory.zh-CN.ts";
export const GhostarsInfinityEight:Item={
    icon:GhostarsInfinityEightImg,
    isCollection:false,
    id:4730,
    name: "Ghostar的无极翼",
    Category:Developers,
    Subcategory:GhostarDevelopers,
    comments:"",
}
export const GhostarsSoulJar:Item={
    icon:GhostarsSoulJarImg,
    isCollection:false,
    id:4732,
    name: "Ghostar的魂罐",
    Category:Developers,
    Subcategory:GhostarDevelopers,
    comments:"",
}
export const GhostarsGarb:Item={
    icon:GhostarsGarbImg,
    isCollection:false,
    id:4733,
    name: "Ghostar的上衣",
    Category:Developers,
    Subcategory:GhostarDevelopers,
    comments:"",
}
export const GhostarsTights:Item={
    icon:GhostarsTightsImg,
    isCollection:false,
    id:4734,
    name: "Ghostar的紧身裤",
    Category:Developers,
    Subcategory:GhostarDevelopers,
    comments:"",
}
export const GhostarDevelopersList =[
GhostarsInfinityEight,
GhostarsSoulJar,
GhostarsGarb,
GhostarsTights]
import type { Item } from "../../Interface.ts";

import LokisHelmetImg from "../../../assets/icon/Developers/Loki/Lokis_Helmet.webp"
import LokisBreastplateImg from "../../../assets/icon/Developers/Loki/Lokis_Breastplate.webp"
import LokisGreavesImg from "../../../assets/icon/Developers/Loki/Lokis_Greaves.webp"
import LokisWingsImg from "../../../assets/icon/Developers/Loki/Lokis_Wings.webp"
import LokisDyeImg from "../../../assets/icon/Developers/Loki/Lokis_Dye.webp"

import { Developers} from "../data.Category.zh-CN.ts";
import {LokiDevelopers} from "../data.Subcategory.zh-CN.ts";
export const LokisHelmet:Item={
    icon:LokisHelmetImg,
    isCollection:false,
    id:3589,
    name: "Loki的头盔",
    Category:Developers,
    Subcategory:LokiDevelopers,
    comments:"",
}
export const LokisBreastplate:Item={
    icon:LokisBreastplateImg,
    isCollection:false,
    id:3590,
    name: "Loki的胸甲",
    Category:Developers,
    Subcategory:LokiDevelopers,
    comments:"",
}
export const LokisGreaves:Item={
    icon:LokisGreavesImg,
    isCollection:false,
    id:3591,
    name: "Loki的护胫",
    Category:Developers,
    Subcategory:LokiDevelopers,
    comments:"",
}
export const LokisWings:Item={
    icon:LokisWingsImg,
    isCollection:false,
    id:3592,
    name: "Loki的翅膀",
    Category:Developers,
    Subcategory:LokiDevelopers,
    comments:"",
}
export const LokisDye:Item={
    icon:LokisDyeImg,
    isCollection:false,
    id:3599,
    name: "Loki的染料",
    Category:Developers,
    Subcategory:LokiDevelopers,
    comments:"",
}
export const LokiDevelopersList =[
LokisHelmet,
LokisBreastplate,
LokisGreaves,
LokisWings,
LokisDye]
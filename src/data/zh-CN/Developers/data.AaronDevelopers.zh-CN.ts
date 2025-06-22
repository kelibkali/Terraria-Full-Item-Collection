import type { Item } from "../../Interface.ts";

import AaronsHelmetImg from "../../../assets/icon/Developers/Aaron/Aarons_Helmet.webp"
import AaronsBreastplateImg from "../../../assets/icon/Developers/Aaron/Aarons_Breastplate.webp"
import AaronsLeggingsImg from "../../../assets/icon/Developers/Aaron/Aarons_Leggings.webp"

import { Developers} from "../data.Category.zh-CN.ts";
import {AaronDevelopers} from "../data.Subcategory.zh-CN.ts";
export const AaronsHelmet:Item={
    icon:AaronsHelmetImg,
    isCollection:false,
    id:1566,
    name: "Aaron的头盔",
    Category:Developers,
    Subcategory:AaronDevelopers,
    comments:"",
}
export const AaronsBreastplate:Item={
    icon:AaronsBreastplateImg,
    isCollection:false,
    id:1567,
    name: "Aaron的胸甲",
    Category:Developers,
    Subcategory:AaronDevelopers,
    comments:"",
}
export const AaronsLeggings:Item={
    icon:AaronsLeggingsImg,
    isCollection:false,
    id:1568,
    name: "Aaron的护腿",
    Category:Developers,
    Subcategory:AaronDevelopers,
    comments:"",
}
export const AaronDevelopersList =[
AaronsHelmet,
AaronsBreastplate,
AaronsLeggings]
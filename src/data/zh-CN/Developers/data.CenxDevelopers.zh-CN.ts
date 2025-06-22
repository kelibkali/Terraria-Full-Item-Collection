import type { Item } from "../../Interface.ts";

import CenxsTiaraImg from "../../../assets/icon/Developers/Cenx/Cenxs_Tiara.webp"
import CenxsBreastplateImg from "../../../assets/icon/Developers/Cenx/Cenxs_Breastplate.webp"
import CenxsLeggingsImg from "../../../assets/icon/Developers/Cenx/Cenxs_Leggings.webp"
import CenxsWingsImg from "../../../assets/icon/Developers/Cenx/Cenxs_Wings.webp"
import CenxsDressImg from "../../../assets/icon/Developers/Cenx/Cenxs_Dress.webp"
import CenxsDressPantsImg from "../../../assets/icon/Developers/Cenx/Cenxs_Dress_Pants.webp"

import { Developers} from "../data.Category.zh-CN.ts";
import {CenxDevelopers} from "../data.Subcategory.zh-CN.ts";
export const CenxsTiara:Item={
    icon:CenxsTiaraImg,
    isCollection:false,
    id:1554,
    name: "Cenx的头冠",
    Category:Developers,
    Subcategory:CenxDevelopers,
    comments:"",
}
export const CenxsBreastplate:Item={
    icon:CenxsBreastplateImg,
    isCollection:false,
    id:1555,
    name: "Cenx 的胸甲",
    Category:Developers,
    Subcategory:CenxDevelopers,
    comments:"",
}
export const CenxsLeggings:Item={
    icon:CenxsLeggingsImg,
    isCollection:false,
    id:1556,
    name: "Cenx 的护腿",
    Category:Developers,
    Subcategory:CenxDevelopers,
    comments:"",
}
export const CenxsWings:Item={
    icon:CenxsWingsImg,
    isCollection:false,
    id:1586,
    name: "Cenx的翅膀",
    Category:Developers,
    Subcategory:CenxDevelopers,
    comments:"",
}
export const CenxsDress:Item={
    icon:CenxsDressImg,
    isCollection:false,
    id:1587,
    name: "Cenx的上衣",
    Category:Developers,
    Subcategory:CenxDevelopers,
    comments:"",
}
export const CenxsDressPants:Item={
    icon:CenxsDressPantsImg,
    isCollection:false,
    id:1588,
    name: "Cenx的裤装",
    Category:Developers,
    Subcategory:CenxDevelopers,
    comments:"",
}
export const CenxDevelopersList =[
CenxsTiara,
CenxsBreastplate,
CenxsLeggings,
CenxsWings,
CenxsDress,
CenxsDressPants]
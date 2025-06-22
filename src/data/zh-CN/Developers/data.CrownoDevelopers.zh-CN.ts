import type { Item } from "../../Interface.ts";

import CrownosMaskImg from "../../../assets/icon/Developers/Crowno/Crownos_Mask.webp"
import CrownosBreastplateImg from "../../../assets/icon/Developers/Crowno/Crownos_Breastplate.webp"
import CrownosLeggingsImg from "../../../assets/icon/Developers/Crowno/Crownos_Leggings.webp"
import CrownosWingsImg from "../../../assets/icon/Developers/Crowno/Crownos_Wings.webp"

import { Developers} from "../data.Category.zh-CN.ts";
import {CrownoDevelopers} from "../data.Subcategory.zh-CN.ts";
export const CrownosMask:Item={
    icon:CrownosMaskImg,
    isCollection:false,
    id:1557,
    name: "Crowno的面具",
    Category:Developers,
    Subcategory:CrownoDevelopers,
    comments:"",
}
export const CrownosBreastplate:Item={
    icon:CrownosBreastplateImg,
    isCollection:false,
    id:1558,
    name: "Crowno的胸甲",
    Category:Developers,
    Subcategory:CrownoDevelopers,
    comments:"",
}
export const CrownosLeggings:Item={
    icon:CrownosLeggingsImg,
    isCollection:false,
    id:1559,
    name: "Crowno的护腿",
    Category:Developers,
    Subcategory:CrownoDevelopers,
    comments:"",
}
export const CrownosWings:Item={
    icon:CrownosWingsImg,
    isCollection:false,
    id:1585,
    name: "Crowno的翅膀",
    Category:Developers,
    Subcategory:CrownoDevelopers,
    comments:"",
}
export const CrownoDevelopersList =[
CrownosMask,
CrownosBreastplate,
CrownosLeggings,
CrownosWings]
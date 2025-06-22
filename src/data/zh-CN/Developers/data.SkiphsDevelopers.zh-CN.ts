import type { Item } from "../../Interface.ts";

import SkiphsMaskImg from "../../../assets/icon/Developers/Skiphs/Skiphs_Mask.webp"
import SkiphsSkinImg from "../../../assets/icon/Developers/Skiphs/Skiphs_Skin.webp"
import SkiphsBearButtImg from "../../../assets/icon/Developers/Skiphs/Skiphs_Bear_Butt.webp"
import SkiphsPawsImg from "../../../assets/icon/Developers/Skiphs/Skiphs_Paws.webp"
import SkiphsBloodImg from "../../../assets/icon/Developers/Skiphs/Skiphs_Blood.webp"

import { Developers} from "../data.Category.zh-CN.ts";
import {SkiphsDevelopers} from "../data.Subcategory.zh-CN.ts";
export const SkiphsMask:Item={
    icon:SkiphsMaskImg,
    isCollection:false,
    id:3585,
    name: "Skiphs的面具",
    Category:Developers,
    Subcategory:SkiphsDevelopers,
    comments:"",
}
export const SkiphsSkin:Item={
    icon:SkiphsSkinImg,
    isCollection:false,
    id:3586,
    name: "Skiphs的皮肤",
    Category:Developers,
    Subcategory:SkiphsDevelopers,
    comments:"",
}
export const SkiphsBearButt:Item={
    icon:SkiphsBearButtImg,
    isCollection:false,
    id:3587,
    name: "Skiphs的熊裤",
    Category:Developers,
    Subcategory:SkiphsDevelopers,
    comments:"",
}
export const SkiphsPaws:Item={
    icon:SkiphsPawsImg,
    isCollection:false,
    id:3588,
    name: "Skiphs的爪子",
    Category:Developers,
    Subcategory:SkiphsDevelopers,
    comments:"",
}
export const SkiphsBlood:Item={
    icon:SkiphsBloodImg,
    isCollection:false,
    id:3024,
    name: "Skiphs的血",
    Category:Developers,
    Subcategory:SkiphsDevelopers,
    comments:"",
}
export const SkiphsDevelopersList =[
SkiphsMask,
SkiphsSkin,
SkiphsBearButt,
SkiphsPaws,
SkiphsBlood]
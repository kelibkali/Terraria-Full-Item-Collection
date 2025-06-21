import type { Item } from "../../Interface.ts";

import NurseHatImg from "../../../assets/icon/VanityItems/Nurse/Nurse_Hat.webp"
import NurseShirtImg from "../../../assets/icon/VanityItems/Nurse/Nurse_Shirt.webp"
import NursePantsImg from "../../../assets/icon/VanityItems/Nurse/Nurse_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {NurseVanityItems} from "../data.Subcategory.zh-CN.ts";
export const NurseHat:Item={
    icon:NurseHatImg,
    isCollection:false,
    id:1736,
    name: "护士帽",
    Category:VanityItems,
    Subcategory:NurseVanityItems,
    comments:"万圣节 军火商",
}
export const NurseShirt:Item={
    icon:NurseShirtImg,
    isCollection:false,
    id:1737,
    name: "护士衣",
    Category:VanityItems,
    Subcategory:NurseVanityItems,
    comments:"万圣节 军火商",
}
export const NursePants:Item={
    icon:NursePantsImg,
    isCollection:false,
    id:1738,
    name: "护士裤",
    Category:VanityItems,
    Subcategory:NurseVanityItems,
    comments:"万圣节 军火商",
}
export const NurseVanityItemsList =[
NurseHat,
NurseShirt,
NursePants]
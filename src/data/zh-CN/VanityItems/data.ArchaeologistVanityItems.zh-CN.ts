import type { Item } from "../../Interface.ts";

import ArchaeologistsHatImg from "../../../assets/icon/VanityItems/Archaeologist/Archaeologists_Hat.webp"
import ArchaeologistsJacketImg from "../../../assets/icon/VanityItems/Archaeologist/Archaeologists_Jacket.webp"
import ArchaeologistsPantsImg from "../../../assets/icon/VanityItems/Archaeologist/Archaeologists_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {ArchaeologistVanityItems} from "../data.Subcategory.zh-CN.ts";
export const ArchaeologistsHat:Item={
    icon:ArchaeologistsHatImg,
    isCollection:false,
    id:251,
    name: "考古帽",
    Category:VanityItems,
    Subcategory:ArchaeologistVanityItems,
    comments:"骷髅博士",
}
export const ArchaeologistsJacket:Item={
    icon:ArchaeologistsJacketImg,
    isCollection:false,
    id:252,
    name: "考古夹克",
    Category:VanityItems,
    Subcategory:ArchaeologistVanityItems,
    comments:"皮革",
}
export const ArchaeologistsPants:Item={
    icon:ArchaeologistsPantsImg,
    isCollection:false,
    id:253,
    name: "考古裤",
    Category:VanityItems,
    Subcategory:ArchaeologistVanityItems,
    comments:"皮革",
}
export const ArchaeologistVanityItemsList =[
ArchaeologistsHat,
ArchaeologistsJacket,
ArchaeologistsPants]
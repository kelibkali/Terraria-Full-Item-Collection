import type { Item } from "../../Interface.ts";

import GroxTheGreatsWingsImg from "../../../assets/icon/Developers/Grox/Grox_The_Greats_Wings.webp"
import GroxTheGreatsHornedCowlImg from "../../../assets/icon/Developers/Grox/Grox_The_Greats_Horned_Cowl.webp"
import GroxTheGreatsChestplateImg from "../../../assets/icon/Developers/Grox/Grox_The_Greats_Chestplate.webp"
import GroxTheGreatsGreavesImg from "../../../assets/icon/Developers/Grox/Grox_The_Greats_Greaves.webp"

import { Developers} from "../data.Category.zh-CN.ts";
import {GroxDevelopers} from "../data.Subcategory.zh-CN.ts";
export const GroxTheGreatsWings:Item={
    icon:GroxTheGreatsWingsImg,
    isCollection:false,
    id:4754,
    name: "Grox The Great的翅膀",
    Category:Developers,
    Subcategory:GroxDevelopers,
    comments:"",
}
export const GroxTheGreatsHornedCowl:Item={
    icon:GroxTheGreatsHornedCowlImg,
    isCollection:false,
    id:4755,
    name: "Grox The Great的有角风帽",
    Category:Developers,
    Subcategory:GroxDevelopers,
    comments:"",
}
export const GroxTheGreatsChestplate:Item={
    icon:GroxTheGreatsChestplateImg,
    isCollection:false,
    id:4756,
    name: "Grox The Great的护胸",
    Category:Developers,
    Subcategory:GroxDevelopers,
    comments:"",
}
export const GroxTheGreatsGreaves:Item={
    icon:GroxTheGreatsGreavesImg,
    isCollection:false,
    id:4757,
    name: "Grox The Great的护胫",
    Category:Developers,
    Subcategory:GroxDevelopers,
    comments:"",
}
export const GroxDevelopersList =[
GroxTheGreatsWings,
GroxTheGreatsHornedCowl,
GroxTheGreatsChestplate,
GroxTheGreatsGreaves]
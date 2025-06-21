import type { Item } from "../../Interface.ts";

import BuccaneerBandanaImg from "../../../assets/icon/VanityItems/Buccaneer/Buccaneer_Bandana.webp"
import BuccaneerTunicImg from "../../../assets/icon/VanityItems/Buccaneer/Buccaneer_Tunic.webp"
import BuccaneerPantaloonsImg from "../../../assets/icon/VanityItems/Buccaneer/Buccaneer_Pantaloons.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {BuccaneerVanityItems} from "../data.Subcategory.zh-CN.ts";
export const BuccaneerBandana:Item={
    icon:BuccaneerBandanaImg,
    isCollection:false,
    id:3263,
    name: "西域海盗头巾",
    Category:VanityItems,
    Subcategory:BuccaneerVanityItems,
    comments:"海盗入侵",
}
export const BuccaneerTunic:Item={
    icon:BuccaneerTunicImg,
    isCollection:false,
    id:3264,
    name: "西域海盗上装",
    Category:VanityItems,
    Subcategory:BuccaneerVanityItems,
    comments:"海盗入侵",
}
export const BuccaneerPantaloons:Item={
    icon:BuccaneerPantaloonsImg,
    isCollection:false,
    id:3265,
    name: "西域海盗马裤",
    Category:VanityItems,
    Subcategory:BuccaneerVanityItems,
    comments:"海盗入侵",
}
export const BuccaneerVanityItemsList =[
BuccaneerBandana,
BuccaneerTunic,
BuccaneerPantaloons]
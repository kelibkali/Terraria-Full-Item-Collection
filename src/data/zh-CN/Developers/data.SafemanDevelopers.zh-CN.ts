import type { Item } from "../../Interface.ts";

import SafemansBlanketCapeImg from "../../../assets/icon/Developers/Safeman/Safemans_Blanket_Cape.webp"
import SafemansSunnyDayImg from "../../../assets/icon/Developers/Safeman/Safemans_Sunny_Day.webp"
import SafemansSunDressImg from "../../../assets/icon/Developers/Safeman/Safemans_Sun_Dress.webp"
import SafemansPinkLeggingsImg from "../../../assets/icon/Developers/Safeman/Safemans_Pink_Leggings.webp"

import { Developers} from "../data.Category.zh-CN.ts";
import {SafemanDevelopers} from "../data.Subcategory.zh-CN.ts";
export const SafemansBlanketCape:Item={
    icon:SafemansBlanketCapeImg,
    isCollection:false,
    id:4746,
    name: "Safeman的毛毯斗篷",
    Category:Developers,
    Subcategory:SafemanDevelopers,
    comments:"",
}
export const SafemansSunnyDay:Item={
    icon:SafemansSunnyDayImg,
    isCollection:false,
    id:4747,
    name: "Safeman的晴天",
    Category:Developers,
    Subcategory:SafemanDevelopers,
    comments:"",
}
export const SafemansSunDress:Item={
    icon:SafemansSunDressImg,
    isCollection:false,
    id:4748,
    name: "Safeman的太阳裙",
    Category:Developers,
    Subcategory:SafemanDevelopers,
    comments:"",
}
export const SafemansPinkLeggings:Item={
    icon:SafemansPinkLeggingsImg,
    isCollection:false,
    id:4749,
    name: "Safeman的粉色护腿",
    Category:Developers,
    Subcategory:SafemanDevelopers,
    comments:"",
}
export const SafemanDevelopersList =[
SafemansBlanketCape,
SafemansSunnyDay,
SafemansSunDress,
SafemansPinkLeggings]
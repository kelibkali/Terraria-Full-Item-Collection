import type { Item } from "../../Interface.ts";

import CountryClubCapImg from "../../../assets/icon/VanityItems/CountryClub/Country_Club_Cap.webp"
import CountryClubVestImg from "../../../assets/icon/VanityItems/CountryClub/Country_Club_Vest.webp"
import CountryClubTrousersImg from "../../../assets/icon/VanityItems/CountryClub/Country_Club_Trousers.webp"
import CountryClubVisorImg from "../../../assets/icon/VanityItems/CountryClub/Country_Club_Visor.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {CountryClubVanityItems} from "../data.Subcategory.zh-CN.ts";
export const CountryClubCap:Item={
    icon:CountryClubCapImg,
    isCollection:false,
    id:4135,
    name: "乡村俱乐部帽",
    Category:VanityItems,
    Subcategory:CountryClubVanityItems,
    comments:"高尔夫球手",
}
export const CountryClubVest:Item={
    icon:CountryClubVestImg,
    isCollection:false,
    id:4136,
    name: "乡村俱乐部背心",
    Category:VanityItems,
    Subcategory:CountryClubVanityItems,
    comments:"高尔夫球手",
}
export const CountryClubTrousers:Item={
    icon:CountryClubTrousersImg,
    isCollection:false,
    id:4137,
    name: "乡村俱乐部长裤",
    Category:VanityItems,
    Subcategory:CountryClubVanityItems,
    comments:"高尔夫球手",
}
export const CountryClubVisor:Item={
    icon:CountryClubVisorImg,
    isCollection:false,
    id:4138,
    name: "乡村俱乐部帽舌",
    Category:VanityItems,
    Subcategory:CountryClubVanityItems,
    comments:"高尔夫球手",
}
export const CountryClubVanityItemsList =[
CountryClubCap,
CountryClubVest,
CountryClubTrousers,
CountryClubVisor]
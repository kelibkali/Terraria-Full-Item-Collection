import type { Item } from "../../Interface.ts";

import TimelessTravelersHoodImg from "../../../assets/icon/VanityItems/TimelessTraveler/Timeless_Travelers_Hood.webp"
import TimelessTravelersCloakImg from "../../../assets/icon/VanityItems/TimelessTraveler/Timeless_Travelers_Cloak.webp"
import TimelessTravelersFootwearImg from "../../../assets/icon/VanityItems/TimelessTraveler/Timeless_Travelers_Footwear.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {TimelessTravelerVanityItems} from "../data.Subcategory.zh-CN.ts";
export const TimelessTravelersHood:Item={
    icon:TimelessTravelersHoodImg,
    isCollection:false,
    id:5051,
    name: "永恒旅人兜帽",
    Category:VanityItems,
    Subcategory:TimelessTravelerVanityItems,
    comments:"腐肉+丝绸+黑染料",
}
export const TimelessTravelersCloak:Item={
    icon:TimelessTravelersCloakImg,
    isCollection:false,
    id:5052,
    name: "永恒旅人斗篷",
    Category:VanityItems,
    Subcategory:TimelessTravelerVanityItems,
    comments:"腐肉+丝绸+黑染料",
}
export const TimelessTravelersFootwear:Item={
    icon:TimelessTravelersFootwearImg,
    isCollection:false,
    id:5053,
    name: "永恒旅人鞋履",
    Category:VanityItems,
    Subcategory:TimelessTravelerVanityItems,
    comments:"腐肉+丝绸+黑染料",
}
export const TimelessTravelerVanityItemsList =[
TimelessTravelersHood,
TimelessTravelersCloak,
TimelessTravelersFootwear]
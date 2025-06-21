import type { Item } from "../../Interface.ts";

import SuperheroMaskImg from "../../../assets/icon/VanityItems/Superhero/Superhero_Mask.webp"
import SuperheroCostumeImg from "../../../assets/icon/VanityItems/Superhero/Superhero_Costume.webp"
import SuperheroTightsImg from "../../../assets/icon/VanityItems/Superhero/Superhero_Tights.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {SuperheroVanityItems} from "../data.Subcategory.zh-CN.ts";
export const SuperheroMask:Item={
    icon:SuperheroMaskImg,
    isCollection:false,
    id:4652,
    name: "超级英雄面具",
    Category:VanityItems,
    Subcategory:SuperheroVanityItems,
    comments:"绿线+丝绸",
}
export const SuperheroCostume:Item={
    icon:SuperheroCostumeImg,
    isCollection:false,
    id:4653,
    name: "超级英雄服装",
    Category:VanityItems,
    Subcategory:SuperheroVanityItems,
    comments:"绿线+丝绸",
}
export const SuperheroTights:Item={
    icon:SuperheroTightsImg,
    isCollection:false,
    id:4654,
    name: "超级英雄紧身裤",
    Category:VanityItems,
    Subcategory:SuperheroVanityItems,
    comments:"绿线+丝绸",
}
export const SuperheroVanityItemsList =[
SuperheroMask,
SuperheroCostume,
SuperheroTights]
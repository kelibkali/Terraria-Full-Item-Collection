import type { Item } from "../../Interface.ts";

import PirateHatImg from "../../../assets/icon/VanityItems/Pirate/Pirate_Hat.webp"
import PirateShirtImg from "../../../assets/icon/VanityItems/Pirate/Pirate_Shirt.webp"
import PiratePantsImg from "../../../assets/icon/VanityItems/Pirate/Pirate_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {PirateVanityItems} from "../data.Subcategory.zh-CN.ts";
export const PirateHat:Item={
    icon:PirateHatImg,
    isCollection:false,
    id:876,
    name: "海盗帽",
    Category:VanityItems,
    Subcategory:PirateVanityItems,
    comments:"海盗npc",
}
export const PirateShirt:Item={
    icon:PirateShirtImg,
    isCollection:false,
    id:877,
    name: "海盗衣",
    Category:VanityItems,
    Subcategory:PirateVanityItems,
    comments:"海盗npc",
}
export const PiratePants:Item={
    icon:PiratePantsImg,
    isCollection:false,
    id:878,
    name: "海盗裤",
    Category:VanityItems,
    Subcategory:PirateVanityItems,
    comments:"海盗npc",
}
export const PirateVanityItemsList =[
PirateHat,
PirateShirt,
PiratePants]
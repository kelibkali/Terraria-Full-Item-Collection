import type { Item } from "../../Interface.ts";

import CapricornHelmetImg from "../../../assets/icon/VanityItems/Capricorn/Capricorn_Helmet.webp"
import CapricornChestplateImg from "../../../assets/icon/VanityItems/Capricorn/Capricorn_Chestplate.webp"
import CapricornHoovesImg from "../../../assets/icon/VanityItems/Capricorn/Capricorn_Hooves.webp"
import CapricornTailImg from "../../../assets/icon/VanityItems/Capricorn/Capricorn_Tail.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {CapricornVanityItems} from "../data.Subcategory.zh-CN.ts";
export const CapricornHelmet:Item={
    icon:CapricornHelmetImg,
    isCollection:false,
    id:5057,
    name: "摩羯座头盔",
    Category:VanityItems,
    Subcategory:CapricornVanityItems,
    comments:"丝绸+银染料+落星+珊瑚",
}
export const CapricornChestplate:Item={
    icon:CapricornChestplateImg,
    isCollection:false,
    id:5058,
    name: "摩羯座护胸",
    Category:VanityItems,
    Subcategory:CapricornVanityItems,
    comments:"丝绸+银染料+落星+珊瑚",
}
export const CapricornHooves:Item={
    icon:CapricornHoovesImg,
    isCollection:false,
    id:5059,
    name: "摩羯座兽蹄",
    Category:VanityItems,
    Subcategory:CapricornVanityItems,
    comments:"丝绸+银染料+落星+珊瑚",
}
export const CapricornTail:Item={
    icon:CapricornTailImg,
    isCollection:false,
    id:5060,
    name: "摩羯座尾巴",
    Category:VanityItems,
    Subcategory:CapricornVanityItems,
    comments:"丝绸+银染料+落星+珊瑚",
}
export const CapricornVanityItemsList =[
CapricornHelmet,
CapricornChestplate,
CapricornHooves,
CapricornTail]
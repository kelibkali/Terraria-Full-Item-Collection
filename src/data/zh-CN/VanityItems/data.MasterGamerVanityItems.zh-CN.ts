import type { Item } from "../../Interface.ts";

import MasterGamersJacketImg from "../../../assets/icon/VanityItems/MasterGamer/Master_Gamers_Jacket.webp"
import MasterGamersPantsImg from "../../../assets/icon/VanityItems/MasterGamer/Master_Gamers_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {MasterGamerVanityItems} from "../data.Subcategory.zh-CN.ts";
export const MasterGamersJacket:Item={
    icon:MasterGamersJacketImg,
    isCollection:false,
    id:4321,
    name: "大师级玩家夹克",
    Category:VanityItems,
    Subcategory:MasterGamerVanityItems,
    comments:"旅商",
}
export const MasterGamersPants:Item={
    icon:MasterGamersPantsImg,
    isCollection:false,
    id:4322,
    name: "大师级玩家裤",
    Category:VanityItems,
    Subcategory:MasterGamerVanityItems,
    comments:"旅商",
}
export const MasterGamerVanityItemsList =[
MasterGamersJacket,
MasterGamersPants]
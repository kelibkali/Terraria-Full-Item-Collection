import type { Item } from "../../Interface.ts";

import TreasureHunterShirtImg from "../../../assets/icon/VanityItems/TreasureHunter/Treasure_Hunter_Shirt.webp"
import TreasureHunterPantsImg from "../../../assets/icon/VanityItems/TreasureHunter/Treasure_Hunter_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {TreasureHunterVanityItems} from "../data.Subcategory.zh-CN.ts";
export const TreasureHunterShirt:Item={
    icon:TreasureHunterShirtImg,
    isCollection:false,
    id:1851,
    name: "寻宝人衣",
    Category:VanityItems,
    Subcategory:TreasureHunterVanityItems,
    comments:"礼袋",
}
export const TreasureHunterPants:Item={
    icon:TreasureHunterPantsImg,
    isCollection:false,
    id:1852,
    name: "寻宝人裤",
    Category:VanityItems,
    Subcategory:TreasureHunterVanityItems,
    comments:"礼袋",
}
export const TreasureHunterVanityItemsList =[
TreasureHunterShirt,
TreasureHunterPants]
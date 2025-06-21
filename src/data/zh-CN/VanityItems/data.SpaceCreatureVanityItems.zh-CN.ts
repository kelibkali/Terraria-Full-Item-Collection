import type { Item } from "../../Interface.ts";

import SpaceCreatureMaskImg from "../../../assets/icon/VanityItems/SpaceCreature/Space_Creature_Mask.webp"
import SpaceCreatureShirtImg from "../../../assets/icon/VanityItems/SpaceCreature/Space_Creature_Shirt.webp"
import SpaceCreaturePantsImg from "../../../assets/icon/VanityItems/SpaceCreature/Space_Creature_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {SpaceCreatureVanityItems} from "../data.Subcategory.zh-CN.ts";
export const SpaceCreatureMask:Item={
    icon:SpaceCreatureMaskImg,
    isCollection:false,
    id:1838,
    name: "太空生物面具",
    Category:VanityItems,
    Subcategory:SpaceCreatureVanityItems,
    comments:"礼袋",
}
export const SpaceCreatureShirt:Item={
    icon:SpaceCreatureShirtImg,
    isCollection:false,
    id:1839,
    name: "太空生物衣",
    Category:VanityItems,
    Subcategory:SpaceCreatureVanityItems,
    comments:"礼袋",
}
export const SpaceCreaturePants:Item={
    icon:SpaceCreaturePantsImg,
    isCollection:false,
    id:1840,
    name: "太空生物裤",
    Category:VanityItems,
    Subcategory:SpaceCreatureVanityItems,
    comments:"礼袋",
}
export const SpaceCreatureVanityItemsList =[
SpaceCreatureMask,
SpaceCreatureShirt,
SpaceCreaturePants]
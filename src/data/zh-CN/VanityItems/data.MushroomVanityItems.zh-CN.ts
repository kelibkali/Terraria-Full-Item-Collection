import type { Item } from "../../Interface.ts";

import MushroomHatImg from "../../../assets/icon/VanityItems/Mushroom/Mushroom_Hat.webp"
import MushroomVestImg from "../../../assets/icon/VanityItems/Mushroom/Mushroom_Vest.webp"
import MushroomPantsImg from "../../../assets/icon/VanityItems/Mushroom/Mushroom_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {MushroomVanityItems} from "../data.Subcategory.zh-CN.ts";
export const MushroomHat:Item={
    icon:MushroomHatImg,
    isCollection:false,
    id:4779,
    name: "蘑菇帽",
    Category:VanityItems,
    Subcategory:MushroomVanityItems,
    comments:"蘑菇箱",
}
export const MushroomVest:Item={
    icon:MushroomVestImg,
    isCollection:false,
    id:4780,
    name: "蘑菇背心",
    Category:VanityItems,
    Subcategory:MushroomVanityItems,
    comments:"蘑菇箱",
}
export const MushroomPants:Item={
    icon:MushroomPantsImg,
    isCollection:false,
    id:4781,
    name: "蘑菇裤",
    Category:VanityItems,
    Subcategory:MushroomVanityItems,
    comments:"蘑菇箱",
}
export const MushroomVanityItemsList =[
MushroomHat,
MushroomVest,
MushroomPants]
import type { Item } from "../../Interface.ts";

import BeeHatImg from "../../../assets/icon/VanityItems/Bee/Bee_Hat.webp"
import BeeShirtImg from "../../../assets/icon/VanityItems/Bee/Bee_Shirt.webp"
import BeePantsImg from "../../../assets/icon/VanityItems/Bee/Bee_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {BeeVanityItems} from "../data.Subcategory.zh-CN.ts";
export const BeeHat:Item={
    icon:BeeHatImg,
    isCollection:false,
    id:842,
    name: "蜜蜂帽",
    Category:VanityItems,
    Subcategory:BeeVanityItems,
    comments:"蜂后掉落",
}
export const BeeShirt:Item={
    icon:BeeShirtImg,
    isCollection:false,
    id:843,
    name: "蜜蜂衣",
    Category:VanityItems,
    Subcategory:BeeVanityItems,
    comments:"蜂后掉落",
}
export const BeePants:Item={
    icon:BeePantsImg,
    isCollection:false,
    id:844,
    name: "蜜蜂裤",
    Category:VanityItems,
    Subcategory:BeeVanityItems,
    comments:"蜂后掉落",
}
export const BeeVanityItemsList =[
BeeHat,
BeeShirt,
BeePants]
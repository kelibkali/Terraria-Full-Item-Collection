import type { Item } from "../../Interface.ts";

import PlumbersHatImg from "../../../assets/icon/VanityItems/Plumber/Plumbers_Hat.webp"
import PlumbersShirtImg from "../../../assets/icon/VanityItems/Plumber/Plumbers_Shirt.webp"
import PlumbersPantsImg from "../../../assets/icon/VanityItems/Plumber/Plumbers_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {PlumberVanityItems} from "../data.Subcategory.zh-CN.ts";
export const PlumbersHat:Item={
    icon:PlumbersHatImg,
    isCollection:false,
    id:244,
    name: "管道工帽",
    Category:VanityItems,
    Subcategory:PlumberVanityItems,
    comments:"火焰小鬼",
}
export const PlumbersShirt:Item={
    icon:PlumbersShirtImg,
    isCollection:false,
    id:245,
    name: "管道工衣",
    Category:VanityItems,
    Subcategory:PlumberVanityItems,
    comments:"满月 服装商",
}
export const PlumbersPants:Item={
    icon:PlumbersPantsImg,
    isCollection:false,
    id:246,
    name: "管道工背带裤",
    Category:VanityItems,
    Subcategory:PlumberVanityItems,
    comments:"满月 服装商",
}
export const PlumberVanityItemsList =[
PlumbersHat,
PlumbersShirt,
PlumbersPants]
import type { Item } from "../../Interface.ts";

import FallenTuxedoShirtImg from "../../../assets/icon/VanityItems/FallenTuxedo/Fallen_Tuxedo_Shirt.webp"
import FallenTuxedoPantsImg from "../../../assets/icon/VanityItems/FallenTuxedo/Fallen_Tuxedo_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {FallenTuxedoVanityItems} from "../data.Subcategory.zh-CN.ts";
export const FallenTuxedoShirt:Item={
    icon:FallenTuxedoShirtImg,
    isCollection:false,
    id:3362,
    name: "堕落西装衣",
    Category:VanityItems,
    Subcategory:FallenTuxedoVanityItems,
    comments:"血月 服装商",
}
export const FallenTuxedoPants:Item={
    icon:FallenTuxedoPantsImg,
    isCollection:false,
    id:3363,
    name: "堕落西装裤",
    Category:VanityItems,
    Subcategory:FallenTuxedoVanityItems,
    comments:"血月 服装商",
}
export const FallenTuxedoVanityItemsList =[
FallenTuxedoShirt,
FallenTuxedoPants]
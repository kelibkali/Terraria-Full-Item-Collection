import type { Item } from "../../Interface.ts";

import FamiliarShirtImg from "../../../assets/icon/VanityItems/Familiar/Familiar_Shirt.webp"
import FamiliarPantsImg from "../../../assets/icon/VanityItems/Familiar/Familiar_Pants.webp"
import FamiliarWigImg from "../../../assets/icon/VanityItems/Familiar/Familiar_Wig.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {FamiliarVanityItems} from "../data.Subcategory.zh-CN.ts";
export const FamiliarShirt:Item={
    icon:FamiliarShirtImg,
    isCollection:false,
    id:269,
    name: "便装衣",
    Category:VanityItems,
    Subcategory:FamiliarVanityItems,
    comments:"服装商",
}
export const FamiliarPants:Item={
    icon:FamiliarPantsImg,
    isCollection:false,
    id:270,
    name: "便装裤",
    Category:VanityItems,
    Subcategory:FamiliarVanityItems,
    comments:"服装商",
}
export const FamiliarWig:Item={
    icon:FamiliarWigImg,
    isCollection:false,
    id:271,
    name: "便装假发",
    Category:VanityItems,
    Subcategory:FamiliarVanityItems,
    comments:"服装商",
}
export const FamiliarVanityItemsList =[
FamiliarShirt,
FamiliarPants,
FamiliarWig]
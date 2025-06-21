import type { Item } from "../../Interface.ts";

import RedHatImg from "../../../assets/icon/VanityItems/Clothier/Red_Hat.webp"
import ClothiersJacketImg from "../../../assets/icon/VanityItems/Clothier/Clothiers_Jacket.webp"
import ClothiersPantsImg from "../../../assets/icon/VanityItems/Clothier/Clothiers_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {ClothierVanityItems} from "../data.Subcategory.zh-CN.ts";
export const RedHat:Item={
    icon:RedHatImg,
    isCollection:false,
    id:260,
    name: "红帽",
    Category:VanityItems,
    Subcategory:ClothierVanityItems,
    comments:"服装商掉落",
}
export const ClothiersJacket:Item={
    icon:ClothiersJacketImg,
    isCollection:false,
    id:3246,
    name: "服装商夹克",
    Category:VanityItems,
    Subcategory:ClothierVanityItems,
    comments:"万圣节 服装商",
}
export const ClothiersPants:Item={
    icon:ClothiersPantsImg,
    isCollection:false,
    id:3247,
    name: "服装商裤",
    Category:VanityItems,
    Subcategory:ClothierVanityItems,
    comments:"万圣节 服装商",
}
export const ClothierVanityItemsList =[
RedHat,
ClothiersJacket,
ClothiersPants]
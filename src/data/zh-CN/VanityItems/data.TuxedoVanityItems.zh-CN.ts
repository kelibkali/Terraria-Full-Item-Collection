import type { Item } from "../../Interface.ts";

import TopHatImg from "../../../assets/icon/VanityItems/Tuxedo/Top_Hat.webp"
import TuxedoShirtImg from "../../../assets/icon/VanityItems/Tuxedo/Tuxedo_Shirt.webp"
import TuxedoPantsImg from "../../../assets/icon/VanityItems/Tuxedo/Tuxedo_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {TuxedoVanityItems} from "../data.Subcategory.zh-CN.ts";
export const TopHat:Item={
    icon:TopHatImg,
    isCollection:false,
    id:239,
    name: "高顶礼帽",
    Category:VanityItems,
    Subcategory:TuxedoVanityItems,
    comments:"僵尸新郎",
}
export const TuxedoShirt:Item={
    icon:TuxedoShirtImg,
    isCollection:false,
    id:240,
    name: "西装衣",
    Category:VanityItems,
    Subcategory:TuxedoVanityItems,
    comments:"黑线",
}
export const TuxedoPants:Item={
    icon:TuxedoPantsImg,
    isCollection:false,
    id:241,
    name: "西装裤",
    Category:VanityItems,
    Subcategory:TuxedoVanityItems,
    comments:"黑线",
}
export const TuxedoVanityItemsList =[
TopHat,
TuxedoShirt,
TuxedoPants]
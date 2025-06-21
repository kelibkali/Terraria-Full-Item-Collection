import type { Item } from "../../Interface.ts";

import FuneralHatImg from "../../../assets/icon/VanityItems/Funeral/Funeral_Hat.webp"
import FuneralCoatImg from "../../../assets/icon/VanityItems/Funeral/Funeral_Coat.webp"
import FuneralPantsImg from "../../../assets/icon/VanityItems/Funeral/Funeral_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {FuneralVanityItems} from "../data.Subcategory.zh-CN.ts";
export const FuneralHat:Item={
    icon:FuneralHatImg,
    isCollection:false,
    id:4704,
    name: "葬礼帽",
    Category:VanityItems,
    Subcategory:FuneralVanityItems,
    comments:"墓地 服装商",
}
export const FuneralCoat:Item={
    icon:FuneralCoatImg,
    isCollection:false,
    id:4705,
    name: "葬礼外套",
    Category:VanityItems,
    Subcategory:FuneralVanityItems,
    comments:"墓地 服装商",
}
export const FuneralPants:Item={
    icon:FuneralPantsImg,
    isCollection:false,
    id:4706,
    name: "葬礼裤",
    Category:VanityItems,
    Subcategory:FuneralVanityItems,
    comments:"墓地 服装商",
}
export const FuneralVanityItemsList =[
FuneralHat,
FuneralCoat,
FuneralPants]
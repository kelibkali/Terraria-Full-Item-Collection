import type { Item } from "../../Interface.ts";

import SailorHatImg from "../../../assets/icon/VanityItems/Sailor/Sailor_Hat.webp"
import SailorShirtImg from "../../../assets/icon/VanityItems/Sailor/Sailor_Shirt.webp"
import SailorPantsImg from "../../../assets/icon/VanityItems/Sailor/Sailor_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {SailorVanityItems} from "../data.Subcategory.zh-CN.ts";
export const SailorHat:Item={
    icon:SailorHatImg,
    isCollection:false,
    id:1277,
    name: "水手帽",
    Category:VanityItems,
    Subcategory:SailorVanityItems,
    comments:"海盗入侵",
}
export const SailorShirt:Item={
    icon:SailorShirtImg,
    isCollection:false,
    id:1279,
    name: "水手衣",
    Category:VanityItems,
    Subcategory:SailorVanityItems,
    comments:"海盗入侵",
}
export const SailorPants:Item={
    icon:SailorPantsImg,
    isCollection:false,
    id:1280,
    name: "水手裤",
    Category:VanityItems,
    Subcategory:SailorVanityItems,
    comments:"海盗入侵",
}
export const SailorVanityItemsList =[
SailorHat,
SailorShirt,
SailorPants]
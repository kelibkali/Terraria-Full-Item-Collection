import type { Item } from "../../Interface.ts";

import TaxCollectorsHatImg from "../../../assets/icon/VanityItems/TaxCollector/Tax_Collectors_Hat.webp"
import TaxCollectorsSuitImg from "../../../assets/icon/VanityItems/TaxCollector/Tax_Collectors_Suit.webp"
import TaxCollectorsPantsImg from "../../../assets/icon/VanityItems/TaxCollector/Tax_Collectors_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {TaxCollectorVanityItems} from "../data.Subcategory.zh-CN.ts";
export const TaxCollectorsHat:Item={
    icon:TaxCollectorsHatImg,
    isCollection:false,
    id:3242,
    name: "税收官帽",
    Category:VanityItems,
    Subcategory:TaxCollectorVanityItems,
    comments:"肉后 服装商",
}
export const TaxCollectorsSuit:Item={
    icon:TaxCollectorsSuitImg,
    isCollection:false,
    id:3243,
    name: "税收官衣服",
    Category:VanityItems,
    Subcategory:TaxCollectorVanityItems,
    comments:"肉后 服装商",
}
export const TaxCollectorsPants:Item={
    icon:TaxCollectorsPantsImg,
    isCollection:false,
    id:3244,
    name: "税收官裤",
    Category:VanityItems,
    Subcategory:TaxCollectorVanityItems,
    comments:"肉后 服装商",
}
export const TaxCollectorVanityItemsList =[
TaxCollectorsHat,
TaxCollectorsSuit,
TaxCollectorsPants]
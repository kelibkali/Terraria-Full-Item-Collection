import type { Item } from "../../Interface.ts";

import WeddingVeilImg from "../../../assets/icon/VanityItems/Wedding/Wedding_Veil.webp"
import WeddingDressImg from "../../../assets/icon/VanityItems/Wedding/Wedding_Dress.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {WeddingVanityItems} from "../data.Subcategory.zh-CN.ts";
export const WeddingVeil:Item={
    icon:WeddingVeilImg,
    isCollection:false,
    id:3478,
    name: "面纱",
    Category:VanityItems,
    Subcategory:WeddingVanityItems,
    comments:"僵尸新娘",
}
export const WeddingDress:Item={
    icon:WeddingDressImg,
    isCollection:false,
    id:3479,
    name: "婚裙",
    Category:VanityItems,
    Subcategory:WeddingVanityItems,
    comments:"僵尸新娘",
}
export const WeddingVanityItemsList =[
WeddingVeil,
WeddingDress]
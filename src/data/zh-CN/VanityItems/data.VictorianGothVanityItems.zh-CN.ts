import type { Item } from "../../Interface.ts";

import VictorianGothHatImg from "../../../assets/icon/VanityItems/VictorianGoth/Victorian_Goth_Hat.webp"
import VictorianGothDressImg from "../../../assets/icon/VanityItems/VictorianGoth/Victorian_Goth_Dress.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {VictorianGothVanityItems} from "../data.Subcategory.zh-CN.ts";
export const VictorianGothHat:Item={
    icon:VictorianGothHatImg,
    isCollection:false,
    id:4708,
    name: "维多利亚哥特帽",
    Category:VanityItems,
    Subcategory:VictorianGothVanityItems,
    comments:"墓地 服装商",
}
export const VictorianGothDress:Item={
    icon:VictorianGothDressImg,
    isCollection:false,
    id:4709,
    name: "维多利亚哥特裙",
    Category:VanityItems,
    Subcategory:VictorianGothVanityItems,
    comments:"墓地 服装商",
}
export const VictorianGothVanityItemsList =[
VictorianGothHat,
VictorianGothDress]
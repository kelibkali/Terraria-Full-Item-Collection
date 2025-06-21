import type { Item } from "../../Interface.ts";

import GravediggerHatImg from "../../../assets/icon/VanityItems/Gravedigger/Gravedigger_Hat.webp"
import GravediggerCoatImg from "../../../assets/icon/VanityItems/Gravedigger/Gravedigger_Coat.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {GravediggerVanityItems} from "../data.Subcategory.zh-CN.ts";
export const GravediggerHat:Item={
    icon:GravediggerHatImg,
    isCollection:false,
    id:4685,
    name: "掘墓者帽",
    Category:VanityItems,
    Subcategory:GravediggerVanityItems,
    comments:"墓地 服装商",
}
export const GravediggerCoat:Item={
    icon:GravediggerCoatImg,
    isCollection:false,
    id:4686,
    name: "掘墓者外套",
    Category:VanityItems,
    Subcategory:GravediggerVanityItems,
    comments:"墓地 服装商",
}
export const GravediggerVanityItemsList =[
GravediggerHat,
GravediggerCoat]
import type { Item } from "../../Interface.ts";

import RaynebrosHoodImg from "../../../assets/icon/VanityItems/Raynebro/Raynebros_Hood.webp"
import RaynebrosHoodieImg from "../../../assets/icon/VanityItems/Raynebro/Raynebros_Hoodie.webp"
import RaynebrosPantsImg from "../../../assets/icon/VanityItems/Raynebro/Raynebros_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {RaynebroVanityItems} from "../data.Subcategory.zh-CN.ts";
export const RaynebrosHood:Item={
    icon:RaynebrosHoodImg,
    isCollection:false,
    id:5390,
    name: "Raynebro的兜帽",
    Category:VanityItems,
    Subcategory:RaynebroVanityItems,
    comments:"旅商",
}
export const RaynebrosHoodie:Item={
    icon:RaynebrosHoodieImg,
    isCollection:false,
    id:5386,
    name: "Raynebro的连帽衫",
    Category:VanityItems,
    Subcategory:RaynebroVanityItems,
    comments:"旅商",
}
export const RaynebrosPants:Item={
    icon:RaynebrosPantsImg,
    isCollection:false,
    id:5387,
    name: "Raynebro的裤子",
    Category:VanityItems,
    Subcategory:RaynebroVanityItems,
    comments:"旅商",
}
export const RaynebroVanityItemsList =[
RaynebrosHood,
RaynebrosHoodie,
RaynebrosPants]
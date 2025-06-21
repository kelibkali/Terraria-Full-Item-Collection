import type { Item } from "../../Interface.ts";

import WanderingJingasaImg from "../../../assets/icon/VanityItems/Wandering/Wandering_Jingasa.webp"
import WanderingYukataImg from "../../../assets/icon/VanityItems/Wandering/Wandering_Yukata.webp"
import WanderingGetaImg from "../../../assets/icon/VanityItems/Wandering/Wandering_Geta.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {WanderingVanityItems} from "../data.Subcategory.zh-CN.ts";
export const WanderingJingasa:Item={
    icon:WanderingJingasaImg,
    isCollection:false,
    id:5048,
    name: "浪人阵笠",
    Category:VanityItems,
    Subcategory:WanderingVanityItems,
    comments:"萤火虫+丝绸+粘土块",
}
export const WanderingYukata:Item={
    icon:WanderingYukataImg,
    isCollection:false,
    id:5049,
    name: "浪人浴衣",
    Category:VanityItems,
    Subcategory:WanderingVanityItems,
    comments:"萤火虫+丝绸+粘土块",
}
export const WanderingGeta:Item={
    icon:WanderingGetaImg,
    isCollection:false,
    id:5050,
    name: "浪人木屐",
    Category:VanityItems,
    Subcategory:WanderingVanityItems,
    comments:"萤火虫+丝绸+粘土块",
}
export const WanderingVanityItemsList =[
WanderingJingasa,
WanderingYukata,
WanderingGeta]
import type { Item } from "../../Interface.ts";

import Star_CloakImg from "../../../assets/icon/Accessories/Cloak/Star_Cloak.webp"
import Honey_CombImg from "../../../assets/icon/Accessories/Cloak/Honey_Comb.webp"
import Bee_CloakImg from "../../../assets/icon/Accessories/Cloak/Bee_Cloak.webp"

import { Accessories} from "../data.Category.zh-CN.ts";
import {Cloak} from "../data.Subcategory.zh-CN.ts";
export const Star_Cloak:Item={
    icon:Star_CloakImg,
    isCollection:false,
    id:532,
    name: "星星斗篷",
    Category:Accessories,
    Subcategory:Cloak,
    comments:'',
}
export const Honey_Comb:Item={
    icon:Honey_CombImg,
    isCollection:false,
    id:1132,
    name: "蜂窝",
    Category:Accessories,
    Subcategory:Cloak,
    comments:'',
}
export const Bee_Cloak:Item={
    icon:Bee_CloakImg,
    isCollection:false,
    id:1247,
    name: "蜜蜂斗篷",
    Category:Accessories,
    Subcategory:Cloak,
    comments:'',
}
export const CloakList =[
Star_Cloak,
Honey_Comb,
Bee_Cloak]
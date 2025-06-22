import type { Item } from "../../Interface.ts";

import PedguinsHoodImg from "../../../assets/icon/Developers/Pedguin/Pedguins_Hood.webp"
import PedguinsJacketImg from "../../../assets/icon/Developers/Pedguin/Pedguins_Jacket.webp"
import PedguinsTrousersImg from "../../../assets/icon/Developers/Pedguin/Pedguins_Trousers.webp"

import { Developers} from "../data.Category.zh-CN.ts";
import {PedguinDevelopers} from "../data.Subcategory.zh-CN.ts";
export const PedguinsHood:Item={
    icon:PedguinsHoodImg,
    isCollection:false,
    id:3757,
    name: "Pedguin的兜帽",
    Category:Developers,
    Subcategory:PedguinDevelopers,
    comments:"",
}
export const PedguinsJacket:Item={
    icon:PedguinsJacketImg,
    isCollection:false,
    id:3758,
    name: "Pedguin的夹克",
    Category:Developers,
    Subcategory:PedguinDevelopers,
    comments:"",
}
export const PedguinsTrousers:Item={
    icon:PedguinsTrousersImg,
    isCollection:false,
    id:3759,
    name: "Pedguin的裤子",
    Category:Developers,
    Subcategory:PedguinDevelopers,
    comments:"",
}
export const PedguinDevelopersList =[
PedguinsHood,
PedguinsJacket,
PedguinsTrousers]
import type { Item } from "../../Interface.ts";

import Magic_QuiverImg from "../../../assets/icon/Accessories/Quiver/Magic_Quiver.webp"
import Molten_QuiverImg from "../../../assets/icon/Accessories/Quiver/Molten_Quiver.webp"
import Stalkers_QuiverImg from "../../../assets/icon/Accessories/Quiver/Stalkers_Quiver.webp"

import { Accessories} from "../data.Category.zh-CN.ts";
import {Quiver} from "../data.Subcategory.zh-CN.ts";
export const Magic_Quiver:Item={
    icon:Magic_QuiverImg,
    isCollection:false,
    id:1321,
    name: "魔法箭袋",
    Category:Accessories,
    Subcategory:Quiver,
    comments:'',
}
export const Molten_Quiver:Item={
    icon:Molten_QuiverImg,
    isCollection:false,
    id:4002,
    name: "熔火箭袋",
    Category:Accessories,
    Subcategory:Quiver,
    comments:'',
}
export const Stalkers_Quiver:Item={
    icon:Stalkers_QuiverImg,
    isCollection:false,
    id:4006,
    name: "潜行者箭袋",
    Category:Accessories,
    Subcategory:Quiver,
    comments:'',
}
export const QuiverList =[
Magic_Quiver,
Molten_Quiver,
Stalkers_Quiver]
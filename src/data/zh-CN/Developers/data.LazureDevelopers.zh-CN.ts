import type { Item } from "../../Interface.ts";

import LazuresValkyrieCircletImg from "../../../assets/icon/Developers/Lazure/Lazures_Valkyrie_Circlet.webp"
import LazuresValkyrieCloakImg from "../../../assets/icon/Developers/Lazure/Lazures_Valkyrie_Cloak.webp"
import LazuresBarrierPlatformImg from "../../../assets/icon/Developers/Lazure/Lazures_Barrier_Platform.webp"

import { Developers} from "../data.Category.zh-CN.ts";
import {LazureDevelopers} from "../data.Subcategory.zh-CN.ts";
export const LazuresValkyrieCirclet:Item={
    icon:LazuresValkyrieCircletImg,
    isCollection:false,
    id:3226,
    name: "Lazure的女武神头环",
    Category:Developers,
    Subcategory:LazureDevelopers,
    comments:"",
}
export const LazuresValkyrieCloak:Item={
    icon:LazuresValkyrieCloakImg,
    isCollection:false,
    id:3227,
    name: "Lazure的女武神斗蓬",
    Category:Developers,
    Subcategory:LazureDevelopers,
    comments:"",
}
export const LazuresBarrierPlatform:Item={
    icon:LazuresBarrierPlatformImg,
    isCollection:false,
    id:3228,
    name: "Lazure的屏障台",
    Category:Developers,
    Subcategory:LazureDevelopers,
    comments:"",
}
export const LazureDevelopersList =[
LazuresValkyrieCirclet,
LazuresValkyrieCloak,
LazuresBarrierPlatform]
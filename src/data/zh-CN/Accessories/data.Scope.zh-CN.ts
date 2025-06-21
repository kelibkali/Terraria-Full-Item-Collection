import type { Item } from "../../Interface.ts";

import Rifle_ScopeImg from "../../../assets/icon/Accessories/Scope/Rifle_Scope.webp"
import Sniper_ScopeImg from "../../../assets/icon/Accessories/Scope/Sniper_Scope.webp"
import Putrid_ScentImg from "../../../assets/icon/Accessories/Scope/Putrid_Scent.webp"
import Recon_ScopeImg from "../../../assets/icon/Accessories/Scope/Recon_Scope.webp"

import { Accessories} from "../data.Category.zh-CN.ts";
import {Scope} from "../data.Subcategory.zh-CN.ts";
export const Rifle_Scope:Item={
    icon:Rifle_ScopeImg,
    isCollection:false,
    id:1300,
    name: "步枪瞄准镜",
    Category:Accessories,
    Subcategory:Scope,
    comments:'',
}
export const Sniper_Scope:Item={
    icon:Sniper_ScopeImg,
    isCollection:false,
    id:1858,
    name: "狙击镜",
    Category:Accessories,
    Subcategory:Scope,
    comments:'',
}
export const Putrid_Scent:Item={
    icon:Putrid_ScentImg,
    isCollection:false,
    id:3015,
    name: "腐香囊",
    Category:Accessories,
    Subcategory:Scope,
    comments:'',
}
export const Recon_Scope:Item={
    icon:Recon_ScopeImg,
    isCollection:false,
    id:4005,
    name: "侦察镜",
    Category:Accessories,
    Subcategory:Scope,
    comments:'',
}
export const ScopeList =[
Rifle_Scope,
Sniper_Scope,
Putrid_Scent,
Recon_Scope]
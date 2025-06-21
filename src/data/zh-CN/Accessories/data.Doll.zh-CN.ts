import type { Item } from "../../Interface.ts";

import Guide_Voodoo_DollImg from "../../../assets/icon/Accessories/Doll/Guide_Voodoo_Doll.webp"
import Clothier_Voodoo_DollImg from "../../../assets/icon/Accessories/Doll/Clothier_Voodoo_Doll.webp"

import { Accessories} from "../data.Category.zh-CN.ts";
import {Doll} from "../data.Subcategory.zh-CN.ts";
export const Guide_Voodoo_Doll:Item={
    icon:Guide_Voodoo_DollImg,
    isCollection:false,
    id:267,
    name: "向导巫毒娃娃",
    Category:Accessories,
    Subcategory:Doll,
    comments:'',
}
export const Clothier_Voodoo_Doll:Item={
    icon:Clothier_Voodoo_DollImg,
    isCollection:false,
    id:1307,
    name: "服装商巫毒娃娃",
    Category:Accessories,
    Subcategory:Doll,
    comments:'',
}
export const DollList =[
Guide_Voodoo_Doll,
Clothier_Voodoo_Doll]
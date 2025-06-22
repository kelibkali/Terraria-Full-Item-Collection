import type { Item } from "../../Interface.ts";

import LeinforsHairProtectorImg from "../../../assets/icon/Developers/Leinfors/Leinfors_Hair_Protector.webp"
import LeinforsExcessiveStyleImg from "../../../assets/icon/Developers/Leinfors/Leinfors_Excessive_Style.webp"
import LeinforsFancypantsImg from "../../../assets/icon/Developers/Leinfors/Leinfors_Fancypants.webp"
import LeinforsPrehensileCloakImg from "../../../assets/icon/Developers/Leinfors/Leinfors_Prehensile_Cloak.webp"
import LeinforsLuxuryShampooImg from "../../../assets/icon/Developers/Leinfors/Leinfors_Luxury_Shampoo.webp"

import { Developers} from "../data.Category.zh-CN.ts";
import {LeinforsDevelopers} from "../data.Subcategory.zh-CN.ts";
export const LeinforsHairProtector:Item={
    icon:LeinforsHairProtectorImg,
    isCollection:false,
    id:3925,
    name: "Leinfors的护发器",
    Category:Developers,
    Subcategory:LeinforsDevelopers,
    comments:"",
}
export const LeinforsExcessiveStyle:Item={
    icon:LeinforsExcessiveStyleImg,
    isCollection:false,
    id:3926,
    name: "Leinfors的奇异风",
    Category:Developers,
    Subcategory:LeinforsDevelopers,
    comments:"",
}
export const LeinforsFancypants:Item={
    icon:LeinforsFancypantsImg,
    isCollection:false,
    id:3927,
    name: "Leinfors的潮裤",
    Category:Developers,
    Subcategory:LeinforsDevelopers,
    comments:"",
}
export const LeinforsPrehensileCloak:Item={
    icon:LeinforsPrehensileCloakImg,
    isCollection:false,
    id:3928,
    name: "Leinfors的卷缠斗篷",
    Category:Developers,
    Subcategory:LeinforsDevelopers,
    comments:"",
}
export const LeinforsLuxuryShampoo:Item={
    icon:LeinforsLuxuryShampooImg,
    isCollection:false,
    id:3929,
    name: "Leinfors的奢华洗发液",
    Category:Developers,
    Subcategory:LeinforsDevelopers,
    comments:"",
}
export const LeinforsDevelopersList =[
LeinforsHairProtector,
LeinforsExcessiveStyle,
LeinforsFancypants,
LeinforsPrehensileCloak,
LeinforsLuxuryShampoo]
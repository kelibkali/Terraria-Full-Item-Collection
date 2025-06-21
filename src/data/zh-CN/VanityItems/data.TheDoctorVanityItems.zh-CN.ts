import type { Item } from "../../Interface.ts";

import TheDoctorsShirtImg from "../../../assets/icon/VanityItems/TheDoctor/The_Doctors_Shirt.webp"
import TheDoctorsPantsImg from "../../../assets/icon/VanityItems/TheDoctor/The_Doctors_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {TheDoctorVanityItems} from "../data.Subcategory.zh-CN.ts";
export const TheDoctorsShirt:Item={
    icon:TheDoctorsShirtImg,
    isCollection:false,
    id:325,
    name: "博士衣",
    Category:VanityItems,
    Subcategory:TheDoctorVanityItems,
    comments:"亏凸月 服装商",
}
export const TheDoctorsPants:Item={
    icon:TheDoctorsPantsImg,
    isCollection:false,
    id:326,
    name: "博士裤",
    Category:VanityItems,
    Subcategory:TheDoctorVanityItems,
    comments:"亏凸月 服装商",
}
export const TheDoctorVanityItemsList =[
TheDoctorsShirt,
TheDoctorsPants]
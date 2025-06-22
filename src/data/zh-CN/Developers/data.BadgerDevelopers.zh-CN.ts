import type { Item } from "../../Interface.ts";

import BadgersHatImg from "../../../assets/icon/Developers/Badger/Badgers_Hat.webp"

import { Developers} from "../data.Category.zh-CN.ts";
import {BadgerDevelopers} from "../data.Subcategory.zh-CN.ts";
export const BadgersHat:Item={
    icon:BadgersHatImg,
    isCollection:false,
    id:5004,
    name: "Badger的帽子",
    Category:Developers,
    Subcategory:BadgerDevelopers,
    comments:"同天击败克眼+肉山",
}
export const BadgerDevelopersList =[
BadgersHat]
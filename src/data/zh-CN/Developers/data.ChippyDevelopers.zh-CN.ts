import type { Item } from "../../Interface.ts";

import ChippysCouchImg from "../../../assets/icon/Developers/Chippy/Chippys_Couch.webp"

import { Developers} from "../data.Category.zh-CN.ts";
import {ChippyDevelopers} from "../data.Subcategory.zh-CN.ts";
export const ChippysCouch:Item={
    icon:ChippysCouchImg,
    isCollection:false,
    id:4993,
    name: "Chippy的沙发",
    Category:Developers,
    Subcategory:ChippyDevelopers,
    comments:"骷髅王",
}
export const ChippyDevelopersList =[
ChippysCouch]
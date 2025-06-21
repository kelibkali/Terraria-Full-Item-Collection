import type { Item } from "../../Interface.ts";

import VideoVisageImg from "../../../assets/icon/VanityItems/Television/Video_Visage.webp"
import LazerBlazerImg from "../../../assets/icon/VanityItems/Television/Lazer_Blazer.webp"
import PinstripePantsImg from "../../../assets/icon/VanityItems/Television/Pinstripe_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {TelevisionVanityItems} from "../data.Subcategory.zh-CN.ts";
export const VideoVisage:Item={
    icon:VideoVisageImg,
    isCollection:false,
    id:5061,
    name: "视频脸",
    Category:VanityItems,
    Subcategory:TelevisionVanityItems,
    comments:"丝绸+紫染料+玻璃+电线",
}
export const LazerBlazer:Item={
    icon:LazerBlazerImg,
    isCollection:false,
    id:5062,
    name: "激光外套",
    Category:VanityItems,
    Subcategory:TelevisionVanityItems,
    comments:"丝绸+紫染料+玻璃+电线",
}
export const PinstripePants:Item={
    icon:PinstripePantsImg,
    isCollection:false,
    id:5063,
    name: "细条纹裤",
    Category:VanityItems,
    Subcategory:TelevisionVanityItems,
    comments:"丝绸+紫染料+玻璃+电线",
}
export const TelevisionVanityItemsList =[
VideoVisage,
LazerBlazer,
PinstripePants]
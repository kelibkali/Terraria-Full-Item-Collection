import type { Item } from "../../Interface.ts";

import Warrior_EmblemImg from "../../../assets/icon/Accessories/Emblem/Warrior_Emblem.webp"
import Ranger_EmblemImg from "../../../assets/icon/Accessories/Emblem/Ranger_Emblem.webp"
import Sorcerer_EmblemImg from "../../../assets/icon/Accessories/Emblem/Sorcerer_Emblem.webp"
import Summoner_EmblemImg from "../../../assets/icon/Accessories/Emblem/Summoner_Emblem.webp"
import Avenger_EmblemImg from "../../../assets/icon/Accessories/Emblem/Avenger_Emblem.webp"
import Celestial_EmblemImg from "../../../assets/icon/Accessories/Emblem/Celestial_Emblem.webp"
import Eye_of_the_GolemImg from "../../../assets/icon/Accessories/Emblem/Eye_of_the_Golem.webp"
import Destroyer_EmblemImg from "../../../assets/icon/Accessories/Emblem/Destroyer_Emblem.webp"

import { Accessories} from "../data.Category.zh-CN.ts";
import {Emblem} from "../data.Subcategory.zh-CN.ts";
export const Warrior_Emblem:Item={
    icon:Warrior_EmblemImg,
    isCollection:false,
    id:490,
    name: "战士徽章",
    Category:Accessories,
    Subcategory:Emblem,
    comments:'',
}
export const Ranger_Emblem:Item={
    icon:Ranger_EmblemImg,
    isCollection:false,
    id:491,
    name: "游侠徽章",
    Category:Accessories,
    Subcategory:Emblem,
    comments:'',
}
export const Sorcerer_Emblem:Item={
    icon:Sorcerer_EmblemImg,
    isCollection:false,
    id:489,
    name: "巫士徽章",
    Category:Accessories,
    Subcategory:Emblem,
    comments:'',
}
export const Summoner_Emblem:Item={
    icon:Summoner_EmblemImg,
    isCollection:false,
    id:2998,
    name: "召唤师徽章",
    Category:Accessories,
    Subcategory:Emblem,
    comments:'',
}
export const Avenger_Emblem:Item={
    icon:Avenger_EmblemImg,
    isCollection:false,
    id:935,
    name: "复仇者徽章",
    Category:Accessories,
    Subcategory:Emblem,
    comments:'',
}
export const Celestial_Emblem:Item={
    icon:Celestial_EmblemImg,
    isCollection:false,
    id:2220,
    name: "天界徽章",
    Category:Accessories,
    Subcategory:Emblem,
    comments:'',
}
export const Eye_of_the_Golem:Item={
    icon:Eye_of_the_GolemImg,
    isCollection:false,
    id:1248,
    name: "石巨人之眼",
    Category:Accessories,
    Subcategory:Emblem,
    comments:'',
}
export const Destroyer_Emblem:Item={
    icon:Destroyer_EmblemImg,
    isCollection:false,
    id:1301,
    name: "毁灭者徽章",
    Category:Accessories,
    Subcategory:Emblem,
    comments:'',
}
export const EmblemList =[
Warrior_Emblem,
Ranger_Emblem,
Sorcerer_Emblem,
Summoner_Emblem,
Avenger_Emblem,
Celestial_Emblem,
Eye_of_the_Golem,
Destroyer_Emblem]
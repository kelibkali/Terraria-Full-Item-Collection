import type { Item } from "../../Interface.ts";

import SeashellHairpinImg from "../../../assets/icon/VanityItems/Mermaid/Seashell_Hairpin.webp"
import MermaidAdornmentImg from "../../../assets/icon/VanityItems/Mermaid/Mermaid_Adornment.webp"
import MermaidTailImg from "../../../assets/icon/VanityItems/Mermaid/Mermaid_Tail.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {MermaidVanityItems} from "../data.Subcategory.zh-CN.ts";
export const SeashellHairpin:Item={
    icon:SeashellHairpinImg,
    isCollection:false,
    id:2417,
    name: "贝壳发夹",
    Category:VanityItems,
    Subcategory:MermaidVanityItems,
    comments:"渔夫任务",
}
export const MermaidAdornment:Item={
    icon:MermaidAdornmentImg,
    isCollection:false,
    id:2418,
    name: "美人鱼饰品",
    Category:VanityItems,
    Subcategory:MermaidVanityItems,
    comments:"渔夫任务",
}
export const MermaidTail:Item={
    icon:MermaidTailImg,
    isCollection:false,
    id:2419,
    name: "美人鱼鱼尾裤",
    Category:VanityItems,
    Subcategory:MermaidVanityItems,
    comments:"渔夫任务",
}
export const MermaidVanityItemsList =[
SeashellHairpin,
MermaidAdornment,
MermaidTail]
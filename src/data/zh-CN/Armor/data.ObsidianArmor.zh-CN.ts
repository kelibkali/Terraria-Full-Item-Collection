import type { Item } from "../../Interface.ts";

import Obsidian_Outlaw_HatImg from "../../../assets/icon/Armor/ObsidianArmor/Obsidian_Outlaw_Hat.webp"
import Obsidian_LongcoatImg from "../../../assets/icon/Armor/ObsidianArmor/Obsidian_Longcoat.webp"
import Obsidian_PantsImg from "../../../assets/icon/Armor/ObsidianArmor/Obsidian_Pants.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {ObsidianArmor} from "../data.Subcategory.zh-CN.ts";
export const Obsidian_Outlaw_Hat:Item={
    icon:Obsidian_Outlaw_HatImg,
    isCollection:false,
    id:3266,
    name: "黑曜石逃犯帽",
    Category:Armor,
    Subcategory:ObsidianArmor,
    comments:'',
}
export const Obsidian_Longcoat:Item={
    icon:Obsidian_LongcoatImg,
    isCollection:false,
    id:3267,
    name: "黑曜石风衣",
    Category:Armor,
    Subcategory:ObsidianArmor,
    comments:'',
}
export const Obsidian_Pants:Item={
    icon:Obsidian_PantsImg,
    isCollection:false,
    id:3268,
    name: "黑曜石裤",
    Category:Armor,
    Subcategory:ObsidianArmor,
    comments:'',
}
export const ObsidianArmorList =[
Obsidian_Outlaw_Hat,
Obsidian_Longcoat,
Obsidian_Pants]
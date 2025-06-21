import type {Item} from "../../Interface.ts";

import LavaCharmImg from "../../../assets/icon/Accessories/Fireproof/Lava_Charm.webp"
import MagmaSkullImg from "../../../assets/icon/Accessories/Fireproof/Magma_Skull.webp"
import MoltenCharmImg from "../../../assets/icon/Accessories/Fireproof/Molten_Charm.webp"
import MoltenSkullRoseImg from "../../../assets/icon/Accessories/Fireproof/Molten_Skull_Rose.webp"
import ObsidianHorseshoeImg from "../../../assets/icon/Accessories/Fireproof/Obsidian_Horseshoe.webp"
import ObsidianRoseImg from "../../../assets/icon/Accessories/Fireproof/Obsidian_Rose.webp"
import ObsidianSkullImg from "../../../assets/icon/Accessories/Fireproof/Obsidian_Skull.webp"
import ObsidianSkullRoseImg from "../../../assets/icon/Accessories/Fireproof/Obsidian_Skull_Rose.webp"

import {Accessories} from "../data.Category.zh-CN.ts";
import {Fireproof} from "../data.Subcategory.zh-CN.ts";

export const ObsidianSkull: Item = {
    icon: ObsidianSkullImg,
    isCollection: false,
    id: 193,
    name: "黑曜石骷髅头",
    Category: Accessories,
    Subcategory: Fireproof,
    comments: '',
}

export const ObsidianHorseshoe: Item = {
    icon: ObsidianHorseshoeImg,
    isCollection: false,
    id: 396,
    name: "黑曜石马掌",
    Category: Accessories,
    Subcategory: Fireproof,
    comments: '',
}

export const ObsidianRose: Item = {
    icon: ObsidianRoseImg,
    isCollection: false,
    id: 1323,
    name: "黑曜石玫瑰",
    Category: Accessories,
    Subcategory: Fireproof,
    comments: '',
}

export const MoltenSkullRose: Item = {
    icon: MoltenSkullRoseImg,
    isCollection: false,
    id: 4003,
    name: "熔火骷髅头玫瑰",
    Category: Accessories,
    Subcategory: Fireproof,
    comments: '',
}

export const ObsidianSkullRose: Item = {
    icon: ObsidianSkullRoseImg,
    isCollection: false,
    id: 4004,
    name: "黑曜石骷髅头玫瑰",
    Category: Accessories,
    Subcategory: Fireproof,
    comments: '',
}

export const LavaCharm: Item = {
    icon: LavaCharmImg,
    isCollection: false,
    id: 906,
    name: "熔岩护身符",
    Category: Accessories,
    Subcategory: Fireproof,
    comments: '',
}

export const MagmaSkull: Item = {
    icon: MagmaSkullImg,
    isCollection: false,
    id: 3999,
    name: "岩浆骷髅头",
    Category: Accessories,
    Subcategory: Fireproof,
    comments: '',
}

export const MoltenCharm: Item = {
    icon: MoltenCharmImg,
    isCollection: false,
    id: 4038,
    name: "熔火护身符",
    Category: Accessories,
    Subcategory: Fireproof,
    comments: '',
}

export const FireproofList = [
    ObsidianSkull,
    ObsidianHorseshoe,
    ObsidianRose,
    MoltenSkullRose,
    ObsidianSkullRose,
    LavaCharm,
    MagmaSkull,
    MoltenCharm]
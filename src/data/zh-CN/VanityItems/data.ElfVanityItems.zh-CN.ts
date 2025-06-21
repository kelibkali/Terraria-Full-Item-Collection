import type { Item } from "../../Interface.ts";

import ElfHatImg from "../../../assets/icon/VanityItems/Elf/Elf_Hat.webp"
import ElfShirtImg from "../../../assets/icon/VanityItems/Elf/Elf_Shirt.webp"
import ElfPantsImg from "../../../assets/icon/VanityItems/Elf/Elf_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {ElfVanityItems} from "../data.Subcategory.zh-CN.ts";
export const ElfHat:Item={
    icon:ElfHatImg,
    isCollection:false,
    id:1943,
    name: "精灵帽",
    Category:VanityItems,
    Subcategory:ElfVanityItems,
    comments:"僵尸精灵",
}
export const ElfShirt:Item={
    icon:ElfShirtImg,
    isCollection:false,
    id:1944,
    name: "精灵衣",
    Category:VanityItems,
    Subcategory:ElfVanityItems,
    comments:"僵尸精灵",
}
export const ElfPants:Item={
    icon:ElfPantsImg,
    isCollection:false,
    id:1945,
    name: "精灵裤",
    Category:VanityItems,
    Subcategory:ElfVanityItems,
    comments:"僵尸精灵",
}
export const ElfVanityItemsList =[
ElfHat,
ElfShirt,
ElfPants]
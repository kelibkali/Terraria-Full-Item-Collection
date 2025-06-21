import type {Item} from "../../Interface.ts";

import BookofSkullsImg from "../../../assets/icon/MagicWeapons/SpellBooks/Book_of_Skulls.webp"
import CrystalStormImg from "../../../assets/icon/MagicWeapons/SpellBooks/Crystal_Storm.webp"
import CursedFlamesImg from "../../../assets/icon/MagicWeapons/SpellBooks/Cursed_Flames.webp"
import DemonScytheImg from "../../../assets/icon/MagicWeapons/SpellBooks/Demon_Scythe.webp"
import GoldenShowerImg from "../../../assets/icon/MagicWeapons/SpellBooks/Golden_Shower.webp"
import LunarFlareImg from "../../../assets/icon/MagicWeapons/SpellBooks/Lunar_Flare.webp"
import MagnetSphereImg from "../../../assets/icon/MagicWeapons/SpellBooks/Magnet_Sphere.webp"
import RazorbladeTyphoonImg from "../../../assets/icon/MagicWeapons/SpellBooks/Razorblade_Typhoon.webp"
import WaterBoltImg from "../../../assets/icon/MagicWeapons/SpellBooks/Water_Bolt.webp"

import {MagicWeapons} from "../data.Category.zh-CN.ts";
import {SpellBooks} from "../data.Subcategory.zh-CN.ts";

export const WaterBolt:Item={
        icon:WaterBoltImg,
        isCollection:false,
        id:165,
        name: "水矢",
        Category:MagicWeapons,
        Subcategory:SpellBooks,
        comments:'',
    }

export const BookofSkulls:Item={
        icon:BookofSkullsImg,
        isCollection:false,
        id:1313,
        name: "骷髅头法书",
        Category:MagicWeapons,
        Subcategory:SpellBooks,
        comments:'',
    }

export const DemonScythe:Item={
        icon:DemonScytheImg,
        isCollection:false,
        id:272,
        name: "恶魔之镰",
        Category:MagicWeapons,
        Subcategory:SpellBooks,
        comments:'',
    }

export const CrystalStorm:Item={
        icon:CrystalStormImg,
        isCollection:false,
        id:518,
        name: "水晶风暴",
        Category:MagicWeapons,
        Subcategory:SpellBooks,
        comments:'',
    }

export const CursedFlames:Item={
        icon:CursedFlamesImg,
        isCollection:false,
        id:519,
        name: "咒焰书",
        Category:MagicWeapons,
        Subcategory:SpellBooks,
        comments:'',
    }

export const GoldenShower:Item={
        icon:GoldenShowerImg,
        isCollection:false,
        id:1336,
        name: "黄金雨",
        Category:MagicWeapons,
        Subcategory:SpellBooks,
        comments:'',
    }

export const MagnetSphere:Item={
        icon:MagnetSphereImg,
        isCollection:false,
        id:1266,
        name: "磁球",
        Category:MagicWeapons,
        Subcategory:SpellBooks,
        comments:'',
    }

export const RazorbladeTyphoon:Item={
        icon:RazorbladeTyphoonImg,
        isCollection:false,
        id:2622,
        name: "利刃台风",
        Category:MagicWeapons,
        Subcategory:SpellBooks,
        comments:'',
    }

export const LunarFlare:Item={
        icon:LunarFlareImg,
        isCollection:false,
        id:3570,
        name: "月耀",
        Category:MagicWeapons,
        Subcategory:SpellBooks,
        comments:'',
    }

export const SpellBooksList =[
WaterBolt,
BookofSkulls,
DemonScythe,
CrystalStorm,
CursedFlames,
GoldenShower,
MagnetSphere,
RazorbladeTyphoon,
LunarFlare]
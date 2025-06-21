import type { Item } from "../../Interface.ts";

import Moon_CharmImg from "../../../assets/icon/Accessories/CelestialShell/Moon_Charm.webp"
import Neptunes_ShellImg from "../../../assets/icon/Accessories/CelestialShell/Neptunes_Shell.webp"
import Sun_StoneImg from "../../../assets/icon/Accessories/CelestialShell/Sun_Stone.webp"
import Moon_StoneImg from "../../../assets/icon/Accessories/CelestialShell/Moon_Stone.webp"
import Celestial_StoneImg from "../../../assets/icon/Accessories/CelestialShell/Celestial_Stone.webp"
import Moon_ShellImg from "../../../assets/icon/Accessories/CelestialShell/Moon_Shell.webp"
import Celestial_ShellImg from "../../../assets/icon/Accessories/CelestialShell/Celestial_Shell.webp"

import { Accessories} from "../data.Category.zh-CN.ts";
import {CelestialShell} from "../data.Subcategory.zh-CN.ts";
export const Moon_Charm:Item={
    icon:Moon_CharmImg,
    isCollection:false,
    id:485,
    name: "月光护身符",
    Category:Accessories,
    Subcategory:CelestialShell,
    comments:'',
}
export const Neptunes_Shell:Item={
    icon:Neptunes_ShellImg,
    isCollection:false,
    id:497,
    name: "海神贝壳",
    Category:Accessories,
    Subcategory:CelestialShell,
    comments:'',
}
export const Sun_Stone:Item={
    icon:Sun_StoneImg,
    isCollection:false,
    id:899,
    name: "太阳石",
    Category:Accessories,
    Subcategory:CelestialShell,
    comments:'',
}
export const Moon_Stone:Item={
    icon:Moon_StoneImg,
    isCollection:false,
    id:900,
    name: "月亮石",
    Category:Accessories,
    Subcategory:CelestialShell,
    comments:'',
}
export const Celestial_Stone:Item={
    icon:Celestial_StoneImg,
    isCollection:false,
    id:1865,
    name: "天界石",
    Category:Accessories,
    Subcategory:CelestialShell,
    comments:'',
}
export const Moon_Shell:Item={
    icon:Moon_ShellImg,
    isCollection:false,
    id:861,
    name: "月亮贝壳",
    Category:Accessories,
    Subcategory:CelestialShell,
    comments:'',
}
export const Celestial_Shell:Item={
    icon:Celestial_ShellImg,
    isCollection:false,
    id:3110,
    name: "天界贝壳",
    Category:Accessories,
    Subcategory:CelestialShell,
    comments:'',
}
export const CelestialShellList =[
Moon_Charm,
Neptunes_Shell,
Sun_Stone,
Moon_Stone,
Celestial_Stone,
Moon_Shell,
Celestial_Shell]
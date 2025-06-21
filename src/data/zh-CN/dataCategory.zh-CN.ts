import type {Category} from "../Interface.ts";
import {
    Arrows,
    Boomerangs,
    Bows, Bullets, Consumables,
    Flails, Guns, Launchers, OtherBullets,
    OtherMeleeWeapon, OtherRangedWeapons,
    Repeaters,
    Spears,
    Swords,
    Yoyos
} from "./dataSubcategory.zh-CN.ts";

export const MeleeWeaopns:Category={
    value:"近战武器",
    label:"近战武器",
    children:[
        Swords,
        Flails,
        Spears,
        Boomerangs,
        Yoyos,
        OtherMeleeWeapon
    ]
}

export const RangedWeapons:Category={
    value:"远程武器",
    label:"远程武器",
    children:[
        Bows,
        Repeaters,
        Arrows,
        Guns,
        Bullets,
        Launchers,
        OtherRangedWeapons,
        OtherBullets,
        Consumables
    ]
}

export const Categories:Category[]=[
    MeleeWeaopns,RangedWeapons
]
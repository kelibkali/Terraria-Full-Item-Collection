import type {Category} from "../Interface.ts";
import {
    Arrows,
    Boomerangs,
    Bows, Bullets, Consumables,
    Flails, Guns, Launchers, MagicGuns, OtherBullets, OtherMagicWeapons,
    OtherMeleeWeapon, OtherRangedWeapons,
    Repeaters,
    Spears, SpellBooks,
    Swords, Wands,
    Yoyos
} from "./dataSubcategory.zh-CN.ts";

export const MeleeWeapons:Category={
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

export const MagicWeapons:Category={
    value:"魔法武器",
    label:"魔法武器",
    children:[
        Wands,
        SpellBooks,
        MagicGuns,
        OtherMagicWeapons
    ]
}

export const Categories:Category[]=[
    MeleeWeapons,RangedWeapons,MagicWeapons
]
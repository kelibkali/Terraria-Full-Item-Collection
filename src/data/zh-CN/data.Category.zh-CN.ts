import type {Category} from "../Interface.ts";
import {
    Arrows,
    Boomerangs,
    Bows, Building,
    Bullets, CelestialShell, Cloak,
    Consumables, Decoration, Diving, Doll, Emblem, Expert, Fireproof, Fishing,
    Flails,
    FrogAndNinja, Glove,
    Guns, HPAndMP,
    Information,
    Launchers,
    MagicGuns,
    MinionSummoningWeapons, Necklace, OtherAccessories,
    OtherBullets,
    OtherMagicWeapons,
    OtherMeleeWeapon,
    OtherRangedWeapons, Pirate, Quiver,
    Repeaters, Scope,
    SentrySummoningWeapons, Shield, Shoes,
    Spears,
    SpellBooks, Summoning,
    Swords,
    TwiceJump,
    Wands,
    Whips,
    Wings,
    Yoyos, YoyosAccessories
} from "./data.Subcategory.zh-CN.ts";

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

export const SummoningWeapons:Category={
    value:"召唤武器",
    label:"召唤武器",
    children:[
        MinionSummoningWeapons,
        SentrySummoningWeapons,
        Whips
    ]
}

export const Accessories:Category={
    value:"饰品",
    label:"饰品",
    children:[
        Information,TwiceJump,Wings,FrogAndNinja,Shoes,
        Fireproof,HPAndMP,Shield,Glove,Emblem,
        CelestialShell,Cloak,Summoning,Quiver,Scope,
        Necklace,Doll,Expert,YoyosAccessories,Fishing,
        Pirate,Building,Diving,Decoration,OtherAccessories
    ]
}

export const Categories:Category[]=[
    MeleeWeapons,RangedWeapons,MagicWeapons,SummoningWeapons,
    Accessories,
]
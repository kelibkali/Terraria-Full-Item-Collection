import type {Category} from "../Interface.ts";
import {
    AaronDevelopers,
    AdamantiteArmor,
    AncientArmor,
    AncientCobaltArmor,
    AncientHallowedArmor,
    AncientVanityItems,
    AnglerArmor,
    ApprenticesArmor,
    ArchaeologistVanityItems,
    ArkhalisDevelopers,
    Arrows,
    AshWoodArmor,
    BadgerDevelopers,
    BeeArmor,
    BeetleArmor,
    BeeVanityItems,
    BlackGraduationVanityItems,
    BlueGraduationVanityItems,
    Boomerangs,
    BorealWoodArmor,
    Bows,
    BuccaneerVanityItems,
    Building,
    Bullets,
    BunnyVanityItems,
    ButcherVanityItems,
    CactusArmor,
    CapricornVanityItems,
    CatVanityItems,
    CelestialShell,
    CenxDevelopers,
    ChefVanityItems,
    ChippyDevelopers,
    ChlorophyteArmor,
    Cloak,
    ClothierVanityItems,
    ClownVanityItems,
    CobaltArmor, CommonDyes,
    Consumables,
    CopperArmor,
    CountryClubVanityItems,
    CowboyVanityItems,
    CreeperVanityItems,
    CrimsonArmor,
    CrownoDevelopers,
    CrystalArmor,
    CyborgVanityItems,
    DarkArtistsArmor,
    Decoration,
    Diving, DizzyDevelopers,
    DogVanityItems,
    Doll,
    DrManFlyVanityItems,
    DryadVanityItems,
    DTownDevelopers,
    DyeTraderVanityItems,
    EbonwoodArmor,
    ElfVanityItems,
    Emblem,
    Expert,
    FallenTuxedoVanityItems,
    FamiliarVanityItems,
    Fireproof,
    FirestarterVanityItems,
    FishCostumeVanityItems,
    Fishing,
    Flails,
    FloretProtectorVanityItems,
    FoodBarbarianDevelopers,
    ForbiddenArmor,
    FossilArmor,
    FoxVanityItems,
    FrankensteinVanityItems,
    FrogAndNinja,
    FrostArmor,
    FuneralVanityItems,
    GentlemanBeardVanityItems,
    GentlemanVanityItems,
    GhostarDevelopers,
    GhostVanityItems,
    GladiatorArmor,
    Glove,
    GoldArmor,
    GravediggerVanityItems,
    GroxDevelopers,
    Guns, HairDyes,
    HallowedArmor,
    HeroVanityItems,
    HPAndMP,
    HuntresssArmor,
    Information,
    IronArmor, JimDevelopers,
    JungleArmor,
    KarateTortoiseVanityItems,
    LamiaVanityItems,
    Launchers, LazureDevelopers,
    LeadArmor, LeinforsDevelopers,
    LeprechaunVanityItems,
    LizardVanityItems, LokiDevelopers,
    LunarCultistVanityItems,
    MagicGuns,
    MaidVanityItems,
    MaroonGraduationVanityItems,
    MartianCostumeVanityItems,
    MartianUniformVanityItems,
    MasterGamerVanityItems, MaterialDyes,
    MermaidVanityItems,
    MeteorArmor,
    MiningArmor,
    MinionSummoningWeapons,
    MoltenArmor,
    MonksArmor,
    MrsClausVanityItems,
    MummyVanityItems,
    MushroomVanityItems,
    MythrilArmor,
    NebulaArmor,
    Necklace,
    NecroArmor,
    NinjaArmor,
    NurseVanityItems,
    ObsidianArmor,
    OrichalcumArmor,
    OtherAccessories,
    OtherArmor,
    OtherBullets,
    OtherMagicWeapons,
    OtherMeleeWeapon,
    OtherRangedWeapons,
    OtherVanityItems, Ox33Developers,
    PalladiumArmor,
    PalmWoodArmor,
    ParkaVanityItems,
    PearlwoodArmor, PedguinDevelopers,
    PharaohVanityItems,
    PinkMaidVanityItems,
    PinkSnowArmor,
    Pirate,
    PirateVanityItems,
    PixieVanityItems,
    PlaguebringerVanityItems,
    PlatinumArmor,
    PlumberVanityItems,
    PrettyPinkVanityItems, PrincessAVanityItems, PrincessBVanityItems,
    PrinceVanityItems,
    PumpkinArmor,
    PumpkinVanityItems,
    Quiver,
    RainVanityItems,
    RaynebroVanityItems,
    ReaperVanityItems, RedDevelopers,
    RedRidingArmor,
    Repeaters,
    RichMahoganyArmor,
    Robe,
    RobotVanityItems,
    RoyalVanityItems,
    RuneVanityItems, SafemanDevelopers,
    SailorVanityItems,
    SantaVanityItems,
    ScarecrowVanityItems,
    Scope,
    SentrySummoningWeapons,
    ShadewoodArmor,
    ShadowArmor,
    Shield,
    ShinobiInfiltratorsArmor,
    Shoes,
    ShroomiteArmor, SillySunflowerVanityItems,
    SilverArmor, SkiphsDevelopers,
    SnowArmor, SolarCultistVanityItems,
    SolarFlareArmor, SpaceCreatureVanityItems,
    Spears,
    SpectreArmor,
    SpellBooks,
    SpiderArmor,
    SpookyArmor,
    SquiresArmor,
    StardustArmor, StarPrincessVanityItems, SteampunkVanityItems, StrangePlantDyes,
    Summoning, SuperheroVanityItems,
    Swords, TaxCollectorVanityItems, TelevisionVanityItems, TheDoctorVanityItems,
    TikiArmor, TimelessTravelerVanityItems,
    TinArmor,
    TitaniumArmor,
    TravelMerchantArmor, TreasureHunterVanityItems, TreeVanityItems,
    TungstenArmor,
    TurtleArmor, TuxedoVanityItems,
    TwiceJump, UnicornVanityItems,
    ValhallaKnightsArmor, VampireVanityItems, VictorianGothVanityItems,
    VortexArmor, WanderingVanityItems,
    Wands, WeddingVanityItems,
    Whips, WhiteTuxedoVanityItems, WillDevelopers,
    Wings, WitchVanityItems, WolfVanityItems,
    WoodArmor, Yoraiz0rDevelopers,
    Yoyos,
    YoyosAccessories
} from "./data.Subcategory.zh-CN.ts";

export const MeleeWeapons: Category = {
    value: "近战武器",
    label: "近战武器",
    children: [
        Swords,
        Flails,
        Spears,
        Boomerangs,
        Yoyos,
        OtherMeleeWeapon
    ]
}

export const RangedWeapons: Category = {
    value: "远程武器",
    label: "远程武器",
    children: [
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

export const MagicWeapons: Category = {
    value: "魔法武器",
    label: "魔法武器",
    children: [
        Wands,
        SpellBooks,
        MagicGuns,
        OtherMagicWeapons
    ]
}

export const SummoningWeapons: Category = {
    value: "召唤武器",
    label: "召唤武器",
    children: [
        MinionSummoningWeapons,
        SentrySummoningWeapons,
        Whips
    ]
}

export const Accessories: Category = {
    value: "饰品",
    label: "饰品",
    children: [
        Information, TwiceJump, Wings, FrogAndNinja, Shoes,
        Fireproof, HPAndMP, Shield, Glove, Emblem,
        CelestialShell, Cloak, Summoning, Quiver, Scope,
        Necklace, Doll, Expert, YoyosAccessories, Fishing,
        Pirate, Building, Diving, Decoration, OtherAccessories
    ]
}

export const Armor: Category = {
    value: "盔甲",
    label: "盔甲",
    children: [
        AdamantiteArmor, AncientArmor, AncientCobaltArmor, AncientHallowedArmor,
        AnglerArmor, ApprenticesArmor, AshWoodArmor, BeeArmor, BeetleArmor,
        BorealWoodArmor, CactusArmor, ChlorophyteArmor, CobaltArmor,
        CopperArmor, CrimsonArmor, CrystalArmor, DarkArtistsArmor, EbonwoodArmor,
        ForbiddenArmor, FossilArmor, FrostArmor, GladiatorArmor, GoldArmor,
        HallowedArmor, HuntresssArmor, IronArmor, JungleArmor, LeadArmor,
        MeteorArmor, MiningArmor, MoltenArmor, MonksArmor, MythrilArmor,
        NebulaArmor, NecroArmor, NinjaArmor, ObsidianArmor, OrichalcumArmor,
        OtherArmor, PalladiumArmor, PalmWoodArmor, PearlwoodArmor, PinkSnowArmor,
        PlatinumArmor, PumpkinArmor, RedRidingArmor, RichMahoganyArmor, Robe,
        ShadewoodArmor, ShadowArmor, ShinobiInfiltratorsArmor, ShroomiteArmor,
        SilverArmor, SnowArmor, SolarFlareArmor, SpectreArmor, SpiderArmor,
        SpookyArmor, SquiresArmor, StardustArmor, TikiArmor, TinArmor, TitaniumArmor,
        TravelMerchantArmor, TungstenArmor, TurtleArmor, ValhallaKnightsArmor, VortexArmor, WoodArmor
    ]
}

export const VanityItems: Category = {
    value: "时装",
    label: "时装",
    children: [
        AncientVanityItems, ArchaeologistVanityItems, BeeVanityItems, BlackGraduationVanityItems, BlueGraduationVanityItems, BuccaneerVanityItems, BunnyVanityItems, ButcherVanityItems, CapricornVanityItems, CatVanityItems, ChefVanityItems, ClothierVanityItems, ClownVanityItems, CountryClubVanityItems, CowboyVanityItems, CreeperVanityItems, CyborgVanityItems, DogVanityItems, DrManFlyVanityItems, DryadVanityItems, DyeTraderVanityItems, ElfVanityItems, FallenTuxedoVanityItems, FamiliarVanityItems, FirestarterVanityItems, FishCostumeVanityItems, FloretProtectorVanityItems, FoxVanityItems, FrankensteinVanityItems, FuneralVanityItems, GentlemanVanityItems, GentlemanBeardVanityItems, GhostVanityItems, GravediggerVanityItems, HeroVanityItems, KarateTortoiseVanityItems, LamiaVanityItems, LeprechaunVanityItems, LizardVanityItems, LunarCultistVanityItems, MaidVanityItems, MaroonGraduationVanityItems, MartianCostumeVanityItems, MartianUniformVanityItems, MasterGamerVanityItems, MermaidVanityItems, MrsClausVanityItems, MummyVanityItems, MushroomVanityItems, NurseVanityItems, OtherVanityItems, ParkaVanityItems, PharaohVanityItems, PinkMaidVanityItems, PirateVanityItems, PixieVanityItems, PlaguebringerVanityItems, PlumberVanityItems, PrettyPinkVanityItems, PrinceVanityItems, PrincessAVanityItems, PrincessBVanityItems, PumpkinVanityItems, RainVanityItems, RaynebroVanityItems, ReaperVanityItems, RobotVanityItems, RoyalVanityItems, RuneVanityItems, SailorVanityItems, SantaVanityItems, ScarecrowVanityItems, SillySunflowerVanityItems, SolarCultistVanityItems, SpaceCreatureVanityItems, StarPrincessVanityItems, SteampunkVanityItems, SuperheroVanityItems, TaxCollectorVanityItems, TelevisionVanityItems, TheDoctorVanityItems, TimelessTravelerVanityItems, TreasureHunterVanityItems, TreeVanityItems, TuxedoVanityItems, UnicornVanityItems, VampireVanityItems, VictorianGothVanityItems, WanderingVanityItems, WeddingVanityItems, WhiteTuxedoVanityItems, WitchVanityItems, WolfVanityItems
    ]
}

export const Developers:Category={
    value:"开发者与主播",
    label:"开发者与主播",
    children:[
        AaronDevelopers,ArkhalisDevelopers,BadgerDevelopers,CenxDevelopers,ChippyDevelopers,CrownoDevelopers,DTownDevelopers,DizzyDevelopers,FoodBarbarianDevelopers,GhostarDevelopers,GroxDevelopers,JimDevelopers,LazureDevelopers,LeinforsDevelopers,LokiDevelopers,Ox33Developers,PedguinDevelopers,RedDevelopers,SafemanDevelopers,SkiphsDevelopers,WillDevelopers,Yoraiz0rDevelopers
    ]
}

export const Dyes: Category = {
    value: "染料",
    label: "染料",
    children: [
        CommonDyes,HairDyes,MaterialDyes,StrangePlantDyes
    ]
}


export const Categories: Category[] = [
    MeleeWeapons, RangedWeapons, MagicWeapons, SummoningWeapons,
    Accessories, Armor, VanityItems,Developers,Dyes,
]
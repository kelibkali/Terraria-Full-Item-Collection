import type {Category} from "../Interface.ts";

import * as SubCategory from "./data.SubCategory.zh-CN.ts";

export const MeleeWeapon: Category = {
    value: "近战武器",
    label: "近战武器",
    children: [
        SubCategory.Sword,
        SubCategory.Flail,
        SubCategory.Spear,
        SubCategory.Boomerang,
        SubCategory.Yoyo,
        SubCategory.OtherMeleeWeapon,
    ],
}

export const RangedWeapon: Category = {
    value: "远程武器",
    label: "远程武器",
    children: [
        SubCategory.Bow,
        SubCategory.Repeater,
        SubCategory.Arrow,
        SubCategory.Gun,
        SubCategory.Bullet,
        SubCategory.Launcher,
        SubCategory.OtherRangedWeapon,
        SubCategory.OtherBullet,
        SubCategory.Consumable,
    ],
}

export const MagicWeapon: Category = {
    value: "魔法武器",
    label: "魔法武器",
    children: [
        SubCategory.Wand,
        SubCategory.SpellBook,
        SubCategory.MagicGun,
        SubCategory.OtherMagicWeapon,
    ],
}

export const SummoningWeapon: Category = {
    value: "召唤武器",
    label: "召唤武器",
    children: [
        SubCategory.MinionSummoningWeapon,
        SubCategory.SentrySummoningWeapon,
        SubCategory.Whip,
    ],
}

export const Accessories: Category = {
    value: "饰品",
    label: "饰品",
    children: [
        SubCategory.Information,
        SubCategory.TwiceJump,
        SubCategory.Wings,
        SubCategory.FrogAndNinja,
        SubCategory.Shoes,
        SubCategory.Fireproof,
        SubCategory.HPAndMP,
        SubCategory.Shield,
        SubCategory.Glove,
        SubCategory.Emblem,
        SubCategory.CelestialShell,
        SubCategory.Cloak,
        SubCategory.Summoning,
        SubCategory.Quiver,
        SubCategory.Scope,
        SubCategory.Necklace,
        SubCategory.Doll,
        SubCategory.Expert,
        SubCategory.YoyosAccessories,
        SubCategory.Fishing,
        SubCategory.Pirate,
        SubCategory.Building,
        SubCategory.Diving,
        SubCategory.Decoration,
        SubCategory.OtherAccessories,
    ],
}

export const Armor: Category = {
    value: "盔甲",
    label: "盔甲",
    children: [
        SubCategory.WoodArmor,
        SubCategory.RichMahoganyArmor,
        SubCategory.BorealWoodArmor,
        SubCategory.PalmWoodArmor,
        SubCategory.EbonwoodArmor,
        SubCategory.ShadewoodArmor,
        SubCategory.AshWoodArmor,
        SubCategory.PearlwoodArmor,
        SubCategory.PumpkinArmor,
        SubCategory.CactusArmor,
        SubCategory.SnowArmor,
        SubCategory.PinkSnowArmor,
        SubCategory.AnglerArmor,
        SubCategory.MiningArmor,
        SubCategory.CopperArmor,
        SubCategory.TinArmor,
        SubCategory.IronArmor,
        SubCategory.LeadArmor,
        SubCategory.SilverArmor,
        SubCategory.TungstenArmor,
        SubCategory.GoldArmor,
        SubCategory.PlatinumArmor,
        SubCategory.GladiatorArmor,
        SubCategory.FossilArmor,
        SubCategory.NinjaArmor,
        SubCategory.Robe,
        SubCategory.JungleArmor,
        SubCategory.BeeArmor,
        SubCategory.ShadowArmor,
        SubCategory.AncientShadowArmor,
        SubCategory.CrimsonArmor,
        SubCategory.ObsidianArmor,
        SubCategory.AncientCobaltArmor,
        SubCategory.MeteorArmor,
        SubCategory.MoltenArmor,
        SubCategory.NecroArmor,
        SubCategory.SpiderArmor,
        SubCategory.CrystalArmor,
        SubCategory.CobaltArmor,
        SubCategory.PalladiumArmor,
        SubCategory.MythrilArmor,
        SubCategory.OrichalcumArmor,
        SubCategory.AdamantiteArmor,
        SubCategory.TitaniumArmor,
        SubCategory.FrostArmor,
        SubCategory.ForbiddenArmor,
        SubCategory.HallowedArmor,
        SubCategory.AncientHallowedArmor,
        SubCategory.ChlorophyteArmor,
        SubCategory.TurtleArmor,
        SubCategory.TikiArmor,
        SubCategory.SpectreArmor,
        SubCategory.ShroomiteArmor,
        SubCategory.SpookyArmor,
        SubCategory.BeetleArmor,
        SubCategory.VortexArmor,
        SubCategory.NebulaArmor,
        SubCategory.SolarArmor,
        SubCategory.StardustArmor,
        SubCategory.ApprenticeArmor,
        SubCategory.SquireArmor,
        SubCategory.HuntressArmor,
        SubCategory.MonkArmor,
        SubCategory.ValhallaArmor,
        SubCategory.DarkArmor,
        SubCategory.RedArmor,
        SubCategory.ShinobiArmor,
        SubCategory.OtherArmor,
    ],
}

export const VanityItems: Category = {
    value: "时装",
    label: "时装",
    children: [
        SubCategory.TuxedoV,
        SubCategory.PlumberV,
        SubCategory.HeroV,
        SubCategory.ArchaeologistV,
        SubCategory.FamiliarV,
        SubCategory.TheDoctorV,
        SubCategory.ClownV,
        SubCategory.SantaV,
        SubCategory.RuneV,
        SubCategory.SteampunkV,
        SubCategory.BeeV,
        SubCategory.PharaohV,
        SubCategory.PrincessVA,
        SubCategory.MummyV,
        SubCategory.CowboyV,
        SubCategory.PirateV,
        SubCategory.RainV,
        SubCategory.SailorV,
        SubCategory.WhiteTuxedoV,
        SubCategory.NurseV,
        SubCategory.DyeTraderV,
        SubCategory.CyborgV,
        SubCategory.CreeperV,
        SubCategory.CatV,
        SubCategory.GhostV,
        SubCategory.PumpkinV,
        SubCategory.RobotV,
        SubCategory.UnicornV,
        SubCategory.VampireV,
        SubCategory.LeprechaunV,
        SubCategory.PixieV,
        SubCategory.PrincessVB,
        SubCategory.WitchV,
        SubCategory.BrideV,
        SubCategory.KarateV,
        SubCategory.ReaperV,
        SubCategory.FoxV,
        SubCategory.SpaceCreatureV,
        SubCategory.WolfV,
        SubCategory.TreasureHunterV,
        SubCategory.DryadV,
        SubCategory.ScarecrowV,
        SubCategory.MrsClausV,
        SubCategory.ParkaV,
        SubCategory.TreeV,
        SubCategory.ElfV,
        SubCategory.MermaidV,
        SubCategory.FishV,
        SubCategory.MartianCostumeV,
        SubCategory.MartianUniformV,
        SubCategory.SolarCultistV,
        SubCategory.LunarCultistV,
        SubCategory.TaxCollectorV,
        SubCategory.ClothierV,
        SubCategory.BuccaneerV,
        SubCategory.FallenV,
        SubCategory.WeddingV,
        SubCategory.SunflowerV,
        SubCategory.AncientV,
        SubCategory.LamiaV,
        SubCategory.MaidV,
        SubCategory.PinkV,
        SubCategory.ClubV,
        SubCategory.SuperheroV,
        SubCategory.BlueV,
        SubCategory.RedV,
        SubCategory.BlackV,
        SubCategory.DiggerV,
        SubCategory.FuneralV,
        SubCategory.VictorianV,
        SubCategory.DrManFlyV,
        SubCategory.ButcherV,
        SubCategory.DogV,
        SubCategory.LizardV,
        SubCategory.BunnyV,
        SubCategory.MushroomV,
        SubCategory.PlaguebringerV,
        SubCategory.WanderingV,
        SubCategory.TimelessV,
        SubCategory.FloretV,
        SubCategory.CapricornV,
        SubCategory.TVV,
        SubCategory.RoyalV,
        SubCategory.PrinceV,
        SubCategory.GentlemanV,
        SubCategory.BeardV,
        SubCategory.FireV,
        SubCategory.MasterV,
        SubCategory.StartV,
        SubCategory.ChefV,
        SubCategory.PrettyPinkV,
        SubCategory.Raynebro,
        SubCategory.OtherV,
    ],
}

export const Developers: Category = {
    value: "开发者与主播",
    label: "开发者与主播",
    children: [
        SubCategory.Red,
        SubCategory.Cenx,
        SubCategory.Crowno,
        SubCategory.Will,
        SubCategory.Jim,
        SubCategory.Aaron,
        SubCategory.DTown,
        SubCategory.Lazure,
        SubCategory.Yoraiz0r,
        SubCategory.Skiphs,
        SubCategory.Loki,
        SubCategory.Arkhalis,
        SubCategory.Leinfors,
        SubCategory.Ghostar,
        SubCategory.Safeman,
        SubCategory.FoodBarbarian,
        SubCategory.Grox,
        SubCategory.Pedguin,
        SubCategory.OtherD,
    ],
}

export const Dyes: Category = {
    value: "染料",
    label: "染料",
    children: [
        SubCategory.CommonDye,
        SubCategory.MaterialD,
        SubCategory.StrangePlantDye,
        SubCategory.HairDye,
    ],
}

export const Mounts: Category = {
    value: "坐骑",
    label: "坐骑",
    children: [
        SubCategory.CommonMount,
        SubCategory.MinecartM,
    ],
}

export const Pets: Category = {
    value: "宠物",
    label: "宠物",
    children: [
        SubCategory.CommonPet,
        SubCategory.LightPet,
    ],
}

export const Hook: Category = {
    value: "钩爪",
    label: "钩爪",
}

export const Tools: Category = {
    value: "工具",
    label: "工具",
    children: [
        SubCategory.PickaxeTool,
        SubCategory.AxeTool,
        SubCategory.HammerTool,
        SubCategory.TransformTool,
        SubCategory.WandTool,
        SubCategory.WaterTool,
        SubCategory.EnvironmentTool,
        SubCategory.KeyTool,
        SubCategory.GolfTool,
        SubCategory.OtherTool,
    ],
}

export const Circuit: Category = {
    value: "电路相关",
    label: "电路相关",
    children: [
        SubCategory.CircuitTool,
        SubCategory.SwitchC,
        SubCategory.PressurePlateC,
        SubCategory.TimerC,
        SubCategory.Trap,
        SubCategory.TrackC,
        SubCategory.LogicGate,
        SubCategory.ChestC,
        SubCategory.OtherC,
    ],
}

export const FishingItem: Category = {
    value: "钓鱼",
    label: "钓鱼",
    children: [
        SubCategory.CommonFish,
        SubCategory.MaterialFish,
        SubCategory.FishingPole,
        SubCategory.Bait,
        SubCategory.Rubbish,
        SubCategory.DecorationF,
        SubCategory.PaintF,
        SubCategory.MissionF,
        SubCategory.CrateF,
    ],
}

export const Foods: Category = {
    value: "食物",
    label: "食物",
    children: [
        SubCategory.TreeF,
        SubCategory.MonsterF,
        SubCategory.MakeF,
        SubCategory.OtherF,
    ],
}

export const Medicine: Category = {
    value: "药水",
    label: "药水",
    children: [
        SubCategory.HMP,
        SubCategory.BuffP,
        SubCategory.FlaskP,
        SubCategory.TransformP,
    ],
}

export const Block: Category = {
    value: "方块",
    label: "方块",
    children: [
        SubCategory.Ore,
        SubCategory.NatureBlock,
        SubCategory.Block,
        SubCategory.TransferBrick,
        SubCategory.OtherBlock,
    ],
}

export const Walls: Category = {
    value: "墙",
    label: "墙",
    children: [
        SubCategory.NaturalWall,
        SubCategory.BrickWall,
        SubCategory.TransferWall,
        SubCategory.CursedWall,
        SubCategory.OtherWall,
    ],
}

export const Furniture: Category = {
    value: "家具",
    label: "家具",
    children: [
        SubCategory.WoodF,
        SubCategory.LWF,
        SubCategory.BWF,
        SubCategory.RMF,
        SubCategory.PWF,
        SubCategory.EF,
        SubCategory.SF,
        SubCategory.AWF,
        SubCategory.PF,
        SubCategory.DF,
        SubCategory.BF,
        SubCategory.CF,
        SubCategory.PumF,
        SubCategory.MushF,
        SubCategory.GranF,
        SubCategory.MarF,
        SubCategory.SanF,
        SubCategory.SkyF,
        SubCategory.MeteF,
        SubCategory.GlaF,
        SubCategory.FroF,
        SubCategory.HonF,
        SubCategory.SliF,
        SubCategory.BallF,
        SubCategory.ReefF,
        SubCategory.SpiderF,
        SubCategory.LesF,
        SubCategory.FleF,
        SubCategory.BoneF,
        SubCategory.SteamF,
        SubCategory.LihzF,
        SubCategory.ObF,
        SubCategory.MartianF,
        SubCategory.PinkF,
        SubCategory.GreenF,
        SubCategory.BlueF,
        SubCategory.GoldF,
        SubCategory.CryF,
        SubCategory.SolF,
        SubCategory.VorF,
        SubCategory.NebF,
        SubCategory.StartF,
        SubCategory.SenF,
        SubCategory.GoF,
        SubCategory.AetF,
        SubCategory.EchF,
    ],
}

export const DecorationItem: Category = {
    value: "装饰物",
    label: "装饰物",
    children: [
        SubCategory.TorchD,
        SubCategory.SeedD,
        SubCategory.Pylon,
        SubCategory.Marker,
        SubCategory.Danger,
        SubCategory.MakeStation,
        SubCategory.Rope,
        SubCategory.FoodD,
        SubCategory.ChrisTree,
        SubCategory.ChestD,
        SubCategory.FounD,
        SubCategory.CamD,
        SubCategory.FuncD,
        SubCategory.BuffD,
        SubCategory.PottedD,
        SubCategory.OtherDec,
    ],
}

export const Sculpture: Category = {
    value: "雕像",
    label: "雕像",
    children: [
        SubCategory.MonsterS,
        SubCategory.AnimalS,
        SubCategory.SpecialS,
        SubCategory.DecS,
        SubCategory.NumberS,
    ],
}

export const Flags: Category = {
    value: "旗帜",
    label: "旗帜",
    children: [
        SubCategory.SlimeFla,
        SubCategory.ForestFla,
        SubCategory.DongFla,
        SubCategory.MushFla,
        SubCategory.ForFla,
        SubCategory.JungleFla,
        SubCategory.SandFla,
        SubCategory.HellFla,
        SubCategory.DunFla,
        SubCategory.CorFla,
        SubCategory.CriFla,
        SubCategory.HollFla,
        SubCategory.BloodFla,
        SubCategory.GoblinFla,
        SubCategory.OldOneFla,
        SubCategory.PirateFla,
        SubCategory.DayFla,
        SubCategory.PMFla,
        SubCategory.FMFla,
        SubCategory.MartianFla,
        SubCategory.MoonFla,
        SubCategory.OtherFla,
        SubCategory.DecFla,
    ],
}

export const Painting: Category = {
    value: "画",
    label: "画",
    children: [
        SubCategory.SkyP,
        SubCategory.UnderP,
        SubCategory.SanUnP,
        SubCategory.DunP,
        SubCategory.HellP,
        SubCategory.GolfP,
        SubCategory.PainterP,
        SubCategory.Sale,
        SubCategory.DayP,
        SubCategory.PackP,
    ],
}

export const MusicBox: Category = {
    value: "八音盒",
    label: "八音盒",
}

export const OilPaint: Category = {
    value: "油漆",
    label: "油漆",
}

export const Animal: Category = {
    value: "动物",
    label: "动物",
    children: [
        SubCategory.RawAni,
        SubCategory.Cage,
    ],
}

export const MaterialItems: Category = {
    value: "材料",
    label: "材料",
    children: [
        SubCategory.Bar,
        SubCategory.OtherMate,
    ],
}

export const BossItem: Category = {
    value: "Boss",
    label: "Boss",
    children: [
        SubCategory.KingBoss,
        SubCategory.EyeBoss,
        SubCategory.EaterBoss,
        SubCategory.BrainBoss,
        SubCategory.BeeBoss,
        SubCategory.SkeletronBoss,
        SubCategory.DeerBoss,
        SubCategory.WallBoss,
        SubCategory.QueenBoss,
        SubCategory.DestroyBoss,
        SubCategory.PrimeBoss,
        SubCategory.TwinsBoss,
        SubCategory.PlanteraBoss,
        SubCategory.GolemBoss,
        SubCategory.DukeBoss,
        SubCategory.LightBoss,
        SubCategory.CultistBoss,
        SubCategory.MoonBoss,
        SubCategory.OtherBoss,
    ],
}

export const Miscellaneous: Category = {
    value: "杂项",
    label: "杂项",
    children: [
        SubCategory.Coin,
        SubCategory.Bomb,
        SubCategory.ConsumableM,
        SubCategory.Summoned,
        SubCategory.FinalBuff,
        SubCategory.OtherM,
        SubCategory.ForGFB,
    ],
}

export const Kite: Category = {
    value: "风筝",
    label: "风筝",
    children: [
        SubCategory.MonsterK,
        SubCategory.BeforeK,
        SubCategory.AfterK,
        SubCategory.NPCK,
    ],
}

export const Categories: Category[] = [
    {
      value:"all",
      label: "全部物品",
    },
    MeleeWeapon,
    RangedWeapon,
    MagicWeapon,
    SummoningWeapon,
    Accessories,
    Armor,
    VanityItems,
    Developers,
    Dyes,
    Mounts,
    Pets,
    Hook,
    Tools,
    Circuit,
    FishingItem,
    Foods,
    Medicine,
    Block,
    Walls,
    Furniture,
    DecorationItem,
    Sculpture,
    Flags,
    Painting,
    MusicBox,
    OilPaint,
    Animal,
    MaterialItems,
    BossItem,
    Miscellaneous,
    Kite
];
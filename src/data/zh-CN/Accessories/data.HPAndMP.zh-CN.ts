import type {Item} from "../../Interface.ts";

import ArcaneFlowerImg from "../../../assets/icon/Accessories/HPAndMP/Arcane_Flower.webp"
import BandofRegenerationImg from "../../../assets/icon/Accessories/HPAndMP/Band_of_Regeneration.webp"
import BandofStarpowerImg from "../../../assets/icon/Accessories/HPAndMP/Band_of_Starpower.webp"
import CelestialCuffsImg from "../../../assets/icon/Accessories/HPAndMP/Celestial_Cuffs.webp"
import CelestialMagnetImg from "../../../assets/icon/Accessories/HPAndMP/Celestial_Magnet.webp"
import CharmofMythsImg from "../../../assets/icon/Accessories/HPAndMP/Charm_of_Myths.webp"
import MagicCuffsImg from "../../../assets/icon/Accessories/HPAndMP/Magic_Cuffs.webp"
import MagnetFlowerImg from "../../../assets/icon/Accessories/HPAndMP/Magnet_Flower.webp"
import ManaCloakImg from "../../../assets/icon/Accessories/HPAndMP/Mana_Cloak.webp"
import ManaFlowerImg from "../../../assets/icon/Accessories/HPAndMP/Mana_Flower.webp"
import ManaRegenerationBandImg from "../../../assets/icon/Accessories/HPAndMP/Mana_Regeneration_Band.webp"
import NaturesGiftImg from "../../../assets/icon/Accessories/HPAndMP/Natures_Gift.webp"
import PhilosophersStoneImg from "../../../assets/icon/Accessories/HPAndMP/Philosophers_Stone.webp"
import ShackleImg from "../../../assets/icon/Accessories/HPAndMP/Shackle.webp"

import {Accessories} from "../data.Category.zh-CN.ts";
import {HPAndMP} from "../data.Subcategory.zh-CN.ts";

export const BandofRegeneration: Item = {
    icon: BandofRegenerationImg,
    isCollection: false,
    id: 49,
    name: "再生手环",
    Category: Accessories,
    Subcategory: HPAndMP,
    comments: '',
}

export const BandofStarpower: Item = {
    icon: BandofStarpowerImg,
    isCollection: false,
    id: 111,
    name: "星力手环",
    Category: Accessories,
    Subcategory: HPAndMP,
    comments: '',
}

export const ManaRegenerationBand: Item = {
    icon: ManaRegenerationBandImg,
    isCollection: false,
    id: 982,
    name: "魔力再生手环",
    Category: Accessories,
    Subcategory: HPAndMP,
    comments: '',
}

export const MagicCuffs: Item = {
    icon: MagicCuffsImg,
    isCollection: false,
    id: 1595,
    name: "魔法手铐",
    Category: Accessories,
    Subcategory: HPAndMP,
    comments: '',
}

export const CelestialMagnet: Item = {
    icon: CelestialMagnetImg,
    isCollection: false,
    id: 2219,
    name: "天界磁石",
    Category: Accessories,
    Subcategory: HPAndMP,
    comments: '',
}

export const CelestialCuffs: Item = {
    icon: CelestialCuffsImg,
    isCollection: false,
    id: 2221,
    name: "天界手铐",
    Category: Accessories,
    Subcategory: HPAndMP,
    comments: '',
}

export const Shackle: Item = {
    icon: ShackleImg,
    isCollection: false,
    id: 216,
    name: "镣铐",
    Category: Accessories,
    Subcategory: HPAndMP,
    comments: '',
}

export const PhilosophersStone: Item = {
    icon: PhilosophersStoneImg,
    isCollection: false,
    id: 535,
    name: "点金石",
    Category: Accessories,
    Subcategory: HPAndMP,
    comments: '',
}

export const CharmofMyths: Item = {
    icon: CharmofMythsImg,
    isCollection: false,
    id: 860,
    name: "神话护身符",
    Category: Accessories,
    Subcategory: HPAndMP,
    comments: '',
}

export const NaturesGift: Item = {
    icon: NaturesGiftImg,
    isCollection: false,
    id: 223,
    name: "大自然的恩赐",
    Category: Accessories,
    Subcategory: HPAndMP,
    comments: '',
}

export const ManaFlower: Item = {
    icon: ManaFlowerImg,
    isCollection: false,
    id: 555,
    name: "魔力花",
    Category: Accessories,
    Subcategory: HPAndMP,
    comments: '',
}

export const ManaCloak: Item = {
    icon: ManaCloakImg,
    isCollection: false,
    id: 4001,
    name: "魔力斗篷",
    Category: Accessories,
    Subcategory: HPAndMP,
    comments: '',
}

export const ArcaneFlower: Item = {
    icon: ArcaneFlowerImg,
    isCollection: false,
    id: 3991,
    name: "奥术花",
    Category: Accessories,
    Subcategory: HPAndMP,
    comments: '',
}

export const MagnetFlower: Item = {
    icon: MagnetFlowerImg,
    isCollection: false,
    id: 4000,
    name: "磁花",
    Category: Accessories,
    Subcategory: HPAndMP,
    comments: '',
}

export const HPAndMPList = [
    BandofRegeneration,
    BandofStarpower,
    ManaRegenerationBand,
    MagicCuffs,
    CelestialMagnet,
    CelestialCuffs,
    Shackle,
    PhilosophersStone,
    CharmofMyths,
    NaturesGift,
    ManaFlower,
    ManaCloak,
    ArcaneFlower,
    MagnetFlower
]
import type { Item } from "../../Interface.ts";

import PlaguebringersSkullImg from "../../../assets/icon/VanityItems/Plaguebringer/Plaguebringers_Skull.webp"
import PlaguebringersCloakImg from "../../../assets/icon/VanityItems/Plaguebringer/Plaguebringers_Cloak.webp"
import PlaguebringersTreadsImg from "../../../assets/icon/VanityItems/Plaguebringer/Plaguebringers_Treads.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {PlaguebringerVanityItems} from "../data.Subcategory.zh-CN.ts";
export const PlaguebringersSkull:Item={
    icon:PlaguebringersSkullImg,
    isCollection:false,
    id:5045,
    name: "瘟疫使者骷髅头",
    Category:VanityItems,
    Subcategory:PlaguebringerVanityItems,
    comments:"椎骨+丝绸+黑染料",
}
export const PlaguebringersCloak:Item={
    icon:PlaguebringersCloakImg,
    isCollection:false,
    id:5046,
    name: "瘟疫使者斗篷",
    Category:VanityItems,
    Subcategory:PlaguebringerVanityItems,
    comments:"椎骨+丝绸+黑染料",
}
export const PlaguebringersTreads:Item={
    icon:PlaguebringersTreadsImg,
    isCollection:false,
    id:5047,
    name: "瘟疫使者便鞋",
    Category:VanityItems,
    Subcategory:PlaguebringerVanityItems,
    comments:"椎骨+丝绸+黑染料",
}
export const PlaguebringerVanityItemsList =[
PlaguebringersSkull,
PlaguebringersCloak,
PlaguebringersTreads]
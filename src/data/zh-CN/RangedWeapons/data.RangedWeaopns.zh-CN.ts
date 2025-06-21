import {BowsList} from "./data.Bows.zh-CN.ts";
import {RepeatersList} from "./data.Repeaters.zh-CN.ts";
import {ArrowsList} from "./data.Arrows.zh-CN.ts";
import {BulletsList} from "./data.Bullets.zh_CN.ts";
import {LaunchersList} from "./data.Launchers.zh-CN.ts";
import {OtherRangedWeaponsList} from "./data.OtherRangedWeapons.zh-CN.ts";
import {OtherBulletsList} from "./data.OtherBullets.zh-CN.ts";
import {ConsumablesList} from "./data.Consumables.zh-CN.ts";


export const RangedWeaponsList = [
    ...BowsList,...RepeatersList,...ArrowsList,...BulletsList,...LaunchersList,...OtherRangedWeaponsList,...OtherBulletsList,...ConsumablesList
]
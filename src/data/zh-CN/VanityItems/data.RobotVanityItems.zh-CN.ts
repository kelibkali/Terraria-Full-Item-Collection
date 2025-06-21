import type { Item } from "../../Interface.ts";

import RobotMaskImg from "../../../assets/icon/VanityItems/Robot/Robot_Mask.webp"
import RobotShirtImg from "../../../assets/icon/VanityItems/Robot/Robot_Shirt.webp"
import RobotPantsImg from "../../../assets/icon/VanityItems/Robot/Robot_Pants.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {RobotVanityItems} from "../data.Subcategory.zh-CN.ts";
export const RobotMask:Item={
    icon:RobotMaskImg,
    isCollection:false,
    id:1757,
    name: "机器人面具",
    Category:VanityItems,
    Subcategory:RobotVanityItems,
    comments:"礼袋",
}
export const RobotShirt:Item={
    icon:RobotShirtImg,
    isCollection:false,
    id:1758,
    name: "机器人衣",
    Category:VanityItems,
    Subcategory:RobotVanityItems,
    comments:"礼袋",
}
export const RobotPants:Item={
    icon:RobotPantsImg,
    isCollection:false,
    id:1759,
    name: "机器人裤",
    Category:VanityItems,
    Subcategory:RobotVanityItems,
    comments:"礼袋",
}
export const RobotVanityItemsList =[
RobotMask,
RobotShirt,
RobotPants]
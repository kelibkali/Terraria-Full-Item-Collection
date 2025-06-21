import type { Item } from "../../Interface.ts";

import Pink_Snow_HoodImg from "../../../assets/icon/Armor/PinkSnowArmor/Pink_Snow_Hood.webp"
import Pink_Snow_CoatImg from "../../../assets/icon/Armor/PinkSnowArmor/Pink_Snow_Coat.webp"
import Pink_Snow_PantsImg from "../../../assets/icon/Armor/PinkSnowArmor/Pink_Snow_Pants.webp"

import { Armor} from "../data.Category.zh-CN.ts";
import {PinkSnowArmor} from "../data.Subcategory.zh-CN.ts";
export const Pink_Snow_Hood:Item={
    icon:Pink_Snow_HoodImg,
    isCollection:false,
    id:978,
    name: "粉色防雪兜帽",
    Category:Armor,
    Subcategory:PinkSnowArmor,
    comments:'',
}
export const Pink_Snow_Coat:Item={
    icon:Pink_Snow_CoatImg,
    isCollection:false,
    id:979,
    name: "粉色防雪大衣",
    Category:Armor,
    Subcategory:PinkSnowArmor,
    comments:'',
}
export const Pink_Snow_Pants:Item={
    icon:Pink_Snow_PantsImg,
    isCollection:false,
    id:980,
    name: "粉色防雪裤",
    Category:Armor,
    Subcategory:PinkSnowArmor,
    comments:'',
}
export const PinkSnowArmorList =[
Pink_Snow_Hood,
Pink_Snow_Coat,
Pink_Snow_Pants]
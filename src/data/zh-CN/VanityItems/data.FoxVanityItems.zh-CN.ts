import type { Item } from "../../Interface.ts";

import FoxMaskImg from "../../../assets/icon/VanityItems/Fox/Fox_Mask.webp"
import FoxShirtImg from "../../../assets/icon/VanityItems/Fox/Fox_Shirt.webp"
import FoxPantsImg from "../../../assets/icon/VanityItems/Fox/Fox_Pants.webp"
import FoxEarsImg from "../../../assets/icon/VanityItems/Fox/Fox_Ears.webp"
import FoxTailImg from "../../../assets/icon/VanityItems/Fox/Fox_Tail.webp"

import { VanityItems} from "../data.Category.zh-CN.ts";
import {FoxVanityItems} from "../data.Subcategory.zh-CN.ts";
export const FoxMask:Item={
    icon:FoxMaskImg,
    isCollection:false,
    id:1821,
    name: "狐狸面具",
    Category:VanityItems,
    Subcategory:FoxVanityItems,
    comments:"礼袋",
}
export const FoxShirt:Item={
    icon:FoxShirtImg,
    isCollection:false,
    id:1822,
    name: "狐狸衣",
    Category:VanityItems,
    Subcategory:FoxVanityItems,
    comments:"礼袋",
}
export const FoxPants:Item={
    icon:FoxPantsImg,
    isCollection:false,
    id:1823,
    name: "狐狸裤",
    Category:VanityItems,
    Subcategory:FoxVanityItems,
    comments:"礼袋",
}
export const FoxEars:Item={
    icon:FoxEarsImg,
    isCollection:false,
    id:4770,
    name: "狐狸耳朵",
    Category:VanityItems,
    Subcategory:FoxVanityItems,
    comments:"下弦月 动物学家",
}
export const FoxTail:Item={
    icon:FoxTailImg,
    isCollection:false,
    id:4771,
    name: "狐狸尾巴",
    Category:VanityItems,
    Subcategory:FoxVanityItems,
    comments:"下弦月 动物学家",
}
export const FoxVanityItemsList =[
FoxMask,
FoxShirt,
FoxPants,
FoxEars,
FoxTail]
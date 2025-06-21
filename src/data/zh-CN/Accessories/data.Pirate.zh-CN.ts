import type { Item } from "../../Interface.ts";

import Discount_CardImg from "../../../assets/icon/Accessories/Pirate/Discount_Card.webp"
import Lucky_CoinImg from "../../../assets/icon/Accessories/Pirate/Lucky_Coin.webp"
import Gold_RingImg from "../../../assets/icon/Accessories/Pirate/Gold_Ring.webp"
import Coin_RingImg from "../../../assets/icon/Accessories/Pirate/Coin_Ring.webp"
import Greedy_RingImg from "../../../assets/icon/Accessories/Pirate/Greedy_Ring.webp"

import { Accessories} from "../data.Category.zh-CN.ts";
import {Pirate} from "../data.Subcategory.zh-CN.ts";
export const Discount_Card:Item={
    icon:Discount_CardImg,
    isCollection:false,
    id:854,
    name: "优惠卡",
    Category:Accessories,
    Subcategory:Pirate,
    comments:'',
}
export const Lucky_Coin:Item={
    icon:Lucky_CoinImg,
    isCollection:false,
    id:855,
    name: "幸运币",
    Category:Accessories,
    Subcategory:Pirate,
    comments:'',
}
export const Gold_Ring:Item={
    icon:Gold_RingImg,
    isCollection:false,
    id:3033,
    name: "金戒指",
    Category:Accessories,
    Subcategory:Pirate,
    comments:'',
}
export const Coin_Ring:Item={
    icon:Coin_RingImg,
    isCollection:false,
    id:3034,
    name: "钱币戒指",
    Category:Accessories,
    Subcategory:Pirate,
    comments:'',
}
export const Greedy_Ring:Item={
    icon:Greedy_RingImg,
    isCollection:false,
    id:3035,
    name: "贪婪戒指",
    Category:Accessories,
    Subcategory:Pirate,
    comments:'',
}
export const PirateList =[
Discount_Card,
Lucky_Coin,
Gold_Ring,
Coin_Ring,
Greedy_Ring]
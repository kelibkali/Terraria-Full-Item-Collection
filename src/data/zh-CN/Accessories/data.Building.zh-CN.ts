import type { Item } from "../../Interface.ts";

import ToolboxImg from "../../../assets/icon/Accessories/Building/Toolbox.webp"
import ToolbeltImg from "../../../assets/icon/Accessories/Building/Toolbelt.webp"
import Brick_LayerImg from "../../../assets/icon/Accessories/Building/Brick_Layer.webp"
import Extendo_GripImg from "../../../assets/icon/Accessories/Building/Extendo_Grip.webp"
import Paint_SprayerImg from "../../../assets/icon/Accessories/Building/Paint_Sprayer.webp"
import Portable_Cement_MixerImg from "../../../assets/icon/Accessories/Building/Portable_Cement_Mixer.webp"
import Architect_Gizmo_PackImg from "../../../assets/icon/Accessories/Building/Architect_Gizmo_Pack.webp"
import Ancient_ChiselImg from "../../../assets/icon/Accessories/Building/Ancient_Chisel.webp"
import Step_StoolImg from "../../../assets/icon/Accessories/Building/Step_Stool.webp"
import Treasure_MagnetImg from "../../../assets/icon/Accessories/Building/Treasure_Magnet.webp"
import Hand_Of_CreationImg from "../../../assets/icon/Accessories/Building/Hand_Of_Creation.webp"

import { Accessories} from "../data.Category.zh-CN.ts";
import {Building} from "../data.Subcategory.zh-CN.ts";
export const Toolbox:Item={
    icon:ToolboxImg,
    isCollection:false,
    id:1923,
    name: "工具箱",
    Category:Accessories,
    Subcategory:Building,
    comments:'',
}
export const Toolbelt:Item={
    icon:ToolbeltImg,
    isCollection:false,
    id:407,
    name: "工具腰带",
    Category:Accessories,
    Subcategory:Building,
    comments:'',
}
export const Brick_Layer:Item={
    icon:Brick_LayerImg,
    isCollection:false,
    id:2214,
    name: "砌砖刀",
    Category:Accessories,
    Subcategory:Building,
    comments:'',
}
export const Extendo_Grip:Item={
    icon:Extendo_GripImg,
    isCollection:false,
    id:2215,
    name: "加长握爪",
    Category:Accessories,
    Subcategory:Building,
    comments:'',
}
export const Paint_Sprayer:Item={
    icon:Paint_SprayerImg,
    isCollection:false,
    id:2216,
    name: "喷漆器",
    Category:Accessories,
    Subcategory:Building,
    comments:'',
}
export const Portable_Cement_Mixer:Item={
    icon:Portable_Cement_MixerImg,
    isCollection:false,
    id:2217,
    name: "便携式水泥搅拌机",
    Category:Accessories,
    Subcategory:Building,
    comments:'',
}
export const Architect_Gizmo_Pack:Item={
    icon:Architect_Gizmo_PackImg,
    isCollection:false,
    id:3061,
    name: "建筑师发明背包",
    Category:Accessories,
    Subcategory:Building,
    comments:'',
}
export const Ancient_Chisel:Item={
    icon:Ancient_ChiselImg,
    isCollection:false,
    id:4056,
    name: "远古凿子",
    Category:Accessories,
    Subcategory:Building,
    comments:'',
}
export const Step_Stool:Item={
    icon:Step_StoolImg,
    isCollection:false,
    id:4341,
    name: "梯凳",
    Category:Accessories,
    Subcategory:Building,
    comments:'',
}
export const Treasure_Magnet:Item={
    icon:Treasure_MagnetImg,
    isCollection:false,
    id:5010,
    name: "宝藏磁石",
    Category:Accessories,
    Subcategory:Building,
    comments:'',
}
export const Hand_Of_Creation:Item={
    icon:Hand_Of_CreationImg,
    isCollection:false,
    id:5126,
    name: "创造之手",
    Category:Accessories,
    Subcategory:Building,
    comments:'',
}
export const BuildingList =[
Toolbox,
Toolbelt,
Brick_Layer,
Extendo_Grip,
Paint_Sprayer,
Portable_Cement_Mixer,
Architect_Gizmo_Pack,
Ancient_Chisel,
Step_Stool,
Treasure_Magnet,
Hand_Of_Creation]
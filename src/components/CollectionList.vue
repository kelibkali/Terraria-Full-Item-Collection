<script setup lang="ts">
import {ref, computed, onMounted, watch} from 'vue'

import type {Item} from '../data/Interface'
import {Categories} from "../data/zh-CN/data.Category.zh-CN.ts";
// import { categoryList } from '../data/zh-CN/data.categoryList.zh-CN.ts';

import * as XLSX from 'xlsx'
import {ElMessage} from "element-plus";
import VersionDialog from "./VersionDialog.vue";

// ====== 定义事件 ======
const emit = defineEmits(['loading-change'])

// ====== 数据初始化 ======
const itemList = ref<Item[]>([])
const selectedMainCategory = ref<string>('近战武器')
const searchQuery = ref<string>('')
const currentPage = ref<number>(1)
const pageSize = ref('20')
const filterStatus = ref('全部')

// ====== 筛选 ======
const filteredItemList = computed(() => {
  let result = itemList.value

  if (filterStatus.value !== '全部') {
    result = result.filter(item => {
      if (filterStatus.value === '已收集') {
        return item.isCollection
      } else {
        return !item.isCollection
      }
    })
  }


  if (selectedMainCategory.value && selectedMainCategory.value !== "全部物品") {
    result = result.filter(item => item.Category.value === selectedMainCategory.value)
  }

  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(item => item.name.toLowerCase().includes(query))
  }

  return result
})

// ====== 分页相关 ======
const pageCount = computed(() => Math.ceil(filteredItemList.value.length / Number(pageSize.value)))

const paginatedItemList = computed(() => {
  const start = (currentPage.value - 1) * Number(pageSize.value)
  const end = start + Number(pageSize.value)
  return filteredItemList.value.slice(start, end)
})

watch([pageSize, selectedMainCategory], () => {
  currentPage.value = 1
})

// ====== 计算百分比 ======
const collectedCount = computed(() =>
    filteredItemList.value.reduce((count, item) => count + (item.isCollection ? 1 : 0), 0)
)

const completionPercentage = computed(() => {
  const totalItems = filteredItemList.value.length
  return totalItems === 0 ? 0 : ((collectedCount.value / totalItems) * 100).toFixed(2)
})

// ====== 处理Item的子类 ======
const hasSubcategory = computed(() =>
    filteredItemList.value.some(item => item.SubCategory !== null)
)

const handleCollect = (item: Item) => {
  if(item.isCollection)
  item.date = formatDate(new Date())
  else item.date = ""
}

function formatDate(date: Date):string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从0开始，需要+1
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}


// ====== 异步加载数据 ======
const loadData = async () => {
  emit('loading-change', true) // 通知父组件开始加载
  try {
    // 模拟异步加载（实际项目中替换为API请求）
    await new Promise(resolve => setTimeout(resolve, 1000))

    // 动态导入硬编码数据
    const categoryListModule = await import('../data/zh-CN/data.categoryList.zh-CN.ts')

    // 初始化数据
    itemList.value = categoryListModule.categoryList.map(item => ({
      ...item,
      isCollection: false
    }))
  } catch (error) {
    ElMessage.error('数据加载失败')
    console.error('数据加载错误:', error)
  } finally {
    emit('loading-change', false) // 通知父组件加载结束
  }
}


// ====== 收集状态本地存储逻辑优化 ======
onMounted(async () => {
  await loadData();

  const savedData = localStorage.getItem('collections');
  if (savedData) {
    try {
      const parsedData = JSON.parse(savedData);

      // 处理新版格式 { data: [{id, date}] }
      if (parsedData.data && Array.isArray(parsedData.data)) {
        parsedData.data.forEach((itemData: {id: number, date: string}) => {
          const item = itemList.value.find(i => i.id === itemData.id);
          if (item) {
            item.isCollection = true;
            item.date = itemData.date; // 保存收集日期
          }
        });
        return;
      }

      // 处理旧版兼容（布尔值格式）
      if (typeof parsedData === 'object' && !Array.isArray(parsedData)) {
        itemList.value.forEach(item => {
          if (parsedData[item.id]) {
            item.isCollection = true;
            // 为旧数据添加当前日期作为默认收集日期
            item.date = formatDate(new Date());
          }
        });
        // 转换后保存为新格式
        saveCollections();
      }
    } catch (e) {
      console.error('解析收集数据失败', e);
    }
  }
});

// 保存收集状态（动态策略）
const saveCollections = () => {
  // 创建包含收集日期信息的数组
  const collectionData = itemList.value
      .filter(item => item.isCollection)
      .map(item => ({
        id: item.id,
        date: item.date || formatDate(new Date())
      }));

  // 存储到 localStorage
  localStorage.setItem('collections', JSON.stringify({
    data: collectionData,
    lastSaved: new Date().toISOString()
  }));
}

// 监听收集状态变化（使用防抖）
const debounceSave = debounce(saveCollections, 500)
watch(() => itemList.value.map(item => item.isCollection), debounceSave, {deep: true})

// 防抖函数实现
function debounce<T extends (...args: any[]) => void>(fn: T, delay: number): T {
  let timer: ReturnType<typeof setTimeout> | null = null
  return function (this: any, ...args: any[]) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, delay)
  } as T
}

// ====== 文件上传处理 ======
const isProcessing = ref(false) // 添加一个标志

const exportData = () => {
  // 从 localStorage 获取数据
  const savedData = localStorage.getItem('collections');

  if (!savedData) {
    ElMessage.warning('没有可导出的收集数据');
    return;
  }

  try {
    // 创建下载链接
    const blob = new Blob([savedData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    // 设置文件名包含日期
    const exportDate = new Date();
    const dateStr = exportDate.toISOString().slice(0, 10);
    link.download = `收集数据_${dateStr}.json`;

    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    ElMessage.success('数据导出成功');
  } catch (error) {
    console.error('导出失败:', error);
    ElMessage.error('数据导出失败');
  }
}


const handleUpload = (uploadFile: any) => {
  if (isProcessing.value) return;
  isProcessing.value = true;

  const file = uploadFile.raw;
  if (!file) return;

  const reader = new FileReader();

  // 根据文件扩展名判断文件类型
  const isExcel = file.name.toLowerCase().endsWith('.xlsx');
  const isJson = file.name.toLowerCase().endsWith('.json');

  reader.onload = e => {
    try {
      if (isExcel) {
        // ====== 处理 XLSX 文件 ======
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });

        const worksheet = workbook.Sheets["全物品ID"];

        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as Array<Array<any>>;
        const headers = jsonData[0];
        const idIndex = headers.indexOf('物品ID');
        const collectIndex = headers.indexOf('是否收集');

        if (idIndex === -1 || collectIndex === -1) {
          ElMessage.error({
            message: "Excel格式不正确",
            duration: 2000,
          });
          isProcessing.value = false;
          return;
        }

        jsonData.slice(1).forEach(row => {
          const itemId = row[idIndex]?.toString();
          const collectedValue = row[collectIndex];

          if (itemId) {
            const item = itemList.value.find(i => i.id === Number(itemId));
            if (item) {
              item.isCollection = (collectedValue === '已收集');
              // Excel 导入时使用当前日期作为收集日期
              if (item.isCollection && !item.date) {
                item.date = formatDate(new Date());
              }
            }
          }
        });

        ElMessage.success({
          message: "Excel 数据导入成功!",
          duration: 2000
        });
      }
      else if (isJson) {
        // ====== 处理 JSON 文件 ======
        const jsonContent = e.target?.result as string;
        const jsonData = JSON.parse(jsonContent);

        // 验证 JSON 格式
        if (!jsonData.data || !Array.isArray(jsonData.data)) {
          throw new Error("JSON 格式不正确，缺少 'data' 数组");
        }

        // 创建 ID 到日期数据的映射
        const dateMap = new Map<number, string>();
        jsonData.data.forEach((item: { id: number; date: string }) => {
          if (item.id && item.date) {
            dateMap.set(item.id, item.date);
          }
        });

        // 应用收集状态和日期
        itemList.value.forEach(item => {
          if (dateMap.has(item.id)) {
            item.isCollection = true;
            item.date = dateMap.get(item.id)!;
          } else {
            // 可选：如果不在导入数据中，则取消收集
            // item.isCollection = false;
            // item.collectionDate = '';
          }
        });

        // 保存到本地存储
        saveCollections();
        ElMessage.success({
          message: "JSON 数据导入成功!",
          duration: 2000
        });
      }
      else {
        ElMessage.error({
          message: "不支持的文件格式",
          duration: 2000,
        });
      }
    } catch (error) {
      console.error("导入失败:", error);
      ElMessage.error({
        message: `导入失败: ${error instanceof Error ? error.message : "未知错误"}`,
        duration: 3000,
      });
    } finally {
      isProcessing.value = false;
    }
  };

  // 根据文件类型选择读取方式
  if (isExcel) {
    reader.readAsArrayBuffer(file);
  } else {
    reader.readAsText(file);
  }
};
</script>

<template>

  <VersionDialog/>

  <el-container style="height: calc(100vh - 60px); overflow-y: auto; align-items: center;">
    <el-header
        style="display: flex; align-items: center; justify-content: space-between; background-color: #ffffff; padding: 0 20px; width: 100%">

      <div style="display: flex; align-items: center; width:500px">
        <el-progress :percentage="Number(completionPercentage)" :stroke-width="12" style="width: 300px;margin-top:1px"
                     striped striped-flow :duration="20"></el-progress>
        <el-text tag="div" style="margin-left: 15px;">
          已收集: {{ collectedCount }}/{{ filteredItemList.length }}
        </el-text>
      </div>

      <div style="display: flex; gap: 1rem; align-items: center;">
        <el-button type="primary" @click="exportData">
          导出收集数据
        </el-button>

        <el-tooltip
            class="box-item"
            effect="dark"
            placement="top"
        >
          <template #content>
            支持导入文件如下
            <br/>
            <a class="a-class" href="https://space.bilibili.com/2075535" target="_blank">@404岛主</a> 发布的【泰拉瑞亚1449全收集列表】
            <br/>
            从本站导出的json格式文件
            <br/>
            解析数据需要花费时间较长,请耐心等待
          </template>

          <el-upload
              :auto-upload="false"
              :on-change="handleUpload"
              accept=".xlsx,.json"
              :show-file-list="false"
          >
            <template #trigger>
              <el-button type="primary">导入收集数据</el-button>
            </template>
          </el-upload>

        </el-tooltip>

        <el-input
            v-model="searchQuery"
            placeholder="搜索物品名称"
            style="width: 200px;"
            clearable
        />

        <el-select v-model="filterStatus" placeholder="筛选状态" style="width: 200px;">
          <el-option label="显示全部" value="全部"/>
          <el-option label="只显示已收集" value="已收集"/>
          <el-option label="只显示未收集" value="未收集"/>
        </el-select>

        <el-tree-select
            v-model="selectedMainCategory"
            :data="Categories"
            check-strictly
            :render-after-expand="false"
            placeholder="筛选分类"
            clearable
            style="width: 200px;"
        />
      </div>
    </el-header>

    <el-main style="padding: 20px;">
      <!-- 表格 -->
      <el-table
          :data="paginatedItemList"
          border
          height="calc(100% - 100px)"
          style="width: 1300px;"
          row-key="id"
      >

        <el-table-column label="已收集" width="80" align="center">
          <template #default="scope">
            <el-switch v-model="scope.row.isCollection" @click="handleCollect(scope.row)"/>
          </template>
        </el-table-column>

        <el-table-column label="物品图标" width="100" align="center">
          <template #default="scope">
            <a :href="`https://terraria.wiki.gg/zh/wiki/${scope.row.name}`" target="_blank">
              <img
                  v-lazy="scope.row.icon"
                  :src="scope.row.icon"
                  alt="Icon"
                  class="responsive-img"
                  loading="lazy"
              />
            </a>
          </template>
        </el-table-column>

        <el-table-column prop="id" sortable label="物品ID" width="100" align="center"/>

        <el-table-column prop="name" label="名称" width="200" align="center"/>

        <el-table-column label="分类" width="200" align="center">
          <template #default="scope">{{ scope.row.Category.label }}</template>
        </el-table-column>

        <el-table-column v-if="hasSubcategory" label="子类" width="150" align="center">
          <template #default="scope">{{ scope.row.Subcategory?.label }}</template>
        </el-table-column>

        <el-table-column label="收集日期" width="150" align="center">
          <template #default="scope">{{ scope.row.date }}</template>
        </el-table-column>

        <el-table-column prop="comments" label="备注" align="center"/>
      </el-table>

      <!-- 分页 -->
      <div style="display: flex; justify-content: space-between; margin-top: 20px;">
        <el-pagination
            background
            v-model:current-page="currentPage"
            :page-size="Number(pageSize)"
            :total="filteredItemList.length"
            :page-count="pageCount"
            layout="prev, pager, next"
            style="justify-content: center;"
        />
        <el-select v-model="pageSize" placeholder="请选择" style="width: 120px;">
          <el-option label="10 条/页" value="10"/>
          <el-option label="20 条/页" value="20"/>
          <el-option label="50 条/页" value="50"/>
          <el-option label="100 条/页" value="100"/>
          <el-option label="300 条/页" value="300"/>
          <el-option label="500 条/页" value="500"/>
        </el-select>
      </div>
    </el-main>
  </el-container>
</template>

<style scoped>
.responsive-img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
}

.a-class {
  text-decoration: none;
  color: SkyBlue;
}

.el-header {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #dcdfe6;
}
</style>
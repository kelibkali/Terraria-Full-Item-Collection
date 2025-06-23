<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'

import type { Item } from '../data/Interface'
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

  if(filterStatus.value !== '全部'){
    result = result.filter(item => {
      if(filterStatus.value === '已收集'){
        return item.isCollection
      }else{
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
  await loadData()

  // 读取本地存储
  const savedCollections = localStorage.getItem('collections')
  if (savedCollections) {
    try {
      const storageData = JSON.parse(savedCollections)

      // 处理旧版格式（全量存储）的兼容
      if (!storageData.strategy && Object.keys(storageData).length > 0) {
        itemList.value.forEach(item => {
          item.isCollection = !!storageData[item.id]
        })
        saveCollections() // 转换后立即保存为新格式
        return
      }

      // 新版格式处理
      if (storageData.strategy === 'collected') {
        // 存储的是已收集物品
        const collectedSet = new Set(storageData.list)
        itemList.value.forEach(item => {
          item.isCollection = collectedSet.has(item.id)
        })
      } else {
        // 存储的是未收集物品
        const uncollectedSet = new Set(storageData.list)
        itemList.value.forEach(item => {
          item.isCollection = !uncollectedSet.has(item.id)
        })
      }
    } catch (e) {
      console.error('解析本地存储数据失败', e)
    }
  }
})

// 保存收集状态（动态策略）
const saveCollections = () => {
  const collectedItems = itemList.value.filter(item => item.isCollection)

  let storageData
  if (collectedItems.length < 2500) {
    // 收集数<2500时只存已收集物品
    storageData = {
      strategy: 'collected',
      list: collectedItems.map(item => item.id)
    }
  } else {
    const uncollectedItems = itemList.value.filter(item => !item.isCollection)
    // 收集数>=2500时只存未收集物品
    storageData = {
      strategy: 'uncollected',
      list: uncollectedItems.map(item => item.id)
    }
  }

  localStorage.setItem('collections', JSON.stringify(storageData))
}

// 监听收集状态变化（使用防抖）
const debounceSave = debounce(saveCollections, 500)
watch(() => itemList.value.map(item => item.isCollection), debounceSave, { deep: true })

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

const handleUpload = (uploadFile: any) => {
  if (isProcessing.value) return // 如果已经在处理了，直接返回
  isProcessing.value = true

  const file = uploadFile.raw
  if (!file) return

  const reader = new FileReader()
  reader.onload = e => {
    try {
      const data = new Uint8Array(e.target?.result as ArrayBuffer)
      const workbook = XLSX.read(data, { type: 'array' })

      const worksheet = workbook.Sheets["全物品ID"]

      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as Array<Array<any>>
      const headers = jsonData[0]
      const idIndex = headers.indexOf('物品ID')
      const collectIndex = headers.indexOf('是否收集')

      if (idIndex === -1 || collectIndex === -1) {
        ElMessage.error({
          message:"Excel格式不正确",
          duration: 2000,
        })
        isProcessing.value = false
        return
      }

      jsonData.slice(1).forEach(row => {
        const itemId = row[idIndex]?.toString()
        const collectedValue = row[collectIndex]

        if (itemId) {
          const item = itemList.value.find(i => i.id === Number(itemId))
          if (item) {
            item.isCollection = (collectedValue === '已收集')
          }
        }
      })

      ElMessage.success({
        message:"导入成功!",
        duration: 2000
      })
    } catch (error) {
      ElMessage.error('导入失败，请检查文件格式。')
    } finally {
      isProcessing.value = false
    }
  }
  reader.readAsArrayBuffer(file)
}
</script>

<template>

  <VersionDialog/>

  <el-container style="height: calc(100vh - 60px); overflow-y: auto; align-items: center;">
    <el-header style="display: flex; align-items: center; justify-content: space-between; background-color: #ffffff; padding: 0 20px; width: 100%">

      <div style="display: flex; align-items: center; width:500px">
        <el-progress :percentage="Number(completionPercentage)" :stroke-width="12" style="width: 300px;margin-top:1px" striped striped-flow :duration="20"></el-progress>
        <el-text tag="div" style="margin-left: 15px;">
          已收集: {{ collectedCount }}/{{ filteredItemList.length }}
        </el-text>
      </div>

      <div style="display: flex; gap: 1rem; align-items: center;">

        <el-tooltip
              class="box-item"
              effect="dark"
              placement="top"
          >
            <template #content>
              请上传 <a class="a-class" href="https://space.bilibili.com/2075535" target="_blank">@404岛主</a> 发布的【泰拉瑞亚1449全收集列表】
              <br/>
              解析数据需要花费时间较长,请耐心等待
            </template>

            <el-upload
                :auto-upload="false"
                :on-change="handleUpload"
                accept=".xlsx"
                :show-file-list="false"
            >
              <template #trigger>
                <el-button type="primary">点击上传表格</el-button>
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
          <el-option label="显示全部" value="全部" />
          <el-option label="只显示已收集" value="已收集" />
          <el-option label="只显示未收集" value="未收集" />
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
          style="width: 1260px;"
          row-key="id"
      >
        <el-table-column label="已收集" width="80" align="center">
          <template #default="scope">
            <el-switch v-model="scope.row.isCollection" />
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

        <el-table-column prop="id" sortable label="物品ID" width="100" align="center" />
        <el-table-column prop="name" label="名称" width="200" align="center" />
        <el-table-column label="分类" width="200" align="center">
          <template #default="scope">{{ scope.row.Category.label }}</template>
        </el-table-column>
        <el-table-column v-if="hasSubcategory" label="子类" width="150" align="center">
          <template #default="scope">{{ scope.row.Subcategory?.label }}</template>
        </el-table-column>
        <el-table-column prop="comments" label="备注" align="center" />
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
          <el-option label="10 条/页" value="10" />
          <el-option label="20 条/页" value="20" />
          <el-option label="50 条/页" value="50" />
          <el-option label="100 条/页" value="100" />
          <el-option label="300 条/页" value="300" />
          <el-option label="500 条/页" value="500" />
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
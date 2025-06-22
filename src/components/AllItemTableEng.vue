<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import {
  ElContainer,
  ElHeader,
  ElMain,
  ElTable,
  ElTableColumn,
  ElSwitch,
  ElTreeSelect,
  ElInput,
  ElPagination,
  ElSelect,
  ElOption,
  ElProgress,
  ElText,
  ElUpload, ElMessage
} from 'element-plus'

import type { Item } from '../data/Interface'
import { Categories } from "../data/Eng/data.Category.Eng.ts";
import { categoryList } from "../data/Eng/data.categoryList.Eng.ts";

import * as XLSX from 'xlsx'

// ====== 数据初始化 ======
const itemList = ref<Item[]>([...categoryList])
const selectedMainCategory = ref<string>('MeleeWeapon')
const searchQuery = ref<string>('')
const currentPage = ref<number>(1)
const pageSize = ref('20')
const filterStatus = ref('All')

// ====== 计算属性 ======
const filteredItemList = computed(() => {
  let result = itemList.value

  if(filterStatus.value !== 'All'){
    result = result.filter(item => {
      if(filterStatus.value === 'Collected'){
        return item.isCollection
      }else{
        return !item.isCollection
      }
    })
  }


  if (selectedMainCategory.value && selectedMainCategory.value !== "AllItems") {
    result = result.filter(item => item.Category.value === selectedMainCategory.value)
  }

  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(item => item.name.toLowerCase().includes(query))
  }

  return result
})

const pageCount = computed(() => Math.ceil(filteredItemList.value.length / Number(pageSize.value)))

const paginatedItemList = computed(() => {
  const start = (currentPage.value - 1) * Number(pageSize.value)
  const end = start + Number(pageSize.value)
  return filteredItemList.value.slice(start, end)
})

const collectedCount = computed(() =>
    filteredItemList.value.reduce((count, item) => count + (item.isCollection ? 1 : 0), 0)
)

const completionPercentage = computed(() => {
  const totalItems = filteredItemList.value.length
  return totalItems === 0 ? 0 : ((collectedCount.value / totalItems) * 100).toFixed(2)
})

const hasSubcategory = computed(() =>
    filteredItemList.value.some(item => item.SubCategory !== null)
)

// ====== 图片懒加载 ======
const loadImage = (event: Event, src: string) => {
  const img = event.target as HTMLImageElement
  img.src = src
}

// ====== 收集状态本地存储 ======
onMounted(() => {
  const savedCollections = localStorage.getItem('collections')
  if (savedCollections) {
    const collections = JSON.parse(savedCollections)
    itemList.value.forEach(item => {
      item.isCollection = collections[item.id] ?? false
    })
  }
})

watch(
    itemList,
    () => {
      const collections = itemList.value.reduce((acc, item) => {
        acc[item.id] = item.isCollection
        return acc
      }, {} as Record<string, boolean>)
      localStorage.setItem('collections', JSON.stringify(collections))
    },
    { deep: true }
)

watch([pageSize, selectedMainCategory], () => {
  currentPage.value = 1
})

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
          message:"Excel File error.",
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
        message:"Upload success!",
        duration: 2000
      })
    } catch (error) {
      ElMessage.error('Upload Failed.')
    } finally {
      isProcessing.value = false
    }
  }
  reader.readAsArrayBuffer(file)
}
</script>

<template>
  <el-container style="height: calc(100vh - 60px); overflow-y: auto; align-items: center;">
    <el-header style="display: flex; align-items: center; justify-content: space-between; background-color: #ffffff; padding: 0 20px; width: 100%">

      <div style="display: flex; align-items: center; width:500px">
        <el-progress :percentage="Number(completionPercentage)" :stroke-width="12" style="width: 300px;margin-top:1px" striped striped-flow :duration="20"></el-progress>
        <el-text tag="div" style="margin-left: 15px;">
          collected: {{ collectedCount }}/{{ filteredItemList.length }}
        </el-text>
      </div>

      <div style="display: flex; gap: 1rem; align-items: center;">

        <el-tooltip
              class="box-item"
              effect="dark"
              placement="top"
          >
            <template #content>
              please upload the file 【泰拉瑞亚1449全收集列表】 by <a style="text-decoration: none; color: SkyBlue;" href="https://space.bilibili.com/2075535" target="_blank">@404岛主</a>
              <br/>
              this will take a long time , please wait
            </template>

            <el-upload
                :auto-upload="false"
                :on-change="handleUpload"
                accept=".xlsx"
                :show-file-list="false"
            >
              <template #trigger>
                <el-button type="primary">Upload Excel</el-button>
              </template>
            </el-upload>

          </el-tooltip>

        <el-input
            v-model="searchQuery"
            placeholder="Search for item name"
            style="width: 200px;"
            clearable
        />

        <el-select v-model="filterStatus" placeholder="Select Status" style="width: 200px;">
          <el-option label="All" value="All" />
          <el-option label="Collected" value="Collected" />
          <el-option label="UnCollected" value="UnCollected" />
        </el-select>

        <el-tree-select
            v-model="selectedMainCategory"
            :data="Categories"
            check-strictly
            :render-after-expand="false"
            placeholder="Select Category"
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
        <el-table-column label="Collected" width="80" align="center">
          <template #default="scope">
            <el-switch v-model="scope.row.isCollection" />
          </template>
        </el-table-column>

        <el-table-column label="Item Icon" width="100" align="center">
          <template #default="scope">
            <a :href="`https://terraria.wiki.gg/zh/wiki/${scope.row.name}`" target="_blank">
              <img
                  :src="'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='"
                  @load="loadImage($event, scope.row.icon)"
                  alt="Icon"
                  class="responsive-img"
                  loading="lazy"
              />
            </a>
          </template>
        </el-table-column>

        <el-table-column prop="id" sortable label="Item Id" width="100" align="center" />
        <el-table-column prop="name" label="Item Name" width="200" align="center" />
        <el-table-column label="Category" width="200" align="center">
          <template #default="scope">{{ scope.row.Category.label }}</template>
        </el-table-column>
        <el-table-column v-if="hasSubcategory" label="SubCategory" width="150" align="center">
          <template #default="scope">{{ scope.row.Subcategory?.label }}</template>
        </el-table-column>
        <el-table-column prop="comments" label="Comment" align="center" />
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
        <el-select v-model="pageSize" placeholder="please select" style="width: 120px;">
          <el-option label="10 items per page" value="10"></el-option>
          <el-option label="20 items per page" value="20"></el-option>
          <el-option label="50 items per page" value="50"></el-option>
          <el-option label="100 items per page" value="100"></el-option>
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

.el-header {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #dcdfe6;
}
</style>
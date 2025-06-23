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
import {Categories} from "../data/zh-CN/data.Category.zh-CN.ts";
import { categoryList } from '../data/zh-CN/data.categoryList.zh-CN.ts';

import * as XLSX from 'xlsx'

// ====== 数据初始化 ======
const itemList = ref<Item[]>([...categoryList])
const selectedMainCategory = ref<string>('近战武器')
const searchQuery = ref<string>('')
const currentPage = ref<number>(1)
const pageSize = ref('20')
const filterStatus = ref('全部')
const isVisible = ref(false)
const lastVisit = localStorage.getItem('lastVisit')
const daysThreshold = 3

// ====== 计算属性 ======

const handleClose = () => {
  isVisible.value = false
  localStorage.setItem('lastVisit', Date.now().toString())
}

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

  if(lastVisit){
    const diffTime = Math.abs(Date.now() - Number(lastVisit))
    const diffDays = Math.ceil(diffTime / (1000 * 60 *60 *24))
    if(diffDays >= daysThreshold){
      isVisible.value = true
    }
  }else {
    isVisible.value = true
  }
  console.log(isVisible)
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
  <el-dialog v-model="isVisible" width="500px" title="请仔细阅读以下文字" center>
    <span>
       温馨提示：为了获得最佳体验，请前往网盘检查是否发布了最新版本。
      <br/>
      <br/>
      此版本为<span style="color:Red">1.0.2</span>版本
      <br/>
      <br/>
      支持了以下功能：
      <br/>
      上传表格同步数据
      <br/>
      根据是否收集分类
      <br/>
      <br/>
      <a class="a-class" href="https://wwut.lanzoul.com/b00csc983e" target="_blank">点击这里访问网盘</a>
      <br/>
      密码:ezbe
      <br/>
      <br/>
      <br/>
      特别鸣谢：<a class="a-class" href="https://space.bilibili.com/2075535" target="_blank">@404岛主</a> 提供原始数据
      <br/>
      <br/>
      欢迎通过各种渠道提出建议~
      <br/>
      bilibili : <a class="a-class" href="https://space.bilibili.com/3493289458141747" target="_blank">@可丽饼kali</a>
      <br/>
      小黑盒 : <a class="a-class" href="https://www.xiaoheihe.cn/app/user/profile/21709567" target="_blank">@可丽饼kali</a>
    </span>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="handleClose">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>

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
                  :src="'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='"
                  @load="loadImage($event, scope.row.icon)"
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
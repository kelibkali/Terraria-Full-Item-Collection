<script setup lang="ts">
import { computed, ref, onMounted, watch } from "vue";
import { ElTable, ElTableColumn, ElSelect, ElOption, ElTreeSelect, ElText, ElSwitch, ElProgress } from 'element-plus';
import type { Item } from "../data/Interface.ts";

import { Categories } from "../data/zh-CN/data.Category.zh-CN.ts";
import { categoryList } from "../data/zh-CN/data.categoryList.zh-CN.ts";

const ItemList = [...categoryList];
const itemListRef = ref<Item[]>(ItemList);

const selectedMainCategory = ref('近战武器');
const currentPage = ref(1);
const pageSize = ref("20");
const searchQuery = ref('');

// 计算总页数
const pageCount = computed(() => {
  return Math.ceil(filteredItemList.value.length / Number(pageSize.value));
});

// 动态过滤后的列表
const filteredItemList = computed(() => {
  let result = itemListRef.value;

  if (selectedMainCategory.value) {
    result = result.filter(item => item.Category.value === selectedMainCategory.value);
  }

  if (searchQuery.value && searchQuery.value.trim() !== '') {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(item =>
        item.name.toLowerCase().includes(query)
    );
  }

  return result;
});

const collectedCount = computed(() => {
  return filteredItemList.value.reduce((count: number, item: Item) => count + (item.isCollection ? 1 : 0), 0);
});

const completionPercentage = computed(() => {
  const totalItems = filteredItemList.value.length;
  if (totalItems === 0) return 0;
  return ((collectedCount.value / totalItems) * 100).toFixed(2);
});

// 分页处理
const paginatedItemList = computed(() => {
  const start = (currentPage.value - 1) * Number(pageSize.value);
  const end = start + Number(pageSize.value);
  return filteredItemList.value.slice(start, end);
});

// 懒加载图片
const loadImage = (event: Event, src: string) => {
  const img = event.target as HTMLImageElement;
  img.src = src;
};

// 存储和恢复 isCollection 状态
onMounted(() => {
  const savedCollections = localStorage.getItem('collections');
  if (savedCollections) {
    const collections = JSON.parse(savedCollections);
    itemListRef.value.forEach(item => {
      item.isCollection = collections[item.id] || false;
    });
  }
});

watch(itemListRef, () => {
  const collections = itemListRef.value.reduce((acc, item) => {
    acc[item.id] = item.isCollection;
    return acc;
  }, {} as Record<string, boolean>);
  localStorage.setItem('collections', JSON.stringify(collections));
}, { deep: true });

// 监听 pageSize 变化，重置 currentPage 并重新计算分页
watch(pageSize, () => {
  currentPage.value = 1;
});

// 监听 selectedMainCategory 变化，重置 currentPage 并重新计算分页
watch(selectedMainCategory, () => {
  currentPage.value = 1;
});

// 判断是否有 Subcategory
const hasSubcategory = computed(() => {
  return filteredItemList.value.some(item => item.SubCategory !== null);
});
</script>

<template>
  <el-container style="height: calc(100vh - 60px); overflow-y: auto;align-items: center;">
    <el-header style="display: flex; align-items: center; justify-content: space-between; background-color: #ffffff; padding: 0 20px; width: 100%">
      <div style="display: flex; align-items: center;">
        <el-progress :percentage="Number(completionPercentage)" :stroke-width="20" style="width: 200px;"></el-progress>
        <el-text tag="div" style="margin-left: 15px;">
          已收集: {{ collectedCount }}/{{ filteredItemList.length }}
        </el-text>
      </div>
      <div>
        <el-input
            v-model="searchQuery"
            placeholder="搜索物品名称"
            style="width: 200px; margin-right: 2rem;"
            clearable
        />
        <el-tree-select
            v-model="selectedMainCategory"
            :data="Categories"
            check-strictly
            :render-after-expand="false"
            placeholder="筛选分类"
            clearable
            style="width: 200px;"
        >
        </el-tree-select>
      </div>
      <!-- 选择 -->
    </el-header>
    <el-main style="padding: 20px;">
      <!-- 表格代码 -->
      <el-table
          :data="paginatedItemList"
          border
          height="calc(100% - 100px)"
          style="width: 1260px;"
          row-key="id"
      >
        <el-table-column label="已收集" width="80" align="center">
          <template #default="scope">
            <el-switch v-model="scope.row.isCollection"/>
          </template>
        </el-table-column>
        <el-table-column label="物品图标" width="100" align="center">
          <template #default="scope">
            <a :href="`https://terraria.wiki.gg/zh/wiki/${scope.row.name}`" target="_blank">
              <img :src="'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='"
                   @load="loadImage($event, scope.row.icon)"
                   alt="Icon" class="responsive-img" loading="lazy"/>
            </a>
          </template>
        </el-table-column>
        <el-table-column prop="id" sortable label="物品ID" width="100" align="center"></el-table-column>
        <el-table-column prop="name" label="名称" width="200" align="center"></el-table-column>
        <el-table-column label="分类" width="200" align="center">
          <template #default="scope">
            {{ scope.row.Category.label }}
          </template>
        </el-table-column>
        <el-table-column v-if="hasSubcategory" label="子类" width="150" align="center">
          <template #default="scope">
            {{ scope.row.Subcategory?.label }}
          </template>
        </el-table-column>
        <el-table-column prop="comments" label="备注" align="center"></el-table-column>
      </el-table>

      <!-- 分页 -->
      <div style="display: flex; justify-content: space-between; margin-top: 20px;">
        <el-pagination
            v-model:current-page="currentPage"
            v-model:page-size="pageSize"
            :total="filteredItemList.length"
            :page-count="pageCount"
            layout="prev, pager, next"
            style="justify-content: center;"
        />
        <el-select v-model="pageSize" placeholder="请选择" style="width: 120px;">
          <el-option label="10 条/页" value="10"></el-option>
          <el-option label="20 条/页" value="20"></el-option>
          <el-option label="50 条/页" value="50"></el-option>
          <el-option label="100 条/页" value="100"></el-option>
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

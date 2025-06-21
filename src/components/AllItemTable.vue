<script setup lang="ts" xmlns="http://www.w3.org/1999/html">

import {SwordsList} from "../data/zh-CN/MeleeWeaopns/dataSwords.zh-CN.ts";
import {FlailsList} from "../data/zh-CN/MeleeWeaopns/dataFlails.zh-CN.ts";
import {Categories} from "../data/zh-CN/dataCategory.zh-CN.ts";

import {computed, ref} from "vue";
import {ElTable, ElTableColumn} from 'element-plus';
import type {Item} from "../data/Interface.ts";

const ItemList = [...SwordsList,...FlailsList];

const itemListRef = ref(ItemList);


const selectedMainCategory = ref('');

//动态过滤后的列表
const filteredItemList = computed(() => {
  if (!selectedMainCategory.value) return itemListRef.value;
  return itemListRef.value.filter(item => {
    // 匹配一级分类 或 二级分类
    return item.Category.value === selectedMainCategory.value ||
        item.Subcategory.value === selectedMainCategory.value;
  });
});

const collectedCount = computed(() => {
  return filteredItemList.value.reduce((count, item) => count + (item.isCollection ? 1 : 0), 0);
})

const completionPercentage = computed(() => {
  const totalItems = filteredItemList.value.length;
  if (totalItems === 0) return 0;
  return ((collectedCount.value / totalItems) * 100).toFixed(2);
});

const handelCollect = (item:Item)=>{
  if(item.isCollection)
    item.collectionDate = formatDate(new Date());
  else item.collectionDate = ""
}

const formatDate = (date: Date):string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

</script>

<template>
  <el-container style="align-items: center">
    <el-header style="display: flex;">
      <el-text tag="div" style="margin-right: 15px;">
        已收集: {{collectedCount}}/{{filteredItemList.length}}
      </el-text>

      <el-text tag="div" style="margin-right: 15px;">
        完成度：{{ completionPercentage }}%
      </el-text>
        <!-- 选择 -->
        <el-tree-select
            v-model="selectedMainCategory"
            :data="Categories"
            check-strictly
            :render-after-expand="false"
            placeholder="筛选分类"
            clearable
            style="width: 200px;margin-top: 15px;"
        >
        </el-tree-select>
    </el-header>
    <el-main>
      <!-- 表格代码 -->
      <el-table
          :data="filteredItemList"
          border
          height="700"
          style="width: 1160px"
          row-key="id"

      >
        <el-table-column label="已收集"  width="80" align="center">
          <template #default="scope">
            <el-switch v-model="scope.row.isCollection" @click="handelCollect(scope.row)"/>
          </template>
        </el-table-column>

        <el-table-column label="物品图标" width="100" align="center">
          <template #default="scope">
            <a :href="`https://terraria.wiki.gg/zh/wiki/${scope.row.name}`" target="_blank">
              <img :src="scope.row.icon" alt="Icon" class="responsive-img"/>
            </a>
          </template>
        </el-table-column>
        <el-table-column prop="id" label="物品ID" width="100" align="center"></el-table-column>
        <el-table-column prop="name" label="名称" width="200" align="center"></el-table-column>
        <el-table-column label="分类" width="200" align="center">
          <template #default="scope">
            {{ scope.row.Category.label }}
          </template>
        </el-table-column>
        <el-table-column label="子类" width="100" align="center">
          <template #default="scope">
            {{ scope.row.Subcategory.label }}
          </template>
        </el-table-column>
        <el-table-column prop="collectionDate" label="收集时间" width="180" align="center">
        </el-table-column>
        <el-table-column prop="comments" label="备注" align="center" width="200">
        </el-table-column>
      </el-table>
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
</style>
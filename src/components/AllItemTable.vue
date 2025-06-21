<script setup lang="ts" xmlns="http://www.w3.org/1999/html">

import {ItemList} from "../data/zh-CN/dataSwords.zh-CN.ts";
import {Categories} from "../data/zh-CN/dataCategory.zh-CN.ts";

import {computed, ref} from "vue";
import {ElTable, ElTableColumn} from 'element-plus';
import type {Item} from "../data/Interface.ts";

const itemListRef = ref(ItemList);

const mutipleSelection = ref<Item[]>([]);

const handleSelectionChange = (val: Item[]) => {
  mutipleSelection.value = val;
  console.log(mutipleSelection.value);
}

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

const handleTreeSelectChange = () => {

  console.log(selectedMainCategory.value);
}

</script>

<template>
    <div class="self-select">
    <!-- 一级选择 -->
    <el-tree-select
        v-model="selectedMainCategory"
        :data="Categories"
        check-strictly
        :render-after-expand="false"
        placeholder="筛选分类"
        clearable
        @change="handleTreeSelectChange"
    >
    </el-tree-select>
    </div>

  <!-- 表格代码 -->
  <el-table
      :data="filteredItemList"
      border
      height="800"
      width="100%"
      row-key="id"
      @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55"></el-table-column>
    <el-table-column label="ICON" width="100">
      <template #default="scope">
        <a :href="`https://terraria.wiki.gg/zh/wiki/${scope.row.name}`" target="_blank">
          <img :src="scope.row.icon" alt="Icon" style="width: 32px; height: 32px;"/>
        </a>
      </template>
    </el-table-column>
    <el-table-column prop="id" label="物品ID"></el-table-column>
    <el-table-column prop="name" label="名称"></el-table-column>
    <el-table-column label="分类">
      <template #default="scope">
        {{ scope.row.Category.label }}
      </template>
    </el-table-column>
    <el-table-column label="子类">
      <template #default="scope">
        {{ scope.row.Subcategory.label }}
      </template>
    </el-table-column>
    <el-table-column prop="comments" label="备注"></el-table-column>
  </el-table>
</template>

<style scoped>
.self-select{
  width:10%;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>
<script setup lang="ts">
import AllItemTable from "./components/AllItemTable.vue";
import { ref } from "vue";
// import AllItemTableEng from "./components/AllItemTableEng.vue";

const lang = ref("zh")
const isLoading = ref(false)

const handleLoadingChange = (loading: boolean) => {
  isLoading.value = loading
}
</script>

<template>
  <el-container style="height: 98vh; overflow: hidden;">
    <el-header style="background-color: #ffffff; box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); display: flex; align-items: center; justify-content: space-between; font-weight: bold; color: #333; border-bottom: 1px solid #dcdfe6;">
      <span v-if="lang === 'zh'">全收集网站</span>
      <span v-else>Terraria Full Item Collection</span>
      <!-- 语言选择器 -->
      <el-select v-model="lang" size="small" style="width: 100px;">
        <el-option label="中文" value="zh" />
<!--        <el-option label="English" value="en" />-->
      </el-select>
    </el-header>

    <el-container>
      <el-aside width="200px" style="background-color: #f5f7fa; border-right: 1px solid #dcdfe6;">
        <el-menu default-active="1" router>
          <el-menu-item v-if="lang==='zh'" index="1">收集列表</el-menu-item>
          <el-menu-item v-else index="1">Collection List</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main v-loading="isLoading" element-loading-text="正在加载中" element-loading-background="#fff" style="overflow-y: auto;">
          <AllItemTable @loading-change="handleLoadingChange" v-if="lang==='zh'" />
<!--          <AllItemTableEng v-else />-->
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.el-header {
  padding: 0 20px;
}

.el-aside {
  height: 100%;
}

.el-main {
  padding: 0;
}
</style>
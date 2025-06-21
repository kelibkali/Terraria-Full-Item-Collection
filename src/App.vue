<script setup lang="ts">
import AllItemTable from "./components/AllItemTable.vue";
</script>

<template>
    <el-container style="height: 98vh; overflow: hidden;">
      <el-header style="background-color: #ffffff; box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); display: flex; align-items: center; justify-content: space-between; font-weight: bold; color: #333; border-bottom: 1px solid #dcdfe6;">
        <span>Terraria Full Item Collection</span>
      </el-header>
      <el-container>
        <el-aside width="200px" style="background-color: #f5f7fa; border-right: 1px solid #dcdfe6;">
          <el-menu default-active="1" router>
              <el-menu-item index="1">收集列表</el-menu-item>
              <el-menu-item index="2">图表分析</el-menu-item>
          </el-menu>
        </el-aside>
        <el-main style="display: flex; justify-content: center; align-items: center;">
          <AllItemTable />
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
</style>




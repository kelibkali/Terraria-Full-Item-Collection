<script setup lang="ts">
import {onMounted, ref} from "vue";
import { useRouter } from "vue-router";
import {
  List,
  DataAnalysis,
} from '@element-plus/icons-vue';

const router = useRouter();
const activeIndex = ref('/collection');

const isLoading = ref(false)

const handleLoadingChange = (loading: boolean) => {
  isLoading.value = loading
}

// 处理菜单选择
const handleMenuSelect = (index: string) => {
  activeIndex.value = index;
  router.push(index);
};

// 初始化路由
onMounted(() => {
  router.push(activeIndex.value);
})
</script>

<template>
  <el-container style="height: 98vh; overflow: hidden;">
    <el-header style="background-color: #ffffff; box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); display: flex; align-items: center; justify-content: space-between; font-weight: bold; color: #333; border-bottom: 1px solid #dcdfe6;">
      <span>全收集网站</span>
    </el-header>

    <el-container>
      <el-aside width="200px" style="background-color: #f5f7fa; border-right: 1px solid #dcdfe6;">
        <el-menu
            :default-active="activeIndex"
            router
            @select="handleMenuSelect"
        >
          <el-menu-item index="/collection" >
            <el-icon><List/></el-icon>
            <span>收集列表</span>
          </el-menu-item>

          <el-menu-item index="/statistics" >
            <el-icon><DataAnalysis/></el-icon>
            <span>统计图表</span>
          </el-menu-item>

        </el-menu>
      </el-aside>
      <el-main v-loading="isLoading" element-loading-text="正在加载中" element-loading-background="#fff" style="overflow-y: auto;">
        <router-view @loadingChange="handleLoadingChange"></router-view>
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

.el-menu-item.is-active {
  background-color: #ecf5ff;
  color: #409eff;
  font-weight: bold;
}
</style>
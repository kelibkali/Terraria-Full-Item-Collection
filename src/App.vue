<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { List, DataAnalysis,Document } from '@element-plus/icons-vue';

const router = useRouter();
const route = useRoute();
const activeIndex = ref(route.path);

const isLoading = ref(false);

const handleLoadingChange = (loading: boolean) => {
  isLoading.value = loading;
};

const handleMenuSelect = (index: string) => {
  activeIndex.value = index;
  router.push(index);
};

// 监听路由变化
watch(() => route.path, (newPath) => {
  activeIndex.value = newPath;
});

const isFullscreen = ref(route.meta.fullscreen);
watch(() => route.meta.fullscreen, (newVal) => {
  isFullscreen.value = newVal;
});
</script>

<template>
    <!-- 判断是否为进度条 -->
    <template v-if="!isFullscreen">
      <el-container style="height: 100vh">
        <el-header style="height: 5vh;align-items: center;justify-content: center;display: flex;user-select: none;border-bottom: 1px solid #dcdfe6" >
          <h3>Terraria全收集网站</h3>
        </el-header>

        <el-container style="height: 95vh;">
          <el-aside style="width:10vw;background-color: #f5f7fa; border-right: 1px solid #dcdfe6;display: flex;flex-direction: column;justify-content: space-between;">
            <el-menu
                :default-active="activeIndex"
                router
                @select="handleMenuSelect"
                style="user-select: none"
            >
              <el-menu-item index="/collection" >
                <el-icon><List/></el-icon>
                <span>收集列表</span>
              </el-menu-item>
              <el-menu-item index="/statistics" >
                <el-icon><DataAnalysis/></el-icon>
                <span>统计图表</span>
              </el-menu-item>
              <el-menu-item index="/progress" >
                <el-icon><Document/></el-icon>
                <span>实时进度</span>
              </el-menu-item>
            </el-menu>

            <el-link href="https://beian.miit.gov.cn/" target="_blank" style="margin-bottom: 2rem" underline="none" >
              粤ICP备2025437944号-1
            </el-link>
          </el-aside>
          <el-main style="width: 90vw"  v-loading="isLoading" element-loading-text="正在加载中" element-loading-background="#fff" >
            <router-view @loadingChange="handleLoadingChange"></router-view>
          </el-main>
        </el-container>
      </el-container>
    </template>

    <template v-else>
      <router-view></router-view>
    </template>
</template>

<style scoped>
.el-main {
  padding: 0;
}

.el-menu-item.is-active {
  background-color: #ecf5ff;
  color: #409eff;
  font-weight: bold;
}
</style>
<script setup lang="ts">
import {ref, computed, onMounted, onUnmounted} from 'vue';
import * as echarts from 'echarts';
import {
  Collection,
  SuccessFilled,
} from '@element-plus/icons-vue';

import { ElMessage } from 'element-plus';

// 定义属性
const totalCount = 5397; // 已知的总项目数量
const emit = defineEmits(['loading-change']);

// 图表引用
const chartRef = ref<HTMLDivElement>();
const chartInstance = ref<echarts.ECharts | null>(null);

// 响应式数据
const collectedItems = ref<{id: number, date: string}[]>([]);

// 计算属性
const collectedCount = computed(() => collectedItems.value.length);
const remainingCount = computed(() => totalCount - collectedCount.value);
const completionPercentage = computed(() =>
    ((collectedCount.value / totalCount) * 100).toFixed(2)
);

// 加载收集数据
const loadCollectionData = () => {
  const savedData = localStorage.getItem('collections');
  if (savedData) {
    try {
      const parsedData = JSON.parse(savedData);
      collectedItems.value = parsedData.data || [];
    } catch (e) {
      console.error('解析收集数据失败', e);
      ElMessage.error('加载收集数据失败');
    }
  }
};

// 初始化图表
const initChart = () => {
  if (!chartRef.value) return;

  // 销毁现有图表实例
  if (chartInstance.value) {
    chartInstance.value.dispose();
  }

  // 创建新图表实例
  chartInstance.value = echarts.init(chartRef.value);

  renderPieChart();
};

// 渲染饼图
const renderPieChart = () => {
  if (!chartInstance.value) return;

  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      right: 10,
      top: 'center',
      data: ['已收集', '未收集']
    },
    series: [
      {
        name: '收集情况',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['40%', '50%'],
        emphasis: {
          label: {
            show: true,
            fontSize: '18',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: true
        },
        data: [
          { value: collectedCount.value, name: '已收集', itemStyle: { color: '#67C23A' } },
          { value: remainingCount.value, name: '未收集', itemStyle: { color: '#F56C6C' } }
        ]
      }
    ]
  };

  chartInstance.value.setOption(option);
};

// 组件挂载时初始化
onMounted(() => {
  emit('loading-change', false);
  // 模拟加载延迟
  loadCollectionData();
  initChart();
});

// 组件卸载时销毁图表实例
onUnmounted(() => {
  if (chartInstance.value) {
    chartInstance.value.dispose();
  }
});
</script>

<template>
  <el-container style="align-items: center;user-select: none">
    <el-header>
      <h2>收集统计</h2>
    </el-header>
    <el-main style="width: 80%">
        <div class="stats-overview">
          <el-card class="stat-card">
            <div class="stat-content">
              <div class="stat-icon">
                <el-icon :size="40"><Collection /></el-icon>
              </div>
              <div class="stat-info">
                <div class="stat-title">已收集物品</div>
                <div class="stat-value">{{ collectedCount }}</div>
                <div class="stat-subtitle">总计 {{ totalCount }} 项</div>
              </div>
            </div>
          </el-card>

          <el-card class="stat-card">
            <div class="stat-content">
              <div class="stat-icon" style="color: #67C23A;">
                <el-icon :size="40"><SuccessFilled /></el-icon>
              </div>
              <div class="stat-info">
                <div class="stat-title">收集完成率</div>
                <div class="stat-value">{{ completionPercentage }}%</div>
                <div class="stat-subtitle">距离全收集还差 {{ remainingCount }} 项</div>
              </div>
            </div>
          </el-card>

        </div>

        <div class="chart-container">
          <el-card class="chart-card">
            <div class="chart-header">
              <h3>收集情况图表</h3>
            </div>

            <div ref="chartRef" class="chart" style="height: 400px;"></div>
          </el-card>
        </div>
    </el-main>
  </el-container>
</template>


<style scoped>
.statistics-page {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.page-header h2 {
  font-size: 24px;
  color: #333;
}

.stats-overview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.stat-card {
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-content {
  display: flex;
  align-items: center;
  padding: 20px;
}

.stat-icon {
  width: 70px;
  height: 70px;
  background-color: rgba(64, 158, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  color: #409EFF;
}

.stat-info {
  flex: 1;
}

.stat-title {
  font-size: 16px;
  color: #666;
  margin-bottom: 5px;
}

.stat-value {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

.stat-subtitle {
  font-size: 14px;
  color: #999;
}

.chart-container {
  margin-bottom: 20px;
}

.chart-card {
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
}

.chart {
  padding: 10px;
}

.recent-collections {
  margin-top: 20px;
}

.recent-collections h3 {
  margin-bottom: 15px;
}

@media (max-width: 768px) {
  .stats-overview {
    grid-template-columns: 1fr;
  }

  .stat-content {
    padding: 15px;
  }

  .stat-icon {
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }

  .stat-value {
    font-size: 22px;
  }
}
</style>
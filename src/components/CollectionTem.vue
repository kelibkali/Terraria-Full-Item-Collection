<template>
  <div class="statistics-page">
    <div class="page-header">
      <h2>收集统计</h2>
    </div>
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

      <el-card class="stat-card">
        <div class="stat-content">
          <div class="stat-icon" style="color: #E6A23C;">
            <el-icon :size="40"><Calendar /></el-icon>
          </div>
          <div class="stat-info">
            <div class="stat-title">最后更新</div>
            <div class="stat-value">{{ lastUpdateDate || '暂无数据' }}</div>
            <div class="stat-subtitle">{{ lastUpdateTime }}</div>
          </div>
        </div>
      </el-card>
    </div>

    <div class="chart-container">
      <el-card class="chart-card">
        <div class="chart-header">
          <h3>收集情况概览</h3>
          <el-radio-group v-model="chartType" size="small">
            <el-radio-button label="pie">饼图</el-radio-button>
            <el-radio-button label="bar">柱状图</el-radio-button>
            <el-radio-button label="progress">进度图</el-radio-button>
          </el-radio-group>
        </div>
        <div ref="chartRef" class="chart" style="height: 400px;"></div>
      </el-card>
    </div>

    <div class="recent-collections">
      <el-card>
        <h3>最近收集的物品</h3>
        <el-table
            :data="recentCollections"
            style="width: 100%"
            v-loading="loadingRecent"
            empty-text="暂无最近收集记录"
        >
          <el-table-column prop="id" label="物品ID" width="100" />
          <el-table-column prop="name" label="物品名称" />
          <el-table-column prop="category" label="分类" />
          <el-table-column prop="date" label="收集日期" width="180" />
          <el-table-column label="操作" width="120">
            <template #default="{ row }">
              <el-button
                  size="small"
                  type="danger"
                  @click="removeCollection(row.id)"
              >
                取消收集
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, computed, onMounted, watch, onUnmounted} from 'vue';
import * as echarts from 'echarts';
import {
  Collection,
  SuccessFilled,
  Calendar,
} from '@element-plus/icons-vue';

import { ElMessage } from 'element-plus';
import { categoryList } from '../data/zh-CN/data.categoryList.zh-CN.ts';

// 定义属性
const totalCount = 5373; // 已知的总项目数量
const emit = defineEmits(['loading-change']);

// 图表引用
const chartRef = ref<HTMLDivElement>();
const chartInstance = ref<echarts.ECharts | null>(null);

// 响应式数据
const collectedItems = ref<{id: number, date: string}[]>([]);
const loadingRecent = ref(false);
const chartType = ref('pie');

// 计算属性
const collectedCount = computed(() => collectedItems.value.length);
const remainingCount = computed(() => totalCount - collectedCount.value);
const completionPercentage = computed(() =>
    ((collectedCount.value / totalCount) * 100).toFixed(2)
);

// 最后更新时间
const lastUpdateDate = computed(() => {
  if (collectedItems.value.length === 0) return '';

  // 找到最新的收集日期
  const dates = collectedItems.value.map(item => new Date(item.date));
  const latestDate = new Date(Math.max(...dates.map(d => d.getTime())));

  return formatDate(latestDate);
});

const lastUpdateTime = computed(() => {
  if (collectedItems.value.length === 0) return '';

  // 找到最新的收集日期
  const dates = collectedItems.value.map(item => new Date(item.date));
  const latestDate = new Date(Math.max(...dates.map(d => d.getTime())));

  return formatTime(latestDate);
});

// 最近收集的物品（按日期倒序）
const recentCollections = computed(() => {
  return collectedItems.value
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 10)
      .map(item => {
        const itemInfo = categoryList.find(i => i.id === item.id);
        return {
          id: item.id,
          name: itemInfo ? itemInfo.name : `物品 ${item.id}`,
          category: itemInfo ? itemInfo.Category.value : '未知分类',
          date: formatDateTime(new Date(item.date))
        };
      });
});

// 日期格式化函数
const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const formatTime = (date: Date): string => {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
};

const formatDateTime = (date: Date): string => {
  return `${formatDate(date)} ${formatTime(date)}`;
};

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

// 取消收集
const removeCollection = (id: number) => {
  collectedItems.value = collectedItems.value.filter(item => item.id !== id);

  // 保存更新后的数据
  localStorage.setItem('collections', JSON.stringify({
    data: collectedItems.value,
    lastSaved: new Date().toISOString()
  }));

  ElMessage.success('已取消收集该物品');
  initChart(); // 重新渲染图表
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

  // 根据选择的图表类型渲染
  switch (chartType.value) {
    case 'pie':
      renderPieChart();
      break;
    case 'bar':
      renderBarChart();
      break;
    case 'progress':
      renderProgressChart();
      break;
  }
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
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '18',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
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

// 渲染柱状图
const renderBarChart = () => {
  if (!chartInstance.value) return;

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['已收集', '未收集'],
      axisTick: {
        alignWithLabel: true
      }
    },
    yAxis: {
      type: 'value',
      max: totalCount,
      name: '物品数量'
    },
    series: [
      {
        name: '数量',
        type: 'bar',
        barWidth: '60%',
        data: [
          {
            value: collectedCount.value,
            name: '已收集',
            itemStyle: { color: '#67C23A' }
          },
          {
            value: remainingCount.value,
            name: '未收集',
            itemStyle: { color: '#F56C6C' }
          }
        ],
        label: {
          show: true,
          position: 'top'
        }
      }
    ]
  };

  chartInstance.value.setOption(option);
};

// 渲染进度图
const renderProgressChart = () => {
  if (!chartInstance.value) return;

  const option = {
    tooltip: {
      formatter: '{b}: {c}%'
    },
    series: [
      {
        name: '收集进度',
        type: 'gauge',
        progress: {
          show: true,
          width: 18
        },
        axisLine: {
          lineStyle: {
            width: 18
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          length: 15,
          lineStyle: {
            width: 2,
            color: '#999'
          }
        },
        axisLabel: {
          distance: 25,
          color: '#999',
          fontSize: 14
        },
        anchor: {
          show: true,
          showAbove: true,
          size: 18,
          itemStyle: {
            borderWidth: 2
          }
        },
        title: {
          show: true,
          offsetCenter: [0, '70%'],
          fontSize: 14
        },
        detail: {
          valueAnimation: true,
          fontSize: 30,
          offsetCenter: [0, '40%'],
          formatter: '{value}%'
        },
        data: [
          {
            value: parseFloat(completionPercentage.value),
            name: '收集完成率'
          }
        ]
      }
    ]
  };

  chartInstance.value.setOption(option);
};

// 监听图表类型变化
watch(chartType, () => {
  initChart();
});

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
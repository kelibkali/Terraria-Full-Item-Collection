<script setup lang="ts">

import {onMounted, ref} from "vue";

const isVisible = ref(false)
const lastVisit = localStorage.getItem('lastVisit')
const daysThreshold = 3

// ====== 计算属性 ======
const handleClose = () => {
  isVisible.value = false
  localStorage.setItem('lastVisit', Date.now().toString())
}

onMounted(()=>{
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
</script>

<template>
  <el-dialog v-model="isVisible" width="500px" title="请仔细阅读以下文字" center>
    <span>
       温馨提示：为了获得最佳体验，请前往网盘检查是否发布了最新版本。
      <br/>
      <br/>
      此版本为<span style="color:Red">1.0.3</span>版本
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
</template>

<style scoped>
.a-class {
  text-decoration: none;
  color: SkyBlue;
}
</style>
<script setup lang="ts">

import {onMounted, ref} from "vue";
import {ElMessage} from "element-plus";
import axios from "axios";

const localUserId = ref("")

const timeLeft = ref(60)

const buttonDisabled = ref(false)

const collectedCount = ref(0)

const buttonText = ref("生成用户凭证")

const link = ref("http://localhost:5173/progressbar?id=")


const loadUserData = () => {
  const userId = localStorage.getItem('userId')
  if(userId){
    localUserId.value = userId
  }
}

const saveUserData = (str:string) =>{
  localStorage.setItem('userId',str)
}

const loadCollectionData = () =>{
  const saveData = localStorage.getItem('collections')

  if(saveData){
    try{
      const savedData = JSON.parse(saveData)
      collectedCount.value = savedData.data.length
    }catch(error){
      console.log(error)
    }
  }

}

const handleGenerateUserId = async () => {
  try{
    const response = await axios.get(
        "http://localhost:8080/userId"
    )
    localUserId.value = response.data
    saveUserData(response.data)

    // 从localStorage查询一次数量 传入后端 之后如果在页面更新了 bar页面也更新内容
    console.log(collectedCount.value)
    try{
      const r = await axios.post(
          "http://localhost:8080/update",
          {
            "userId": localUserId.value,
            "number": collectedCount.value,
          }
      )
      console.log(r)
    }catch(error){
    }

    buttonDisabled.value = true

    buttonText.value = `请${timeLeft.value}秒后再试`

    let temp = setInterval(()=>{
      if(timeLeft.value > 0){
        timeLeft.value--;
        buttonText.value = `请${timeLeft.value}秒后再试`
      }else{
        clearInterval(temp)
        buttonDisabled.value = false
        buttonText.value = "生成用户凭证"
      }
    },1000)


    ElMessage.success({
      message: "用户凭证生成成功，请妥善保管",
    })
  }catch(e){
    ElMessage.error({
      message: "生成失败"
    })
  }
}

onMounted(()=>{
  loadUserData()
  loadCollectionData()
})
</script>

<template>
  <el-container style="align-items: center">
    <el-header>
      <h2>
        实时进度条
      </h2>
    </el-header>
    <el-main style="width: 100%;align-items: center;display: flex;justify-content: center;">
      <div style="width: 30%">
        <el-form  label-position="top">
          <el-form-item label="用户凭证">
            <el-input placeholder="请输入用户凭证" v-model="localUserId">
            </el-input>
          </el-form-item>
          <el-form-item >
            <el-button @click="handleGenerateUserId" :disabled="buttonDisabled" type="primary">
              {{buttonText}}
            </el-button>
          </el-form-item>

          <el-form-item label="链接（可复制到obs使用）">
            <el-text>
              {{link}}{{localUserId}}
            </el-text>
          </el-form-item>
        </el-form>
      </div>

    </el-main>
  </el-container>

</template>

<style scoped>
</style>
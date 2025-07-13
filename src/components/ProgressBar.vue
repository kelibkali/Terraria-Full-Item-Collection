<script setup lang="ts">

import {useRoute} from "vue-router";
import {onMounted, onUnmounted, ref} from "vue";
import axios from "axios";

const route = useRoute()
const userId = route.query.id
const data = ref("")

let pollInterval: number | undefined = undefined

const fetchData = async () => {
  try{
    const response = await axios.get(
        "http://localhost:8080/number?id=" + userId
    )
    data.value = response.data
    console.log(response)
  }catch(error){
    console.log(error)
  }
}


onMounted(()=>{
  pollInterval = setInterval(fetchData,5000)
})

onUnmounted(()=>{
  if(pollInterval) clearInterval(pollInterval)
})

</script>

<template>
  <div class="demo-progress">
    <el-text style="font-size: 20px;color: black">
      {{data}} / 5397
    </el-text>
  </div>
</template>

<style scoped>
.demo-progress {
  width: 100%;
}
</style>



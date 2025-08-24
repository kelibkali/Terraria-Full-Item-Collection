<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted, onUnmounted, ref } from "vue";
import { io, Socket } from "socket.io-client";

const route = useRoute();
const userId = route.query.id;

// 使用 ref 来存储数字，初始值设为 0 或从服务器获取
const number = ref<number>(0);

// Socket.IO 客户端实例
let socket: Socket | null = null;

// 从服务器获取初始数据
const fetchInitialData = async () => {
  try {
    if (!userId) {
      return;
    }
    //TODO:更换域名
    const response = await fetch(`http://localhost:8080/number?id=${userId}`);
    if (!response.ok) {
      if (response.status === 404 || response.status === 400) {
        number.value = 0;
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } else {
      const data = await response.json();
      if (data && typeof data !== 'undefined') {
        number.value = data;
      } else {
        number.value = 0;
      }
    }
  } catch (error) {
    number.value = 0;
  }
};

onMounted(() => {
  if (!userId) {
    return;
  }

  fetchInitialData().then(() => {
    //TODO:更换域名
    socket = io("http://localhost:8080", {
      transports: ['websocket']
    });

    socket.on("connect", () => {
      socket?.emit("join", { id: userId });
    });

    socket.on("update", (data) => {
      if (data && typeof data !== 'undefined') {
        number.value = data;
      }
    });

    socket.on("connect_error", () => {});

    socket.on("disconnect", () => {});
  });
});

onUnmounted(() => {
  if (socket && userId) {
    socket.emit("leave", { id: userId });
  }
  if (socket) {
    socket.disconnect();
  }
});
</script>

<template>
  <div class="demo-progress">
    <div class="number-text">
      {{number}} / 5397
    </div>
  </div>
</template>

<style>
/* 确保 html 和 body 元素占满视口 */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}
/* 根元素（#app 或 body 内的直接子元素）也需要设置高度 */
#app {
  height: 100%;
}
/* 您的原始样式，已确保居中 */
.demo-progress {
  width: 100%;
  height: 100%; /* 确保容器有高度 */
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  text-align: center; /* 文本内容居中（对块级子元素内的文本有效） */
}
.number-text {
  font-size: clamp(1.5rem, 10vw + 10vh, 100rem);
  color: black;
  font-family: "Sans Serif Collection",serif;
}
</style>
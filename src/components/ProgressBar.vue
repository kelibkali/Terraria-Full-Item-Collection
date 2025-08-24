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
    const response = await fetch(`http://terrariafc.com:8080/number?id=${userId}`);
    if (!response.ok) {
      if (response.status === 404 || response.status === 400) {
        number.value = 0;
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } else {
      const data = await response.json();
      if (typeof data !== 'undefined') {
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
    socket = io("http://terrariafc.com", {
      transports: ['websocket']
    });

    socket.on("connect", () => {
      socket?.emit("join", { id: userId });
    });

    socket.on("update", (data) => {
      if (typeof data !== 'undefined') {
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
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  height: 100%;
}

.demo-progress {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.number-text {
  font-size: clamp(1.5rem, 10vw + 10vh, 100rem);
  color: black;
}
</style>
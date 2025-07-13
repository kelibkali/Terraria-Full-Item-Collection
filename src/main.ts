import { createApp } from 'vue'
import ElementPlus from 'element-plus'
// 引入element-plus样式
import 'element-plus/dist/index.css'
import {createRouter, createWebHistory} from "vue-router";
import App from './App.vue'

// 导入页面组件
import CollectionListPage from './components/CollectionListPage.vue';
import StatisticsPage from './components/StatisticsPage.vue';
import ProgressBar from "./components/ProgressBar.vue";
import ProgressPage from "./components/ProgressPage.vue";

const routes = [
    {
        path: '/',
        redirect: '/collection'
    },
    {
        path: '/collection',
        component: CollectionListPage
    },
    {
        path: '/statistics',
        component: StatisticsPage
    },
    {
        path: '/progress',
        component: ProgressPage
    },
    {
        path: '/progressbar',
        component: ProgressBar,
        meta:{fullscreen:true}
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App)

app.directive('lazy', {
    mounted(el, binding) {
        const observer = new IntersectionObserver(([{ isIntersecting }]) => {
            if (isIntersecting) {
                el.src = binding.value
                observer.unobserve(el)
            }
        })
        observer.observe(el)
    }
})

app.use(ElementPlus)

app.use(router)

app.mount('#app')
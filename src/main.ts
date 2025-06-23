import { createApp } from 'vue'
import ElementPlus from 'element-plus'
// 引入element-plus样式
import 'element-plus/dist/index.css'
import App from './App.vue'

// 导入页面组件
import CollectionList from './components/CollectionList.vue';
import StatisticsPage from './components/StatisticsPage.vue';
import {createRouter, createWebHistory} from "vue-router";


const routes = [
    {
        path: '/',
        redirect: '/collection'
    },
    {
        path: '/collection',
        component: CollectionList
    },
    {
        path: '/statistics',
        component: StatisticsPage
    },
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
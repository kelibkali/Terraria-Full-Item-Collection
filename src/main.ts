import { createApp } from 'vue'
import ElementPlus from 'element-plus'
// 引入element-plus样式
import 'element-plus/dist/index.css'
import App from './App.vue'


const app = createApp(App)

app.use(ElementPlus)

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

app.mount('#app')
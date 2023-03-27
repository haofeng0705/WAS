import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import "./assets/font/iconfont.css";
import 'element-plus/dist/index.css'
import "./App.css";
import "./custom.css";



const app = createApp(App)
const pinia = createPinia()
app.use(ElementPlus)

app.use(pinia)
app.use(router)
app.mount('#app')

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/antd.css' // Import Ant Design styles
import Antd from 'ant-design-vue' // Import thư viện

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd) // Sử dụng Ant Design Vue

app.mount('#app')

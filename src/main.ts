import { createApp } from 'vue' //  导入createApp函数，用于创建Vue应用
import { createPinia } from 'pinia' //  导入createPinia函数，用于创建Pinia状态管理器

import App from './App.vue' //  导入App组件
import router from './router' //  导入路由配置

const app = createApp(App) //  创建Vue应用

app.use(createPinia()) //  使用Pinia状态管理器
app.use(router) //  使用路由配置

app.mount('#app') //  挂载Vue应用

import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import moment from 'moment'

const app = createApp(App)

// 方式1：全局过滤器 main.js
// 任意的 .vue文件内可直接使用。
// 定义:
// app.config.globalProperties.$filters = { 过滤器名(要过滤的值) {return '过滤后结果'} }
app.config.globalProperties.$filters = {
  reverse(str) {
    return str.split('').reverse().join('')
  },
  formatDate() {
    return moment().format('YYYY-MM-DD')
  },
}
app.mount('#app')

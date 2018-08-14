import Vue from 'vue'
import App from './App'
import router from './router'
// 导入 element-ui 组件库
import ElementUI from 'element-ui'
import axios from 'axios'

import 'element-ui/lib/theme-chalk/index.css'
// 导入图标的样式表
import './assets/fonts/iconfont.css'
// 导入 全局的自定义样式表
import './assets/css/global.css'

// 把 组件库安装到 Vue
Vue.use(ElementUI)

// 配置 axios
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 全局配置 axios 的 request 拦截器
axios.interceptors.request.use(config => {
  // 通过拦截request请求,主动为 请求头,追加新属性 Authorization,等于 token 值
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

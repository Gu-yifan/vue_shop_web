import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
// 导入后台主页组件
import Home from '@/components/home/Home'
// 导入 Welcome 组件
import Welcome from '@/components/home/Welcome'

Vue.use(Router)

// 创建路由对象
const router = new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/login', component: Login },
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [{ path: '/welcome', component: Welcome }]
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 如果访问的 login 页面，直接放行
  if (to.path === '/login') return next()
  // 获取 token 字符串
  const tokenStr = window.sessionStorage.getItem('token')
  // 如果没有 token 字符串，强制跳转到 登录页
  if (!tokenStr) return next('/login')
  // 证明有 token 字符串，直接放行
  next()
})

// 把路由对象暴露出去
export default router

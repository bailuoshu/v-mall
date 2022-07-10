import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { 
        path:'/',
        name:'home',
        component: () => import('@/views/home/home.vue'), 
    },
    { 
        path:'/login',
        name:'login',
        component: () => import('@/views/login.vue'), 
    },
    {
        path:'/goodsInfo',
        name:'goodsInfo',
        component: () => import('@/views/goodsInfo/goodsInfo.vue'), 
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
  })

export default router
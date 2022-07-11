import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
// import HomeView from "../views/HomeView.vue";
import BasicLayout from '../layouts/BasicLayout.vue';
import BlankLayout from '@/layouts/BlankLayout.vue';
import NestedLayout from '@/layouts/NestedLayout.vue';
import { LoginRoute } from './outsideLayout';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    meta: { title: 'Home' },
    component: BasicLayout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        meta: { title: '首页', icon: 'icon-icon-test' },
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/HomeView.vue')
      },
      {
        path: '/test-view',
        name: 'test-view',
        meta: { title: '测试页面', icon: 'icon-tuijian', flat: true },
        component: () => import('../views/TestView.vue')
      },
      {
        path: '/about',
        name: 'about',
        meta: { title: '关于', icon: 'icon-tuijian', flat: true },
        component: () => import('../views/AboutView.vue')
      },
      {
        path: '/table',
        name: 'table',
        component: BlankLayout,
        meta: { title: '表格', icon: 'icon-tuijian', flat: true },
        children: [
          {
            path: '/basic-table',
            name: 'basic-table',
            meta: { title: '基础表格' },
            component: () => import('../views/table/basic-table.vue')
          },
          {
            path: '/advanced-table',
            name: 'advanced-table',
            meta: { title: '高级表格' },
            component: () => import('../views/table/basic-table.vue')
          }
        ]
      }
    ]
  },
  ...LoginRoute
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});
console.log(router);

export default router;

import type { RouteRecordRaw } from 'vue-router';
import UserLayout from '@/layouts/UserLayout.vue';
import { LOGIN_NAME } from './constant';

export const LoginRoute: Array<RouteRecordRaw> = [
  {
    path: '/user',
    name: 'user',
    component: UserLayout,
    redirect: '/user/login',
    children: [
      {
        path: '/login',
        name: LOGIN_NAME,
        component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
        meta: {
          title: '登录'
        }
      }
    ]
  }
];

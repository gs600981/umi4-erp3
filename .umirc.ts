import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  qiankun: {
    master: {
      apps: [
        {
          name: 'app1',
          entry: '//localhost:7100',
        },
      ],
    },
  },
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
        name: ' CRUD 示例',
        path: '/table',
        component: './Table',
    },
  ],
  npmClient: 'npm',
});


// import './publicPath'
// with polyfills
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import { setupStore } from '@/store';
import ProLayout, { PageContainer } from '@ant-design-vue/pro-layout';
import STable from '@surely-vue/table';

import App from './App.vue';
import router from './router';
import 'ant-design-vue/dist/antd.css';
import '@ant-design-vue/pro-layout/dist/style.css';
import '@surely-vue/table/dist/index.less';

const app = createApp(App);

function setupPlugins() {
  app.use(Antd);
  app.use(ProLayout);
  app.use(PageContainer);
  app.use(STable);
}
async function setupApp() {
  setupStore(app);
  app.use(router);
  app.mount('#app');
}
setupPlugins();
setupApp();

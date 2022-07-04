import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Antd from 'ant-design-vue';
import ProLayout, { PageContainer } from '@ant-design-vue/pro-layout';
import STable from '@surely-vue/table';

import App from './App.vue';
import router from './router';
import 'ant-design-vue/dist/antd.css';
import '@ant-design-vue/pro-layout/dist/style.css';
import '@surely-vue/table/dist/index.less';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Antd);
app.use(ProLayout);
app.use(PageContainer);
app.use(STable);

app.mount('#app');

<template>
  <pro-layout v-model:collapsed="state.collapsed" v-model:selectedKeys="state.selectedKeys"
    v-model:openKeys="state.openKeys" :loading="loading" disable-content-margin style="min-height: 100vh"
    iconfont-url="//at.alicdn.com/t/font_2804900_2sp8hxw3ln8.js" v-bind="proConfig">
    <template #menuHeaderRender>
      <router-link :to="{ path: '/' }">
        <img src="@/assets/logo.svg" />
        <h1>Preview Pro</h1>
      </router-link>
    </template>
    <template #rightContentRender>
      <AvatarDropdown></AvatarDropdown>
    </template>
    <WaterMark v-bind="markConfig">
      <!-- custom breadcrumb itemRender  -->
      <!-- <template #breadcrumbRender="{ route, params, routes }">
        <span v-if="routes.indexOf(route) === routes.length - 1">
          <HeartOutlined />
          {{ route.breadcrumbName }}
        </span>
        <router-link v-else :to="{ path: route.path, params }">
          <SmileOutlined />
          {{ route.breadcrumbName }}
        </router-link>
      </template> -->
      <MultiTab :tabs="tabs" :activeKey="activeKey" @removeTab="test" />
      <router-view style="background-color: #fff" v-slot="{ Component }">
        <component style="padding: 12px 12px 32px" :is="Component" />
      </router-view>
    </WaterMark>
    <GlobalFooter prefixCls="custom-footer ant-pro" :links="[]" copyright="Test Pro Layout &copy; 2022 Hetong." />
  </pro-layout>
</template>
<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { getMenuData, clearMenuItem, type RouteContextProps, WaterMark, GlobalFooter } from '@ant-design-vue/pro-layout';
// import { SmileOutlined, HeartOutlined } from '@ant-design/icons-vue';
import { useUserStore } from '@/store/modules/user';
import AvatarDropdown from './components/LayoutHeader/AvatarDropdown.vue';
import MultiTab from './components/LayoutHeader/MultiTab.vue';

const router = useRouter();
const userStore = useUserStore();

const { menuData } = getMenuData(clearMenuItem(router.getRoutes()));

const state = reactive<Omit<RouteContextProps, 'menuData'>>({
  collapsed: false, // default collapsed
  openKeys: [], // defualt openKeys
  selectedKeys: [] // default selectedKeys
});
const loading = ref(false);
const proConfig = ref({
  layout: 'side',
  navTheme: 'dark',
  fixedHeader: true,
  fixSiderbar: true,
  splitMenus: false,
  menuData
});
const currentUser = reactive({
  nickname: 'Admin',
  avatar: 'A'
});
const activeKey = ref('')

watch(
  router.currentRoute,
  () => {
    console.log('router', router.currentRoute);

    const matched = router.currentRoute.value.matched.concat();
    state.selectedKeys = matched.filter((r) => r.name !== 'index').map((r) => r.path);
    state.openKeys = matched.filter((r) => r.path !== router.currentRoute.value.path).map((r) => r.path);
    const { meta, name, path, fullPath } = router.currentRoute.value;
    activeKey.value = name as string
    userStore.addMultiTab({ key: name as string, title: meta.title as string, name: name as string, path, fullPath });
  },
  {
    immediate: true
  }
);
const markConfig = reactive({
  gapX: 100,
  gapY: 60,
  content: 'TEST'
});

const tabs = reactive(userStore.multiTabs);

function test(targetKey: string, lastIndex: number) {
  console.log('targetKey', targetKey, lastIndex);
  // userStore.addMultiTab({})
  userStore.removeMultiTab(targetKey)
}
</script>
<style lang="less" scoped>
#app :deep(.ant-pro-pro-layout-watermark-wrapper) {
  padding-bottom: 32px;
}

.custom-footer {
  position: absolute;
  bottom: 0px;
  margin: 0px;
  width: 100%;
  height: 32px;
  line-height: 32px;
  background: #f0f2f5;

  :deep(.ant-pro-global-footer-links) {
    margin-bottom: 0px;
  }
}
</style>

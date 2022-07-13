<template>
  <a-form
    class="ht-login-form"
    :model="formState"
    name="basic"
    :label-col="{ span: 6 }"
    :wrapper-col="{ span: 13 }"
    autocomplete="off"
    @finish="onFinish"
  >
    <a-form-item label="用户名" name="username" :rules="[{ required: true, message: '请输入用户名' }]">
      <a-input v-model:value="formState.username" />
    </a-form-item>

    <a-form-item label="密码" name="password" :rules="[{ required: true, message: '请输入密码' }]">
      <a-input-password v-model:value="formState.password" />
    </a-form-item>

    <a-form-item name="remember" :wrapper-col="{ offset: 6, span: 13 }">
      <a-checkbox v-model:checked="formState.remember">记住密码</a-checkbox>
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 6, span: 13 }">
      <a-button type="primary" html-type="submit" size="large" block :loading="formState.loading">登录</a-button>
    </a-form-item>
  </a-form>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from '@/store/modules/user';

interface FormState {
  username: string;
  password: string;
  remember: boolean;
  loading: boolean;
}
const formState = reactive<FormState>({
  username: 'admin',
  password: 'j/yQVsWH34WEDmV8x+Qp9A==',
  remember: true,
  loading: false
});
const route = useRoute();
const router = useRouter();

const userStore = useUserStore();

async function onFinish() {
  const { username, password } = formState;
  formState.loading = true;
  try {
    await userStore.login({ LoginName: username, Password: password });
    router.replace((route.query.redirect as string) ?? '/');
  } catch (error) {
    console.log('error');
  }
  formState.loading = false;
}
</script>
<style lang="less" scoped>
.ht-login-form {
  :deep(.ant-input) {
    height: 44px;
    line-height: 44px;
    font-size: 26px;
  }
  :deep(.ant-input-affix-wrapper) {
    padding: 0px 11px;
  }
  :deep(.ant-form-item-label),
  :deep(label) {
    font-size: 24px;
    color: #5e5e5e;
  }
  :deep(.ant-btn) {
    height: 60px;
    span {
      font-size: 24px;
    }
  }
}
</style>

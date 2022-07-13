<template>
  <a-dropdown :trigger="['click']">
    <a class="ant-dropdown-link" @click.prevent>
      <UserOutlined />
      您好，张三
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item>
          <a href="javascript:;">
            <PoweroffOutlined />
            注销
          </a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">
            <KeyOutlined />
            修改密码
          </a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<script setup lang="ts">
import { DownOutlined, UserOutlined, PoweroffOutlined, KeyOutlined } from '@ant-design/icons-vue';
</script>

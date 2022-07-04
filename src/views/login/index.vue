<template>
  <a-button type="primary" block @click="login"> 登 录 </a-button>
</template>
<script setup lang="ts">
import router from '@/router';
function login() {
  router.push({ name: 'home' });
}
</script>

<template>
  <div style="padding: 0 10px">
    <a-tabs v-model:activeKey="activeKey" hide-add type="editable-card" @edit="onEdit">
      <a-tab-pane v-for="i in panes" :key="i" :tab="`Tab-${i}`" :closable="true"></a-tab-pane>
    </a-tabs>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const panes = ref<{ title: string; content: string; key: string; closable?: boolean }[]>(
  new Array(2).fill(null).map((_, index) => {
    const id = String(index + 1);
    return { title: `Tab ${id}`, content: `Content of Tab Pane ${id}`, key: id };
  })
);
const activeKey = ref(panes.value[0].key);

const onEdit = (targetKey: string | MouseEvent, action: string) => {
  console.log('action', action, targetKey);
  remove(targetKey as string);
};

function remove(targetKey: string) {
  let lastIndex = 0;
  panes.value.forEach((pane, i) => {
    if (pane.key === targetKey) {
      lastIndex = i - 1;
    }
  });
  panes.value = panes.value.filter((pane) => pane.key !== targetKey);
  if (panes.value.length && activeKey.value === targetKey) {
    if (lastIndex >= 0) {
      activeKey.value = panes.value[lastIndex].key;
    } else {
      activeKey.value = panes.value[0].key;
    }
  }
}
</script>

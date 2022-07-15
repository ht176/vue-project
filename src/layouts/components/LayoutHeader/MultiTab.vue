<template>
  <div style="padding: 0 5px">
    <a-tabs v-model:activeKey="activeKey" hide-add type="editable-card" @edit="onEdit">
      <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="true"></a-tab-pane>
    </a-tabs>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps(['tabs']);

const panes = computed(() =>
  props.tabs.map((e: { title: any; key: any }) => {
    return { title: e.title, key: e.key };
  })
);
const activeKey = ref(panes.value[0].key);

const onEdit = (targetKey: string | MouseEvent, action: string) => {
  console.log('action', action, targetKey);
  remove(targetKey as string);
};

function remove(targetKey: string) {
  let lastIndex = 0;
  panes.value.forEach((pane: { key: string }, i: number) => {
    if (pane.key === targetKey) {
      lastIndex = i - 1;
    }
  });
  panes.value = panes.value.filter((pane: { key: string }) => pane.key !== targetKey);
  if (panes.value.length && activeKey.value === targetKey) {
    if (lastIndex >= 0) {
      activeKey.value = panes.value[lastIndex].key;
    } else {
      activeKey.value = panes.value[0].key;
    }
  }
}
</script>

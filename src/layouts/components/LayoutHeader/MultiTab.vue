<template>
  <div style="padding: 0 5px">
    <a-tabs v-model:activeKey="activeKey" hide-add type="editable-card" @edit="onEdit">
      <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="true"></a-tab-pane>
    </a-tabs>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps(['tabs', 'activeKey']);
const emit = defineEmits<{ (e: 'removeTab', targetKey: string, lastIndex: number): void }>()


const panes = computed(() =>
  props.tabs.map((e: { title: any; key: any }) => {
    return { title: e.title, key: e.key };
  })
);

const onEdit = (targetKey: string | MouseEvent, action: string) => {
  remove(targetKey as string);
};

function remove(targetKey: string) {
  console.log('remove', targetKey);

  let lastIndex = panes.value.findIndex((e: { key: string; }) => e.key === targetKey)
  console.log('lastIndex', lastIndex);
  if (lastIndex > 0) {
    lastIndex -= lastIndex
  }
  // panes.value.forEach((pane: { key: string }, i: number) => {
  //   if (pane.key === targetKey) {
  //     lastIndex = i - 1;
  //   }
  // });

  // let val = panes.value.filter((pane: { key: string }) => pane.key !== targetKey);
  // if (val.length && props.activeKey === targetKey) {
  //   if (lastIndex >= 0) {
  //     activeKey.value = panes.value[lastIndex].key;

  //   } else {
  //     activeKey.value = panes.value[0].key;
  //   }
  // }
  emit('removeTab', targetKey, lastIndex,)
}
</script>

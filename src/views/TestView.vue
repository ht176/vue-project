<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { func } from 'vue-types';
/// book
interface Book {
  code: string;
  title: string;
  year?: number;
  author?: string;
}
const msg = ref('账单啊');
const msg1 = ref('账单11111');
const santi: Book = reactive({
  code: 'santi',
  title: '三体',
  year: 2016,
  author: '刘慈欣'
});
const bookList: Book[] = reactive([
  {
    code: 'santi1',
    title: '三体1',
    year: 2016,
    author: '刘慈欣'
  },
  {
    code: 'santi2',
    title: '三体2',
    year: 2018,
    author: '刘慈欣'
  },
  {
    code: 'santi3',
    title: '三体3',
    year: 2018,
    author: '刘慈欣'
  },
  {
    code: 'santi4',
    title: '三体4',
    year: 20120,
    author: '刘慈欣'
  },
  {
    code: 'santi4',
    title: '三体4',
    year: 20120,
    author: '刘慈欣'
  },
  {
    code: 'santi4',
    title: '三体4',
    year: 20120,
    author: '刘慈欣'
  },
  {
    code: 'santi4',
    title: '三体4',
    year: 20120,
    author: '刘慈欣'
  },
  {
    code: 'santi4',
    title: '三体4',
    year: 20120,
    author: '刘慈欣'
  },
  {
    code: 'santi4',
    title: '三体4',
    year: 20120,
    author: '刘慈欣'
  },
  {
    code: 'santi4',
    title: '三体4',
    year: 20120,
    author: '刘慈欣'
  },
  {
    code: 'santi4',
    title: '三体4',
    year: 20120,
    author: '刘慈欣'
  },
  {
    code: 'santi4',
    title: '三体4',
    year: 20120,
    author: '刘慈欣'
  },
  {
    code: 'santi4',
    title: '三体4',
    year: 20120,
    author: '刘慈欣'
  },
  {
    code: 'santi4',
    title: '三体4',
    year: 20120,
    author: '刘慈欣'
  }
]);

const columns = [
  {
    title: '编码',
    dataIndex: 'code',
    key: 'code'
  },
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title'
  },
  {
    title: '出版年份',
    dataIndex: 'year',
    key: 'year'
  },
  {
    title: '作者',
    dataIndex: 'author',
    key: 'author'
  }
];
function test(): void {
  console.log('dsahkj ');
}

/// author
interface Author {
  name: string;
  books: Array<string>;
}
const author: Author = reactive({
  name: 'Jhon Doe',
  books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery']
});

interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}
const myObj = {
  size: 10,
  label: '的撒哈拉看'
};
printLabel(myObj);

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  const newSquare = {
    color: 'white',
    area: 100
  };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
const mySquare = createSquare({ color: 'black' });

interface ReadonlyStringArray {
  readonly [index: number]: string;
}
onMounted(() => {
  const myArray: ReadonlyStringArray = ['dsa', 'dsaihklo', 'joolihj'];
  console.log(myArray[2]);
});

interface ClockInterface {
  currentTime: Date;
  setTime(d: Date);
}
class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
  setTime(d: Date) {
    throw new Error('Method not implemented.');
  }
}
</script>
<template>
  <a-tabs>
    <a-tab-pane key="1" tab="表格">
      <a-table :dataSource="bookList" :columns="columns" size="small" />
    </a-tab-pane>
    <a-tab-pane key="2" tab="表单">
      <div class="test" @click="test">
        {{ msg }}
        {{ msg1 }}
      </div>
      <div>
        <ul>
          <li>{{ santi.title }}</li>
          <li>{{ santi.year }}</li>
          <li>{{ santi.author }}</li>
        </ul>
      </div>
      <div>
        <input type="text" v-model="msg" />
        <input type="text" v-model="msg1" />
      </div>
      <div> ————————————————————————————————— </div>
    </a-tab-pane>
    <a-tab-pane key="3" tab="列表">
      <div v-for="item in bookList" :key="item.code">
        <ul>
          <li>{{ item.title }}</li>
          <li>{{ item.year }}</li>
          <li>{{ item.author }}</li>
        </ul>
      </div>
    </a-tab-pane>
    <a-tab-pane key="4" tab="Surely Vue Table">
      <s-table :columns="columns" :data-source="bookList" size="small"></s-table>
    </a-tab-pane>
  </a-tabs>
</template>
<style lang="less" scoped>
.test {
  color: brown;
}
</style>

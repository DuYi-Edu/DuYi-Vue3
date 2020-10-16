<template>
  <div class="container">
    <div class="list">
      <strong>编辑:</strong>
      <div class="list">
        <CheckEditor
          v-for="item in tasksRef"
          :key="item.id"
          v-model="item.sell"
          v-model:text.trim="item.title"
        />
      </div>
    </div>
    <div class="list">
      <strong>销售中:</strong>
      <div>
        <template v-for="(item, index) in sellingsRef" :key="item.id">
          <span>{{ index + 1 }}.</span>
          <strong>{{ item.title }}</strong>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import CheckEditor from "./components/CheckEditor.vue";
import { ref, computed, Fragment } from "vue";
export default {
  components: {
    CheckEditor,
  },
  setup() {
    const tasksRef = ref([
      {
        id: 1,
        sell: true,
        title: "iphone12",
      },
      { id: 2, sell: false, title: "xiaomi" },
      { id: 3, sell: true, title: "huawei" },
      { id: 4, sell: true, title: "vivo" },
    ]);
    const sellingsRef = computed(() => tasksRef.value.filter((it) => it.sell));
    return {
      tasksRef,
      sellingsRef,
    };
  },
};
</script>

<style scoped>
.container {
  margin-top: 50px;
  width: 880px;
  margin: 50px auto;
}
.list {
  display: flex;
  margin: 1em 0;
  align-items: center;
}
strong {
  margin-right: 1em;
}
</style>

<template>
  <div class="container">
    <div class="list">
      <strong>编辑:</strong>
      <div class="list">
        <CheckEditor
          v-for="item in products"
          :key="item.id"
          v-model="item.sell"
          v-model:title="item.title"
        />
      </div>
    </div>
    <div class="list">
      <strong>销售中:</strong>
      <div>
        <template v-for="(item, index) in sells" :key="item.id">
          <span>{{ index + 1 }}.</span>
          <strong>{{ item.title }}</strong>
        </template>
      </div>
    </div>
  </div>

  <div>
    <div v-if="isAccount">
      <label>账号：</label>
      <input type="text" />
    </div>
    <div v-else>
      <label>手机号：</label>
      <input type="text" />
    </div>
    <button @click="isAccount = !isAccount">切换登录方式</button>
  </div>
</template>

<script>
import CheckEditor from "./components/CheckEditor.vue";
import { ref, computed } from "vue";
const defaultSells = [
  {
    id: 1,
    sell: true,
    title: "iphone12",
  },
  { id: 2, sell: false, title: "xiaomi" },
  { id: 3, sell: true, title: "huawei" },
  { id: 4, sell: true, title: "vivo" },
];

export default {
  components: {
    CheckEditor,
  },
  setup() {
    const productsRef = ref(defaultSells);

    const sellsRef = computed(() => productsRef.value.filter((it) => it.sell));

    const isAccountRef = ref(false);

    return {
      products: productsRef,
      sells: sellsRef,
      isAccount: isAccountRef,
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

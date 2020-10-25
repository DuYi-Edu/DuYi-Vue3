<template>
  <div class="bar1">
    <div class="item" v-for="item in bars" :key="item.country">
      <label>{{ item.country }}</label>
      <div
        class="bar"
        :style="{ background: item.color, width: item.size + 'px' }"
      ></div>
      <div class="value">{{ item.value }}万亿</div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import useGdp from "../composition/useGdp";
export default {
  props: ["gdp"],
  setup(props) {
    const gdp = computed(() => props.gdp);
    return {
      ...useGdp(gdp, 400),
    };
  },
};
</script>

<style scoped>
.bar1 {
  width: 500px;
  box-sizing: border-box;
  margin: 3em;
  border-left: 1px solid #333;
}
.item {
  display: flex;
  height: 35px;
  line-height: 35px;
  margin: 1em 0;
  position: relative;
}
.bar {
  width: 100px;
  height: 100%;
  margin-right: 1em;
  flex: 0 0 auto;
}
.item label {
  position: absolute;
  left: -50px;
}
.value {
  flex: 0 0 auto;
}
</style>

<template>
  <div class="bar2">
    <div class="item" v-for="item in bars">
      <label>{{ item.country }} {{ item.value }}</label>
      <div
        class="bar"
        :style="{ background: item.color, width: item.size + 'px' }"
      ></div>
    </div>
  </div>
</template>

<script>
import useBar from "../composition/useBar";
import { computed } from "vue";
export default {
  props: ["gdp"],
  setup(props) {
    const gdp = computed(() => props.gdp);
    return {
      ...useBar(600, gdp),
    };
  },
};
</script>

<style scoped>
.bar2 {
  width: 600px;
  box-sizing: border-box;
  margin: 3em;
  position: relative;
}
.bar2::before {
  content: "";
  display: block;
  width: 1px;
  height: 100%;
  position: absolute;
  background: #666;
  left: 50%;
}
.item {
  display: flex;
  height: 35px;
  line-height: 35px;
  margin: 1em 0;
  position: relative;
  justify-content: center;
  color: #fff;
}
.bar {
  width: 100px;
  height: 100%;
  margin-right: 1em;
  flex: 0 0 auto;
}
.item label {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
}
</style>

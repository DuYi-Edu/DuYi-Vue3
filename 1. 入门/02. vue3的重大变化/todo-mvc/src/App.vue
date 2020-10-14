<template>
  <h1>count:{{ countRef }}</h1>
  <p>
    <button @click="decrease">decrease</button>
    <button @click="increase">increase</button>
  </p>
</template>

<script>
import { ref } from "vue";

function useCount() {
  let countRef = ref(0);
  const increase = () => {
    countRef.value++;
  };
  const decrease = () => {
    countRef.value--;
  };
  return {
    countRef,
    increase,
    decrease,
  };
}

export default {
  setup() {
    // console.log("所有生命周期钩子函数之前调用");
    // console.log(this); // this -> undefined

    // setup中，count是一个对象
    // 实例代理中，count是一个count.value

    //1. 新增

    //2. 修改

    //3. 删除
    return {
      ...useCount(),
    };
  },
};
</script>

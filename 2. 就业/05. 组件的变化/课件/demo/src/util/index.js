import { defineAsyncComponent, h } from "vue";
import Loading from "../components/Loading.vue";
import Error from "../components/Error.vue";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
NProgress.configure({
  trickleSpeed: 50,
  showSpinner: false,
});
export function delay(duration) {
  if (!duration) {
    duration = random(1000, 5000);
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

export function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function getAsyncPage(path) {
  return defineAsyncComponent({
    loader: async () => {
      NProgress.start();
      await delay();
      const comp = await import(path);
      NProgress.done();
      return comp;
    },
    loadingComponent: Loading,
  });
}

export function getAsyncComponent(path) {
  return defineAsyncComponent({
    loader: async () => {
      await delay();
      if (Math.random() < 0.5) {
        return import(path);
      }
      throw new Error();
    },
    loadingComponent: Loading,
    errorComponent: {
      render() {
        return h(Error, "组件加载出错");
      },
    },
  });
}

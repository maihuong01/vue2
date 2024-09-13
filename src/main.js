import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;
export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit("ageEmit", age);
    }
  }
});

Vue.directive("highlight", {
  bind(el, binding, vnode) {
    let delay = 0;
    if (binding.modifiers["delayed"]) {
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg === "bgColor") {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  }
});
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

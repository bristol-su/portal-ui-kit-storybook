import Vue from "vue";
import App from "./App.vue";
import UiKit from "@bristol-su/portal-ui-kit";
import "./utils.css";
import "./assets/tailwind.css";

Vue.config.productionTip = false;

Vue.use(UiKit, {});
new Vue({
  render: (h) => h(App),
}).$mount("#app");

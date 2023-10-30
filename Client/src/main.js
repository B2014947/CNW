import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import { List, Menu } from "ant-design-vue";
import { createPinia } from "pinia";

import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-utilities.min.css";

const app = createApp(App);
app.use(router);
app.use(List);
app.use(Menu);
app.use(createPinia());
app.mount("#app");

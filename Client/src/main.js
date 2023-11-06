import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import axios from "axios";
window.axios = axios;
// import { List, Menu, Card, Table, Form, Input, Checkbox } from "ant-design-vue";
// import Antd from "ant-design-vue";
import { createPinia } from "pinia";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, fab, far);

const app = createApp(App);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
// app.use(Antd);
// app.use(List);
// app.use(Menu);
// app.use(Card);
// app.use(Table);
// app.use(Form);
// app.use(Input);
// app.use(Checkbox);
app.use(createPinia());
app.mount("#app");

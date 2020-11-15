import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueAxios from "vue-axios";
import http from "./services/http";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/styles.css";

import Pagination from "./components/Pagination.vue";

const app = createApp(App);

app.use(VueAxios, http);
app.use(store);
app.use(router);
app.component("paginate", Pagination);

app.mount("#app");

import { createApp } from "vue";
import router from "./router";
import { createPinia } from "pinia";
import TeamView from "./views/TeamView.vue";

import "./assets/main.css";

const app = createApp(TeamView);

app.use(router);
app.use(createPinia());
app.mount("#app");

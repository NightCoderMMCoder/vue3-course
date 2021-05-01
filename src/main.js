import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./main.css";

import BaseButton from "./components/UI/BaseButton";

let app = createApp(App);
app.component("base-button", BaseButton);
app.use(router).mount("#app");

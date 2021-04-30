import { createApp } from "vue";
import App from "./App.vue";
import "./main.css";
import BaseButton from "./components/UI/BaseButton";

let app = createApp(App);

app.component("base-button", BaseButton);

app.mount("#app");

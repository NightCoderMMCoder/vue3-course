import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./main.css";

import BaseButton from "./components/UI/BaseButton";
import { firebaseAuth } from "./firebase/init";

let app;
firebaseAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);
    app.component("base-button", BaseButton);
    app.use(router).mount("#app");
  }
});

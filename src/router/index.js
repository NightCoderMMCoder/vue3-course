import { createRouter, createWebHistory } from "vue-router";
import ChatScreen from "../pages/ChatScreen.vue";

const routes = [
  {
    path: "/",
    name: "ChatScreen",
    component: ChatScreen,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

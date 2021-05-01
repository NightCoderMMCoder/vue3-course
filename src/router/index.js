import { createRouter, createWebHistory } from "vue-router";
import ChatScreen from "../pages/Chat/ChatScreen.vue";
import Login from "../pages/Auth/Login.vue";
import Register from "../pages/Auth/Register.vue";

const routes = [
  {
    path: "/",
    name: "ChatScreen",
    component: ChatScreen,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

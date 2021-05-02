import { createRouter, createWebHistory } from "vue-router";
import ChatScreen from "../pages/Chat/ChatScreen.vue";
import Login from "../pages/Auth/Login.vue";
import Register from "../pages/Auth/Register.vue";
import { firebaseAuth } from "../firebase/init";

const routes = [
  {
    path: "/",
    name: "ChatScreen",
    component: ChatScreen,
    beforeEnter: (_, _1, next) => {
      if (!firebaseAuth.currentUser) {
        next({ name: "Login" });
      } else {
        next();
      }
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: (_, _1, next) => {
      if (firebaseAuth.currentUser) {
        next({ name: "ChatScreen" });
      } else {
        next();
      }
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    beforeEnter: (_, _1, next) => {
      if (firebaseAuth.currentUser) {
        next({ name: "ChatScreen" });
      } else {
        next();
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

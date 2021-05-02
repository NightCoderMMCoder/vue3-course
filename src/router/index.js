import { createRouter, createWebHistory } from "vue-router";
import ChatScreen from "../pages/Chat/ChatScreen.vue";
import Login from "../pages/Auth/Login.vue";
import Register from "../pages/Auth/Register.vue";
import { firebaseAuth } from "../firebase/init";

// const requiresAuth = (to, _1, next) => {
//   if (!firebaseAuth.currentUser) {
//     next({ name: "Login", query: { redirect: to.fullPath } });
//   } else {
//     next();
//   }
// };

// const notRequiresAuth = (to, _1, next) => {
//   if (firebaseAuth.currentUser) {
//     next({ name: "ChatScreen", query: { redirect: to.fullPath } });
//   } else {
//     next();
//   }
// };

const routes = [
  {
    path: "/",
    name: "ChatScreen",
    component: ChatScreen,
    meta: {
      requiresAuth: true,
    },
    // beforeEnter: requiresAuth,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      requiresGuest: true,
    },
    // beforeEnter: notRequiresAuth,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      requiresGuest: true,
    },
    // beforeEnter: notRequiresAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, _, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!firebaseAuth.currentUser) {
      next({ name: "Login", query: { redirect: to.fullPath } });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresGuest)) {
    if (firebaseAuth.currentUser) {
      next({ name: "ChatScreen", query: { redirect: to.fullPath } });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;

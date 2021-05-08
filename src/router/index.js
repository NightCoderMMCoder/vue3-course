import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import GameDetails from "../views/GameDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/game/:id",
    name: "GameDetails",
    component: GameDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

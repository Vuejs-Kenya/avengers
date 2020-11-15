import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/team",
    name: "The Team",
    component: () => import("../views/Team.vue"),
    children: [
      {
        path: ":id",
        name: "View Avenger",
        component: () => import("../views/Avenger.vue")
      }
    ]
  },
  {
    path: "/powers",
    name: "Powers & Weaknesses",
    component: () => import("../views/Powers.vue")
  },
  {
    name: "404",
    path: "/:pathMatch(.*)*",
    component: () => import("../views/Unfound.vue"),
    meta: {
      title: "Page Not Found",
      sidebar: false
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

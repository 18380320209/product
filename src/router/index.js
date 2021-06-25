import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About/About.vue"),
  },
  {
    path: "/home/cloth",
    name: "Cloth",
    component: () =>
        import("../views/Home/Cloth")
  },
  {
    path: "/home/beauty",
    name: "Beauty",
    component: () =>
        import("../views/Home/Beauty")
  },
  {
    path: "/home/food",
    name: "Food",
    component: () =>
        import("../views/Home/Food")
  },
  {
    path: "/home/electronic",
    name: "Electronic",
    component: () =>
        import("../views/Home/Electronic")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

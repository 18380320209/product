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
    redirect:'/about/Footprint',
    children:[
      {
        path: "/about/Footprint",
        name: "Footprint",
        component:() =>
            import("../views/About/Footprint")
      },
      {
        path: "/about/Collect",
        name: "Collect",
        component: () =>
            import("../views/About/Collect")
      }
    ]
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
  },
  {
    path: "/about/setting",
    name: "Setting",
    component: () =>
        import("../views/About/Setting"),
  },
  {
    path: "/about/setting/safety",
    name:"Safety",
    component: () =>
        import("../views/About/Safety")
  },
  {
    path: "/about/setting/software",
    name: "Software",
    component: () =>
        import("../views/About/Software")
  },
  {
    path: "/about/setting/theme",
    name: "Theme",
    component: () =>
        import("../views/About/Theme")
  },
  {
    path: "/about/setting/information",
    name: "information",
    component: () =>
        import("../views/About/Information")
  },
  {
    path: "/land/landing",
    name: "Landing",
    component: () =>
        import("../views/Land/Landing"),
    redirect: "/land/login",
    children: [
      {
        path: "/land/login",
        name: "Login",
        component:() =>
            import("../views/Land/login")
      },
      {
        path: "/land/register",
        name: "Register",
        component:() =>
            import("../views/Land/register")
      }
    ]
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

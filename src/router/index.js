import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/create",
    name: "create",
    component: () => import("../views/Create.vue")
  },
  {
    path: "/posts",
    name: "posts",
    component: () => import("../views/Index.vue")
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: () => import("../views/Edit.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

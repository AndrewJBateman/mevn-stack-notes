import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "notes",
    component: () => import("../views/Index.vue")
  },
  {
    path: "/create",
    name: "create",
    component: () => import("../views/Create.vue")
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: () => import("../views/Edit.vue")
  },
  {
    path: "/info",
    name: "info",
    component: () => import("../views/Info.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

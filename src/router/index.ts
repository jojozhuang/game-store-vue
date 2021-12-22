import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import ProductList from "../views/ProductList.vue";
import ProductAdd from "../views/ProductAdd.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/productlist",
    name: "Product List",
    component: ProductList,
  },
  {
    path: "/productadd/:id",
    name: "Product Edit",
    component: ProductAdd,
  },
  {
    path: "/productadd",
    name: "Product Add",
    component: ProductAdd,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

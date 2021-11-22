import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Add from "../views/Add.vue";
import Auth from "../views/Auth.vue"; 

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/addProduct",
    name: "Add",
    component: Add,
  },
  {
    path: "/authenticate",
    name: "Auth",
    component: Auth,
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

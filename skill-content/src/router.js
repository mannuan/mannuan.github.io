import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

let routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home/Index.vue"),
    meta: {
      title: "mannuan-skills"
    }
  }
];

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes
});

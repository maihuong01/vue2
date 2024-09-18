import Vue from "vue";
import Router from "vue-router";
import User from "@/components/User";
import Home from "../pages/home/Home.vue";

Vue.use(Router);

export default new Router({
  // mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/user",
      name: "User",
      component: User
    }
  ]
});

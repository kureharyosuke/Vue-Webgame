import Vue from "vue";
import Router from "vue-router";
import Liked from "@/components/Liked";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Liked",
      component: Liked
    }
  ]
});

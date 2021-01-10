import Vue from "vue";
import Router from "vue-router";
import Liked from "@/components/Liked";
import GuGuDan from "@/components/GuGuDan";
import WordRelay from "@/components/WordRelay";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Liked",
      component: Liked
    },
    {
      path: "/gugudan",
      name: "GuGuDan",
      component: GuGuDan
    },
    {
      path: "/wordrelay",
      name: "WordRelay",
      component: WordRelay
    }
  ]
});

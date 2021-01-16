import Vue from "vue";
import Router from "vue-router";
import Liked from "@/components/Liked";
import GuGuDan from "@/components/GuGuDan";
import WordRelay from "@/components/WordRelay";
import NumberBaseball from "@/components/NumberBaseball";
import ResponsCheck from "@/components/ResponsCheck";
import RockScissorsPaper from "@/components/RockScissorsPaper";

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
    },
    {
      path: "/numberbaseball",
      name: "NumberBaseball",
      component: NumberBaseball
    },
    {
      path: "/responscheck",
      name: "ResponsCheck",
      component: ResponsCheck
    },
    {
      path: "/rockScissorsPaper",
      name: "RockScissorsPaper",
      component: RockScissorsPaper
    }
  ]
});

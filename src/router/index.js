import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from "../pages/Home/Home.vue";
import HomeLoading from "../pages/Loading/HomeLoading.vue";
import Spots from "../pages/Spots/Spots.vue";
import Play from "../pages/Play/Play.vue";
import Type from "../pages/Type/Type.vue";
import Advantage from "../pages/Advantage/Advantage.vue";
import More from "../pages/More/More.vue";

/*测试*/
import Test1 from "../pages/Test/Test1.vue";

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeLoading',
      component: HomeLoading,
      meta: {
        showFooter: false,
        rightNav: true
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/spots',
      name: 'Spots',
      component: Spots,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/play',
      name: 'Play',
      component: Play,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/type',
      name: 'Type',
      component: Type,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/advantage',
      name: 'Advantage',
      component: Advantage,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/more',
      name: 'More',
      component: More,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/test',
      name: 'Test1',
      component: Test1,
      meta: {
        showFooter: true
      }
    },
  ]
})

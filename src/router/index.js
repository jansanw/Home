import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

/*主要的组件实现按需加载*/
// import Home from "../pages/Home/Home.vue";
const Home = ()=> import("../pages/Home/Home.vue");
const HomeLoading = ()=> import("../pages/Loading/HomeLoading.vue");
const Spots = ()=> import("../pages/Spots/Spots.vue");
const Play = ()=> import("../pages/Play/Play.vue");
const Type = ()=> import("../pages/Type/Type.vue");
const Advantage = ()=> import("../pages/Advantage/Advantage.vue");
const More = ()=> import("../pages/More/More.vue");

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
        showFooter: true,
        rightNav: true,
      }
    },
    {
      path: '/spots',
      name: 'Spots',
      component: Spots,
      meta: {
        showFooter: true,
        keepAlive: true
      }
    },
    {
      path: '/play',
      name: 'Play',
      component: Play,
      meta: {
        showFooter: true,
        keepAlive: true
      }
    },
    {
      path: '/type',
      name: 'Type',
      component: Type,
      meta: {
        showFooter: true,
        keepAlive: true
      }
    },
    {
      path: '/advantage',
      name: 'Advantage',
      component: Advantage,
      meta: {
        showFooter: true,
        keepAlive: true
      }
    },

    // more 部分的二级路由用在more组件中用动态组件代替
    {
      path: '/more',
      name: 'More',
      component: More,
      meta: {
        showFooter: true,
        keepAlive: true
      },
    },
  ]
})

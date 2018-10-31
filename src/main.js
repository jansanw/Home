// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

import Krpano from "vue-krpano";
Vue.use(Krpano);

import 'jquery';
import * as SpriteSpin from "spritespin";
/*MintUI*/
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);

/*Vuex*/
import Vuex from 'vuex';
Vue.use(Vuex);

/*引入store*/
import store from "./store";

// 图片懒加载
import VueLazyLoad from 'vue-lazyload';
Vue.use(VueLazyLoad,{
  error:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540986276316&di=118ef86469f8ccb6fcdc62f0d10d7198&imgtype=0&src=http%3A%2F%2Fpj.jm8008.com%2Fpcpc%2Fimages%2Ferror.jpg',
  loading:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540986182432&di=6d34fbef3e11e9950db651a9a5dc7ab0&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D000a2d5cd4c8a786be2a4a065708c9c7%2F2f9fc3fdfc039245f39d6ca98294a4c27d1e2539.jpg'
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});

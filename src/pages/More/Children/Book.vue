<template>
  <div class="book">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img data-src="../../../../static/images/More/more1.png" class="swiper-lazy" >
          <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </div>
        <div class="swiper-slide">
          <img data-src="../../../../static/images/More/more2.jpg" class="swiper-lazy" >
          <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </div>
        <div class="swiper-slide">
          <img data-src="../../../../static/images/More/more3.jpg" class="swiper-lazy" >
          <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </div>
        <div class="swiper-slide">
          <img data-src="../../../../static/images/More/more4.jpg" class="swiper-lazy" >
          <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </div>
        <div class="swiper-slide">
          <img data-src="../../../../static/images/More/more5.jpg" class="swiper-lazy" >
          <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </div>
        <div class="swiper-slide">
          <img data-src="../../../../static/images/More/more6.jpg" class="swiper-lazy" >
          <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </div>
        <div class="swiper-slide">
          <img data-src="../../../../static/images/More/more7.jpg" class="swiper-lazy">
          <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </div>
        <div class="swiper-slide">
          <img data-src="../../../../static/images/More/more8.jpg" class="swiper-lazy">
          <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </div>
        <div class="swiper-slide">
          <img data-src="../../../../static/images/More/more9.jpg" class="swiper-lazy">
          <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import  Swiper from "../../../../static/js/swiper-4.0.5.min";
  export default {
    data() {
      return {
        imgList: [
          {url: "./static/images/More/more2.jpg", id: 2},
          {url: "./static/images/More/more3.jpg", id: 3},
          {url: "./static/images/More/more4.jpg", id: 4},
          {url: "./static/images/More/more5.jpg", id: 5},
          {url: "./static/images/More/more6.jpg", id: 6},
          {url: "./static/images/More/more7.jpg", id: 7},
          {url: "./static/images/More/more8.jpg", id: 8},
        ]
      }
    },
    mounted() {
      this.$nextTick(()=> {
        let swiper = new Swiper('.swiper-container', {
          lazy: true,
          loop: true, //
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
        });
      })
    },
    methods: {},
    computed: {},

  }
</script>
<style lang="less" scoped>
  .book {
    height: 100%;
    .swiper-container {
      width: 100%;
      height: 100%;
      .swiper-slide {
          img {
            width: 100%;
            height: 100%;
          }
      }

    }
  }
</style>

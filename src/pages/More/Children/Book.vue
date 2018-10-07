<template>
  <div class="book">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="myslide slide1"></div>
        </div>
        <div class="swiper-slide">
          <div class="myslide slide2"></div>
        </div>
        <div class="swiper-slide">
          <div class="myslide slide3"></div>
        </div>
        <div class="swiper-slide">
          <div class="myslide slide4"></div>
        </div>
        <div class="swiper-slide">
          <div class="myslide slide5"></div>
        </div>
        <div class="swiper-slide">
          <div class="myslide slide6"></div>
        </div>
        <div class="swiper-slide">
          <div class="myslide slide7"></div>
        </div>
        <div class="swiper-slide">
          <div class="myslide slide8"></div>
        </div>
        <div class="swiper-slide">
          <div class="myslide slide9"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import  Swiper from "../../../../static/js/swiper-4.0.5.min";
  export default {
    data() {
      return {}
    },
    mounted() {
      this.$nextTick(()=> {
        let swiper = new Swiper('.swiper-container', {
          loop: true
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
      .slide1 {
        background: url("../../../../static/images/More/more1.png") no-repeat;
      }
      .slide2 {
        background: url("../../../../static/images/More/more2.jpg") no-repeat;
      }
      .slide3 {
        background: url("../../../../static/images/More/more3.jpg") no-repeat;
      }
      .slide4 {
        background: url("../../../../static/images/More/more4.jpg") no-repeat;
      }
      .slide5 {
        background: url("../../../../static/images/More/more5.jpg") no-repeat;
      }
      .slide6 {
        background: url("../../../../static/images/More/more6.jpg") no-repeat;
      }
      .slide7 {
        background: url("../../../../static/images/More/more7.jpg") no-repeat;
      }
      .slide8 {
        background: url("../../../../static/images/More/more8.jpg") no-repeat;
      }
      .slide9 {
        background: url("../../../../static/images/More/more9.jpg") no-repeat;
      }
      .myslide {
        height: 100%;
        background-size: 100% 100%;
      }

    }
  }
</style>

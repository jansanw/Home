<template>
  <div class="book">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in imgList" :key="item.id">
          <img v-lazy="item.url" alt="">
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
          {url: "./static/images/More/more1.png", id: 1},
          {url: "./static/images/More/more2.jpg", id: 2},
          {url: "./static/images/More/more3.jpg", id: 3},
          {url: "./static/images/More/more4.jpg", id: 4},
          {url: "./static/images/More/more5.jpg", id: 5},
          {url: "./static/images/More/more6.jpg", id: 6},
          {url: "./static/images/More/more7.jpg", id: 7},
          {url: "./static/images/More/more8.jpg", id: 8},
          {url: "./static/images/More/more9.jpg", id: 9},
        ]
      }
    },
    mounted() {
      this.$nextTick(()=> {
        let swiper = new Swiper('.swiper-container', {
//          loop: true
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

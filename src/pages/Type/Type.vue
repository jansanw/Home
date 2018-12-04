<template>
  <div class="type">
    <div class="mySwiperIndex"  v-show="isShow">
      <ul>
        <li @click="swiperToIndex(0)" :class="{'active': liActive==0}">A户型</li>
        <li @click="swiperToIndex(1)" :class="{'active': liActive==1}">B户型</li>
        <!--<li @click="swiperToIndex(2)" :class="{'active': liActive==2}">B2户型</li>-->
        <li @click="swiperToIndex(2)" :class="{'active': liActive==2}">C户型</li>
      </ul>
    </div>
    <div class="swiper-container"  v-show="isShow">
      <div class="swiper-wrapper">
        <div class="swiper-slide myslide1"></div>
        <div class="swiper-slide myslide2"></div>
        <!-- <div class="swiper-slide myslide3"></div>-->
        <div class="swiper-slide myslide4"></div>
      </div>
    </div>
    <!--点击进去全景的按钮-->
    <!--A户型-->
    <div class="showTotalSpots1"  @click = "showTotalSpots(liActive)" v-show="liActive===0">
    </div>
    <div class="showTotalSpots2"  @click = "showTotalSpots(liActive)" v-show="liActive===0">
    </div>
    <div class="showTotalSpots3"  @click = "showTotalSpots(liActive)" v-show="liActive===0">
    </div>
    <!--B户型-->
    <div class="showTotalSpots4"  @click = "showTotalSpots(liActive)" v-show="liActive===1">
    </div>
    <div class="showTotalSpots5"  @click = "showTotalSpots(liActive)" v-show="liActive===1">
    </div>
    <div class="showTotalSpots6"  @click = "showTotalSpots(liActive)" v-show="liActive===1">
    </div>
    <!--C户型-->
    <div class="showTotalSpots7"  @click = "showTotalSpots(liActive)" v-show="liActive===2">
    </div>
    <div class="showTotalSpots8"  @click = "showTotalSpots(liActive)" v-show="liActive===2">
    </div>
    <div class="showTotalSpots9"  @click = "showTotalSpots(liActive)" v-show="liActive===2">
    </div>

    <div class="totalSpots" v-if="showSpotsA">
      <iframe src="http://720yun.gugushuzi.com//tour/352207fc713645ea"
              frameborder="no" border="0"
              style="width: 100%;height: 100%;"></iframe>
      <!--关闭按钮 兼 返回-->
      <div class="close" @click.stop = "initShow()">
        <img src="../../../static/images/Type/arrow.png" alt="">
      </div>
    </div>
    <div class="totalSpots" v-if="showSpotsB">
      <iframe src="http://720yun.gugushuzi.com//tour/352207fc713645ea"
              frameborder="no" border="0"
              style="width: 100%;height: 100%;"></iframe>
      <!--关闭按钮 兼 返回-->
      <div class="close" @click.stop = "initShow()">
        <img src="../../../static/images/Type/arrow.png" alt="">
      </div>
    </div>
    <div class="totalSpots" v-if="showSpotsC">
      <iframe src="http://720yun.gugushuzi.com//tour/352207fc713645ea"
              frameborder="no" border="0"
              style="width: 100%;height: 100%;"></iframe>
      <!--关闭按钮 兼 返回-->
      <div class="close" @click.stop = "initShow()">
        <img src="../../../static/images/Type/arrow.png" alt="">
      </div>
    </div>

  </div>
</template>
<script>
  import  Swiper from "../../../static/js/swiper-4.0.5.min";
  export default {
    data() {
      return {
        swiper: null,
        liActive: 0,
        showSpotsA: false,
        showSpotsB: false,
        showSpotsC: false,
        isShow: true,
      }
    },
    mounted() {
      /*注意函数内的this*/
      let my_this = this;
      this.$nextTick(()=> {
        this.swiper = new Swiper('.swiper-container', {
          on: {
            slideChangeTransitionStart: function(){
              // this.liActive = this.activeIndex;
              // console.log(this.liActive);
              //上面的逻辑看似很合理,输出的数字也对,但是对应的内容没有变色
              // 用外置的构造函数时候注意this的指向
              my_this.liActive = this.activeIndex;  //this.activeIndex  当前的swiper的激活页的index
            },
          },
        });
      })
    },
    methods: {
      swiperToIndex(index) {
        //swiper滑动到指定的位置
        this.swiper.slideTo(index,500);
        this.liActive = index;
      },
      showTotalSpots(index) {
        if(index===0) {
          this.showSpotsA = true;
          this.showSpotsB = false;
          this.showSpotsC = false;
          this.isShow = false;
        } else  if(index===1) {
          this.showSpotsB = true;
          this.showSpotsA = false;
          this.showSpotsC = false;
          this.isShow = false;
        } else {
          this.showSpotsA = false;
          this.showSpotsB = false;
          this.showSpotsC = true;
          this.isShow = false;
        }
      },
      initShow() {
        this.showSpotsA = false;
        this.showSpotsB = false;
        this.showSpotsC = false;
        this.isShow = true;
      }
    },
    computed: {

    },
    //防止切换路由的时候全景图依旧显示
    watch: {
      '$route': function(to, from) {
        this.showSpotsA = false;
        this.showSpotsB = false;
        this.showSpotsC = false;
        this.isShow = true;
      }
    }
  }
</script>
<style lang="less" scoped>
  .type {
    height: 100%;
    background: url("../../../static/images/Type/bg.png") no-repeat;
    background-size: 100% 100%;
    .mySwiperIndex {
      position: absolute;
      top: 4.5rem;
      right: 1%;
      z-index: 9;
      width: 60%;
      height: 2rem;
      color: #7f7f7f;
      border: 1px solid #ccc;
      border-radius: 7px;
      background: #fdf4eb;
      ul {
        display: flex;
        height: 100%;
        li {
          flex: 1;
          height: 100%;
          display: flex;
          font-size: 12px;
          align-items: center;
          justify-content: center;
          &.active {
            color: #c89057;
          }
        }
      }
    }
    .swiper-container {
      width: 100%;
      height: 100%;
    }
    .myslide1 {
      background: url("../../../static/images/Type/A.png") no-repeat;
      background-size: 100% 100%;
    }
    .myslide2 {
      background: url("../../../static/images/Type/B.png") no-repeat;
      background-size: 100% 100%;
    }
    .myslide4 {
      background: url("../../../static/images/Type/C.png") no-repeat;
      background-size: 100% 100%;
    }

    .showTotalSpots1,  .showTotalSpots2,  .showTotalSpots3,
    .showTotalSpots4, .showTotalSpots5, .showTotalSpots6,
    .showTotalSpots7, .showTotalSpots8, .showTotalSpots9
    {
      position: absolute;
      width: 5%;
      height: 9%;
      z-index: 2;
    }
    .showTotalSpots1 {
      left: 17.2%;
      top: 61.9%;
    }
    .showTotalSpots2 {
      left: 39.2%;
      top: 71.4%;
    }
    .showTotalSpots3 {
      left: 51.2%;
      top: 66.9%;
    }
    .showTotalSpots4 {
      left: 28.2%;
      top: 56.9%;
    }
    .showTotalSpots5 {
      left: 54.2%;
      top: 48.4%;
    }
    .showTotalSpots6 {
      left: 62.2%;
      top: 60.9%;
    }
    .showTotalSpots7 {
      left: 12.2%;
      top: 71.5%;
    }
    .showTotalSpots8 {
      left: 55.2%;
      top: 59.4%;
    }
    .showTotalSpots9 {
      left: 33.5%;
      top: 55.5%;
    }

    .totalSpots {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 999;
      .close {
        position: absolute;
        left: 3%;
        top: 10%;
        z-index: 999;
        width: 25px;
        height: 25px;
        text-align: center;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>

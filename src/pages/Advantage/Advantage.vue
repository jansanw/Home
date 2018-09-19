<template>
      <div class="advantage">
        <section class="swiper-container ws-qw-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide ws-qw-page">
              <!-- 区位一 -->
              <img class="reset-ani ws-qw-page-fill" :src="imgUrl+'picture/bg.jpg'">
              <section class="swiper-container swiper-page swiper-container-page1" data="1">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img class="reset-ani ws-qw-page-fill animation-fadeinright"  :src="imgUrl+'picture/p1.png'">
                  </div>
                  <div class="swiper-slide">
                    <img class="reset-ani ws-qw-page-fill animation-fadeinright" :src="imgUrl+'picture/p2.png'">
                  </div>
                </div>
                <div class="page-secondmenuV page1-menu">
                  <img class="action" :src="imgUrl+'picture/btn1_h.png'" style="margin-bottom: 4vw;"></img>
                  <img :src="imgUrl+'picture/btn2.png'"></img>
                </div>
              </section>
            </div>
            <div class="swiper-slide ws-qw-page">
              <!-- 区位一 -->
              <img class="reset-ani ws-qw-page-fill" :src="imgUrl+'picture/bg.jpg'">
              <section class="swiper-container swiper-page swiper-container-page2" data="2">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img class="reset-ani ws-qw-page-fill animation-fadeinleft" :src="imgUrl+'picture/p1.png'">
                    <img class="reset-ani ws-qw-page-fill animation-fadeinright" :src="imgUrl+'picture/p2.png'">
                  </div>
                </div>
                <div class="page-secondmenuV page2-menu" style="display: none;">
                  <img class="action" :src="imgUrl+'picture/btn1_h.png'" style="margin-bottom: 4vw;"></img>
                  <img :src="imgUrl+'picture/btn2.png'"></img>
                </div>
              </section>
            </div>

            <div class="swiper-slide ws-qw-page">
              <!-- 区位一 -->
              <img class="reset-ani ws-qw-page-fill" :src="imgUrl+'picture/bg.jpg'">
              <img class="reset-ani ws-qw-page-fill animation-fadeinleft qw2_xiangmu" :src="imgUrl+'picture/xiangmu.png'" >
              <img class="qw2_logo animation-fadeinright" :src="imgUrl+'picture/logo.png'">
              <section class="swiper-container swiper-page swiper-container-page3" data="3">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img class="reset-ani ws-qw-page-fill animation-fadeinright" :src="imgUrl+'picture/p1.png'">
                  </div>
                  <div class="swiper-slide">
                    <img class="reset-ani ws-qw-page-fill animation-fadeinright" :src="imgUrl+'picture/p2.png'">
                  </div>
                  <div class="swiper-slide">
                    <img class="reset-ani ws-qw-page-fill animation-fadeinright" :src="imgUrl+'picture/p3.png'">
                  </div>
                  <div class="swiper-slide">
                    <img class="reset-ani ws-qw-page-fill animation-fadeinright" :src="imgUrl+'picture/p4.png'">
                  </div>
                </div>
                <div class="page-secondmenuV page3-menu">
                  <img class="action" :src="imgUrl+'picture/btn1_h.png'"></img>
                  <img :src="imgUrl+'picture/btn2.png'"></img>
                  <img :src="imgUrl+'picture/btn3.png'"></img>
                  <img :src="imgUrl+'picture/btn4.png'"></img>
                </div>
              </section>

            </div>

            <div class="swiper-slide ws-qw-page">
              <!-- 区位一 -->
              <img class="reset-ani ws-qw-page-fill" :src="imgUrl+'picture/bg.jpg'">
              <img class="reset-ani ws-qw-page-fill animation-fadeinleft qw2_xiangmu"  :src="imgUrl+'picture/xiangmu.png'">
              <!-- <img class="qw2_logo animation-fadeinright" src="picture/logo.png"> -->
              <section class="swiper-container swiper-page swiper-container-page4" data="4">
                <div class="swiper-wrapper">
                  <div class="swiper-slide swiper-slide-active" style="height: 504px;">
                    <img class="reset-ani ws-qw-page-fill animation-fadeinright" :src="imgUrl+'picture/p1.png'" style="">
                    <a class="pt_switch" style="left: 21.5625%;top: 68.65873%;" name="1_1"></a>
                    <img src="" class="pt_img" style="display: none;">
                  </div>
                  <div class="swiper-slide swiper-slide-next" style="height: 504px;">
                    <img class="reset-ani ws-qw-page-fill animation-fadeinright" :src="imgUrl+'picture/p2.png'" style="">
                  </div>
                  <div class="swiper-slide" style="height: 504px;">
                    <img class="reset-ani fangda" :src="imgUrl+'picture/p3.png'" style="">
                    <a class="pt_switch" style="left: 86.75%;top: 64.68254%;" name="3_1"></a>
                    <a class="pt_switch" style="left: 70.875%;top: 54.115873%;" name="3_4"></a>
                    <a class="pt_switch" style="left: 68.75%;top: 72.079365%;" name="3_3"></a>
                    <a class="pt_switch" style="left: 39.4375%;top: 63.674603%;" name="3_2"></a>
                    <a class="pt_switch" style="left: 39.625%;top: 71.515873%;" name="3_5"></a>
                    <img src="" class="pt_img" style="display: none;">
                  </div>
                  <div class="swiper-slide" style="height: 504px;">
                    <img class="reset-ani ws-qw-page-fill animation-fadeinright" :src="imgUrl+'picture/p4.png'" style="">
                    <a class="pt_switch" style="left: 4.875%;top: 59.436508%" name="4_7"></a>
                    <a class="pt_switch" style="left: 33.75%;top: 52.182539682539683%" name="4_1"></a>
                    <a class="pt_switch" style="left: 41.875%;top: 60.515873015873016%" name="4_4"></a>
                    <a class="pt_switch" style="left: 38.75%;top: 65.079365079365079%" name="4_3"></a>
                    <a class="pt_switch" style="left: 58.4375%;top: 65.674603174603175%" name="4_2"></a>
                    <a class="pt_switch" style="left: 17.5%;top: 49.404761904761905%" name="4_6"></a>
                    <a class="pt_switch" style="left: 19.625%;top: 60.515873015873016%" name="4_5"></a>
                    <img src="" class="pt_img" style="display: none;">
                  </div>
                  <div class="swiper-slide" style="height: 504px;">
                    <img class="reset-ani ws-qw-page-fill animation-fadeinright" :src="imgUrl+'picture/p5.png'" style="">
                    <!-- <a class="pt_switch" style="left: 16.8125%;top: 65.277778%" name="5_2"></a> -->
                    <a class="pt_switch" style="left: 77.875%;top: 56.422222%;" name="5_4"></a>
                    <a class="pt_switch" style="left: 76%;top: 67.342857%" name="5_3"></a>
                    <a class="pt_switch" style="left: 36.8125%;top: 60.452381%;" name="5_1"></a>
                    <a class="pt_switch" style="left: 47.9125%;top: 84.998412698412698%" name="5_6"></a>
                    <a class="pt_switch" style="left: 53.0625%;top: 71.406349206349206%" name="5_8"></a>
                    <a class="pt_switch" style="left: 22.125%;top: 70.603174603174603%" name="5_9"></a>
                    <a class="pt_switch" style="left: 59.125%;top: 64.660317%" name="5_7"></a>
                    <a class="pt_switch" style="left: 65.125%;top: 55.660317%;" name="5_10"></a>
                    <!-- <a class="pt_switch" style="left: 4.8125%;top: 62.277778%;" name="5_5"></a> -->
                    <img src="" class="pt_img" style="display: none;">
                  </div>
                  <div class="swiper-slide" style="height: 504px;">
                    <img class="reset-ani ws-qw-page-fill animation-fadeinright" :src="imgUrl+'picture/p6.png'" style="">
                    <a class="pt_switch" style="left: 23.6875%;top: 63.666667%;" name="6_3"></a>
                    <a class="pt_switch" style="left: 52.5%;top: 63.888888888888889%" name="6_5"></a>
                    <a class="pt_switch" style="left: 77.6875%;top: 84.434921%;" name="6_8"></a>
                    <a class="pt_switch" style="left: 57.5625%;top: 87.698412698412698%;" name="6_9"></a>
                    <a class="pt_switch" style="left: 80.1875%;top: 75.793650793650794%" name="6_7"></a>
                    <a class="pt_switch" style="left: 4.375%;top: 70.634920634920635%" name="6_2"></a>
                    <a class="pt_switch" style="left: 9.6875%;top: 78.174603174603175%" name="6_1"></a>
                    <a class="pt_switch" style="left: 64.25%;top: 65.452381%;" name="6_6"></a>
                    <a class="pt_switch" style="left: 63.625%;top: 69.428571%;" name="6_4"></a>
                    <a class="pt_switch" style="left: 37.625%;top: 60.428571%;" name="6_10"></a>
                    <a class="pt_switch" style="left: 18.625%;top: 83.428571%;" name="6_11"></a>
                    <a class="pt_switch" style="left: 30.625%;top: 87.428571%;" name="6_12"></a>
                    <a class="pt_switch" style="left: 36.625%;top: 69.428571%;" name="6_13"></a>
                    <img src="" class="pt_img" style="display: none;">
                  </div>
                  <div class="swiper-slide" style="height: 504px;">
                    <img class="reset-ani ws-qw-page-fill animation-fadeinright" :src="imgUrl+'picture/p7.png'" style="">
                    <a class="pt_switch" style="left: 26.875%;top: 63.69047619047619%" name="7_4"></a>
                    <a class="pt_switch" style="left: 48.625%;top: 74.603174603174603%" name="7_1"></a>
                    <a class="pt_switch" style="left: 60.5%;top: 68.849206349206349%" name="7_3"></a>
                    <a class="pt_switch" style="left: 77.4375%;top: 66.071428571428571%" name="7_2"></a>
                    <a class="pt_switch action" style="left: 35.4375%;top: 71.071429%;" name="7_5"></a>
                    <img src="" class="pt_img" style="display: none;">
                  </div>
                  <div class="swiper-slide" style="height: 504px;">
                    <img class="reset-ani ws-qw-page-fill animation-fadeinright" :src="imgUrl+'picture/p8.png'" style="">
                    <a class="pt_switch" style="left: 13.3125%;top: 65.476190476190476%" name="8_2"></a>
                    <a class="pt_switch" style="left: 36.5625%;top: 66.165079365079365%" name="8_3"></a>
                    <a class="pt_switch" style="left: 67.5625%;top: 71.117460317460317%" name="8_6"></a>
                    <a class="pt_switch" style="left: 55.625%;top: 64.96031746031746%" name="8_5"></a>
                    <a class="pt_switch" style="left: 55.875%;top: 74.873015873015873%" name="8_4"></a>
                    <a class="pt_switch" style="left: 64.3125%;top: 55.952380952380952%" name="8_7"></a>
                    <a class="pt_switch" style="left: 28.4375%;top: 57.803175%;" name="8_1"></a>
                    <img src="" class="pt_img" style="display: none;">
                  </div>
                  <div class="swiper-slide" style="height: 504px;">
                    <img class="reset-ani ws-qw-page-fill animation-fadeinright" :src="imgUrl+'picture/p9.png'" style="">
                    <a class="pt_switch" style="left: 26.875%;top: 58.333333333333333%" name="9_1"></a>
                    <img src="" class="pt_img" style="display: none;">
                  </div>
                </div>
                <div class="page-secondmenuV page4-menu">
                  <img class="action" :src="imgUrl+'picture/btn1_h.png'"></img>
                  <img :src="imgUrl+'picture/btn2.png'"></img>
                  <img :src="imgUrl+'picture/btn3.png'"></img>
                  <img :src="imgUrl+'picture/btn4.png'"></img>
                  <img :src="imgUrl+'picture/btn5.png'"></img>
                  <img :src="imgUrl+'picture/btn6.png'"></img>
                  <img :src="imgUrl+'picture/btn7.png'"></img>
                  <img :src="imgUrl+'picture/btn8.png'"></img>
                  <img :src="imgUrl+'picture/btn9.png'"></img>
                </div>
              </section>

            </div>

          </div>
          <div class="swiper-pagination"></div>
        </section>
      </div>
</template>
<script>
  import Swiper from "../../../static/js/swiper-4.0.5.min";
    export default {
        data() {
            return {
              imgUrl: "./static/"
            }
        },
        methods: {
          initSwiper() {
            let conSwiper = new Swiper(
              ".ws-qw-container",
              {
                direction: 'vertical',
                pagination: {
                  el: '.swiper-pagination',
                  clickable :true,
                },
                on:{
                  slideChange: function(){
                    resetAni();//重置动画
                  }
                }
              });
          }
        },
        mounted() {
         this.$nextTick(()=> {
           this.initSwiper();
         })
        },
        computed: {},
    }
</script>
<style lang="less" scoped>
  @import url("./../../../static/css/quwei.css");
    .advantage {
      height: 100%;
    }
</style>

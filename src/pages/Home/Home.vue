<template>
      <div class="home">
       <!-- <iframe src="http://720yun.gugushuzi.com/tour/6c2be9fdc79d3fe3"
                width="100%" height="100%"
                frameborder="0" scrolling="auto">
        </iframe>-->

        <iframe :src="SpotsUrl"
                width="100%" height="100%"
                frameborder="0" scrolling="auto">
        </iframe>

        <!--全景的切换 白天和夜景-->
        <div class="homeSpotsToggle">
          <ul>
            <li class="spots1" @click="changeSpots(1)"></li>
            <li class="spots2" @click="changeSpots(2)"></li>
          </ul>
        </div>

      </div>
</template>
<script>
    export default {
        data() {
            return {
              SpotsIndex: 1,
              SpotsUrl: "http://720yun.gugushuzi.com/tour/6168daebdcaf6d64"
            }
        },
       props: {
         twoShow: String
       },
        methods: {
          changeSpots(index) {
              if(index === 1) {
                      if(this.SpotsIndex === 1) {
                        return false;
                      } else {
                        this.SpotsIndex = 1;
                        this.SpotsUrl = "http://720yun.gugushuzi.com/tour/6168daebdcaf6d64"
                      }
              } else {
                      if(this.SpotsIndex === 2) {
                        return false;
                      } else {
                        this.SpotsIndex = 2;
                        this.SpotsUrl = "http://720yun.gugushuzi.com/tour/ed7fd214606e5fce"
                      }
              }
          }
        },
        computed: {},

    }
</script>
<style lang="less" scoped>
  .home {
    height: 100%;
    .homeSpotsToggle {
      position: absolute;
      width: 5rem;
      height: 2rem;
      right: 1%;
      top: 5rem;
      ul {
        width: 100%;
        height: 100%;
        display: flex;
       li {
         width: 45%;
         margin-right: 5%;
         height: 100%;
         &.spots1 {
           background: url("../../../static/images/Home/dayf.png") no-repeat;
           background-size: 100% 100%;

         }
         &.spots2 {
           width: 40%;
           height: 90%;
           background: url("../../../static/images/Home/nightf.png") no-repeat;
           background-size: 100% 100%;
         }
       }

      }
    }
  }
</style>

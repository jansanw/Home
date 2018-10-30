<template>
      <div class="home">
        <div class="progress" v-if="isShow">
          <span class="progressSpan">{{progress}}%</span>
          <div class="progressBox">
            <mt-progress :value="progress">
              <!--  <div slot="start">0%</div>
                <div slot="end">100%</div>-->
            </mt-progress>
          </div>
          <span class="progressLoading">加载资源</span>
        </div>
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
              SpotsUrl: "http://720yun.gugushuzi.com/tour/6168daebdcaf6d64",
              progress: 0,
              timer1: null,
              isShow: true
            }
        },
      mounted() {
        this.$nextTick(()=> {
          let iframe = document.querySelector("iframe");
          let that = this;
          this.timer1 = setInterval(()=> {
            this.progress += 15;
            if(this.progress >= 69)  {
              this.progress = 84;
            }
          },500);
          iframe.onload = function(){
            that.progress = 100;
            clearInterval(that.timer1);
            that.isShow = false;
          };
        });
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
                        this.SpotsUrl = "http://720yun.gugushuzi.com//tour/3d226a3df45ebcc6"
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
  .progress {
    text-align: center;
    position: absolute;
    left: 10%;
    width: 80%;
    box-sizing: border-box;
    margin-top: 23rem;
    span {
      display: inline-block;
      &.progressSpan {
        margin-top: .3rem;
        color: #333;
        font-size: 17px;
        font-weight: 400;
      }
      &.progressLoading {
        position: absolute;
        left: 50%;
        top: 87%;
        color: #333;
        font-size: 13px;
        transform: translateX(-50%);
      }
    }
    /*进度条样式修改*/
    .mt-progress-progress {
      background-color: #1f1f1f;
    }
  }
  .progress /deep/ .mt-progress-progress {
    background-color: #1f1f1f;
  }
</style>

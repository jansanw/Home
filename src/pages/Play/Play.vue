<template>
    <div class="play">
      <div class="playContainer">
        <!--laoding测试-->
        <div class="loading" v-show="isShowLoading">
          <div class="progress">
            <span class="progressSpan">{{progress}}%</span>
            <div class="progressBox">
              <mt-progress :value="progress">
              </mt-progress>
            </div>
            <span class="progressLoading">加载资源</span>
          </div>
          <!--加载条广告-->
        <!--  <div class="advan"></div>-->
        </div>
        <!--loading页面下图片-->
        <div class="loadingImg"
             :class="{
                loadingImg1: xlzImgFlag===1,
                loadingImg2: xlzImgFlag===2,
                loadingImg3: xlzImgFlag===3,
                loadingImg4: xlzImgFlag===4,
                loadingImg5: xlzImgFlag===5
              }" v-show="isShowloadingImg">
        </div>
        <keep-alive>
          <iframe :src="xlzUrl"
                  width="100%" height="100%"
                  frameborder="0" scrolling="auto">
          </iframe>
        </keep-alive>

        <!--切换视频按钮-->
        <div class="twoButton">
          <!--<div class="btn1">自动</div>
          <div class="btn2">手动</div>-->
          <mt-button type="primary" size="small" @click="buttonHaddle()">{{buttonTitle}}</mt-button>
        </div>

        <!--视频播放层-->
        <div class="videoBox" v-if="isShowVideo">
          <Video @initisShowVideo="initisShowVideo"></Video>
        </div>
      </div>
    </div>
</template>
<script>
  import {mapState} from "vuex";
  import { Toast } from 'mint-ui';
  import Video from "./Video.vue";
  export default {
    data() {
      return {
        progress: 0,
        xlzUrl: "http://unrealera.gugushuzi.com/test/xlz4/",
        currentCom: "XLZ1",
        xlzImgFlag: 1,
        isShowLoading: true,
        isShowloadingImg: true,
        myToast: null,
        buttonTitle: "自动",
        isShowVideo: false
      }
    },
    mounted() {
      this.$nextTick(()=> {
        this.$store.dispatch("ASSCEGDATA", 1);
        let timer1 = setInterval(()=> {
          if(this.progress>=90) {
            this.progress = 98;
            clearInterval(timer1);
            return false;
          }
          this.progress += 15;
        },1500);
      });
    },
    methods: {
      buttonHaddle () {
        this.isShowVideo = !this.isShowVideo;
        this.buttonTitle === "自动" ? this.buttonTitle = "手动" : this.buttonTitle = "自动";
      },
      initisShowVideo () {
        this.isShowVideo = false;
      }
    },
    computed: {
      ...mapState(['assceFlag']),
    },
    components: {
      Video
    },
    watch:{
      assceFlag(curVal){
        switch(curVal)
        {
          case 0:
            this.xlzUrl = "http://unrealera.gugushuzi.com/test/xlz4/";
            break;
          case 1:
            this.progress = 0;
            this.xlzUrl = "http://unrealera.gugushuzi.com/test/xlz/";
            this.xlzImgFlag = 1;
            this.initisShowVideo(); // 切换隐藏视频
            break;
          case 2:
            this.progress = 0;
            this.xlzUrl = "http://unrealera.gugushuzi.com/test/xlz2/";
            this.xlzImgFlag = 2;
            this.initisShowVideo(); // 切换隐藏视频
            break;
          case 3:
            this.progress = 0;
            this.xlzUrl = "http://unrealera.gugushuzi.com/test/xlz3/";
            this.xlzImgFlag = 3;
            this.initisShowVideo(); // 切换隐藏视频
            break;
          case 4:
            this.progress = 0;
            this.xlzUrl = "http://unrealera.gugushuzi.com/test/xlz4/";
            this.xlzImgFlag = 4;
            this.initisShowVideo(); // 切换隐藏视频
            break;
          case 5:
            this.progress = 0;
            this.xlzUrl = "http://unrealera.gugushuzi.com/test/xlz5/";
            this.xlzImgFlag = 5;
            break;
        }
      },
      xlzUrl() {
        this.isShowLoading = true;
        this.isShowloadingImg = true;
        let iframe = document.querySelector("iframe");
        this.myToast = Toast({
          message: '初始化滑动需要几秒,请您耐心等待....',
          position: 'center',
          duration: 5000
        });
        iframe.onload = function(){
          this.isShowLoading = false;
          this.isShowloadingImg = false;
        };
      }

    },
    /*路由改变时候通过路由守卫让提示框消失*/
    beforeRouteLeave (to, from, next) {
      this.myToast.close();
      next();
    }

  }
</script>
<style lang="less">
  .play {
    height: 100%;
    position: relative;
    .playContainer {
      height: 100%;
    }
  }
  .loading {
    position: absolute;
    width: 100%;
    top: 4rem;
    bottom: 130/30rem;
    color: #000;
    overflow: hidden;
    background: rgba(255,255,255,.35);
    z-index: -1;
    /*进度条*/
    .progressBox {
      width: 74%;
      margin: -.4rem auto 10px;
      /*进度条样式修改*/
      .mt-progress-progress {
        background-color: #1f1f1f;
      }
    }
    .progress {
      margin-top: 19rem;
      text-align: center;
      position: relative;
      span {
        display: inline-block;
        &.progressSpan {
          margin-top: .3rem;
          color: #000;
          font-size: 17px;
          font-weight: 400;
        }
        &.progressLoading {
          position: absolute;
          left: 50%;
          top: 87%;
          color: #000;
          font-size: 13px;
          transform: translateX(-50%);
        }
      }
      /*进度条样式修改*/
    }
    /*进度条下面的广告*/
    .advan {
      width: 10rem;
      height: 5rem;
      margin: 2rem auto;
      background: url("../../../static/images/Home/advan.jpg") no-repeat;
      background-size: 100% 100%;
    }
  }
  .loadingImg {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -2;
    &.loadingImg1 {
      background: url("../../../static/images/Play/xlz1.jpg") no-repeat;
      background-size: 100% 100%;
    }
    &.loadingImg2 {
      background: url("../../../static/images/Play/xlz2.jpg") no-repeat;
      background-size: 100% 100%;
    }
    &.loadingImg3 {
      background: url("../../../static/images/Play/xlz3.jpg") no-repeat;
      background-size: 100% 100%;
    }
    &.loadingImg4 {
      background: url("../../../static/images/Play/xlz4.jpg") no-repeat;
      background-size: 100% 100%;
    }
    &.loadingImg5 {
      background: url("../../../static/images/Play/xlz5.jpg") no-repeat;
      background-size: 100% 100%;
    }
  }
  /*切换视频按钮*/
  .twoButton {
    position: absolute;
    width: 55px;
    right: 0;
    top: 9%;
    z-index: 999;
    display: flex;
  }
  .btn1, .btn2 {
    width: 60px;
    color: #fff;
    height: 25px;
    line-height: 25px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 10px;
  }
  .btn2 {
    margin-left: 30px;
  }

  /*视频盒子*/
  .videoBox {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 88;
    width: 100%;
    height: 100%;
  }
</style>

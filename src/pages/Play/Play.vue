<template>
    <div class="play">
      <div class="playContainer">
        <!--laoding测试-->
        <div class="loading">
          <div class="progress">
            <span class="progressSpan">{{progress}}%</span>
            <div class="progressBox">
              <mt-progress :value="progress">
              </mt-progress>
            </div>
            <span class="progressLoading">加载资源</span>
          </div>
          <!--加载条广告-->
          <div class="advan"></div>
        </div>

       <!-- <component :is="currentCom" ref="xlz"></component>-->
        <keep-alive>
          <iframe :src="xlzUrl"
                  width="100%" height="100%"
                  frameborder="0" scrolling="auto">
          </iframe>
        </keep-alive>
      </div>
    </div>
</template>
<script>
  import {mapState} from "vuex";
 /* import XLZ1 from "./XLZ/XLZ1.vue";
  import XLZ2 from "./XLZ/XLZ2.vue";
  import XLZ3 from "./XLZ/XLZ3.vue";
  import XLZ4 from "./XLZ/XLZ4.vue";*/
  export default {
    data() {
      return {
        progress: 0,
        xlzUrl: "http://unrealera.gugushuzi.com/xlz/",
        currentCom: "XLZ1",
      }
    },
    mounted() {
      this.$nextTick(()=> {
        let timer1 = setInterval(()=> {
          if(this.progress>=90) {
            this.progress = 98;
           /* clearInterval(timer1);*/
            return false;
          }
          this.progress += 15;
        },150);
      });
    },
    methods: {},
    computed: {
      ...mapState(['assceFlag']),
    },
    components: {
    },
    watch:{
      assceFlag(curVal){
        switch(curVal)
        {
          case 1:
            this.progress = 0;
            this.xlzUrl = "http://unrealera.gugushuzi.com/xlz/";
//            this.currentCom = "XLZ1";
            break;
          case 2:
            this.progress = 0;
            this.xlzUrl = "http://unrealera.gugushuzi.com/xlz2/";
//              this.currentCom = "XLZ2";
            break;
          case 3:
            this.progress = 0;
            this.xlzUrl = "http://unrealera.gugushuzi.com/xlz3/";
//            this.currentCom = "XLZ3";
            break;
          case 4:
            this.progress = 0;
            this.xlzUrl = "http://unrealera.gugushuzi.com/xlz4/";
//            this.currentCom = "XLZ4";
            break;
        }
      },
    }

  }
</script>
<style lang="less">
  .play {
    height: 100%;
    color: red;
    .playContainer {
      height: 100%;
    }

  }
  .loading {
    position: absolute;
    width: 100%;
    top: 4rem;
    bottom: 130/30rem;
    color: #292929;
    overflow: hidden;
    background: #fff;
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
</style>

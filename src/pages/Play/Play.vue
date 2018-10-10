<template>
    <div class="play">
      <div class="playContainer">
        <!--laoding测试-->
        <div class="loading">
          <div class="content">

          </div>

          <div class="loadingBottom">

          </div>

          <div class="progress">
            <span class="progressSpan">{{progress}}%</span>
            <mt-progress :value="progress">
              <!--  <div slot="start">0%</div>
                <div slot="end">100%</div>-->
            </mt-progress>
            <span class="progressLoading">加载资源</span>
          </div>
        </div>
       <!-- <div id="preloader-4">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>-->

        <iframe src="http://unrealera.gugushuzi.com/xlz/"
                width="100%" height="100%"
                frameborder="0" scrolling="auto" id="test">
        </iframe>
      </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        progress: 0
      }
    },
    mounted() {
      this.$nextTick(()=> {
        let timer1 = setInterval(()=> {
          if(this.progress>=90) {
            this.progress = 99;
            clearInterval(this.timer);
            return false;
          }
          this.progress += 15;
        },150)
      });
    },
    methods: {},
    computed: {},

  }
</script>
<style lang="less" scoped>
  .play {
    height: 100%;
    .playContainer {
      height: 100%;
    }
   /*圆圈加载动画*/
      /*  #preloader-4{
      !*position: relative;*!
      position: absolute;
      top: 50%;
      left: 40%;
      z-index: -1;
      transform: translate(-50%,-50%);
    }
    #preloader-4 span{
      position:absolute;
      width:16px;
      height: 16px;
      border-radius: 999px;
      background: #aaa;
      animation: bounce 1s infinite linear;
    }
    #preloader-4 span:nth-child(1){
      left:0;
      animation-delay: 0s;
    }
    #preloader-4 span:nth-child(2){
      left:20px;
      animation-delay: 0.25s;
    }
    #preloader-4 span:nth-child(3){
      left:40px;
      animation-delay: 0.5s;
    }
    #preloader-4 span:nth-child(4){
      left:60px;
      animation-delay: 0.75s;
    }
    #preloader-4 span:nth-child(5){
      left:80px;
      animation-delay: 1.0s;
    }
    @keyframes bounce{
      0%{transform: translateY(0px);opacity: 0.5;}
      50%{transform: translateY(-30px);opacity: 1.0;}
      100%{transform: translateY(0px);opacity: 0.5;}
    }*/

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
    .content {
      width: 290/30rem;
      height: 703/30rem;
      margin: 5rem auto 2rem;
      background: url("../../../static/images/Home/content.jpg") no-repeat;
      background-size: 100% 100%;
    }
    .loadingBottom {
      width: 10rem;
      height: 25px;
      position: absolute;
      left: 50%;
      bottom: 2%;
      transform: translateX(-50%);
      background: url("../../../static/images/Home/bottom.jpg") no-repeat;
      background-size: 100% 100%;
    }
    /*进度条*/
    .progress {
      text-align: center;
      span {
        display: inline-block;
        &.progressSpan {
          margin-top: .3rem;
        }
        &.progressLoading {

        }
      }
      /*进度条样式修改*/
    }
  }
</style>

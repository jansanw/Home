<template>
  <div class="loading">
    <div class="content">

    </div>

    <div class="loadingBottom">

    </div>

    <div class="progress">
      <span class="progressSpan">{{progress}}%</span>
      <div class="progressBox">
        <mt-progress :value="progress">
          <!--  <div slot="start">0%</div>
            <div slot="end">100%</div>-->
        </mt-progress>
      </div>
      <span class="progressLoading">加载资源</span>
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
           this.progress = 100;
           clearInterval(timer1);
           this.$router.push("/home");
           this.progress = 0;
           return false;
         }
         this.progress += 15;
       },150)
      });

    },
    methods: {},
    computed: {},
    components: {
    }

  }
</script>
<style lang="less">
  .loading {
    color: #292929;
    height: 100%;
    overflow: hidden;
    background: #fff;
    .content {
      width: 290/30rem;
      height: 703/30rem;
      margin: 11rem auto 2rem;
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
    .progressBox {
      width: 74%;
      margin: -.4rem auto 10px;
    }
    .progress {
      text-align: center;
      position: relative;
      margin-top:  -1rem;
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
  }
</style>

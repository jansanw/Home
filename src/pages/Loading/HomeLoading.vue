<template>
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
</template>
<script>
  export default {
    data() {
      return {
        timer1: null,
        progress: 0

      }
    },
    mounted() {
      this.$nextTick(()=> {
       let timer1 = setInterval(()=> {
         if(this.progress>=90) {
           this.progress = 100;
           clearInterval(this.timer);
           this.$router.push("/home");
         }
         this.progress += 15;
       },200)
      });

    },
    methods: {},
    computed: {},
    components: {
    }

  }
</script>
<style lang="less" scoped>
  .loading {
    color: #292929;
    height: 100%;
    overflow: hidden;
    background: #fff;
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

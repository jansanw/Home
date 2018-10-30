<template>
      <div class="advantage">
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
        <iframe src="http://unrealera.gugushuzi.com/test/testdemo1"
                            width="100%" height="100%"
                            frameborder="0" scrolling="auto">
      </iframe>
      </div>
</template>
<script>
    export default {
        data() {
            return {
              progress: 0,
              timer1: null,
              isShow: true
            }
        },
        methods: {
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
        computed: {},
    }
</script>
<style lang="less" scoped>
    .advantage {
      height: 100%;
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

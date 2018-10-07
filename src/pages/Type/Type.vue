<template>
  <div class="type">
        <!--控制户型的大图显示-->
        <div class="showTypeBig" @click = "showTypeBig(true)">
        </div>
        <div class="typeBig" v-show="typeBig" @click.stop = "showTypeBig(false)">
        </div>
        <!--全景样式-->
        <div class="showTotalSpots"  @click = "showTotalSpots(true)">

        </div>
        <div class="totalSpots" v-if="showSpots">
        <iframe src="http://720yun.gugushuzi.com//tour/9b1ee5f3168cb5d4"
              frameborder="no"
              border="0" style="width: 100%;height: 100%;"
              allowfullscreen="true"></iframe>
          <!--关闭按钮 兼 返回-->
          <div class="close" @click.stop = "showTotalSpots(false)">
            <img src="../../../static/images/Type/arrow.png" alt="">
          </div>
    </div>
  </div>
</template>
<script>
  import CanvasKeyFrames from 'canvaskeyframes'
  export default {
    data() {
      return {
        typeBig: false,
        showSpots: false
      }
    },
    mounted() {
    },
    methods: {
      showTypeBig(isShow) {
        isShow === true ? this.typeBig = true : this.typeBig = false;
      },
      showTotalSpots(isShow) {
        isShow === true ? this.showSpots = true : this.showSpots = false;
      }
    },
    computed: {},
    //防止切换路由的时候全景图依旧显示
    watch: {
      '$route': function(to, from) {
        this.showSpots = false;
      }
    }


  }
</script>
<style lang="less" scoped>
  .type {
    height: 100%;
    background: url("../../../static/images/Type/type.jpg") no-repeat;
    background-size: 100% 100%;
  }
  .showTypeBig {
    position: absolute;
    top: 4rem;
    left: 0;
    width: 100%;
    height: 40%;
  }
  .typeBig {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url("../../../static/images/Type/big.png") no-repeat;
    background-size: 100% 100%;
  }
  .showTotalSpots {
    position: absolute;
    width: 25%;
    height: 13%;
    left: 10%;
    top: 64%;
   /* background: pink;*/
  }
  .totalSpots {
    position: absolute;
    width: 100%;
    height: 100%;
    .close {
      position: absolute;
      left: 3%;
      top: 20%;
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
</style>

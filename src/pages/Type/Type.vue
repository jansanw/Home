<template>
  <div class="type">
        <!--全景样式-->
        <img v-lazy="imgUrl" alt="" class="img">
        <div class="showTotalSpots"  @click = "showTotalSpots(true)">
        </div>
        <div class="totalSpots" v-if="showSpots">
          <iframe src="https://720yun.com/t/5a5jvssfsk2?scene_id=19920192"
                  frameborder="no" border="0"
                  style="width: 100%;height: 100%;"></iframe>
          <!--关闭按钮 兼 返回-->
          <div class="close" @click.stop = "showTotalSpots(false)">
            <img src="../../../static/images/Type/arrow.png" alt="">
          </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        typeBig: false,
        showSpots: false,
        imgUrl: "./static/images/Type/type.jpg"
      }
    },
    mounted() {
    },
    methods: {
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
    /*background: url("../../../static/images/Type/type.jpg") no-repeat;
    background-size: 100% 100%;*/
    background: #ccc;
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }
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
    background: url("../../../static/images/Type/huxing.jpg") no-repeat;
    background-size: 100% 100%;
  }
  .showTotalSpots {
    position: absolute;
    width: 100%;
    top: 4rem;
    bottom: 130/30rem;
  }
  .totalSpots {
    position: absolute;
    width: 100%;
    height: 100%;
    .close {
      position: absolute;
      left: 3%;
      top: 10%;
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

<template>
  <div class="type">
        <!--全景样式-->
        <img v-lazy="imgUrl" alt="" class="img">
        <!--点击进去详情页的按钮-->
        <div class="showTotalSpots1"  @click = "showTotalSpots(true)" v-if="!showSpots">
        </div>
        <div class="showTotalSpots2"  @click = "showTotalSpots(true)" v-if="!showSpots">
        </div>
        <div class="showTotalSpots3"  @click = "showTotalSpots(true)" v-if="!showSpots">
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
  .showTotalSpots1,  .showTotalSpots2,  .showTotalSpots3
  {
    position: absolute;
    width: 18%;
    height: 4%;
    z-index: 2;
  }
  .showTotalSpots1 {
    left: 11.2%;
    top: 59.9%;
  }
  .showTotalSpots2 {
    left: 44.2%;
    top: 56.4%;
  }
  .showTotalSpots3 {
    left: 73.2%;
    top: 59.9%;
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

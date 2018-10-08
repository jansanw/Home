<template>
    <div class="more">
          <!--注意层级问题,不然会导致一些东西不能正常显示 z-indent设置大一点-->
          <!--动态组件-->
        <component :is="currentCom"></component>
    </div>
</template>
<script>
  /*视图中的几个动态小组件*/
  import book from "./Children/Book.vue";  // 电子楼书
  import Count from "./Children/Count.vue";  // 计算器
  import Copyright from "./Children/Copyright.vue"; //版权声明
  import FreeDeclare from "./Children/FreeDeclare.vue"; //免费声明
  import Guide from "./Children/Guide.vue";   //导航

  import  Swiper from "../../../static/js/swiper-4.0.5.min";
  import {mapState} from "vuex";
    export default {
        data() {
            return {
              currentCom: "book"
            }
        },
      mounted() {
        this.$nextTick(()=> {
          let swiper = new Swiper('.swiper-container', {
            loop: true
          });
        })
      },
        methods: {},
        computed: {
          ...mapState(['moreFlag']),
        },
        components: {
          book,
          Count,
          Copyright,
          FreeDeclare,
          Guide
        },
      watch:{
        moreFlag(curVal){
          this.currentCom = curVal;
        },
      }
    }
</script>
<style lang="less" scoped>
  .more {
    height: 100%;
    color: red;
    .swiper-container {
      height: 100%;
      .slide1 {
        background: url("../../../static/images/More/more1.png") no-repeat;
      }
      .slide2 {
        background: url("../../../static/images/More/more2.jpg") no-repeat;
      }
      .slide3 {
        background: url("../../../static/images/More/more3.jpg") no-repeat;
      }
      .slide4 {
        background: url("../../../static/images/More/more4.jpg") no-repeat;
      }
      .slide5 {
        background: url("../../../static/images/More/more5.jpg") no-repeat;
      }
      .slide6 {
        background: url("../../../static/images/More/more6.jpg") no-repeat;
      }
      .slide7 {
        background: url("../../../static/images/More/more7.jpg") no-repeat;
      }
      .slide8 {
        background: url("../../../static/images/More/more8.jpg") no-repeat;
      }
      .slide9 {
        background: url("../../../static/images/More/more9.jpg") no-repeat;
      }
      .myslide {
        height: 100%;
        background-size: 100% 100%;
      }

    }
  }
</style>

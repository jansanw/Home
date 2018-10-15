<template>
      <div class="xlz1">
        <div id='mySpriteSpin'></div>
      </div>
</template>
<script>
  let SpriteSpin = require("spritespin");
  export default {
    data() {
      return {}
    },
    mounted() {
      this.$nextTick(()=> {
        this.initS();
      })
    },
    methods: {
      initS() {
        $(function() {
          $('#mySpriteSpin').spritespin({
            // generate an array of image urls.
            // this is a helper function that takes a {frame} placeholder
            //../../../../static/img1
            source: SpriteSpin.sourceArray('./static/img1/jg1_{frame}.jpg', {
              // this ramge of numbers is interpolated into the {frame} placeholder
              frame: [0,134],
              responsive: true,
              // the frame placeholder will be padded with leading '0' up to the number of 'digits'
              // 下面的是在frame位置补零 比如2 就是 0018 3 > 00018
              width: 375,
              height: 520,
              digits: 3,
            }),
            animate:false,
            loop: false,

            // reverse interaction direction
            sense: -1
          });
        })
      }
    },
    computed: {

    },

  }
</script>
<style lang="less" scoped>
  .xlz1 {
    height: 100%;
    #mySpriteSpin {
      height: 100% !important;
    }
  }
</style>

<template>
  <div class="xlz2">
    <div id='mySpriteSpin2'></div>
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
          $('#mySpriteSpin2').spritespin({
            // generate an array of image urls.
            // this is a helper function that takes a {frame} placeholder
            source: SpriteSpin.sourceArray('./static/img2/jg2_{frame}.jpg', {
              // this ramge of numbers is interpolated into the {frame} placeholder
              frame: [0,157],
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
    computed: {},

  }
</script>
<style lang="less" scoped>
  .xlz2 {
    height: 100%;
    #mySpriteSpin2 {
      height: 100% !important;
    }
  }
</style>

<template>
    <div class="spots">
      <img v-lazy="imgUrl" alt="" class="img">
    </div>
</template>
<script>
    export default {
        data() {
            return {
              imgUrl: "./static/images/Spots/spots.jpg"
            }
        },
        methods: {},
        computed: {},

    }
</script>
<style lang="less" scoped>
  .spots {
    height: 100%;
    box-sizing: border-box;
    background: #000;
    position: relative;
    img {
      width: 100%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
</style>

<template>
    <div class="spots">
      <img v-lazy="imgUrl" alt="" class="img">
    </div>
</template>
<script>
    export default {
        data() {
            return {
//              imgUrl: "../static/images/Spots/spots.jpg",
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
    background: #ccc;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>

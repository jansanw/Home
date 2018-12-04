<template>
      <div class="copyright">
        <img v-lazy="imgUrl" alt="" class="img">
      </div>
</template>
<script>
    export default {
        data() {
            return {
              imgUrl: "./static/images/More/copyright_02.jpg"
            }
        },
        methods: {},
        computed: {},

    }
</script>
<style lang="less" scoped>
  .copyright {
    position: absolute;
    width: 100%;
    top: 4rem;
    bottom: 130/30rem;
    overflow: scroll;
    img {
      width: 100%;
    }
  }
</style>

<template>
    <div class="count">
        <div class="countBox">
          <iframe src="http://webcase.51hitech.com/source/gxjpnunjniwopbc6/calc.html"
                  width="100%" height="100%"
                  frameborder="0" scrolling="auto">
          </iframe>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        methods: {},
        computed: {},
    }
</script>
<style lang="less" scoped>
  .count {
    position: absolute;
    width: 100%;
    top: 4rem;
    bottom: 130/30rem;
    overflow: scroll;
    .countBox {
      height: 120%;
    }
  }
</style>

<template>
  <div class="loading">
    <test></test>
  </div>
</template>
<script>
  import test from "./test.vue";
  export default {
    data() {
      return {}
    },
    mounted() {
      this.$nextTick(()=> {
        setTimeout(()=> {
          this.$router.push("/home");
        },1500)
      });
    },
    methods: {},
    computed: {},
    components: {
      test
    }

  }
</script>
<style lang="less" scoped>
  .loading {
    height: 100%;
    background:  url("../../../static/images/Home/home_loading.jpg") no-repeat;
    background-size: 100% 100%;
  }
</style>

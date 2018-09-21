<template>
  <div class="type">
  <!--  <div id="viewer2">

    </div>-->
  </div>
</template>
<script>
  import PhotoSphereViewer from "photo-sphere-viewer";
  export default {
    data() {
      return {}
    },
    mounted() {
      /*this.$nextTick(()=> {
        let viewer = new PhotoSphereViewer({
          container: 'viewer2',
          panorama: '../../../static/Type/test1.jpg',
          time_anim: false,
          navbar: true,
          size: {
            width: '100%',
            height: '100%'
          },
        });
      })*/
    },
    methods: {},
    computed: {},

  }
</script>
<style lang="less" scoped>
  @import url("./../../../static/css/photo-sphere-viewer.min.css");
  .type {
    height: 100%;
    background: url("../../../static/images/Type/type.jpg") no-repeat;
    background-size: 100% 100%;
  }
</style>

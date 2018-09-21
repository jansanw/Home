<template>
    <div class="play">
      <div id="viewer1">

      </div>
    </div>
</template>
<script>
  import PhotoSphereViewer from "photo-sphere-viewer";
  export default {
    data() {
      return {}
    },
    mounted() {
       this.$nextTick(()=> {
         let viewer = new PhotoSphereViewer({
           container: 'viewer1',
           panorama: '../../../static/test.jpg',
           time_anim: false,
           navbar: true,
           size: {
             width: '100%',
             height: '100%'
           },
         });
       })
    },
    methods: {},
    computed: {},

  }
</script>
<style lang="less" scoped>
  @import url("./../../../static/css/photo-sphere-viewer.min.css");
  .play {
    height: 100%;
  }
</style>

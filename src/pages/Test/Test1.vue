<template>
    <div class="test1">
      <div id="viewer">

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
              container: 'viewer',
              /*panorama: 'http://www.360pano.eu/pano/0400/0400.jpg',*/
              panorama: 'path/to/panorama.jpg',
              time_anim: false,
              navbar: true,
              size: {
                width: '100%',
                height: '400px'
              },
            });
          })
        },
        methods: {
          initArray() {

          }
        },
        computed: {},

    }
</script>
<style lang="less" scoped>
  @import url("./../../../static/css/photo-sphere-viewer.min.css");
  .test1, #viewer {
    height: 100%;
  }
</style>

<template>
    <div class="test1">
      <!--<div id="viewer">

      </div>-->
      <iframe src="http://unrealera.gugushuzi.com/test"
              width="100%" height="100%"
              frameborder="0" scrolling="auto">
      </iframe>

    </div>
</template>
<script>
    import PhotoSphereViewer from "photo-sphere-viewer";
    export default {
        data() {
            return {}
        },
        mounted() {
         /* this.$nextTick(()=> {
            let viewer = new PhotoSphereViewer({
              container: 'viewer',
              panorama: '../../../static/test.jpg',
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
  .test1, #viewer {
    height: 100%;
  }
</style>

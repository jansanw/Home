<template>
    <div class="video">
      <video id="example_video_1"
             class="video-js vjs-default-skin"
             controls preload="auto"
             autoplay
             muted="muted"
             width="100%" height="300px"
             :poster="posterUrl"
             data-setup="{}">
        <source :src="srcUrl" type='video/mp4'/>
      </video>
    </div>
</template>
<script>
  import {mapState} from "vuex";
  import videojs from 'video.js';
  export default {
        data() {
            return {
              posterUrl: './static/images/Play/xlz1.jpg',
              srcUrl: './static/video/spots1.mp4',
              testVideo: null
            }
        },
      mounted () {
        switch(this.assceFlag)
        {
          case 1:
            this.posterUrl = "./static/images/Play/xlz1.jpg";
            this.srcUrl = "./static/video/spots1.mp4";
            break;
          case 2:
            this.posterUrl = "./static/images/Play/xlz2.jpg";
            this.srcUrl = "./static/video/spots2.mp4";
            break;
          case 3:
            this.posterUrl = "./static/images/Play/xlz3.jpg";
            this.srcUrl = "./static/video/spots3.mp4";
            break;
          case 4:
            this.posterUrl = "./static/images/Play/xlz4.jpg";
            this.srcUrl = "./static/video/spots4.mp4";
            break;
        }
        this.$nextTick(() => {
          let _this = this;
          this.testVideo = videojs('example_video_1',{},
            function onPlayerReady() {
              _this.testVideo.on('ended', function() {
                _this.$emit('initisShowVideo');
             /*   _this.$router.go(-1);*/
             /*   _this.$store.dispatch("ASSCEGDATA", this.assceFlag);*/
              });
            }
          );
          this.testVideo.play();
        })
      },
        computed: {
          ...mapState(['assceFlag'])
        },
        methods: {},
        components: {}
    }
</script>

<style lang="less" scoped>
.video {
  height: 100%;
  background: #000;
  position: relative;
  #example_video_1 {
    position: absolute;
    left: 0;
    top: 20%;
  }
  /deep/ .video-js {
    width: 100%;
    height: 300px;
  }
}

</style>

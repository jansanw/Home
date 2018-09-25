<template>
    <div class="play">
      <div class="playContainer">
        <!--laoding测试-->
        <div id="preloader-4">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <iframe src="http://unrealera.gugushuzi.com/xlz/"
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
    mounted() {

    },
    methods: {},
    computed: {},

  }
</script>
<style lang="less" scoped>
  .play {
    height: 100%;
    .playContainer {
      height: 100%;
    }

    #preloader-4{
      /*position: relative;*/
      position: absolute;
      top: 50%;
      left: 40%;
      z-index: -1;
      transform: translate(-50%,-50%);
    }
    #preloader-4 span{
      position:absolute;
      width:16px;
      height: 16px;
      border-radius: 999px;
      background: #aaa;
      animation: bounce 1s infinite linear;
    }
    #preloader-4 span:nth-child(1){
      left:0;
      animation-delay: 0s;
    }
    #preloader-4 span:nth-child(2){
      left:20px;
      animation-delay: 0.25s;
    }
    #preloader-4 span:nth-child(3){
      left:40px;
      animation-delay: 0.5s;
    }
    #preloader-4 span:nth-child(4){
      left:60px;
      animation-delay: 0.75s;
    }
    #preloader-4 span:nth-child(5){
      left:80px;
      animation-delay: 1.0s;
    }
    @keyframes bounce{
      0%{transform: translateY(0px);opacity: 0.5;}
      50%{transform: translateY(-30px);opacity: 1.0;}
      100%{transform: translateY(0px);opacity: 0.5;}
    }

  }
</style>

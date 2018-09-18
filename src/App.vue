<template>
  <div id="app">
    <div class="topGuide" v-show="$route.meta.showFooter">
        <div class="topGuideLeft">
          <div class="person">
          </div>
        </div>
        <div class="topGuideCenter">
          <p>李张伟</p>
          <p>18437922681</p>
        </div>
        <div class="topGuideRight" >
              <ul>
                <li>
                  <div class="topIcon1"></div>
                </li>
                <li>
                  <div class="topIcon2"></div>
                </li>
                <li>
                  <div class="topIcon3"></div>
                </li>
              </ul>
        </div>
    </div>
    <router-view/>

    <div class="footerNav" v-show="$route.meta.showFooter">
          <ul class="footerNavItem">
            <router-link to="/home" tag="li">
              <span :class="{spanIcon1: !isActive[0],spanIcon11: isActive[0]  }"></span>
              <p>全景鸟瞰</p>
            </router-link>

            <router-link to="/spots" tag="li">
              <span class="spanIcon2"></span>
              <p>实景720°</p>
            </router-link>

            <router-link to="/play" tag="li">
              <span class="spanIcon3"></span>
              <p>景观漫游</p>
            </router-link>

            <router-link to="/type" tag="li">
              <span class="spanIcon4"></span>
              <p>户型鉴赏</p>
            </router-link>

            <router-link to="/advantage" tag="li">
              <span class="spanIcon5"></span>
              <p>电子楼书</p>
            </router-link>

            <router-link to="/more" tag="li">
              <span class="spanIcon6"></span>
              <p>更多</p>
            </router-link>
          </ul>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
            isActive: [true,false,false,false,false,false]
      }
    },
  watch: {
    '$route' (to, from) {
      let path = this.$route.path;
      if(path === "/home") {
        console.log("home");
      } else if(path === "/spots") {
        console.log("spots");
      } else if(path === "/play") {
        console.log("play");
      } else if(path === "/advantage") {
        console.log("advantage");
      } else if(path === "/type") {
        console.log("type");
      } else if(path === "/more") {
        console.log("more");
      }
    }

  },
  computed: {

  }
}
</script>

<style lang="less">
html, body {
  height: 100%;
}
#app {
  height: 100%;
  .topGuide {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 4rem;
    display: flex;
    background: rgba(0,0,0,.3);
    .topGuideLeft, .topGuideCenter, .topGuideRight {
      height: 100%;
    }
    .topGuideLeft {
      flex: 1;
      .person {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        background: url("../static/images/Home/person.png") no-repeat;
        background-size: 100% 100%;
      }
    }
    .topGuideCenter {
      flex: 2;
      box-sizing: border-box;
      padding-left: 1rem;
      p {
        margin-top: .1rem;
      }
    }
    .topGuideRight {
      flex: 2.5;
      display: flex;
      align-items: center;
      ul {
        width: 100%;
        height: 60%;
        display: flex;
        li  {
          flex: 1;
          height: 100%;
          border-left: 1px solid #ccc;
          display: flex;
          align-items: center;
          justify-content: center;
          .topIcon1 {
            background: url("../static/images/Home/top1.png") no-repeat;
          }
          .topIcon2 {
            background: url("../static/images/Home/top2.png") no-repeat;
          }
          .topIcon3 {
            background: url("../static/images/Home/top3.png") no-repeat;
          }
          .topIcon1, .topIcon2, .topIcon3 {
            width: 70%;
            height: 90%;
            background-size: 100% 100%;
          }
        }
      }
    }
  }
  .footerNav {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 145/30rem;
    background: rgba(0,0,0,.3);

    .footerNavItem {
      display: flex;
      li {
        flex: 1;
        font-size: .4rem;
        text-align: center;
        box-sizing: border-box;
        padding-top: .5rem;
        span {
          display: inline-block;
          width: 2rem;
          height: 2rem;
          &.spanIcon1 {
            background: url("../static/images/FooterNav/icon1.png") no-repeat;
            background-size: 100% 100%;
          }
          &.spanIcon11 {
            background: url("../static/images/FooterNav/icon11.png") no-repeat;
            background-size: 100% 100%;
          }
          &.spanIcon2 {
            background: url("../static/images/FooterNav/icon2.png") no-repeat;
            background-size: 100% 100%;
          }
          &.spanIcon22 {
            background: url("../static/images/FooterNav/icon22.png") no-repeat;
            background-size: 100% 100%;
          }
          &.spanIcon3 {
            background: url("../static/images/FooterNav/icon3.png") no-repeat;
            background-size: 100% 100%;
          }
          &.spanIcon33 {
            background: url("../static/images/FooterNav/icon33.png") no-repeat;
            background-size: 100% 100%;
          }
          &.spanIcon4 {
            background: url("../static/images/FooterNav/icon4.png") no-repeat;
            background-size: 100% 100%;
          }
          &.spanIcon44 {
            background: url("../static/images/FooterNav/icon44.png") no-repeat;
            background-size: 100% 100%;
          }
          &.spanIcon5 {
            background: url("../static/images/FooterNav/icon5.png") no-repeat;
            background-size: 100% 100%;
          }
          &.spanIcon55 {
            background: url("../static/images/FooterNav/icon55.png") no-repeat;
            background-size: 100% 100%;
          }
          &.spanIcon6 {
            background: url("../static/images/FooterNav/icon6.png") no-repeat;
            background-size: 100% 100%;
          }
        }
        p {
          padding-top: 10/30rem;
          color: #fff;
        }
      }
    }
  }
}
</style>

<template>
  <div id="app">
    <!--头部导航条-->
    <div class="topGuide" v-show="$route.meta.showFooter">
        <div class="topGuideLeft">
          <div class="person">
          </div>
        </div>
        <div class="topGuideCenter">
          <p>椰林阳光</p>
          <p>18437922681</p>
        </div>
        <div class="topGuideRight" >
              <ul>
                <li @click="changePhone">
                  <div class="topIcon1"></div>
                </li>
                <li @click="changeShowCode()">
                  <div class="topIcon2"></div>
                </li>
                <li>
                  <div class="topIcon3">
                    <!--发送短信-->
                    <a href="sms:18437922681"></a>
                  </div>
                </li>
              </ul>
        </div>
    </div>

    <!--顶部对应的电话部分-->
    <div class="phone">
      <mt-actionsheet
        :actions="actions"
        v-model="sheetVisible">
      </mt-actionsheet>
    </div>
    <!--微信二维码部分-->
    <div class="code" v-show="showCode" @click="changeShowCode()">
          <div class="codeImg">
          </div>
    </div>
    <!--视图层-->
    <router-view/>
    <!--音频播放占位符-->

    <!--右侧导航条-->
    <div class="rightNav">
      <ul v-if="showRightNav">
        <li @click="changeRight()">1</li>
      </ul>
      <ul v-else>
        <li @click="changeRight()">1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>

    <!--&lt;!&ndash;部分的二级菜单子视图&ndash;&gt;
    <transition name="fadeIn" v-if="isShowChild2">
      <div class="spotsChildren">
        <ul>
          <li>
            <div class="task">入口景点01</div>
          </li>
          <li>
            <div class="task">入口景点02</div>
          </li>
          <li>
            <div class="task">入口景点03</div>
          </li>
          <li>
            <div class="task">入口景点04</div>
          </li>
        </ul>
      </div>
    </transition>
    &lt;!&ndash;部分的二级菜单子视图对应显示的上面区域&ndash;&gt;
    <div class="spotsChildrenTop" v-if="isShowChild2">
    </div>-->

    <!--底部导航条-->
    <div class="footerNav" v-show="$route.meta.showFooter">
          <ul class="footerNavItem">
            <router-link to="/home" tag="li" @click.native="changeShow(0)">
              <span :class="{spanIcon1: !isActive[0],spanIcon11: isActive[0]}"></span>
              <p>全景鸟瞰</p>
            </router-link>

            <router-link to="/spots" tag="li" @click.native="changeShow(1)">
              <span :class="{spanIcon2: !isActive[1],spanIcon22: isActive[1]}"></span>
              <p>实景720°</p>
            </router-link>

            <router-link to="/play" tag="li" @click.native="changeShow(2)">
              <span :class="{spanIcon3: !isActive[2],spanIcon33: isActive[2]}"></span>
              <p>景观漫游</p>
            </router-link>

            <router-link to="/type" tag="li" @click.native="changeShow(3)">
              <span :class="{spanIcon4: !isActive[3],spanIcon44: isActive[3]}"></span>
              <p>户型鉴赏</p>
            </router-link>

            <router-link to="/advantage" tag="li" @click.native="changeShow(4)">
              <span :class="{spanIcon5: !isActive[4],spanIcon55: isActive[4]}"></span>
              <p>电子楼书</p>
            </router-link>

            <router-link to="/more" tag="li" @click.native="changeShow(5)">
              <span  class="last spanIcon6"></span>
              <p>更多</p>
            </router-link>
          </ul>
    </div>

   <!--二级小路由页面-->
    <transition name="fadeIn" v-if="isShowChild1">
      <div class="homeChildren">
        <a href="#">选项一</a>
        <a href="#">选项二</a>
      </div>
    </transition>

   <!-- <transition name="fadeIn" v-if="isShowChild2">
      <div class="playChildren">
        <a href="#">选项一</a>
        <a href="#">选项二</a>
        <a href="#">选项二</a>
      </div>
    </transition>-->
  </div>
</template>

<script>
export default {
    data() {
      return {
            /*控制底部的导航是否激活状态*/
            isActive: [true,false,false,false,false,false],
            /*部分二级子菜单的显示和隐藏*/
            isShowChild1: false,
           /* isShowChild2: false,*/
            /*右侧按钮条的显示和隐藏*/
            showRightNav: true,
            /*电话提示框*/
            actions: [{name: "呼叫", method: this.callPhone},{name: "发送短信"},],
            sheetVisible: false,
            /*微信二维码的显示*/
            showCode: false
      }
    },
  methods: {
    changeShow(index) {
      if(index === 0) {
        this.isShowChild1 = !this.isShowChild1;
      }/* else if(index ===3 ) {
        this.isShowChild2 = !this.isShowChild2;
      }*/ else {
        this.initShow();
      }
    },
    initShow() {
      this.isShowChild1 = false;
      this.isShowChild2 = false;
    },
    initisActive(index) {
      for(let i =0; i < this.isActive.length;i++) {
        if(i===index) {
          this.isActive.splice(i,1,true);
        } else {
          this.isActive.splice(i,1,false);
        }
      }
    },
    changeRight() {
      this.showRightNav = !this.showRightNav;
    },
    changePhone() {
      this.sheetVisible = true
    },
    /*拨打号码*/
    callPhone() {
      window.location.href = "tel:18437922681";
    },
    /*二维码的显示和隐藏*/
    changeShowCode() {
      this.showCode = !this.showCode;
    },
  },
  watch: {
    '$route' (to, from) {
      let path = this.$route.path;
      if(path === "/home") {
        this.initShow();
        this.initisActive(0);
      } else if(path === "/spots") {
        this.initShow();
        this.initisActive(1);
      } else if(path === "/play") {
        this.initShow();
        this.initisActive(2);
      } else if(path === "/advantage"){
        this.initShow();
        this.initisActive(4);
        /*强制刷新页面,有白顿,待解决*/
        location.reload();
      } else if(path === "/type") {
        this.initShow();
        this.initisActive(3);
      } else if(path === "/more") {
        this.initShow();
        this.initisActive(5);
      }
    }
  },
  computed: {

  }
}
</script>

<style lang="less" scoped>
#app {
  position: relative;
  height: 100%;
  /*顶部导航部分*/
  .topGuide {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 99;
    width: 100%;
    height: 4rem;
    display: flex;
    background: rgba(0,0,0,.3);
    .topGuideLeft, .topGuideCenter, .topGuideRight {
      height: 100%;
    }
    .topGuideLeft {
      flex: .8;
      display: flex;
      align-items: center;
      .person {
        width: 3.5rem;
        height: 3.5rem;
        margin-left: .5rem;
      /*  border-radius: 50%;*/
        background: url("../static/images/Home/person.png") no-repeat;
        background-size: 100% 100%;
      }
    }
    .topGuideCenter {
      margin-top: .2rem;
      flex: 2;
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
            a {
              display: inline-block;
              width: 100%;
              height: 100%;
            }
          }
          .topIcon1, .topIcon2, .topIcon3 {
            width: 50%;
            height: 65%;
            background-size: 100% 100%;
          }
        }
      }
    }
  }

  /*顶部对应的电话等三个图标部分*/
  .phone {
    position: absolute;
    width: 100%;

  }

  /*顶部微信二维码部分*/
  .code {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.45);
    display: flex;
    align-items: center;
    justify-content: center;
    .codeImg {
      width: 50%;
      height: 30%;
      background: url("../static/images/Home/code.png") no-repeat;
      background-size: 100% 100%;
    }
  }
  /*右侧导航条*/
  .rightNav {
    position: absolute;
    width: 50px;
    height: 100px;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    ul {
      li {
        height: 2rem;
        line-height: 2rem;
        text-align: center;
        background: pink;
        margin-bottom: .3rem;
      }
    }
  }
  /*部分的二级菜单子视图*/
  .spotsChildren {
    position: absolute;
    left: 5%;
    top: 75%;
    width: 90%;
    height: 7rem;
    border: 1px solid #000;
    z-index: 3;
    ul {
      height: 100%;
      display: flex;

    /* justify-content: space-around;*/ /*隔相同距离*/
      justify-content: space-between;/*首尾紧贴, 其他隔相同距离*/
      li {
        width: 23%;
        height: 100%;
        background: pink;
        position: relative;
        .task {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 1.5rem;
          font-size: .5rem;
          text-align: center;
          background: rgba(0,0,0,.3);
        }
      }
    }
  }
  /*部分的二级菜单子视图对应的显示上面部分*/
  .spotsChildrenTop {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 45%;
    z-index: 1;
    background: #eff;
  }
  .footerNav {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 145/30rem;
    background: rgba(0,0,0,.3);
    z-index: 999;
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
          width: 1.8rem;
          height: 1.8rem;
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

          &.last {
            height: 1rem;
            margin: .31rem 0 .5rem 0
          }
        }
        p {
          padding-top: 8.5/30rem;
          color: #fff;
        }
      }
    }
  }
  /*二级小路由选择页面*/
  /*路由动画*/
  .fadeIn-enter {
    opacity: 0;
  }
  .fadeIn-enter-active {
    transition: all .3s linear;
    opacity: 1;
  }
  .fadeIn-leave-active {
    transition: all .3s linear;
    opacity: 0;
  }
  .homeChildren,.playChildren {
    position: absolute;
    left: 0;
    bottom: 145/30rem;
    width: 16.7%;
    a {
      display: inline-block;
      width: 100%;
      height: 2rem;
      text-align: center;
      line-height: 2rem;
      background: pink;
      margin-bottom: .2rem;
    }
  }
  .playChildren {
    left: 50%;
  }
}
</style>

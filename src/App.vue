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
          <p>15008278121</p>
        </div>
        <div class="topGuideRight" >
              <ul>
                <li @click="changePhone">
                  <div class="topIcon1"></div>
                </li>
                <li @click="changeShowCode()">
                  <div class="topIcon2">
                    <img src="../static/images/Home/top2.png" alt="">
                  </div>
                </li>
                <li>
                  <div class="topIcon3">
                    <!--发送短信-->
                    <a href="sms:15008278121"></a>
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
            <img src="../static/images/Home/code.png" alt="">
          </div>
    </div>
    <!--视图层 加了缓存和不缓存-->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <!-- 这里不会被keepalive -->
    <router-view v-if="!$route.meta.keepAlive" ></router-view>

    <!--音频播放占位符-->
    <audio src="http://720yun.gugushuzi.com/project/ylyg/BGM.mp3" autoplay controls id="mp3" v-if="isimgRotate">
    </audio>

    <!--底部导航条-->
    <div class="footerNav" v-show="$route.meta.showFooter">
          <ul class="footerNavItem">
            <router-link to="/home" tag="li" @click.native="changeShow(0)">
              <span :class="{spanIcon1: !isActive[0],spanIcon11: isActive[0]}" class="spanMove1"></span>
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
              <span :class="{spanIcon4: !isActive[3],spanIcon44: isActive[3]}" class="spanMove4"></span>
              <p>户型鉴赏</p>
            </router-link>

            <router-link to="/advantage" tag="li" @click.native="changeShow(4)">
              <span :class="{spanIcon5: !isActive[4],spanIcon55: isActive[4]}" class="spanMove5"></span>
              <p>区位优势</p>
            </router-link>

            <router-link to="/more" tag="li" @click.native="changeShow(5)">
              <span  class="last spanIcon6"></span>
              <p>更多</p>
            </router-link>
          </ul>
    </div>

   <!--二级小路由页面-->
    <transition name="fadeIn" >
      <div class="homeChildren" v-if="isShowChild1">
        <a href="#"
           @click = "changeHomeShow(1)"
           :class="{active: homeChildren==='one'}"
        >交通配套</a>
        <a href="#"
           @click = "changeHomeShow(2)"
           :class="{active: homeChildren==='two'}"
        >项目沙盘</a>
      </div>
    </transition>

    <!--更多的二级导航-->
    <div class="moreChildren" v-if="isShowChild2">
            <div class="moreChildrenT">
              <ul>
                <li @click="changeMoreFlag(1)">
                  <span class="moreIcon moreIcon1"></span>
                  <p>电子楼书</p>
                </li>
                <li @click="changeMoreFlag(2)">
                  <span class="moreIcon moreIcon2"></span>
                  <p>计算器</p>
                </li>
                <li @click="changeMoreFlag(3)">
                  <span class="moreIcon moreIcon3"></span>
                  <p>版权声明</p>
                </li>
                <li @click="changeMoreFlag(4)">
                  <span class="moreIcon moreIcon4"></span>
                  <p>免费申明</p>
                </li>
              </ul>
            </div>
            <div class="moreChildrenB">
              <ul>
                <li @click="changeMoreFlag(5)">
                  <span class="moreIcon moreIcon5" :class="{imgRotate: isimgRotate}"></span>
                </li>
                <li @click="changeMoreFlag(6)">
                  <span class="moreIcon moreIcon6"></span>
                </li>
                <li @click="callPhone()">
                  <span class="moreIcon moreIcon7"></span>
                </li>
              </ul>
            </div>
      </div>

    <!--景观漫游的四个入口-->
    <div class="playFour" v-if="isShowChild3">
      <ul>
        <li @click="changeAssceFlag(1)">
            <div class="imgtop imgtop1"></div>
            <div class="imgtopTitle">主入口</div>
        </li>
        <li @click="changeAssceFlag(2)">
          <div class="imgtop imgtop2"></div>
          <div class="imgtopTitle">游泳池</div>
        </li>
        <li @click="changeAssceFlag(3)">
          <div class="imgtop imgtop3"></div>
          <div class="imgtopTitle">休闲区</div>
        </li>
        <li @click="changeAssceFlag(4)">
          <div class="imgtop imgtop4"></div>
          <div class="imgtopTitle">次入口</div>
        </li>

      </ul>
    </div>

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
            isShowChild2: false,
            isShowChild3: false,
            /*二级子菜单的切换*/
            homeChildren: "one",
            /*右侧按钮条的显示和隐藏*/
            showRightNav: true,
            /*电话提示框*/
            actions: [{name: "呼叫", method: this.callPhone},{name: "发送短信"},],
            sheetVisible: false,
            /*微信二维码的显示*/
            showCode: false,
            /*更多组件动态标识*/
            moreFlag: "book",
            /*景观漫游的点击标识*/
            assceFlag: 1,
            isimgRotate: false
      }
    },
  mounted() {
      this.$nextTick(()=> {
        setTimeout(()=> {
          this.isimgRotate = true;
          this.isimgRotate = false;
          this.isimgRotate = true;
          // 处理ios的音频默认不播放
          if(this.isimgRotate) {
            let  u = navigator.userAgent;
            let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
            if(isiOS) {
              let music = document.getElementById("mp3");
              music.play();
            }
          }

        },5000);
      })
  },
  methods: {
    changeShow(index) {

      if(index === 0) {
        this.isShowChild1 = !this.isShowChild1;
      } else if(index === 5 ) {
        this.isShowChild2 = !this.isShowChild2;
      }  else if(index === 2 ) {
        this.isShowChild3 = !this.isShowChild3;
      }
      else {
        /*切换后让子导航隐藏*/
        this.initShow();
      }
    },
    initShow() {
      this.isShowChild1 = false;
      this.isShowChild2 = false;
      this.isShowChild3 = false;
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
    /*控制右侧的导航*/
    changeRight() {
      this.showRightNav = !this.showRightNav;
    },
    changePhone() {
      this.sheetVisible = true
    },
    /*拨打号码*/
    callPhone() {
      window.location.href = "tel:15008278121";
    },
    /*二维码的显示和隐藏*/
    changeShowCode() {
      this.showCode = !this.showCode;
    },
    changeHomeShow(index) {
      index===1? this.homeChildren = "one" : this.homeChildren = "two";
    },
    /*更多页面的点击标识*/
    changeMoreFlag(index) {
      if(index === 5) {
        this.isimgRotate = !this.isimgRotate;
        if(this.isimgRotate) {
          let  u = navigator.userAgent;
          let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
          if(isiOS) {
            let music = document.getElementById("mp3")[0];
            music.play();
          }
        }
        return  false;
      }
        switch(index)
        {
          case 1:
             this.moreFlag = "book";
             break;
          case 2:
              this.moreFlag = "Count";
              break;
          case 3:
              this.moreFlag = "Copyright";
               break;
          case 4:
              this.moreFlag = "FreeDeclare";
              break;
          case 6:
              this.moreFlag = "Guide";
              break;
        }
        this.$store.dispatch("FLAGDATA", this.moreFlag);
        this.isShowChild2 = false;
    },
    /*景观漫游的点击标识*/
    changeAssceFlag(index) {
      switch(index)
      {
        case 1:
          this.assceFlag = 1;
          break;
        case 2:
          this.assceFlag = 2;
          break;
        case 3:
          this.assceFlag = 3;
          break;
        case 4:
          this.assceFlag = 4;
          break;
      }
      this.$store.dispatch("ASSCEGDATA", this.assceFlag);
      this.isShowChild3 = false;
    }

  },
  watch: {
    '$route' (to, from) {
      let path = this.$route.path;
      if(path === "/home") {
        /*此处可以进行优化*/
//        location.reload();
        this.initShow();
        this.initisActive(0);
      } else if(path === "/spots") {
        this.initShow();
        this.initisActive(1);
      } else if(path === "/play") {
        this.isShowChild1 = false;
        this.isShowChild2 = false;
        this.initisActive(2);
      } else if(path === "/advantage"){
        this.initShow();
        this.initisActive(4);
      } else if(path === "/type") {
        this.initShow();
        this.initisActive(3);
      } else if(path === "/more") {
        //不能直接调用  this.initShow(); 不然默认点击不显示子菜单
        this.isShowChild1 = false;
        this.isShowChild3 = false;
        this.initisActive(5);
      }
    }
  },
  computed: {

  }
}
</script>

<style lang="less" scoped>
  audio {
    color: transparent !important;
  }

#app {
  position: relative;
  height: 100%;
  overflow: hidden;
  /*顶部导航部分*/
  .topGuide {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 4rem;
    display: flex;
    z-index: 999;
    background: rgba(0,0,0,.3);
    .topGuideLeft, .topGuideCenter, .topGuideRight {
      height: 100%;
    }
    .topGuideLeft {
      flex: .8;
      display: flex;
      align-items: center;
      .person {
        width: 3rem;
        height: 3rem;
        margin-left: .5rem;
        background: url("../static/images/Home/person.png") no-repeat;
        background-size: 100% 100%;
      }
    }
    .topGuideCenter {
      box-sizing: border-box;
      margin-top: .2rem;
      padding-left: .5rem;
      flex: 2;
      p {
        margin-top: .1rem;
      }
    }
    .topGuideRight {
      box-sizing: border-box;
      padding-left: 7.5rem;
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
           /* background: url("") no-repeat;*/
            img {
              width: 100%;
              height: 100%;
            }
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
            width: 40%;
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
    z-index: 999;
    background: rgba(0,0,0,.45);
    display: flex;
    align-items: center;
    justify-content: center;
    .codeImg {
      width: 50%;
      height: 30%;
      img {
        width: 100%;
        height: 100%;
      }
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
    z-index: 999;
    ul {
      width: 5rem;
      background: rgba(0,0,0, .45);
      li {
        height: 3rem;
        line-height: 3.5rem;
        margin-bottom: .3rem;
        span {
          display: inline-block;
          margin-left: .9rem;
          width: 45%;
          height: 50%;
          &.right1 {
            background: url("../static/images/FooterNav/xuanzhang2.png") no-repeat;
            background-size: 100% 100%;
          }
          &.right11 {
            background: url("../static/images/FooterNav/xuanzhang1.png") no-repeat;
            background-size: 100% 100%;
          }
          &.right2 {
            background: url("../static/images/FooterNav/zidong1.png") no-repeat;
            background-size: 100% 100%;
          }
          &.right3 {
            background: url("../static/images/FooterNav/caozuo1.png") no-repeat;
            background-size: 100% 100%;
          }

        }
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
   /* height: 145/30rem;*/
    height: 130/30rem;
    background: rgba(0,0,0,.6);
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
            width: 1.8rem;
            height: 1.5rem;
            background: url("../static/images/FooterNav/icon1.png") no-repeat;
            background-size: 100% 100%;
          }
          &.spanIcon11 {
            width: 1.8rem;
            height: 1.5rem;
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
            width: 1.6rem;
            height: 1.6rem;
            background: url("../static/images/FooterNav/icon4.png") no-repeat;
            background-size: 100% 100%;
          }
          &.spanIcon44 {
            width: 1.6rem;
            height: 1.6rem;
            background: url("../static/images/FooterNav/icon44.png") no-repeat;
            background-size: 100% 100%;
          }
          &.spanIcon5 {
            width: 1.6rem;
            height: 1.6rem;
            background: url("../static/images/FooterNav/icon5.png") no-repeat;
            background-size: 100% 100%;
          }
          &.spanIcon55 {
            width: 1.6rem;
            height: 1.6rem;
            background: url("../static/images/FooterNav/icon55.png") no-repeat;
            background-size: 100% 100%;
          }
          &.spanIcon6 {
            background: url("../static/images/FooterNav/icon6.png") no-repeat;
            background-size: 100% 100%;
          }

          &.spanMove1 {
            margin-bottom: .3rem;
          }
          &.spanMove4 {
            margin-bottom: .3rem;
          }
          &.spanMove5 {
            margin-bottom: .3rem;
          }

          &.last {
            height: .4rem;
            margin: .8rem 0 .6rem 0
          }
        }
        p {
          padding-top: 8.5/30rem;
          color: #fff;
          font-size: 10px;
        }
      }
    }
  }
  /*二级小路由选择页面*/
  /*路由动画*/
  .fadeOut-enter {
    opacity: 0;
  }
  .fadeOut-enter-active {
    transition: all .5s linear;
    opacity: 1;
  }
  .fadeOut-leave-active {
    transition: all .5s linear;
    opacity: 0;
  }
  /*home的二级导航*/
  .homeChildren{
    position: absolute;
    left: 0;
    bottom: 155/30rem;
    width: 40%;
    height: 2.7rem;
    border-radius: 10px;
    background: rgba(0,0,0,.45);
    a {
      color: #fff;
      text-align: center;
      display: inline-block;
      font-size: 12px;
      line-height: 2.3rem;
      width: 39%;
      margin: 0 .3rem;
      border-bottom: 2px solid transparent;
      &.active {
        border-bottom: 2px solid #fff;
      }
    }
  }
  /*更多的二级导航*/
  .moreChildren {
    position: absolute;
    bottom: 130/30rem;
    left: 0;
    width: 100%;
    height: 10rem;
    z-index: 99;
    border-radius: 30px 30px 0 0;
    box-sizing: border-box;
    padding: 1.5rem  3.2rem;
    background: rgba(0,0,0,.5);
    .moreChildrenT {
      border-bottom: 1px solid #ccc;
    }
    .moreChildrenB {
      margin-top: 1rem;
    }
    ul {
      display: flex;
      li {
        flex: 1;
        text-align: center;
        .moreIcon1 {
          background: url("../static/images/FooterNav/xiadaohang-quweiyoushi1.png") no-repeat;
        }
        .moreIcon2 {
          background: url("../static/images/FooterNav/xiadaohang-jisuanqi.png") no-repeat;
        }
        .moreIcon3 {
          background: url("../static/images/FooterNav/xiadaohang-banquan.png") no-repeat;
        }
        .moreIcon4 {
          background: url("../static/images/FooterNav/xiadaohang-mianze.png") no-repeat;
        }
        .moreIcon5 {
          background: url("../static/images/FooterNav/xiadaohanglan-yinyue.png") no-repeat;
        }
        .moreIcon6 {
          background: url("../static/images/FooterNav/xiadaohanglan-daohang.png") no-repeat;
        }
        .moreIcon7 {
          background: url("../static/images/FooterNav/xiadaohanglan-dianhua.png") no-repeat;
        }
        .moreIcon {
          display: inline-block;
          width: 1.8rem;
          height: 1.8rem;
          background-size: 100% 100%;
        }
        p {
          font-size: 10px;
          line-height:  2.3rem;
        }
      }
    }
  }

  /*景观漫游的四个入口*/
  .playFour {
    position: absolute;
    width: 100%;
    height: 8rem;
    z-index: 88;
    bottom: 140/30rem;
    border-radius: 3% 3% 0 0;
    background: rgba(0,0,0,.45);
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      li {
        flex: 1;
        height: 100%;
        box-sizing: border-box;
        padding-top: .5rem;
        .imgtop {
          width: 80%;
          height: 75%;
          border: 1px solid #000;
          margin: 0 auto;
        }
        .imgtop1 {
          background: url("../static/images/Play/xlz1.jpg") no-repeat;
          background-size: 100% 100%;
        }
        .imgtop2 {
          background: url("../static/images/Play/xlz2.jpg") no-repeat;
          background-size: 100% 100%;
        }
        .imgtop3 {
          background: url("../static/images/Play/xlz3.jpg") no-repeat;
          background-size: 100% 100%;
        }
        .imgtop4 {
          background: url("../static/images/Play/xlz4.jpg") no-repeat;
          background-size: 100% 100%;
        }
        .imgtopTitle {
          text-align: center;
          font-size: 10px;
        }

      }
    }

  }

  /*css3的旋转360动画*/
  @keyframes imgrotate
  {
    0%   {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .imgRotate {
    animation: imgrotate 2s linear infinite;
  }


}
</style>

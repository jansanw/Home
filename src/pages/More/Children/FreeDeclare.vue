<template>
      <div class="free">

      </div>
</template>
<script>
    import md5 from "md5";
    import {getResult} from "../../../api";
     export default {
        data() {
            return {
              sig: ""
            }
        },
      mounted() {
          //this.initIgn();
      },
        methods: {
         /* initIgn() {
             function parseQueryString(url) {
              let reg_url = /^[^\?]+\?([\w\W]+)$/,
                reg_para = /([^&=]+)=([\w\W]*?)(&|$|#)/g,
                arr_url = reg_url.exec(url),
                ret = {};
              if (arr_url && arr_url[1]) {
                let str_para = arr_url[1], result;
                while ((result = reg_para.exec(str_para)) != null) {
                  ret[result[1]] = result[2];
                }
              }
              return ret;
            }
            function objKeySort(obj){
              let sec = "b11f4c25e2a2b0e8a57fe7095c968c47";
              let newkey = Object.keys(obj).sort();
              let newObj = '';
              for(let i = 0;i<newkey.length;i++){
                sec=sec+(newkey[i]+'='+obj[newkey[i]])
              }
              return sec
            }
            let real_url = `http:123.com?app_id=500651439&start_date=2018-10-10&end_date=2018-10-19&idx=pv`;
            this.sig = md5(objKeySort(parseQueryString(real_url)));
          },
          async test() {
            let  data = await  getResult("500651439","2018-10-10","2018-10-19","pv",this.sig);
            console.log(data);
          }*/
        },
        computed: {},

    }
</script>
<style lang="less" scoped>
  .free {
    position: absolute;
    width: 100%;
    top: 4rem;
    bottom: 130/30rem;
    background: url("../../../../static/images/More/freeDeclare_02.jpg") no-repeat;
    background-size: 100% 100%;
    p   {
      width: 100px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 20px;
      color: green;
      margin: 50px auto;
      border: 1px solid #ccc;
    }
  }
</style>

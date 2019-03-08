<template>
    <div class="testcomponents">
          <h1>这是第一个跳转页面</h1>
          <div class="showbox">
              <p>用户当前选择的时间是{{selectTime}}</p>
          </div>
         <van-button type="default" v-on:click="dateShow()">选择日期</van-button>
         <div class="datepicker">
               <van-datetime-picker
                    v-if="dataShow"
                    v-model="currentDate"
                    type="datetime"
                    :min-date="minDate"
                    :max-date="maxDate"
                    v-on:confirm="(value)=>{dateShow(value)}"
                    v-on:cancel="(value)=>{dateShow(value)}"
                />
         </div>
         <div class="testview">
            <button @click="jscopy()">一键复制内容</button>
            <p>时钟{{clocktime}}</p>
            <p>倒计时剩余{{countdown}}</p>
         </div>
         <div class="vuex">
             <h1>vuex测试区域</h1>
             <button @click="inmit()">触发</button>
         </div>
    </div>
</template>
<style lang="scss" scoped>
    @import './test.scss';
</style>
<script>
// https://youzan.github.io/vant/#/zh-CN/area vantui框架库
import Vue from 'vue';
import { Button, Cell, DatetimePicker} from 'vant';
import 'vant/lib/index.css';
// import utils as utils from '../../utils/utils';
import jatool from '../../utils/jatool/jatool.js';
Vue.use(Button);
Vue.use(DatetimePicker);
export default {
    data(){
        return{
            params:'',
            dataShow:false,
            minHour: 10,
            maxHour: 20,
            minDate: new Date(),
            maxDate: new Date(2019, 10, 1),
            currentDate: new Date(),
            selectTime:'',//用户选择的时间
            clocktime:'',
            clock:'',
            countdown:'',
            countdownc:'',
            coount:(new Date().getTime()+30030030303030),
            distance:''
        }      
    },
    mounted(){
        let distance=this.$store;
        this.distance=distance;
        console.log(this.$store)
        //将工具类中的各个函数对象解构出来
        let {jastring,jadate,janumber,jabase,jaarray,jamath} =jatool;
        // console.log(jadate.ja_formatTime(new Date(),'{y}年{M}月{d}日 {h}:{m}:{s} {a}'),'检测工具函数')
        //  console.log(jastring.ja_phonelock(13432895832),'检测工具函数')
        // console.log(janumber.ja_toThousands(1809898108209830,','),'金额每隔3位加逗号')
        // console.log(jabase.ja_idcardidentify(941723199503220019),'检测身份证号码是否合法');
        // console.log(jaarray.ja_arrayunique2([1,2,2,3,4,55,5,5,5,5,5]),'检测数组去重2');
        // console.log(jaarray.ja_arrayfilter('union',[1,2,3,4],[2,3,4,5]),'检测数组并集');
        //   console.log(jaarray.ja_arrayfilter('intersect',[1,2,3,4],[2,3,4,5]),'检测数组交集集');
        // console.log(jamath.ja_randomnum(1000),'检测随机整数');
        // console.log(jamath.ja_randomstr(18),'检测随机长度字符串');
        // console.log(jabase.ja_getUrlParam('/625306/issue?projectId=625306&','projectId'),'获取url参数');
        // console.log(jabase.ja_getQueryObject('https://www.baidu.com/baidu?tn=monline_3_dg&ie=utf-8&wd=12306%E7%81%AB%E8%BD%A6%E7%A5%A8%E7%BD%91%E4%B8%8A%E8%AE%A2%E7%A5%A8%E5%AE%98%E7%BD%91'));
        // console.log(jabase.ja_replaceParamVal('http://guyulei.html?a=1&b=2&c=3&d=4&d=9','a',666));
        // console.log(jadate.ja_formatTime2(new Date().getTime()/1000-193600));
        this.clock=setInterval(()=>{
            this.clocktime=jadate.ja_formatTime(new Date()+1000,'{y}年{M}月{d}日 {h}:{m}:{s} {a}');
        },1000);
        this.countdownc=setInterval(()=>{
            this.coount -=1000;
            this.countdown=jadate.ja_formatTime(this.coount,'{d}天 {h}:{m}:{s}');
        },1000)
        // this.clocktime=jadate.ja_clock(this.clock,'{y}年{M}月{d}日 {h}:{m}:{s}');
    },
    destroyed(){
        clearInterval(this.clock);
        clearInterval(this.countdownc)
    },
    methods:{
        dateShow(aa){
            let {jadate} =jatool;
            if(aa){
                this.selectTime=jadate.ja_formatTime(aa);
            }
            this.dataShow=!this.dataShow;
        },
        jscopy(){
            let {jastring} =jatool;
            jastring.ja_jsCopy('复制后的内容');
        },
        inmit(){
            console.log(this.$store,88888)
            this.$store.commit('increase');
            console.log(this.$store.commit,'检测vuex中state的变化')
        }
    },
}
</script>




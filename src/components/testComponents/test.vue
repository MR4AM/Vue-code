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
         <button @click="jscopy()">一键复制内容</button>
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
        }      
    },
    mounted(){
        //将工具类中的各个函数对象解构出来
        let {jastring,jadate,janumber,jabase} =jatool;
        // console.log(jadate.ja_formatTime(new Date(),'{y}年{m}月{d}日 {h}:{i}:{s}'),'检测工具函数')
        //  console.log(jastring.ja_phonelock(13432895832),'检测工具函数')
        // console.log(janumber.ja_toThousands(1809898108209830,','),'金额每隔3位加逗号')
        console.log(jabase.ja_idcardidentify(941723199503220019),'检测身份证号码是否合法')
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
        }
    },
}
</script>




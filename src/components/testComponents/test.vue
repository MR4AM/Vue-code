<template>
    <div class="testcomponents">
          <h1>这是第一个跳转页面</h1>
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
    </div>
</template>
<style lang="scss" scoped>
    @import './test.scss';
</style>
<script>
import Vue from 'vue';
import { Button, Cell, DatetimePicker} from 'vant';
import 'vant/lib/index.css';
// import utils as utils from '../../utils/utils';
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
            currentDate: new Date()
        }      
    },
    mounted(){
        console.log(Button,'路由参数')
    },
    methods:{
        dateShow(aa){
            console.log(this.formatTime(aa),'检测一下传入参数')
            this.dataShow=!this.dataShow;
        },
        formatTime(time, cFormat) {
            if (arguments.length === 0) return null
            if ((time + '').length === 10) {
                time = +time * 1000
            }
    
            var format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}', date
            if (typeof time === 'object') {
                date = time
            } else {
                date = new Date(time)
            }
    
            var formatObj = {
                y: date.getFullYear(),
                m: date.getMonth() + 1,
                d: date.getDate(),
                h: date.getHours(),
                i: date.getMinutes(),
                s: date.getSeconds(),
                a: date.getDay()
            }
            var time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
                var value = formatObj[key]
                if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
                if (result.length > 0 && value < 10) {
                    value = '0' + value
                }
                return value || 0
            })
            return time_str
        }
    },
}
</script>




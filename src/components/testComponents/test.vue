<template>
    <div class="testcomponents">
          <h1>这是第一个跳转页面</h1>
         <van-button type="default" v-on:click="dateShow()">选择日期</van-button>
         <van-datetime-picker
            v-if="dataShow"
            v-model="currentDate"
            type="datetime"
            :min-date="minDate"
            :max-date="maxDate"
            v-on:confirm="(value)=>{dateShow(value)}"

        />
    </div>
</template>
<style lang="scss">
    @import './test.scss';
</style>
<script>
import Vue from 'vue';
import { Button, Cell, DatetimePicker} from 'vant';
import 'vant/lib/index.css';
import utils from '../../utils/utils';
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
            // console.log(Utils.formatTime(aa,'yy-MM-dd hh:mm:ss'),'检测一下传入参数')
            this.dataShow=!this.dataShow;
        }
    },
}
</script>




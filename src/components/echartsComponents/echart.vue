<template>
    <div class="echartCom">
        <div id="myChart" :style="{width: '375px', height: '300px'}"></div>
        <div id="myheart" :style="{width: '375px', height: '300px'}"></div>
    </div>
</template>
<style lang="scss" scoped>
    @import './echart.scss';
</style>
<script>
import Vue from 'vue';
// 引入基本模板,这里之所以使用 require 而不是 import，是因为 require 可以直接从 node_modules 中查找，而 import 必须把路径写全。
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
require('echarts/lib/chart/line')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  //定义控制页面状态的常量及对接后端接口的变量
  data() {
    return {
    }
  },
  //生命周期
  mounted() {
    this.drawLine();
    this.drawHeart();
  },
  //处理函数
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart'))
      //显示加载动画
      myChart.showLoading();
      setTimeout(()=>{
          myChart.hideLoading();
      },2000)
      // 绘制图表
      myChart.setOption({
        title: { text: 'vue中引入echart' },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });
    },
    drawHeart(){
       var data = [];
        for (var i = 0; i <= 100; i++) {
            var theta = i / 100 * 360;
            var r = 5 * (1 + Math.sin(theta / 180 * Math.PI));
            data.push([r, theta]);
        }
      // 基于准备好的dom，初始化echarts实例
      let myheart = echarts.init(document.getElementById('myheart'))
      myheart.setOption({
            title: {
                text: '画出来最丑的心'
            },
            legend: {
                data: ['line']
            },
            polar: {},
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            angleAxis: {
                type: 'value',
                startAngle: 0
            },
            radiusAxis: {
            },
            series: [{
                coordinateSystem: 'polar',
                name: 'line',
                type: 'line',
                data: data
            }]
        })
    }
  }
}
</script>

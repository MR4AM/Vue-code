//引入根依赖
import Vue from 'vue'
import Router from 'vue-router'
//引入组件
import Index from '../components/indexComponents/index.vue'
import Test from '../components/testComponents/test.vue'
import Elementr from '../components/elementComponents/element.vue'
import Echart from '../components/echartsComponents/echart.vue'
import baidumap from '../components/baidumapComponents/baidumap.vue'
import luckdraw from '../components/luckdrawComponents/luckdraw.vue'
import ninedraw from '../components/ninedrawComponents/ninedraw.vue'
import addresspicker from '../components/addresspickerComponents/addresspicker.vue';
import cube from '../components/cubeComponents/cube.vue';
import socketio from '../components/socketioComponents/vuesocket.vue';
import lazyload from '../components/lazyloadComponents/lazyload.vue';
import swiper from '../components/swiperComponents/swiper.vue';
import video from '../components/videoComponents/video.vue';
import wxjsapi from '../components/wxjsapiComponents/wxjsapi.vue';
import city from '../components/cityComponents/city.vue';
import masonry from '../components/masonryComponents/masonry.vue';
//注册路由
Vue.use(Router)

export default new Router({
  //定义路由
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    // {
    //   path: '/index',
    //   name: 'index',
    //   component: Index
    // },
    {
      path:'/test:id',
      name:'test',
      component: Test
    },
    {
      path:'/ele',
      name:'element',
      component:Elementr
    },
    {
      path:'/echart',
      name:'echart',
      component:Echart
    },
    {
      path:'/baidumap',
      name:'baidumap',
      component:baidumap
    },
    {
      path:'/luckdraw',
      name:'luckdraw',
      component:luckdraw
    },
    {
      path:'/ninedraw',
      name:'ninedraw',
      component:ninedraw
    },
    {
      path:'/addresspicker',
      name:'addresspicker',
      component:addresspicker
    },
    {
      path:'/cube',
      name:'cube',
      component:cube
    },
    {
      path:'socketio',
      name:'socketio',
      component:socketio
    },
    {
      path:'/lazyload',
      name:'lazyload',
      component:lazyload
    },
    {
      path:'/swiper',
      name:'swiper',
      component:swiper
    },
    {
      path:'/video',
      name:'video',
      component:video
    },
    {
      path:'/wxjsapi',
      name:'wxjsapi',
      component:wxjsapi
    },
    {
      path:'/city',
      name:'city',
      component:city
    },
    {
      path:'/masonry',
      name:'masonry',
      component:masonry
    }
  ]
})

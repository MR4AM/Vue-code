//routerv2 针对routerv1的加载组件策略进行了调整，对全部页面组件进行分离并按需加载，使首屏加载的js体积降低2M，提高了接近0.6s的加载速度
//引入根依赖
import Vue from 'vue';
import Router from 'vue-router';
//注册路由
Vue.use(Router)
//引入页面或组件
const Index =()=>import('../components/indexComponents/index.vue');
const Test =()=>import('../components/testComponents/test.vue');
const Elementr =()=>import('../components/elementComponents/element.vue');
const Echart =()=>import('../components/echartsComponents/echart.vue');
const baidumap =()=>import('../components/baidumapComponents/baidumap.vue');
const luckdraw =()=>import('../components/luckdrawComponents/luckdraw.vue');
const ninedraw =()=>import('../components/ninedrawComponents/ninedraw.vue');
const addresspicker =()=>import('../components/addresspickerComponents/addresspicker.vue');
const cube =()=>import('../components/cubeComponents/cube.vue');
const socketio =()=>import('../components/socketioComponents/vuesocket.vue');
const lazyload =()=>import('../components/lazyloadComponents/lazyload.vue');
const swiper =()=>import('../components/swiperComponents/swiper.vue');
const video =()=>import('../components/videoComponents/video.vue');
const wxjsapi =()=>import('../components/wxjsapiComponents/wxjsapi.vue');
const city =()=>import('../components/cityComponents/city.vue');
const masonry =()=>import('../components/masonryComponents/masonry.vue');
const chrismas =()=>import('../components/christmasComponents/christmas.vue');
const h5shake =()=>import('../components/h5shakeComponents/h5shake.vue');
const upload =()=>import('../components/uploadComponents/upload.vue');
const fireframes =()=>import('../components/fireframesComponents/fireframes.vue');
const htmleditor =()=>import('../components/htmleditorComponents/htmleditor.vue');
export default new Router({
    //定义路由
    routes: [
      {
        path: '/',
        name: 'index',
        component: Index,
        meta:{
          keepAlive:true,//是否需要缓存
        }
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
      },
      {
        path:'/christmas',
        name:'christmas',
        component:chrismas
      },
      {
        path:'/h5shake',
        name:'h5shake',
        component:h5shake
      },
      {
        path:'/upload',
        name:'upload',
        component:upload
      },
      {
        path:'/fireframes',
        name:'fireframes',
        component:fireframes
      },
      {
        path:'/htmleditor',
        name:'htmleditor',
        component:htmleditor
      }
    ]
  })
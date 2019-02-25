//引入根依赖
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
//webpack中利用require.ensure()实现按需加载,routerv1.5将该想法应用于按需加载组件
const Index = r => require.ensure([], () => r(require('../components/indexComponents/index.vue')), 'Index');
const Test = r => require.ensure([], () => r(require('../components/testComponents/test.vue')), 'test');
const Elementr = r => require.ensure([], () => r(require('../components/elementComponents/element.vue')), 'ele');
const Echart = r => require.ensure([], () => r(require('../components/echartsComponents/echart.vue')), 'echart');
const baidumap = r => require.ensure([], () => r(require('../components/baidumapComponents/baidumap.vue')), 'baidumap');
const luckdraw = r => require.ensure([], () => r(require('../components/luckdrawComponents/luckdraw.vue')), 'luckdraw');
const ninedraw = r => require.ensure([], () => r(require('../components/ninedrawComponents/ninedraw.vue')), 'ninedraw');
const addresspicker = r => require.ensure([], () => r(require('../components/addresspickerComponents/addresspicker.vue')), 'addresspicker');
const cube = r => require.ensure([], () => r(require('../components/cubeComponents/cube.vue')), ' cube');
const socketio = r => require.ensure([], () => r(require('../components/socketioComponents/vuesocket.vue')), 'socketio');
const lazyload = r => require.ensure([], () => r(require('../components/lazyloadComponents/lazyload.vue')), 'lazyload');
const swiper = r => require.ensure([], () => r(require('../components/swiperComponents/swiper.vue')), 'swiper');
const video = r => require.ensure([], () => r(require('../components/videoComponents/video.vue')), 'video');
const wxjsapi = r => require.ensure([], () => r(require('../components/wxjsapiComponents/wxjsapi.vue')), 'wxjsapi');
const city = r => require.ensure([], () => r(require('../components/cityComponents/city.vue')), 'city');
const masonry = r => require.ensure([], () => r(require('../components/masonryComponents/masonry.vue')), 'masonry');
const christmas = r => require.ensure([], () => r(require('../components/christmasComponents/christmas.vue')), 'christmas');
const h5shake = r => require.ensure([], () => r(require('../components/h5shakeComponents/h5shake.vue')), 'h5shake');
const upload = r => require.ensure([], () => r(require('../components/uploadComponents/upload.vue')), 'upload');
const fireframes = r => require.ensure([], () => r(require('../components/fireframesComponents/fireframes.vue')), 'fireframes');
const htmleditor = r => require.ensure([], () => r(require('../components/htmleditorComponents/htmleditor.vue')), 'htmleditor');
export default new Router({
  //定义路由
  routes: [{
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        keepAlive: true, //是否需要缓存
      }
    },
    // {
    //   path: '/index',
    //   name: 'index',
    //   component: Index
    // },
    {
      path: '/test:id',
      name: 'test',
      component: Test
    },
    {
      path: '/ele',
      name: 'element',
      component: Elementr
    },
    {
      path: '/echart',
      name: 'echart',
      component: Echart
    },
    {
      path: '/baidumap',
      name: 'baidumap',
      component: baidumap
    },
    {
      path: '/luckdraw',
      name: 'luckdraw',
      component: luckdraw
    },
    {
      path: '/ninedraw',
      name: 'ninedraw',
      component: ninedraw
    },
    {
      path: '/addresspicker',
      name: 'addresspicker',
      component: addresspicker
    },
    {
      path: '/cube',
      name: 'cube',
      component: cube
    },
    {
      path: 'socketio',
      name: 'socketio',
      component: socketio
    },
    {
      path: '/lazyload',
      name: 'lazyload',
      component: lazyload
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: swiper
    },
    {
      path: '/video',
      name: 'video',
      component: video
    },
    {
      path: '/wxjsapi',
      name: 'wxjsapi',
      component: wxjsapi
    },
    {
      path: '/city',
      name: 'city',
      component: city
    },
    {
      path: '/masonry',
      name: 'masonry',
      component: masonry
    },
    {
      path: '/christmas',
      name: 'christmas',
      component: christmas
    },
    {
      path: '/h5shake',
      name: 'h5shake',
      component: h5shake
    },
    {
      path: '/upload',
      name: 'upload',
      component: upload
    },
    {
      path: '/fireframes',
      name: 'fireframes',
      component: fireframes
    },
    {
      path: '/htmleditor',
      name: 'htmleditor',
      component: htmleditor
    }
  ]
})

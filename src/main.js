// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入滴滴ui库
import Cube from 'cube-ui';
Vue.use(Cube);
Vue.config.productionTip = false;
//引入饿了么后台ui库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 饿了么移动端库
import 'mint-ui/lib/style.css';
//引入lazyload组件
import VueLazyload from 'vue-lazyload';
//设置预加载及加载失败的默认底图
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '../../assets/static/failload.jpg',
  loading: require('./assets/loading.gif'),
  attempt: 1
});
//引入swiper
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
// 全局引入echarts,不过实际开发中会考虑到echart包体积过大而按开发需要按需引入包
import echarts from 'echarts'
Vue.prototype.$echarts = echarts 
//引入百度地图
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: '2QUQ7bVf2yDIuFij5LKAfGzfUndbPsFN'
})
//引入vuex
import store from './stores/index';
//vue内建立socket
// import VueSocketio from 'vue-socket.io';
// import socketio from 'socket.io-client';
// let hostapi='http://localhost:8082';
// Vue.use(VueSocketio,socketio(hostapi));
// import './common/styles/index.scss';
/* eslint-disable no-new */
// 引入vconsole
import  VConsole  from  'vconsole'
const  vConsole = new VConsole() //注意
// 主函数实例化根节点入口,注入路由和stores
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

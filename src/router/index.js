//引入根依赖
import Vue from 'vue'
import Router from 'vue-router'
//引入组件
import Index from '../components/indexComponents/index.vue'
import Test from '../components/testComponents/test.vue'
import Elementr from '../components/elementComponents/element.vue'

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
    {
      path:'/test:id',
      name:'test',
      component: Test
    },
    {
      path:'/ele',
      name:'element',
      component:Elementr
    }
  ]
})

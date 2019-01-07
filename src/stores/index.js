import Vue from 'vue';
import Vuex from 'vuex';
import baidumap from './modules/baidumap';
Vue.use(Vuex);
//vue中心化状态管理,用于构建复杂化的组件通信交互
//其中状态管理自应用包括state：驱动应用的数据源，view:数据源对应映射的视图层，actions:用户在视图层操作引起state状态发生改变
//vuex的本质是vue容器外层的一个公共独立对象，这个对象提供状态给容器下的组件共享
export default new Vuex.Store({
    modules:{
        baidumap,
    }
});
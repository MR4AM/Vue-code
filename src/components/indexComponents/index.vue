
<template>
  <div class="indexComponents" id="indexComponents">
    <h1 class="title">javue组件</h1>
    <p v-for="(item,index) in comList" class="comlist" @click="test(item)">{{item}}</p>
    <p v-on:click="linkTo('cube')" class="comlist">查看cube组件ui库实例组件</p>
    <p v-on:click="linkTo('test')" class="comlist">查看vant组件ui库实例组件</p>
    <p v-on:click="linkTo('element')" class="comlist">查看element组件ui库实例组件</p>
    <p v-on:click="linkTo('socketio')" class="comlist">基于socketio实现聊天通信</p>
    <ToastComponent :toastShow="toastShow" :duration="3000" :content="toastContent" />
    <LoadingComponent :loadingShow="loadingShow" :loadingType="2"/>
    <ModalComponent
      :modalShow="modalShow"
      :modaltitle="modaltitle"
      :modalcontent="modalcontent"
      :cancel="()=>{this.modalShow=false}"
      :confirm="()=>{this.modalShow=false}"
    />
    <!-- <jatabbarComponent/> -->
  </div>
</template>
<style lang="scss" scoped>
@import "./index.scss";
</style>
<script>
import toastComponent from "../toastComponents/toast";
import loadingComponent from "../loadingComponents/loading";
import modalComponent from "../modalComponents/modal";
import jatabbar from "../tabbarComponents/tabbar";
// import './index.scss';
export default {
  //引入组件
  components: {
    ToastComponent: toastComponent,
    LoadingComponent: loadingComponent,
    ModalComponent: modalComponent,
    // jatabbarComponent:jatabbar
  },
  //存放常量及状态控制变量的控制data层
  data() {
    return {
      comList: [
        "轮播图组件",
        "toast组件",
        "loading组件",
        "modal组件",
        "抽签转盘组件",
        "九宫格抽奖组件",
        "echart组件",
        "百度地图组件",
        "图片懒加载组件",
        "video视频组件案例",
        "网页调起微信jssdk实例",
        "城市定位及选择组件",
        "瀑布流列表",
        "h5实现摇一摇",
        "图片上传组件",
        "canvas烟花效果",
        "富文本编辑器"
      ],
      toastShow: false,
      toastContent: "toast提示一下哦",
      loadingShow: false,
      modalShow: false,
      modaltitle: "温馨提示",
      modalcontent: "这是一个基于vue组件化的组件市场，更多合作或交流可联系作者"
    };
  },
  //生命周期层，
  mounted() {
    this.txt = "赋值";
  },
  //方法处理层
  methods: {
    toast() {
      this.toastShow = true;
      setTimeout(() => {
        this.toastShow = false;
      }, 3000);
    },
    loading() {
      this.loadingShow = true;
      setTimeout(() => {
        this.loadingShow = false;
      }, 3000);
    },
    modal() {
      this.modalShow = true;
    },
    test(item) {
      switch (item) {
        case "toast组件":
          this.toast();
          break;
        case "loading组件":
          this.loading();
          break;
        case "modal组件":
          this.modal();
          break;
        case "抽签转盘组件":
          this.$router.push({ name: "luckdraw" });
          break;
        case "九宫格抽奖组件":
          this.$router.push({ name: "ninedraw" });
          break;
        case "echart组件":
          this.$router.push({ name: "echart" });
          break;
        case "百度地图组件":
          this.$router.push({ name: "baidumap" });
          break;
        case "图片懒加载组件":
          this.$router.push({ name: "lazyload" });
          break;
        case "轮播图组件":
          this.$router.push({ name: "swiper" });
          break;
        case "addresspicker组件":
          this.$router.push({ name: "addresspicker" });
          break;
        case "video视频组件案例":
          this.$router.push({ name: "video" });
          break;
        case "网页调起微信jssdk实例":
          this.$router.push({name:"wxjsapi"});
          break;
        case "城市定位及选择组件":
          this.$router.push({name:"city"});
          break;
        case "瀑布流列表":
          this.$router.push({name:'masonry'});
          break;
        case "h5实现摇一摇":
          this.$router.push({name:"h5shake"});
          break;
        case "图片上传组件":
          this.$router.push({name:'upload'});
          break;
        case "canvas烟花效果":
          this.$router.push({name:"fireframes"});
          break;
        case "富文本编辑器":
          this.$router.push({name:'htmleditor'});
          break;
      }
    },
    linkTo(route, needpar) {
      this.$router.push({
        name: route,
        params: {
          id: "19002"
        }
      });
    }
  }
};
</script>




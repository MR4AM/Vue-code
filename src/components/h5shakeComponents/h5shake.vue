<template>
  <div class="h5shakeCom">
      <img :src="bgsrc" class="bgimg">
      <audio :src="bgmusic" preload="preload" id="shakingAudio" ref="audio"></audio>
      <modal
        :modalShow="modalShow"
        :modaltitle="modaltitle"
        :modalcontent="modalcontent"
        :cancel="()=>{this.modalShow=false}"
        :confirm="()=>{this.modalShow=false}"
        :useimg="true"
        :src=" prizesList[prize]"    
      />
  </div>
</template>
<style lang="scss" scoped>
@import "./h5shake.scss";
</style>
<script>
import Modal from '../modalComponents/modal';
import Utils from '../../utils/utils.js';
export default {
    components:{
        modal:Modal,
    },
    data(){
        return{
            bgsrc:require('../../assets/qian.gif'),
            bgmusic:require('../../assets/yaoyiyao.mp3'),
            prize:0,
            prizesList:[
                  require('../../assets/img/lottery/icon-lottery-prize4.png'),
                  require('../../assets/img/lottery/icon-lottery-prize2.png'),
                  require('../../assets/img/lottery/icon-lottery-prize1.png'),
                  require('../../assets/img/lottery/icon-lottery-prize3.png'),
                  require('../../assets/img/lottery/icon-lottery-prize5.png'),
                  require('../../assets/img/lottery/icon-lottery-prize6.png'),
                  require('../../assets/img/lottery/icon-lottery-prize7.png'),
                  require('../../assets/img/lottery/icon-lottery-prize8.png'),
              ],
            prizeName:['5元红包','0.5元红包','1元红包','10元红包','vivox9','王者荣耀皮肤','小天鹅洗衣机','谢谢参与'],
            lotteryBtn:{
                  img : require('../../assets/img/lottery/icon-lottery-btn.png')
            },
            modalShow:false,
            modaltitle:'抽签结果',
            modalcontent:'哈哈哈，中招了吧，这是钓鱼链接，你的微信要被盗号了',
        }
    },
    beforeMount(){
        document.title='摇摇你的幸运签'
    },
    mounted(){
        //用户进入摇一摇页面开始监听摇一摇函数
        Utils.h5shake('build',this.shakemain); 
    },
    destroyed(){
        //用户离开摇一摇页面开始摧毁摇一摇函数，这个必须摧毁，不然会影响全局，因为window.addEventListener在全局作用生效
         Utils.h5shake('destroy',this.shakemain); 
    },
    methods:{
        shakemain(){
            //H5重力感应事件：
            //deviceorientation提供设备的物理方向信息
            //devicemotion提供设备的加速信息
            var speed = 50;    // 用来判定的加速度阈值，太大了则很难触发
            var x, y, z, lastX, lastY, lastZ;
            x = y = z = lastX = lastY = lastZ = 0;
            //获取设备的加速度信息
            var acceleration = event.accelerationIncludingGravity;
            x = acceleration.x;
            y = acceleration.y;
            z =acceleration.z;
            if(Math.abs(x-lastX) > speed || Math.abs(y-lastY) > speed ||Math.abs(z-lastZ) > speed) {
                // 用户设备摇动了，触发响应操作
                // 此处的判断依据是用户设备的加速度大于我们设置的阈值
                this.$refs.audio.play();
                setTimeout(()=>{
                    this.modalShow=true;
                },2000)
            }
            lastX = x;
            lastY = y;
            lastZ=z;
        }
    }  
}
</script>


<template>
    <div class="ninedrawCom">
        <h1>九宫格抽奖</h1>
        <lottery 
        :beforeLottery="beforeLottery" 
        :lotteryBtn="lotteryBtn" 
        :prizesList="prizesList" 
        :prize="prize" 
        :afterLottery="afterLottery"></lottery>
        <modalcomponents
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
    @import './ninedraw.scss';
</style>

<script>
import lottery from '../../packages/lottery';
import modalcomponents from '../modalComponents/modal';
export default {
     components:{
          lottery:lottery,
          Modalcomponents:modalcomponents
      },
     data() {
          return {
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
              modaltitle:'抽奖结果',
              modalcontent:'',
          };
      },
      methods:{
          beforeLottery(resolve,reject){

          /*
          * send ajax to get result and pass to child component
          **/ 
          
          // get result : this.prize
              setTimeout(()=>{
                  //定义中奖产品索引值
                  let pizeindex=Math.floor(Math.random()*8);
                  this.prize = pizeindex;
                  resolve();
              },10);

          },
          afterLottery(){
              this.modalShow=true;
              if(this.prize==7){
                  this.modalcontent=`谢谢参与，请继续努力`
              }else{
                  this.modalcontent=`恭喜，你抽中的是${this.prizeName[this.prize]}`;
              }
          }
      },
}
</script>



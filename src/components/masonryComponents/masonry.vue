<template>
    <div class="masonryCom">
        <div class="maindo">
            <div class="item"  v-for="(item,idx) in masonryList">
               <img v-lazy="imgList[Math.floor(Math.random()*8)]">
                <h1>{{'商品标题'}}</h1>
                <h1>{{'商品描述'}}</h1>
                <h1>{{'价格'}}</h1>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import './masonry.scss';
</style>
<script>
export default {
    data(){
        return{
            debug:true,//调试模式，用于控制瀑布流展示的item数量
            masonryList:[1,2,3,4,5],
            imgsrc:require('../../assets/logo.png'),
            imgList:[
                  require('../../assets/img/lottery/icon-lottery-prize4.png'),
                  require('../../assets/img/lottery/icon-lottery-prize2.png'),
                  require('../../assets/img/lottery/icon-lottery-prize1.png'),
                  require('../../assets/img/lottery/icon-lottery-prize3.png'),
                  require('../../assets/img/lottery/icon-lottery-prize5.png'),
                  require('../../assets/img/lottery/icon-lottery-prize6.png'),
                  require('../../assets/img/lottery/icon-lottery-prize7.png'),
                  require('../../assets/img/lottery/icon-lottery-prize8.png'),
                  ],
            randomIndex:Math.floor(Math.random()*8),
        }  
    },
    mounted(){
        //debug模式下由于分别给数组中的奇偶项不同的高度突出瀑布流效果，因此数组的长度要设置为奇数。
        //实际开发中的列表item会根据数据量中参数不同采用高度自适应
        for(var i=0;i<300;i++){
            this.masonryList.push(i);
        }
    }
    
}
</script>



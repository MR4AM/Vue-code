<template>
    <div class="swiperCom">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,idx) in imgArr">
                    <img v-lazy="item">
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import './swiper.scss';
</style>
<script>
//https://www.swiper.com.cn swiper官网
import Swiper from 'swiper';
export default {
    data(){
        return{
            imgArr:['https://img.shuixindk.cn/loan-index-new/banner2.png','https://img.shuixindk.cn/loan-index-new/banner2.png','https://img.shuixindk.cn/loan-index-new/banner2.png']
        }
    },
    beforeMount(){},
    mounted(){
        var mySwiper = new Swiper('.swiper-container', {
            autoplay:true,
            loop:true,
            loopAdditionalSlides:0,
            touchRatio:2,
            autoHeight:true,//自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。
        })

    },
    methods:{

    }
    
}
</script>



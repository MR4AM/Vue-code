<template>
    <div class="lazyloadCom">
        <img  v-lazy="lazyloadimg">
    </div>
</template>
<style lang="scss" scoped>
    @import './lazyload.scss';
</style>
<script>
//  img标签中使用懒加载：v-lazy 代替 v-bind:src 
//  背景图片中使用懒加载：v-lazy:background-image = ""  ==>> 注意图片和盒子大小问题，否则显示可能有问题哦。
export default {
    data(){
        return{
            lazyloadimg:require('../../assets/logo.png'),
            lazyloadimg1:'https://img.shuixindk.cn/loan-index-new/banner2.png'
        }
    },
}
</script>



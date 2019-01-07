<template>
    <div class="baidumaoCom">
        <h1 class="title">百度地图组件</h1>
        <baidu-map
            :center="mapCenter"
            :zoom="zoom"
            :scroll-wheel-zoom="true"
            class="map">
            <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
        </baidu-map>
    </div>
</template>
<style lang="scss" scoped>
    @import './baidumap.scss';
</style>
<script>
//https://dafrok.github.io/vue-baidu-map/#/ 百度地图官方开发文档
import Vue from 'vue';
export default {
    //存放数据或者常变量
    data(){
        return{
            mapCenter:{lng:113.269459,lat:23.15635},//经纬度
            zoom:12,//地图中心缩放比
        }
    },
    mounted(){
        let distance=this.$store.state;
        console.log(distance.baidumap,'检测vuex')
    },
    methods:{

    },
}
</script>



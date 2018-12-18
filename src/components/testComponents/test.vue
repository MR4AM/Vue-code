<template>
    <h1>这是第一个跳转页面</h1>
</template>
<style lang="scss">
    @import './test.scss';
</style>
<script>
import utils from '../../utils/utils.js';
export default {
    data(){
        return{
            params:''
        }      
    },
    mounted(){
        console.log(utils.getParams(this,'id'),'路由参数')
    }
}
</script>




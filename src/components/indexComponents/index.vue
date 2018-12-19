
<template>
    <div class="indexComponents" id="indexComponents">
        <h1 class="title">组件首页</h1>
        <p v-if="pshow">{{txt}}</p>
        <button v-on:click="test()">更改状态</button>
        <p v-for="(item,index) in testList">{{item}}</p>
        <p v-on:click="linkTo()">使用方法跳转</p>
        <router-link to='/test'>路由跳转</router-link>
    </div>
</template>
<style lang="scss" scoped>
    @import './index.scss'; 
</style>
<script>
export default {
    //存放常量及状态控制变量的控制data层
    data(){
        return{
            pshow:true,
            txt:'',
            testList:['qq','dd','yy','mm'],
            id:1111,
        }   
    },
    //生命周期层，
    mounted(){
        this.txt='赋值'
    },
    //方法处理层
    methods:{
        test(){
            this.pshow=!this.pshow;
        },
        linkTo(){
            this.$router.push({
                name:'test',
                params:{
                    id:'19002'
                }
            })
        }
    },
}
</script>




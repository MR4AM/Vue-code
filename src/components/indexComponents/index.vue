
<template>
    <div class="indexComponents" id="indexComponents">
        <h1 class="title">vue组件化市场</h1>
        <p v-for="(item,index) in comList" class="comlist" @click="test(item)">{{item}}</p>
        <p v-on:click="linkTo('test')" class="comlist">查看vant组件ui库实例组件</p>
        <p v-on:click="linkTo('element')" class="comlist">查看element组件ui库实例组件</p>
        <ToastComponent
            :toastShow="toastShow"
            :duration="3000"
            :content="toastContent"
        />
        <LoadingComponent
            :loadingShow="loadingShow"
        />
        <ModalComponent
            :modalShow="modalShow"
            :modaltitle="modaltitle"
            :modalcontent="modalcontent"
            :cancel="()=>{this.modalShow=false}"
            :confirm="()=>{this.modalShow=false}"
        />
    </div>
</template>
<style lang="scss" scoped>
    @import './index.scss'; 
</style>
<script>
import toastComponent from '../toastComponents/toast';
import loadingComponent from '../loadingComponents/loading';
import modalComponent from '../modalComponents/modal';
export default {
    //引入组件
    components:{
        ToastComponent:toastComponent,
        LoadingComponent:loadingComponent,
        ModalComponent:modalComponent
    },
    //存放常量及状态控制变量的控制data层
    data(){
        return{
            comList:['toast组件','loading组件','modal组件'],
            toastShow:false,
            toastContent:'toast提示一下哦',
            loadingShow:false,
            modalShow:false,
            modaltitle:'温馨提示',
            modalcontent:'这是一个基于vue组件化的组件市场，更多合作或交流可联系作者',
        }   
    },
    //生命周期层，
    mounted(){
        this.txt='赋值'
    },
    //方法处理层
    methods:{
        toast(){
            this.toastShow=true;
                setTimeout(()=>{
                this.toastShow=false;
            },3000)   
        },
        loading(){
            this.loadingShow=true;
                setTimeout(()=>{
                this.loadingShow=false;
            },3000)   
        },
        modal(){
           this.modalShow=true; 
        },
        test(item){
            switch(item){
                case 'toast组件':
                    this.toast();
                    break;
                case 'loading组件':
                    this.loading();
                    break;
                case 'modal组件':
                    this.modal();
                    break;
            }
        },
        linkTo(route){
            this.$router.push({
                name:route,
                params:{
                    id:'19002'
                }
            })
        }
    },
}
</script>




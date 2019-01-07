<template>
    <div class="modalCom" v-show="modalShow">
        <div class="modalbox">
            <h1 class="modaltitle">{{modaltitle || '弹窗标题'}}</h1>
            <div class="modalcontent">
                {{modalcontent || '弹窗内容'}}
            </div>
            <div class="modalbtn">
                <button class="cancelbtn" @click="cancel()">取消</button>
                <button class="confirmbtn" @click="confirm()">确定</button>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import './modal.scss';
</style>
<script>
export default {
    data(){
        return{
        }
    },
    props:['modalShow','cancel','confirm','modaltitle','modalcontent'],
    methods:{
    },
    
}
</script>


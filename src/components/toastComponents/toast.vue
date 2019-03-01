<template>
    <div class="toastCom" v-show="toastShow">
        <p>{{content}}</p>
    </div>
</template>
<style lang="scss" scoped>
    @import './toast.scss';
</style>
<script>
export default {
    data(){
        return{
        }
    },
    props:['toastShow','duration','content'],
    mounted(){
    },
    methods:{}
}
</script>



<template>
    <div class="loadingCom" v-show="loadingShow">
        <div class="center positioncenter" v-show="loadingType==1">
            <div class="rotate">
                 <div class="circle"></div>
            </div>
            <p class="loadingtxt">loading...</p>
        </div>
        <div class="spinner-box" v-show="loadingType==2">
            <div class="circle-border">
                <div class="circle-core"></div>
            </div>  
        </div>
        <div class="spinner-box" v-show="loadingType==3">
            <div class="configure-border-1">  
                <div class="configure-core"></div>
            </div>  
            <div class="configure-border-2">
                <div class="configure-core"></div>
            </div> 
        </div>
        <div class="spinner-box" v-show="loadingType==4">
            <div class="pulse-container">  
                <div class="pulse-bubble pulse-bubble-1"></div>
                <div class="pulse-bubble pulse-bubble-2"></div>
                <div class="pulse-bubble pulse-bubble-3"></div>
            </div>
        </div>
        <div class="spinner-box" v-show="loadingType==5">
        <div class="solar-system">
            <div class="earth-orbit orbit">
            <div class="planet earth"></div>
            <div class="venus-orbit orbit">
                <div class="planet venus"></div>
                <div class="mercury-orbit orbit">
                <div class="planet mercury"></div>
                <div class="sun"></div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import './loading.scss';
</style>
<script>
//loading总5种效果
export default {
    data(){
        return{
        }
    },
    props:['loadingShow','loadingType'],
    mounted(){},
}
</script>



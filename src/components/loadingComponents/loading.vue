<template>
    <div class="loadingCom" v-show="loadingShow">
        <div class="center positioncenter">
            <div class="rotate">
                 <div class="circle"></div>
            </div>
            <p class="loadingtxt">loading...</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import './loading.scss';
</style>
<script>
export default {
    data(){
        return{

        }
    },
    props:['loadingShow'],
    mounted(){},
}
</script>



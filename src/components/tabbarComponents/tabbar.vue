<template>
    <div class="tabbarcom">
        <mt-tabbar v-model="selected">
        <mt-tab-item :id="item.route" v-for="(item,idx) in iconlist" @click="changetab(item.route)">
            <img slot="icon" :src="item.iconsrc">
            {{item.title}}
        </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<style scoped lang="scss">
    @import './tabbar.scss';
</style>
<script>
import Vue from 'vue';
import { Tabbar, TabItem } from 'mint-ui';
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
export default {
    data(){
        return{
            iconlist:[
                {
                    "title":"首页",
                    "iconsrc": require('../../assets/img/lottery/icon-lottery-prize1.png'),
                    "route":"index",
                },
                {
                    "title":"tab2",
                    "iconsrc": require('../../assets/img/lottery/icon-lottery-prize2.png'),
                    "route":"h5shake",
                },
                {
                    "title":"tab3",
                    "iconsrc": require('../../assets/img/lottery/icon-lottery-prize3.png'),
                    "route":"masonry",
                },
                {
                    "title":"tab4",
                    "iconsrc": require('../../assets/img/lottery/icon-lottery-prize4.png'),
                    "route":"luckdraw",
                }
            ]
        }
    },
    mounted(){

    },
    methods:{
        changetab(route){
            alert('9999')
            this.$router.push({name:route});  
        }
    }
}
</script>



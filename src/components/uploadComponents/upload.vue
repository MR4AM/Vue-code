<template>
    <div class="uploadCom">
        <img :src="imgSrc" ref="img">
        <form>
            <input 
                type="file" 
                name="photos" 
                class="photos" 
                multiple
                @click="click()"
                @change="(e)=>{change(e)}"
            >
        </form>
    </div>
</template>
<style lang="scss" scoped>
    @import './upload.scss';
</style>
<script>
import jafetch from '../../utils/request.js';
import utils from '../../utils/utils.js';
export default {
    data(){
        return{
            imgSrc:''
        }
    },
    mounted(){

    },
    methods:{
        click(){},
        change(e){
            //http://192.168.9.69:520/upload/singleUpload
            utils.unloadFile(e,'http://www.jasonlee.top/upload/singleUpload',this)
        }
    }
}
</script>


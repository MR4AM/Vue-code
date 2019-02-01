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
            var files = e.target.files,
            reader = new FileReader();
            if(files && files[0]){
                reader.onload =(ev)=>{
                    this.imgSrc=ev.target.result;
                }
                reader.readAsDataURL(files[0]);
            }
        }
    }
}
</script>


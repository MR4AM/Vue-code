<template>
    <!-- 在react的render或者vue的template中最外层只能存在一个根节点 -->
    <div class="element">
        <h1>轮播图</h1>
         <div class="block">
            <el-carousel height="150px">
            <el-carousel-item v-for="(item,idx) in imgArr" :key="idx">
               <img :src="item" class="banner">
            </el-carousel-item>
            </el-carousel>
        </div>
        <!-- <div class="block">
            <span class="demonstration">Click 指示器触发</span>
            <el-carousel trigger="click" height="150px">
            <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
            </el-carousel-item>
            </el-carousel>
        </div> -->
        <div class="unload">
            <h1>文件上传</h1>
            <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </div>
        <div class="rate">
            <el-rate
                v-model="value3"
                show-text>
            </el-rate>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import './element.scss';
</style>
<script>
// 饿了吗团队 element ui库http://element-cn.eleme.io/#/zh-CN
import Vue from 'vue';

export default {
    data(){
        return{
            imgArr:[],
            imageUrl: '',
            value3:null
        }
    },
    //组件挂载前
    beforeMount(){},
    //组件挂载完成后
    mounted(){
        for(var i=0;i<4;i++){
            this.imgArr.push('https://img.shuixindk.cn/loan-index-new/banner1.png');
        }
    },
     methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg' ||'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }

}
</script>



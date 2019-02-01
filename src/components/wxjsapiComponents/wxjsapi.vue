<template>
    <div class="wxjsapiCom">
        <button class="test" @click="request()">测试接口请求</button>
        <button class="btn" @click="chooseImage()">选择图片</button>
    </div>
</template>
<style lang="scss" scoped>
    @import './wxjsapi.scss';
</style>
<script>
import jafetch from '../../utils/request.js';
import wxjsbridge from '../../utils/wxconfig.js';
export default {
    data(){
        return{

        }
    },
    mounted(){
        // jafetch.request('get','/wxconfig',{}).then((res)=>{
        //     console.log(wxjsbridge,'opopop');
        //     let result=res.data.data;
        //     wxjsbridge.wxconfig({
        //         debug:true,
        //         appId:result.appId,
        //         noncestr:result.noncestr,
        //         signature:result.signature,
        //         timestamp:result.timestamp,
        //         jsApiList:['chooseImage','previewImage','uploadImage']
        //     })
        //     console.log(res,'ppppp')     
        // });
    },
    methods:{
        //wxservice/wxjssdkconfig/wxpublictoken 获取token
        request(){
            jafetch.request('get','wxservice/wxjssdkconfig/wxpublictoken',{}).then((res)=>{
                console.log(res,'ppppp')     
            });     
        },
        chooseImage(){
            wx.chooseImage({
                count: 1, // 默认9
                sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                success: function (res) {
                var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                }
            })
        }
    }
}
</script>


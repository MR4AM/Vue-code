<template>
    <div class="wxjsapiCom">
        <button class="test" @click="request()">测试接口请求</button>
        <button class="btn" @click="chooseImage()">选择图片</button>
        <div class="wxjump">
            <button @click="wxjump()">测试一下微信浏览器自动跳转浏览器打开外部链接</button>
        </div>
        <iframe :src="iframeSrc" frameborder="0"></iframe>
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
            iframeSrc:''
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
            //查询
            // jafetch.request('get','test/testApi?userName=jasonlee',{}).then((res)=>{
            //     console.log(res,'ppppp')     
            // });
            //插入
            // jafetch.request('post','test/testInsert',{userName:'james',phone:"12112321312414",idCard:"444124413251",email:'128768@qq.com',password:'80997987879'}).then((res)=>{
            //     console.log(res,'ppppp')     
            // });
            //更新   
            // jafetch.request('post','test/testUpDate',{userName:'bb',phone:"11",idCard:"11",email:'abc@qq.com'}).then((res)=>{
            //     console.log(res,'ppppp')     
            // });
            //删除
            //  jafetch.request('get','test/testDelete?userName=akm',{}).then((res)=>{
            //     console.log(res,'ppppp')     
            // });
            //md5 加密
             jafetch.request('post','test/testMd5',{userName:'james',password:'80997987879'}).then((res)=>{
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
        },
        wxjump(){
          jafetch.request('get','wxjump',{}).then((res)=>{
            //   console.log(res.data.data,'ksjskjajkjsakjsakjkjsakjsakjsa')
                window.location.href=res.data.data;
                // this.iframeSrc='http://www.baidu.com';    
            }); 
        }

    }
}
</script>


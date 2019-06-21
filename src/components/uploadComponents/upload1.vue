<template>
    <div>
         <div  class="dy-header">
             <ul>
                 <li @click="fbcolse">取消</li>
                 <li><span>动态</span></li>
                 <li><span>发表</span></li>
             </ul>
            
         </div>
         <div  class="dy-content">
               <div>
                   <textarea placeholder="分享新动态....." v-model="messages"></textarea>
                    
               </div>
               <div class="dynamic-video-image" @click="showActionSheet">
                   <p><img src=""></p>
                   <span>照片/视频</span>
               </div>
               <input type="hidden" id="picIndex" value="0">
               <div id='image-list' class="row image-list">
                   <div class="image-item" v-for="n in videoImageData" :key="n" :id='n.id'>
	               		<div class="image-close" @click="delpic(n.id)">X</div>
	               		<div><img :src="n.picurl" class="upload_img" style="width:100%;height:100%;"/></div>
	               	</div>
               </div>
         </div>
          <!--发布动态-->
        <mt-popup v-model="popupDynamic" :modal="false" style="height:95px;padding:0px;border-radius: 0px; background:rgb(245, 245, 245); width:100%;" position="bottom">
                 <ul>
                   <li style="border-bottom:1px solid #f5efef;" @click="videoimage">从相册选择</li>
                   <li>相机</li>
                   <li style="color:#aaa;" @click="dyfaclose">取消</li>
               </ul>
        </mt-popup>     
        
    </div>
</template>
<script>
import { Indicator } from 'mint-ui';
export default {
    name:"dynamicfc",
    data(){
        return{
            popupDynamic:false,
            videoImageData:[],
            messages:""
        }
    },
    mounted(){
      this.onPlusReady(function () {

　　　　　　plus.geolocation.getCurrentPosition( 

　　　　　　　　 this.geoInf, function (e) {

　　　　　　　　　　alert('获取位置信息失败：' + e.message)

　　　　　　　　},

　　　　　　　　 {

　　　　　　 　　　　geocode: false

　　　　　　　　} )

　　　　 })
    },
    methods:{
        fbcolse(){
             this.$emit('dynamicfb');
        },
        dyfaclose(){
            
            this.popupDynamic=false;
        },
        delpic(index){
            alert(index);
            $("#"+index).remove();
        },
        videoimage(){
            //video();
            if(this.popupDynamic){
                 this.popupDynamic=false;
            }else{
                this.popupDynamic=true;
            }
            
        },//图片显示
       showPics(url,name){    
           var _this=this; 
    	 //根据路径读取到文件 
           plus.io.resolveLocalFileSystemURL(url,function(entry){
        	   entry.file( function(file){
        		   var fileReader = new plus.io.FileReader();
        		   fileReader.readAsDataURL(file);
                   	   fileReader.onloadend = function(e) { 
                	    var picUrl = e.target.result.toString();
                	    var picIndex = $("#picIndex").val();
	               		var nowIndex = parseInt(picIndex)+1;
                        $("#picIndex").val(nowIndex);
                        var data={};
                        data["id"]=nowIndex;
                        data["picurl"]=picUrl;
                        _this.videoImageData.push(data);
                   	}
        	   });
          }); 
       },
     	//压缩图片  
       compressImage(url,filename){  
           var _this=this;
           var name="_doc/upload/"+filename;
           plus.zip.compressImage({  
                   src:url,//src: (String 类型 )压缩转换原始图片的路径  
                   dst:name,//压缩转换目标图片的路径  
                   quality:100,//quality: (Number 类型 )压缩图片的质量.取值范围为1-100  
                   overwrite:true//overwrite: (Boolean 类型 )覆盖生成新文件  
               },  
               function(zip) {
            	   //页面显示图片
            	   _this.showPics(zip.target,name);
               },function(error) {  
                   plus.nativeUI.toast("压缩图片失败，请稍候再试");  
           });  
       } ,
      
     	//调用手机摄像头并拍照
      getImage() {  
           var _this=this;
           var cmr = plus.camera.getCamera();  
           cmr.captureImage(function(p) {  
               plus.io.resolveLocalFileSystemURL(p, function(entry) {  
                   _this.compressImage(entry.toLocalURL(),entry.name);  
               }, function(e) {  
                   plus.nativeUI.toast("读取拍照文件错误：" + e.message);  
               });  
           }, function(e) {  
           }, {  
               filter: 'image' 
           });  
       },
    //    //从相册选择照片（单张）
    //    galleryImgs() {  
           
    // 	    plus.gallery.pick(function(e) {  
    // 	    	var name = e.substr(e.lastIndexOf('/') + 1);
    // 	        compressImage(e,name);
    // 	    }, function(e) {  
    // 	    }, {  
    // 	        filter: "image"  
    // 	    });  
    // 	},
         //从相册选择照片（多张）
       galleryImgs(){   
        var _this = this;
        plus.gallery.pick(function(event) {
        var files = event.files;
            for(var i=0;i<files.length;++i){
              var file = files[i];
                plus.io.resolveLocalFileSystemURL(file,function(entry){
                   _this.showPics(entry.fullPath);
            });
          }
        }, function(e) {
        }, {
          filter: "image",
          multiple:true,
          maximum:"8",
          onmaxed:function(){
              alert("最多选择8张图片")
            //   _this.toast("最多选择8张图片");
          }
        });
      },
       
       //点击事件，弹出选择摄像头和相册的选项
      showActionSheet() {  
          var _this=this;
    	    var bts = [{  
    	        title: "拍照"  
    	    }, {  
    	        title: "从相册选择"  
    	    }];  
    	    plus.nativeUI.actionSheet({  
    	            cancel: "取消",  
    	            buttons: bts  
    	        },  
    	        function(e) {  
    	            if (e.index == 1) {  
    	                _this.getImage();  
    	            } else if (e.index == 2) {  
    	               _this.galleryImgs();  
    	            }  
    	        }  
    	    );  
        }   
    },
    watch:{
        'videoImageData':function(){
            return this.videoImageData;
        }
    }
}
</script>
<style  scoped>
    .dy-header{
        height: 40px;
        width: 100%;
        border-bottom: 1px solid #ece3e3;
        /* background-color: rgb(180, 180, 192); */
    }
    .dy-header ul li{
        display: inline-block;
        line-height: 40px;
    }
    .dy-header ul li:nth-of-type(1){
        width: 12%;
        text-align:left;
    }
    .dy-header ul li:nth-of-type(2){
        width: 72%;
        text-align:center;
    }
    .dy-header ul li:nth-of-type(2) span{
        padding: 0px 3px;
        font-weight: bold;
    }
   .dy-header ul li:nth-of-type(3){
        width: 10%;
        text-align:right;
    }
    .dy-header ul li:nth-of-type(3) span{
        padding: 3px 4px;
        font-size: 14px;
        /* color: #bbb; */
        color: #d01c1c;
        background-color: #eee;
    }
    .dy-content textarea{
            width: 97%;
            height: 200px;
            border: 0px;
            padding: 3px 5px;
    }
    .mint-popup ul li{
        height:24px;
        background-color: #fff;
        padding: 3px 0px;
        line-height: 24px;
       
    }
    .mint-popup ul{
        margin-top: 1px;
    }
    .mint-popup ul li:nth-of-type(3){
    margin-top: 5px;
    }
    /* .mint-popup ul{
        margin-top: 6px;
    } */
    .dynamic-video-image{
        width: 80px;
        height: 80px;
        background-color: rgb(245, 239, 239);
        margin-left: 8px;
        font-size: 12px;
        color: #827878;
        padding-top: 5px;
    }
    textarea:focus {
        outline: none;
    }
    #image-list .image-item{
        width: 80px;
        height: 80px;
        float: left;
        padding-left: 8px;
        padding-top: 0px;
        margin-top: 5px;
    }
    #image-list .image-close{
           position: relative;
            /* bottom: 0px; */
            left: 65px;
            top: 15px;
            color: #eee;
            /* right: 58px; */
            font-size: 12px;
            font-weight: bold;
            z-index: 13213;
            background-color:rgba(123, 111, 111, 0.6901960784313725);
            width: 14px;
            height: 14px;
    }
    #image-list .image-item div:nth-of-type(2){
        height: 80px;
        width: 80px;
    }
</style>
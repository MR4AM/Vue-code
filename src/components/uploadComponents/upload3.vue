<template>
     <div id='takePhoto' >
        <div id='support'></div>
        <div id='contentHolder'>
            <video id='video' width='352' height='496' style='border:1px solid gray;float: left;' autoplay></video>
            <div id='imageBox' class='imageBox1'>
                <canvas id='canvas'></canvas>
                <div class='thumbBox1'></div>
            </div>
            <div style="clear: both;width: 352px;text-align: center">
                <el-button id='snap' class= 'my-button' @click="takePhoto">拍照</el-button>
                <el-button id='snap2' style='display: none;' class='my-button' @click="retakePhoto">重新拍照</el-button>
            </div>
            <div id='cropped1' class='cropped1' style='display: none;'>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    created() {
        this.getVideo();
    },
    methods: {  
        getVideo() {
            var video = $('#video');
            var videoObj = { 'video': true };
            var errBack = function(error) {
                console.log('Video capture error: ' + error.message, error.code);
            };
            var stre;
            var mediaStream;
            //  支持浏览器  谷歌,火狐,360,欧朋
            // navigator.getUserMedia这个写法在Opera中好像是navigator.getUserMedianow
            if (navigator.getUserMedia) {
                navigator.getUserMedia(videoObj, function(stream) {
                    video.src = stream;
                    stre = stream;
                    video.trigger('play');
                }, errBack);
            } else if (navigator.webkitGetUserMedia) {
                navigator.webkitGetUserMedia(videoObj, function(stream) {
                    video.src = window.URL.createObjectURL(stream);
                    mediaStream = stream;
                    stre = stream;
                    video.trigger('play');
                }, errBack);
            } else if (navigator.mozGetUserMedia) {
                navigator.mozGetUserMedia(videoObj, function(stream) {
                    video.src = window.URL.createObjectURL(stream);
                    mediaStream = stream;
                    stre = stream;
                    video.trigger('play');
                }, errBack);
            }
        },
        // 点击拍照
        takePhoto() {
            var img_src;
            $('#video').hide();
            $('#snap').hide();
            $('#snap2').show();
            $('#imageBox').show();
            $('#action').show();
            $('#cropped1').show();
            var canvans = $('#canvas');
            var video = $('#video');
            var context = canvans.get(0).getContext('2d');

            canvans.width(219);
            canvans.height(413);
            context.drawImage(video, 0, 0);

            // 获取浏览器页面的画布对象
            // 以下开始编 数据
            var imgData = document.getElementsByTagName('canvas')[0].toDataURL('image/jpg');
            // 将图像转换为base64数据
            var base64Data = imgData.split(',')[1];
            $('#canvas').hide();
            var options1 = {
                thumbBox: '.thumbBox1',
                spinner: '.spinner',
                imgSrc: imgData
            }
        },
        // 点击重新拍照
        retakePhoto() {
            this.getVideo();
            $('#video').show();
            $('#snap').show();
            $('#snap2').hide();
            $('#imageBox').hide();
            $('#action').hide();
            $('#cropped1').hide();
        }
    }
}
</script>


<template>
    <div id="app">
        <div><video ref="video" id="video" width="640" height="480" autoplay></video></div>
        <div><button id="snap" v-on:click="capture()">Snap Photo</button></div>
        <canvas ref="canvas" id="canvas" width="640" height="480"></canvas>
    </div>
</template>
<style>
#video {
  /* background: transparent; */
  /* opacity: 0; */
}
</style>
<script>
export default {
    data(){
        return{
            video: {},
            canvas: {},
            captures: []
        }
    },
    mounted() {
        this.video = this.$refs.video;
        if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
                this.video.src = window.URL.createObjectURL(stream);
                this.video.play();
            });
        }
    },
    methods:{
        capture() {
            this.canvas = this.$refs.canvas;
            var context = this.canvas.getContext("2d").drawImage(this.video, 0, 0, 640, 480);
            console.log(this.canvas,context,'0000')
            this.captures.push(canvas.toDataURL("image/png"));
        }
    }
}
</script>


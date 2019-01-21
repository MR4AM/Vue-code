<template>
    <div class="chatRoom">
        <h1 class="chattitle">群聊(20)</h1>
        <div class="chatlist">
            <ul>
               <div v-for="(item,idx) in chatlist" class="item">
                   <p class="content">
                      {{item}}
                   </p>
               </div> 
            </ul>
        </div>
        <div class="chatbottom">
            <input type="text" class="inputbox" v-model="mess">
            <button class="more">更多功能</button>
            <button class="send" @click="send(mess)">发送</button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import './socketio.scss';
</style>
<script>
// let socket=io.connect('http://localhost:8082');
export default {
    data(){
      return{
          id:'',
          chatlist:[],
          mess:''
      }
  },
  mounted(){
      this.connect();
      setTimeout(()=>{
          this.chatlist.push('欢迎进入群聊，我是助手小r');
      },1000)
  },
  beforeUpdate(){
    //   this.listen();
  },
  watch:{
    listen:function(){
        let that=this;
        socket.on('onsend',(mess,userid)=>{
            that.chatlist.push(mess);
        })
    }
  },
  methods: {
    connect:()=>{
        socket.on('connection',function(msg){
            alert(msg)
             console.log(msg,'连接socket服务器')
         })
    },
    send:function(mess){
        let that=this;
        that.chatlist.push(mess);
        that.mess='';
        socket.emit('onmessage',mess,function(){
            alert(99999)
        })
    },
    listen:function(){
        let that=this;
        socket.on('onsend',(mess,userid)=>{
            that.chatlist.push(mess);
        })
    }
  }
}
</script>


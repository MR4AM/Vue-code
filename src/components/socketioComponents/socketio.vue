<template>
    <div class="chatRoom">
        <button @click="connect()">连接socketio</button>
    </div>
</template>
<style lang="scss" scoped>
    @import './socketio.scss';
</style>
<script>
export default {
    data(){
      return{
          id:''
      }
  },
  mounted(){
  },
  sockets:{
    connect: function(){
      this.id=this.$socket.id
      alert('建立socket')
    },
    customEmit: function(val){
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    }
  },
  methods: {
    connect:()=>{
         let socket=io.connect('http://localhost:8082');
            socket.on('connection',function(msg){
             console.log(msg,'连接socket服务器')
         })
    },
    clickButton: function(val){
        // $socket is socket.io-client instance
        this.$socket.emit('emit_method', val);
    }
  }
}
</script>


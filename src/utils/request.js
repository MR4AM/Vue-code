import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
 
Vue.use(VueAxios, axios);

//定义请求服务器公共域及服务名称
const publicUrl='http://23w4962t28.imwork.net:44586';
let ajax={
      request(methods,url,questdata){
        //将接口url进行拼接
        url=publicUrl+url;
        if(methods == 'get'){
            return new Promise((resolve,reject)=>{
                axios.get(url,questdata).then((res)=>{
                    console.log(res,'检测get请求返回');
                    resolve(res);
                })
            })
        }else if(methods == 'post'){
            return new Promise((resolve,reject)=>{
                axios.post(url,questdata).then((res)=>{
                    console.log(res,'检测post请求返回');
                    resolve(res);
                })
            })
        }
    }
}
export default ajax;
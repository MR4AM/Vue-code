export default class jaspec{
     /**
      * //摇一摇代码实现
      *
      * @static
      * @param {*} buildordestroy 是否需要摧毁函数
      * @param {*} listenerfn 需要监听的事件监听函数
      * @memberof jaspec
      */
     static h5shake(buildordestroy,listenerfn){
        if(window.DeviceMotionEvent){
            if(buildordestroy =='build'){
                console.log('构建摇一摇函数')
                window.addEventListener('devicemotion',listenerfn,false); 
            }else if(buildordestroy =='destroy'){
                console.log('摧毁摇一摇函数')
                window.removeEventListener('devicemotion',listenerfn,false); 
            } 
        }else{  
            alert('您的设备不支持该功能');  
        } 
    }
    /**
     *
     * //摇一摇主要逻辑
     * @static
     * @param {*} event 事件源
     * @memberof jaspec
     */
    static deviceMotionHandler(event){
        //H5重力感应事件：
        //deviceorientation提供设备的物理方向信息
        //devicemotion提供设备的加速信息
        var speed = 25;    // 用来判定的加速度阈值，太大了则很难触发
        var x, y, z, lastX, lastY, lastZ;
        x = y = z = lastX = lastY = lastZ = 0;
        var acceleration = event.accelerationIncludingGravity;
        x = acceleration.x;
        y = acceleration.y;
        z =acceleration.z;
        if(Math.abs(x-lastX) > speed || Math.abs(y-lastY) > speed ||Math.abs(z-lastZ) > speed) {
            // 用户设备摇动了，触发响应操作
            // 此处的判断依据是用户设备的加速度大于我们设置的阈值
            alert('恭喜你中奖了');
        }
        lastX = x;
        lastY = y;
        lastZ=z;
    }
}
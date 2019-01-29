class utils{
    static getParams(that,par){
        return that.$route.params[par]
    }
    //时间格式化
    static formatTime(time, cFormat) {
        if (arguments.length === 0) return null
        if ((time + '').length === 10) {
            time = +time * 1000
        }
 
        var format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}', date
        if (typeof time === 'object') {
            date = time
        } else {
            date = new Date(time)
        }
        var formatObj = {
            y: date.getFullYear(),
            m: date.getMonth() + 1,
            d: date.getDate(),
            h: date.getHours(),
            i: date.getMinutes(),
            s: date.getSeconds(),
            a: date.getDay()
        }
        var time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
            var value = formatObj[key]
            if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
            if (result.length > 0 && value < 10) {
                value = '0' + value
            }
            return value || 0
        })
        return time_str
    }
    //摇一摇代码实现
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
    //摇一摇主要逻辑
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
export default utils;
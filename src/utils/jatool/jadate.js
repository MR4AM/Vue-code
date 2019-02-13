export default class jsdate {
  //时间格式化函数,time为date类型，cFormat为sting类型
  //实例 this.ja_formatTime(new Date(),'{y}年{M}月{d}日 {h}:{m}:{s} {a}')
  static ja_formatTime(time, cFormat) {
    if (arguments.length === 0) return null
    if ((time + '').length === 10) {
      time = +time * 1000
    }

    var format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}',
      date
    if (typeof time === 'object') {
      date = time
    } else {
      date = new Date(time)
    }
    var formatObj = {
      y: date.getFullYear(), //年
      M: date.getMonth() + 1, //月
      d: date.getDate(), //日
      h: date.getHours(), //小时
      m: date.getMinutes(), //分钟
      s: date.getSeconds(), //秒
      a: date.getDay() //星期
    }
    var time_str = format.replace(/{(y|M|d|h|m|s|a)+}/g, (result, key) => {
      var value = formatObj[key]
      if (key === 'a') return ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'][value - 1]
      if (result.length > 0 && value < 10) {
        value = '0' + value
      }
      return value || 0
    })
    return time_str
  }
  /**
   *返回用户操作时间当前的时间差
   *
   * @static
   * @param {*} timestamp 时间戳
   * @returns
   * @memberof jsdate
   */
  static ja_formatTime2(timestamp) {
    var curTimestamp = parseInt(new Date().getTime() / 1000); //当前时间戳
    var timestampDiff = curTimestamp - timestamp; // 参数时间戳与当前时间戳相差秒数

    var curDate = new Date(curTimestamp * 1000); // 当前时间日期对象
    var tmDate = new Date(timestamp * 1000); // 参数时间戳转换成的日期对象

    var Y = tmDate.getFullYear(),
      m = tmDate.getMonth() + 1,
      d = tmDate.getDate();
    var H = tmDate.getHours(),
      i = tmDate.getMinutes(),
      s = tmDate.getSeconds();
    if (timestampDiff < 60) { // 一分钟以内
      return "刚刚";
    } else if (timestampDiff < 3600) { // 一小时前之内
      return Math.floor(timestampDiff / 60) + "分钟前";
    } else if (curDate.getFullYear() == Y && curDate.getMonth() + 1 == m && curDate.getDate() == d) {
      return '今天' + this.ja_zeroize(H) + ':' + this.ja_zeroize(i);
    } else {
      var newDate = new Date((curTimestamp - 86400) * 1000); // 参数中的时间戳加一天转换成的日期对象
      if (newDate.getFullYear() == Y && newDate.getMonth() + 1 == m && newDate.getDate() == d) {
        return '昨天' + this.ja_zeroize(H) + ':' + this.ja_zeroize(i);
      } else if (curDate.getFullYear() == Y) {
        return this.ja_zeroize(m) + '月' + this.ja_zeroize(d) + '日 ' + this.ja_zeroize(H) + ':' + this.ja_zeroize(i);
      } else {
        return Y + '年' + this.ja_zeroize(m) + '月' + this.ja_zeroize(d) + '日 ' + this.ja_zeroize(H) + ':' + this.ja_zeroize(i);
      }
    }
  }
  /**
   *时钟位数补零操作
   *
   * @static
   * @param {*} num
   * @returns
   * @memberof jsdate
   */
  static ja_zeroize(num) {
    return (String(num).length == 1 ? '0' : '') + num;
  }
  /**
   *渲染一个时钟
   *
   * @static
   * @param {*} interval 定时器命名空间
   * @param {*} cFormat 时钟显示格式
   * @param {*} destory 是否需要摧毁定时器
   * @memberof jsdate
   */
  static ja_clock(interval,cFormat,destory){
    var clock;
    if(destory){
        clearInterval(interval);
    }else{
        interval=setInterval(()=>{
            clock=this.ja_formatTime(new Date() +1000,cFormat);
            console.log(clock,'000000')
            return clock;
        },1000);
    }
  }
}

//js 本地存储工具模块
export default class jastorage {
  //设置本地cache
  static ja_setLocalCache(c_name, value) {
    localStorage.setItem(c_name, value)
  }
  //获取本地cache
  static ja_getLocalCache(c_name) {
    var tem = localStorage.getItem(c_name);
    return tem;
  }

  //设置cookie
  static ja_setCookieCache(c_name, value, expiredays = 3600000) {
    var exdate = new Date()
    exdate.setTime(exdate.getTime() + expiredays)
    document.cookie = c_name + "=" + escape(value) +
      ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
  }

  //取回cookie
  static ja_getCookieCache(c_name) {
    if (document.cookie.length > 0) {
      var c_start = document.cookie.indexOf(c_name + "=")
      if (c_start != -1) {
        c_start = c_start + c_name.length + 1
        var c_end = document.cookie.indexOf(";", c_start)
        if (c_end == -1) c_end = document.cookie.length
        return unescape(document.cookie.substring(c_start, c_end))
      }
    }
    return "";
  }
}

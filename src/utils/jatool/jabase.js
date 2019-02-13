// jatool常规逻辑函数模块
export default class jabase {
  //判断值是否为空处理，常用于判断后端数据返回为空或不返回造成数据渲染过程中的断层，或者用户没有在表单中输入内容
  static ja_isNull(data) {
    //解决处理判断数字0=''的问题
    if (data == 0) {
      data = data.toString();
    }
    if (data instanceof Array) {
      return data.length === 0;
    }
    return !data || data == 'null' || data == 'undefined' || data == '[]';
  }
  //判断字符串是否为中文，一般用于校对用户表单中的用户名是否输入合法
  static ja_strischinese(str) {
    str = str.replace(/\s+/g, "");
    return /^([\u4E00-\u9FA5]|[\uFE30-\uFFA0])*$/gi.test(str);
  }
  //判断是否为电话号码
  static ja_strisphone(phone) {
    phone = phone.replace(/\s+/g, "")
    return /^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(phone);
  }
  //判断是否为邮箱
  static ja_strisemail(str) {
    str = str.replace(/\s+/g, "");
    return /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/.test(str);
  }
  //判断身份证号码是否合法
  /*
  根据〖中华人民共和国国家标准 GB 11643-1999〗中有关公民身份号码的规定，公民身份号码是特征组合码，由十七位数字本体码和一位数字校验码组成。排列顺序从左至右依次为：六位数字地址码，八位数字出生日期码，三位数字顺序码和一位数字校验码。
      地址码表示编码对象常住户口所在县(市、旗、区)的行政区划代码。
      出生日期码表示编码对象出生的年、月、日，其中年份用四位数字表示，年、月、日之间不用分隔符。
      顺序码表示同一地址码所标识的区域范围内，对同年、月、日出生的人员编定的顺序号。顺序码的奇数分给男性，偶数分给女性。
      校验码是根据前面十七位数字码，按照ISO 7064:1983.MOD 11-2校验码计算出来的检验码。

  出生日期计算方法。
      15位的身份证编码首先把出生年扩展为4位，简单的就是增加一个19或18,这样就包含了所有1800-1999年出生的人;
      2000年后出生的肯定都是18位的了没有这个烦恼，至于1800年前出生的,那啥那时应该还没身份证号这个东东，⊙﹏⊙b汗...
  下面是正则表达式:
  出生日期1800-2099  (18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])
  身份证正则表达式    /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i      
  15位校验规则 6位地址编码+6位出生日期+3位顺序号
  18位校验规则 6位地址编码+8位出生日期+3位顺序号+1位校验位

  校验位规则     公式:∑(ai×Wi)(mod 11)……………………………………(1)
                  公式(1)中： 
                  i----表示号码字符从由至左包括校验码在内的位置序号； 
                  ai----表示第i位置上的号码字符值； 
                  Wi----示第i位置上的加权因子，其数值依据公式Wi=2^(n-1）(mod 11)计算得出。
                  i 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
                  Wi 7 9 10 5 8 4 2 1 6 3 7 9 10 5 8 4 2 1

  */
  //130981199312253466
  static ja_idcardidentify(code) {
    code = code.replace(/\s+/g, "")
    var city = {
      11: "北京",
      12: "天津",
      13: "河北",
      14: "山西",
      15: "内蒙古",
      21: "辽宁",
      22: "吉林",
      23: "黑龙江 ",
      31: "上海",
      32: "江苏",
      33: "浙江",
      34: "安徽",
      35: "福建",
      36: "江西",
      37: "山东",
      41: "河南",
      42: "湖北 ",
      43: "湖南",
      44: "广东",
      45: "广西",
      46: "海南",
      50: "重庆",
      51: "四川",
      52: "贵州",
      53: "云南",
      54: "西藏 ",
      61: "陕西",
      62: "甘肃",
      63: "青海",
      64: "宁夏",
      65: "新疆",
      71: "台湾",
      81: "香港",
      82: "澳门",
      91: "国外 "
    };
    var tip = "";
    var pass = true;

    if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)) {
      tip = "身份证号格式错误";
      pass = false;
    } else if (!city[String(code).substr(0, 2) * 1]) {
      tip = "地址编码错误";
      pass = false;
    } else {
      //18位身份证需要验证最后一位校验位
      if (code.length == 18) {
        code = code.split('');
        //∑(ai×Wi)(mod 11)
        //加权因子
        var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        //校验位
        var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
        var sum = 0;
        var ai = 0;
        var wi = 0;
        for (var i = 0; i < 17; i++) {
          ai = code[i];
          wi = factor[i];
          sum += ai * wi;
        }
        var last = parity[sum % 11];
        if (parity[sum % 11] != code[17]) {
          tip = "校验位错误";
          pass = false;
        }
      }
    }
    if (!pass) console.log(tip);
    return pass;
  }
  /**
   *检测文件是否是图片、视频、文档
   *
   * @static
   * @param {*} fileName 文件后缀
   * @param {*} type 文件类型 1为图片检测，2为视频检测，3为文档检测
   * @memberof jabase
   */
  static ja_checkfile(fileName,type){
    switch(type){
      case 1:
      return /(gif|jpg|jpeg|png|GIF|JPG|PNG)$/ig.test(fileName);
      case 2:
      return /(mp4|mp3|flv|wav)$/ig.test(fileName);
      case 3:
      return /(doc|docx|xls|xlsx|pdf|txt|ppt|pptx|rar|zip|html|jsp|sql|htm|shtml|xml)$/ig.test(fileName);
    }

  }
  /**防抖函数，函数防抖（debounce）：当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，如果设定的时间到来之前，又一次触发了事件，就重新开始延时。
   *将几次操作合并为一此操作进行。原理是维护一个计时器，规定在delay时间后触发函数，但是在delay时间内再次触发的话，就会取消之前的计时器而重新设置。这样一来，只有最后一次操作能被触发。
   *
   * @static
   * @param {Function} fn 事件处理函数
   * @param {Number} duration 防抖间隔
   * @returns
   * @memberof jabase
   */
  static ja_debounce(fn, duration) {
    var timeout = null;
    return function () {
      if (timeout !== null) clearTimeout(timeout);
      timeout = setTimeout(fn, duration);
    }
  }
  /**
   *节流函数，函数节流（throttle）：当持续触发事件时，保证一定时间段内只调用一次事件处理函数。
   *使得一定时间内只触发一次函数。原理是通过判断是否到达一定时间来触发函数。
   *函数节流不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理函数，而函数防抖只是在最后一次事件后才触发一次函数。比如在页面的无限加载场景下，我们需要用户在滚动页面时，每隔一段时间发一次 Ajax 请求，而不是在用户停下滚动页面操作时才去请求数据。这样的场景，就适合用节流技术来实现。
   * @static
   * @param {*} fn 事件处理函数
   * @param {*} delay 节流延时间隔
   * @memberof jabase
   */
  static ja_throttle(fn, delay) {
    var prev = Date.now();
    return function () {
      var context = this;
      var args = arguments;
      var now = Date.now();
      if (now - prev >= delay) {
        fn.apply(context, args);
        prev = Date.now();
      }
    }
  }
  /**
   *获取地址url上参数名为name的参数
   *
   * @static
   * @param {*} url 访问地址url
   * @param {*} name 参数key值
   * @returns
   * @memberof jabase
   */
  static ja_getUrlParam(url, name) {
    //构造一个含有目标参数的正则表达式对象
    const reg = new RegExp("(^|&)*" + name + "=([^&]*)(&|$)");
    //匹配目标参数
    let r = url.match(reg);
    //返回参数值
    if (r != null) return decodeURIComponent(r[2]);
    return null;
  }
  /**
   *将地址url的参数转换成对象输出
   *
   * @static
   * @param {*} url 访问地址url
   * @memberof jabase
   */
  static ja_getQueryObject(url) {
    url = url == null ? window.location.href : url;
    let search = url.substring(url.lastIndexOf("?") + 1);
    let obj = {};
    let reg = /([^?&=]+)=([^?&=]*)/g;
    // [^?&=]+表示：除了？、&、=之外的一到多个字符
    // [^?&=]*表示：除了？、&、=之外的0到多个字符（任意多个）
    search.replace(reg, function (rs, $1, $2) {
      let name = decodeURIComponent($1);
      let val = decodeURIComponent($2);
      obj[name] = val + '';
      return rs;
    });
    return obj;
  }
  /**
   *替换url中的参数
   *
   * @static
   * @param {*} url 替换路径
   * @param {*} paramName 参数名
   * @param {*} replaceWith 替换val
   * @returns
   * @memberof jabase
   */
  static ja_replaceParamVal(url, paramName,replaceWith){
    let reg=new RegExp('('+ paramName+'=)([^&]*)','gi');
    let nUrl = url.replace(reg, paramName+'='+replaceWith);
    return nUrl;
  }
}

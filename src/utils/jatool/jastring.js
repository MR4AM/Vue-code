//常用的string对象业务方法
export default class jastring {
  //去除空格  type 1-所有空格  2-前后空格  3-前空格 4-后空格
  static ja_trim(str, type) {
    switch (type) {
      case 1:
        return str.replace(/\s+/g, "");
      case 2:
        return str.replace(/(^\s*)|(\s*$)/g, "");
      case 3:
        return str.replace(/(^\s*)/g, "");
      case 4:
        return str.replace(/(\s*$)/g, "");
      default:
        return str;
    }
  }

  //电话号码加密显示 1345678900 变成134****8900
  static ja_phonelock(str) {
    return String(str).replace(/(\d{3})(\d{4})(\d{4})/, "$1****$3");
  }

  //js实现复制粘贴功能
  //原生js复制内容到复制板
  static ja_jsCopy(txt) {
      const input = document.createElement('input');
      //防止ios点击复制时屏幕下方会出现白屏抖动，仔细看是拉起键盘又瞬间收起
      input.setAttribute('readonly', 'readonly');
      input.setAttribute('value', txt)
      document.body.appendChild(input);
      var osMsg;
      osMsg =this.getOs()
      //input.select() 在ios下并没有选中全部内容，使用以下来选中内容
      if (osMsg == 'ios') {
        //ios复制
        let obj = this.iosCopy(txt);
        this.destoryNode(obj.html, obj.style)
        //input.setSelectionRange(0,input.value.length);  
      } else if (osMsg == 'android') {
        //android选择复制内容
        input.select(txt);
      }
      document.execCommand('copy', true);
      document.body.removeChild(input);

    }

    //  兼容ios复制
    static iosCopy(txt) {
      let obj = this.render(txt);

      window.getSelection().removeAllRanges(); //这段代码必须放在前面否则无效
      let content = document.querySelector('.jsCopy');

      var range = document.createRange();
      // 选中需要复制的节点
      range.selectNode(content);
      // 执行选中元素
      window.getSelection().addRange(range);
      // 执行 copy 操作
      document.execCommand('copy');

      // 移除选中的元素
      window.getSelection().removeAllRanges();
      return obj;
    }

    //渲染成ios需要复制的节点并添加样式
    static render(txt) {
      var html = document.createElement('div');
      html.className = 'jsCopy';
      html.innerText = txt;
      document.body.appendChild(html)
      var style = document.createElement('style');
      style.innerHTML = 'body{-webkit-user-select:text}.jsCopy{position:absolute;top:0;left:-200px;color:transparent;background:transparent}'
      document.head.appendChild(style)
      let nodeObj = {
        "html": html,
        "style": style
      }
      return nodeObj;
    }

    //方法调用完毕后摧毁节点和多余样式
    static destoryNode(html, style) {
      document.body.removeChild(html);
      document.head.removeChild(style);
    }
    //获取操作系统
    static getOs() {
      let userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';
      if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) return 'ios'
      if (/android/i.test(userAgent)) return 'android'
    }
    
}

export default class jamath{
    /**
     *生成一个范围内的随机整数
     *
     * @static
     * @param {*} maxmun 范围区间最大值
     * @returns
     * @memberof jamath
     */
    static ja_randomum(maxmun){
        return Math.floor(Math.random()*maxmun)
    }
    /**
     *生成随机长度字符串
     *
     * @static
     * @param {*} length 字符串长度
     * @returns
     * @memberof jamath
     */
    static ja_randomstr(length){
        return (Math.random() * 1e18).toString(36).slice(0, length).toUpperCase();
    }
    /**
     *生成随机位数字符串
     *
     * @static
     * @param {*} len 字符串长度
     * @returns
     * @memberof jamath
     */
    static ja_randomcode(len){
        let str='01234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let strArr=[];
        for(var i=0;i<len;i++){
            strArr.push(str.split('')[Math.floor(Math.random()*str.length)]);
        }
        return strArr.join('');
    }
    /**
     *生成16进制随机颜色值
     *
     * @static
     * @param {*} len 字符串长度
     * @returns
     * @memberof jamath
     */
    static ja_randomcolor(len){
        let str='01234567890abcdefABCDEF';
        let strArr=[];
        for(var i=0;i<len;i++){
            strArr.push(str.split('')[Math.floor(Math.random()*str.length)]);
        }
        return '#'+strArr.join('');
    }
}
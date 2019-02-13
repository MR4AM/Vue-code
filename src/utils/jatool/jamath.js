export default class jamath{
    /**
     *生成一个范围内的随机整数
     *
     * @static
     * @param {*} maxmun 范围区间最大值
     * @returns
     * @memberof jamath
     */
    static ja_randomnum(maxmun){
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
}
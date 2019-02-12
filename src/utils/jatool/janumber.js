export default class janumber{
     //金额每个3位添加逗号
    static ja_toThousands(number,symbol){
        return (number || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, `$1${symbol}`)
    }
}
//js 对数组进行处理的工具模块
//一。数组的四个思考点
//1、方法的作用
//2、需要传哪些参数
//3、是否有返回值，返回值是什么
//4、通过此方法是否对原来数组产生了改变
//二。数组的常规内置方法
// array.push() 向数组最后一位增加元素，会改变原数组
// array.pop() 删除数组的最后一位，会改变原数组
// array.unshift() 向数组第一位前增加元素，会改变原数组
// array.shift() 删除数组的第一个元素，会改变原数组
// arrayObject.splice(index,howmany,item1,.....,itemX) 
export default class jaarray {
  //es6 实现数组去重
  static ja_arrayunique1(array) {
    //先将数组通过set对象使数组中的val唯一，此时数组成了类数组，再使用静态方法Array.from将类数组变成数组
    return Array.from(new Set(array));
  }
  //es5 实现数组去重
  static ja_arrayunique2(array) {
    var tmpObj = {};
    var result = [];
    array.forEach(function (a) {
      var key = (typeof a) + a;
      if (!tmpObj[key]) {
        tmpObj[key] = true;
        result.push(a);
      }
    });
    return result;
  }
  //判断数组中是否存在某个元素
  static ja_arrcontains(arr, val) {
    return arr.indexOf(val) != -1 ? true : false;
  }
  //获取两个数组的交集与并集
  static ja_arrayfilter(type, arr1, arr2) {
    switch (type) {
      //交集
      case 'intersect':
        return arr2.filter(function (v) {
          return arr1.indexOf(v) !== -1 // 利用filter方法来遍历是否有相同的元素
        })
        //并集
      case 'union':
        return this.ja_arrayunique1(arr1.concat(arr2));
    }
  }
}

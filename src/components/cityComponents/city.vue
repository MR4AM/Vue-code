<template>
  <div class="h5city">
    <div class="city city-wap">
      <div class="search">
        <input type="text" placeholder="手动输入定位城市">
      </div>
      <div class="city-list">
        <div class="block-60"></div>
        <div v-for="item in cityListData" class="clearfix">
          <p :id="item.ckey">{{item.ckey}}</p>
          <ul>
            <li v-for="ritem in item.cityList">{{ritem.airportName}}</li>
          </ul>
        </div>
      </div>
      <div class="filter">
        <div v-for="item in cityListKey" @click="switchKey(item)">{{item}}</div>
      </div>
      <div class="active-key" v-if="activeKey">{{activeKey}}</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
    @import './city.scss';
</style>

<script>
import cityData from './city.js';
export default {
  name: 'app',
  data () {
    return {
      showCity: false,
      dataList: cityData,
      activeKey: '',
      upCityList: ''

    }
  },
  computed: {
    cityListData(){
      let map = {}; // 处理过后的数据对象
      let temps = []; // 临时变量
      this.dataList.map(item=>{
          if(item.airportCode){
              let ekey = item.airportCode.charAt(0).toUpperCase(); // 根据key值的第一个字母分组，并且转换成大写
              temps = map[ekey] || []; // 如果map里面有这个key了，就取，没有就是空数组
              temps.push({
                  airportCode: item.airportCode,
                  airportName: item.cityName
              });
              map[ekey] = temps;
          }
      })
      let list = [];
      for(let gkey in map) {
          list.push({
              ckey: gkey,
              cityList: map[gkey]
          })
      }

      list = list.sort((li1, li2)=> li1.ckey.charCodeAt(0) - li2.ckey.charCodeAt(0));
      return list;
    },
    cityListKey(){
      let cityListKey = [];
      this.cityListData.map(item=>{
          cityListKey.push(item.ckey);
      })
      return cityListKey;
    }
  },
  methods: {
    switchKey(key){
      // 当前选中的字母
      this.activeKey = key;
      // 1秒后清空，让`active-key`隐藏
      setTimeout(()=>{
      this.activeKey = '';
      }, 1000)
      // 获取当前字母来cityList中距离顶部的位置
      let targetTop = document.querySelector('#'+key+'').offsetTop;
      window.scrollTo({ 
        top: targetTop - 60, // 60是search的高度
        behavior: "smooth" 
      });
    }
  }
}
</script>
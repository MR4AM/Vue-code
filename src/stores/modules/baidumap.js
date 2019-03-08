const state={
    count:0,//全局的状态
    zoom:15
}
const getters={

}
// 异步操作
const actions={

}
// 同步操作
const mutations={
    increase(state,data){
        state.count++
    }
}
export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
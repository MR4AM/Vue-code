const state={
    count:0,//全局的状态
    zoom:15
}
const getters={

}
const actions={

}
const mutations={
    increase(){
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
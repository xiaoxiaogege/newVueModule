//dome模块
 const state = {
    //数据状态
    number:0,
    userInfo:{
      name:'jx',
      age:18
    }
 };

 const actions = {
    //异步方法
    queryDome({commit}){
      setTimeout(() => {
        commit('setDome',{
          name:'ljx',
          age:22
        })
      }, 1000);
    }
 };

 const mutations = {
    //更新state数据状态
    setDome(state,data){
      console.log('mutations',data);
      state.userInfo = data
    }
 };


 export default {
    namespaced: true,//使其成为带命名空间的模块
    state,
    actions,
    mutations
 };

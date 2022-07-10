import Vuex, { createStore } from 'vuex';
const state = {
  USER_INFO : {},
  name: "changlu"
};
export default createStore({
  state,
  mutations:{
    change(state, str) {
      state.name = str; //修改name
    }
  },
  actions:{
    change(store, str) {
      store.commit("change", str); //调用mutations的change方法执行
    }
  },
  modules:{

  }
})
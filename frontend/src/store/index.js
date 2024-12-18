import { createStore } from 'vuex';

export default createStore({
  state: {
    isAuthenticated: false
  },
  mutations: {
    setAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    }
  },
  actions: {},
  modules: {}
});

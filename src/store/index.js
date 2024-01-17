import { createStore } from 'vuex'

export default createStore({
  state: {
    jwt: null,
  },
  mutations: {
    setJwt(state, jwt) {
      state.jwt = jwt
    },
  },
  actions: {
    setJwt({ commit }, jwt) {
      commit('setJwt', jwt)
    },
  },
})
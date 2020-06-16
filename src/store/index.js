import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foods: [
      { name: 'Tomyum Kung', price: '250' },
      { name: 'Hamburger', price: '550' },
      { name: 'Sea Food Salad', price: '250' },
      { name: 'Pud Kapaw', price: '350' },
      { name: 'Som Tum', price: '120' }

    ]
  },

  mutations: {
    addFood(state, { payload }){
      state.foods.push(payload)
    },
    deleteFood(state, { index }){
      state.foods.splice(index, 1)
    },
    editFood(state, { payload }){
      state.foods[payload.index]={name: payload.name, price: payload.price }
    }
  },

  actions: {
     addFood({ commit }, payload){
       commit('addFood', {payload})
    },
     deleteFood({ commit }, index){
      commit('deleteFood', {index})
    },
    editFood({commit}, payload){
      commit('editFood', {payload})
    }
  },

  getters: {
    foods: state => state.foods
  }
})

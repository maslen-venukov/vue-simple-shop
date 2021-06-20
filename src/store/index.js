import Vue from 'vue'
import Vuex from 'vuex'

import products from './products'
import productsMutations from './products/mutations'
import productsActions from './products/actions'
import productsGetters from './products/getters'

import cart from './cart'
import cartMutations from './cart/mutations'
import cartGetters from './cart/getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products,
    cart
  },
  mutations: {
    ...productsMutations,
    ...cartMutations
  },
  actions: {
    ...productsActions
  },
  getters: {
    ...productsGetters,
    ...cartGetters
  }
})
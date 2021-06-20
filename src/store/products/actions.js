import axios from 'axios'

export default {
  FETCH_PRODUCTS: ({ commit }) => {
    commit('SET_PRODUCTS_LOADING', true)
    axios.get('/products')
      .then(({ data }) => commit('SET_PRODUCTS', data))
      .catch(e => console.log(e))
      .finally(() => commit('SET_PRODUCTS_LOADING', false))
  }
}
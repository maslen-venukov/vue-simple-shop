export default {
  ADD_TO_CART: (state, article) => {
    const cart = state.cart
    const products = state.products.products
    cart.push(products.find(product => product.article === article))
  },
  REMOVE_FROM_CART: (state, article) => {
    state.cart = state.cart.filter(product => product.article !== article)
  }
}
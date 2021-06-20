<template>
  <div>
    <h1 class="title">Cart</h1>
    <ul class="list">
      <CartItem
        v-for="product in GET_CART"
        :key="product.article"
        :product="product"
        @removeFromCart="removeFromCart"
      />
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

import CartItem from './CartItem'

export default {
  components: {
    CartItem
  },
  computed: {
    ...mapGetters([
      'GET_CART'
    ])
  },
  methods: {
    ...mapMutations([
      'REMOVE_FROM_CART'
    ]),
    removeFromCart(article) {
      this.REMOVE_FROM_CART(article)
    }
  }
}
</script>

<style lang="sass" scoped>
.list
  margin-bottom: 30px
</style>
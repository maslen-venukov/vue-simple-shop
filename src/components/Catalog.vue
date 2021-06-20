<template>
  <div>
    <h1 class="title">Catalog</h1>
    <ul class="list">
      <p v-if="GET_PRODUCTS_LOADING">Loading...</p>
      <CatalogItem
        v-else
        v-for="product in GET_PRODUCTS"
        :key="product.article"
        :product="product"
        @addToCart="addToCart"
      />
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

import CatalogItem from './CatalogItem'

export default {
  components: {
    CatalogItem
  },
  computed: {
    ...mapGetters([
      'GET_PRODUCTS',
      'GET_PRODUCTS_LOADING'
    ])
  },
  methods: {
    ...mapMutations([
      'SET_PRODUCTS',
      'ADD_TO_CART'
    ]),
    ...mapActions([
      'FETCH_PRODUCTS'
    ]),
    addToCart(article) {
      this.ADD_TO_CART(article)
    }
  },
  mounted() {
    this.FETCH_PRODUCTS()
  },
  destroyed() {
    this.SET_PRODUCTS([])
  }
}
</script>

<style lang="sass" scoped>
.list
  display: flex
  flex-wrap: wrap
  margin-bottom: 30px
</style>
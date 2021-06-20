<template>
  <li class="item">
    <article class="card">
      <div class="img">
        <img
          :src="imgSrc"
          :alt="product.name"
        />
      </div>
      <p class="name">{{ product.name }}</p>
      <p class="price">{{ product.price }}$</p>
      <button
        @click="btnClick"
        class="btn"
      >
        Add to cart
      </button>
    </article>
  </li>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    imgSrc() {
      return require('@/assets/images/' + this.product.image)
    }
  },
  methods: {
    btnClick() {
      this.$emit('addToCart', this.product.article)
    }
  }
}
</script>

<style lang="sass" scoped>
.item
  flex-basis: calc(100% / 3)
  &:not(:nth-last-child(-n + 3))
    margin-bottom: 30px

.card
  min-height: 200px
  display: flex
  flex-direction: column
  align-items: center
  box-shadow: 0 3px 15px rgba(#000, .15)
  padding: 15px
  margin: 0 15px

.img
  position: relative
  width: 100%
  height: 0
  padding-bottom: 200%
  img
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%

.img,
.name,
.price
  margin: 0 0 10px

.name
  font-weight: 700
</style>
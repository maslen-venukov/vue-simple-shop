<template>
  <li class="item">
    <article class="card">
      <div class="img">
        <img :src="imgSrc" :alt="product.name">
      </div>
      <div class="info">
        <p class="name">{{ product.name }}</p>
        <p class="price">{{ product.price }}$</p>
        <button @click="btnClick" class="btn">Remove from cart</button>
      </div>
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
      this.$emit('removeFromCart', this.product.article)
    }
  }
}
</script>

<style lang="sass" scoped>
.card
  display: flex
  align-items: center
  box-shadow: 0 3px 15px rgba(#000, .15)
  padding: 15px
  &:not(:last-child)
    margin-bottom: 30px

.img
  position: relative
  width: 200px
  height: 0
  padding-bottom: 30%
  margin-right: 30px
  img
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
</style>
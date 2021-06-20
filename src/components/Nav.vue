<template>
  <nav class="nav">
    <div class="container">
      <ul class="list">
        <li class="item">
          <router-link to="/" class="link">Catalog</router-link>
        </li>
        <div class="item">
          <router-link to="/cart" class="link">Cart</router-link>
        </div>
      </ul>
    </div>
  </nav>
</template>

<style lang="sass" scoped>
.nav
  background-color: orange
  color: #fff
  padding: 15px 0

.list
  display: flex
  align-items: center

.item
  &:not(:last-child)
    margin-right: 15px

.link
  color: inherit
  text-decoration: none
</style>
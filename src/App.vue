<template>
  <div id="app">
    <Nav />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav'
import Home from './views/Home'

export default {
  components: {
    Nav,
    Home
  }
}
</script>
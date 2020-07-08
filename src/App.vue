<template>
  <div id="app">
    <div id="nav">
      <NavBar />
    </div>
    <div class="container-fluid mt-5">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components: { NavBar },

  created() {
    this.$store.dispatch('getTransactions')
  }
}
</script>

<style lang="sass">
// Varibales
$body-bg: #EEEEEE
$danger: #B71C1C
$success: #1B5E20
$primary: #3F51B5

@import "node_modules/bootstrap/scss/bootstrap"
@import "node_modules/bootstrap-vue/src/index.scss"
</style>

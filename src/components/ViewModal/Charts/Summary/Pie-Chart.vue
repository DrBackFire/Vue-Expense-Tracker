<template>
  <div class="text-center">
    <v-progress-circular
      :rotate="360"
      :width="10"
      :size="100"
      :value="TotalSpent"
      color="#F44336"
      >{{ Balance }}</v-progress-circular
    >
    <header>Balance</header>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default {
  data() {
    return {}
  },

  computed: {
    Balance() {
      return this.$store.getters.Balance
    },

    TotalSpent() {
      return this.$store.getters.TotalSpending
    }
  }
}
</script>

<style scoped>
.v-progress-circular {
  margin: 10px auto;
  font-size: 1rem;
}
</style>

<template>
  <div>
    <!-- From Vuetify  -->
    <v-btn fab fixed bottom right dark>
      <!-- From Bootstrap-Vue -->
      <b-icon
        icon="plus"
        class="h2 mt-2 text-center"
        variant="warning"
        v-b-toggle.sidebar-right
      />
    </v-btn>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default {
  data: () => ({
    show: false
  })
}
</script>

<style scoped></style>

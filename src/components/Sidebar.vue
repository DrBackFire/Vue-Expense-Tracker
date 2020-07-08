<template>
  <div>
    <div v-b-toggle.sidebar-1>
      <!-- From Vuetify  -->
      <v-btn fab fixed bottom right dark>
        <!-- From Bootstrap-Vue -->
        <b-icon icon="plus" class="h2 mt-2 text-center" variant="warning" />
      </v-btn>
    </div>

    <b-sidebar id="sidebar-1" title="Sidebar" backdrop shadow>
      <div class="px-3 py-2">
        <AddForm />
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import AddForm from './Forms/AddTransaction'
export default {
  components: { AddForm }
}
</script>

<style scoped></style>

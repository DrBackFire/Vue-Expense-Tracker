<template>
  <div>
    <Summary />
    <Transactionsview />
    <Sidebar />
  </div>
</template>

<script>
import Summary from '@/components/ViewModal/Summary.vue'
import Sidebar from '@/components/Sidebar.vue'
import Transactionsview from '@/components/Transactionsview.vue'
export default {
  components: { Summary, Sidebar, Transactionsview }
}
</script>

<style scoped></style>

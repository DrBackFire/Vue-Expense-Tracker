<template>
  <div>
    <b-avatar icon="bag-fill" variant="danger" class="icon"></b-avatar>
    <br />
    ${{ Expense }}
    <br />
    <span>Expenses</span>
  </div>
</template>

<script>
export default {
  computed: {
    Expense() {
      return this.$store.getters.Expense
    }
  }
}
</script>

<style scoped>
.icon {
  font-size: 2rem;
}
</style>

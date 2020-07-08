<template>
  <div>
    <b-avatar icon="credit-card" variant="success" class="icon"></b-avatar>
    <br />
    ${{ Credit }}
    <br />
    <span>Credit</span>
  </div>
</template>

<script>
export default {
  computed: {
    Credit() {
      return this.$store.getters.Credit
    }
  }
}
</script>

<style scoped>
.icon {
  font-size: 2rem;
}
</style>

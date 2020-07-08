<template>
  <div class="container">
    <div v-for="(transaction, index) in Transactions" :key="index" class="card">
      <b-icon :icon="credit" class="mx-auto mb-3 mt-3 icon"> </b-icon>
      <header>{{ transaction.text }}</header>
      <p>${{ transaction.amount }}</p>
      <b-icon
        icon="exclamation-circle-fill"
        variant="secondary"
        font-scale="1.5"
        class="mb-2 ml-3 edit-btn"
        v-b-modal.modal-center
        @click="id = transaction.id"
      ></b-icon>
    </div>
    <EditModal :_id="id" />
  </div>
</template>

<script>
import EditModal from '@/components/Forms/EditModal.vue'
export default {
  data() {
    return {
      id: '',
      credit: 'credit-card',
      expense: 'bag-dash'
    }
  },
  components: {
    EditModal
  },
  computed: {
    Transactions() {
      return this.$store.getters.AllTranscations
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  margin-top: 20px;
  justify-content: center;
}
.card {
  text-align: center;
  width: 12rem;
  margin: 10px;
  box-shadow: 5px 5px 5px grey;
  border-radius: 24px;
}

header {
  font-size: 1.2rem;
  margin: 10px;
}
p {
  font-weight: bold;
  font-size: 1.5rem;
  color: #ff9800;
}

.icon {
  font-size: 400%;
}

.edit-btn {
  cursor: pointer;
}
</style>

<template>
  <div>
    <b-modal id="modal-center" centered>
      <Form :id="_id" />
    </b-modal>
  </div>
</template>

<script>
import Form from '@/components/Forms/EditTransaction.vue'

export default {
  props: ['_id'],

  components: {
    Form
  }
}
</script>

<style scoped></style>

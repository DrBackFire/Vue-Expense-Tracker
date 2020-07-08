<template>
  <div>
    <Alerts :alertText="alertText" v-show="showAlert" :variant="alertType" />
    <b-form @submit.prevent="sendTransaction">
      <!-- Text input -->
      <b-form-group
        label="Text"
        label-for="text"
        description="Enter the name of your transaction"
      >
        <b-form-input
          id="text"
          v-model="Transaction.text"
          type="text"
          ref="text"
          placeholder="Enter Text"
        />
      </b-form-group>

      <!-- Amount input -->
      <b-form-group
        label="Amount"
        label-for="amount"
        description="Enter (-) for expenses and (+) for credit"
      >
        <b-form-input
          id="amount"
          v-model="Transaction.amount"
          type="number"
          ref="amount"
          placeholder="Enter amount"
        />
      </b-form-group>

      <!-- Credit input -->
      <b-form-checkbox
        name="credit"
        v-model="Transaction.credit"
        switch
        ref="credit"
        v-on:change="
          ;(Transaction.credit = true), (Transaction.expense = false)
        "
      >
        Credit
      </b-form-checkbox>

      <!-- Expense input -->
      <b-form-checkbox
        name="expense"
        switch
        v-model="Transaction.expense"
        ref="expense"
        v-on:change="
          ;(Transaction.credit = false), (Transaction.expense = true)
        "
        >Expense
      </b-form-checkbox>

      <br />

      <!-- Date Picker -->
      <b-form-group label="Date">
        <Datepicker
          v-model="Transaction.date"
          ref="date"
          placeholder="Select date"
        />
      </b-form-group>

      <!-- Category -->
      <b-form-group label="Category:" label-for="category">
        <b-form-select
          id="category"
          v-model="Transaction.selected"
          :options="category"
        />
      </b-form-group>

      <b-button type="submit" variant="primary" class="text-white mr-2"
        >Submit</b-button
      >
    </b-form>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import Alerts from '@/components/Alerts.vue'
export default {
  props: ['id'],
  components: {
    Alerts,
    Datepicker
  },
  data() {
    return {
      Transaction: this.updatedTransaction(),
      selected: '',
      date: '',
      category: this.$store.state.categories,
      showAlert: false,
      alertText: '',
      alertType: ''
    }
  },

  watch: {
    showAlert(val) {
      if (!val) return

      setTimeout(() => {
        this.showAlert = false
      }, 3000)
    }
  },

  methods: {
    getTransaction() {
      return this.$store.getters.getTransaction(this.id)
    },

    updatedTransaction() {
      // Constructing the obj.
      return {
        id: this.id,
        text: this.getTransaction().text,
        amount: this.getTransaction().amount,
        credit: this.getTransaction().credit,
        expense: this.getTransaction().expense,
        date: this.getTransaction().date,
        selected: this.getTransaction().selected
      }
    },

    sendTransaction() {
      // Check user input
      if (!this.Transaction.amount || !this.Transaction.text) {
        this.alertText = 'Please fill all the inputs'
        this.showAlert = true
        this.alertType = 'warning'
      } else if (!this.Transaction.credit && !this.Transaction.expense) {
        this.alertText = 'Please choose your transaction'
        this.showAlert = true
        this.alertType = 'warning'
      } else {
        // Sending the updated transaction
        // this.$store.dispatch('updateTranscations', updatedTransaction)

        console.log(this.Transaction)
        this.$emit('Close')

        // Resetting inputs && showing alert
        this.alertText = 'Success'
        this.showAlert = true
        this.alertType = 'success'
      }
    }
  }
}
</script>

<style scoped></style>

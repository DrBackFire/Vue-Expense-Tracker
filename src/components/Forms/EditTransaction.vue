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
          :value="editedTranscation.text"
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
          :value="editedTranscation.amount"
          type="number"
          ref="amount"
          placeholder="Enter amount"
        />
      </b-form-group>

      <!-- Credit input -->
      <b-form-checkbox
        name="credit"
        :value="editedTranscation.credit"
        switch
        ref="credit"
        v-on:change=";(credit = true), (expense = false)"
      >
        Credit
      </b-form-checkbox>

      <!-- Expense input -->
      <b-form-checkbox
        name="expense"
        switch
        :value="editedTranscation.expense"
        ref="expense"
        v-on:change=";(credit = false), (expense = true)"
        >Expense
      </b-form-checkbox>

      <br />

      <!-- Date Picker -->
      <b-form-group label="Date">
        <Datepicker v-model="date" placeholder="Select date" />
      </b-form-group>

      <!-- Category -->
      <b-form-group label="Category:" label-for="category">
        <b-form-select id="category" v-model="selected" :options="category" />
      </b-form-group>

      <b-button type="submit" variant="primary" class="text-white mr-2"
        >Submit</b-button
      >
      <b-button type="reset" variant="danger" class="text-white"
        >Clear</b-button
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
      text: '',
      amount: '',
      credit: false,
      expense: false,
      selected: '',
      date: '',
      category: [
        { text: 'Select One', value: null },
        'Mortgage(s)',
        'Rent',
        'Property taxes',
        'Strata fee / condo fee',
        'House / tenant insurance',
        'Utility bills',
        'Lease / car loan payment',
        'Vehicle insurance',
        'Life insurance',
        'Bank fees',
        'Debt payments',
        'Groceries',
        'Medication',
        'Fuel',
        'Public transportation costs',
        'Parking',
        'Clothing & shoes',
        'Entertainment',
        'Eating out',
        'Tobacco / alcohol',
        'Gym',
        'Work lunches & snacks'
      ],
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
  computed: {
    editedTranscation() {
      return this.$store.getters.AllTranscations.find(i => i.id === this.id)
    }
  },
  methods: {
    sendTransaction() {
      // Check user input
      if (!this.editedTranscation.amount || !this.editedTranscation.text) {
        this.alertText = 'Please fill all the inputs'
        this.showAlert = true
        this.alertType = 'warning'
      } else if (!this.credit && !this.expense) {
        this.alertText = 'Please choose your transaction'
        this.showAlert = true
        this.alertType = 'warning'
      } else {
        /* Finding the transaction that needs an update ||
        to be deleted && sending it to the store */
        this.$store.dispatch('findTransaction', this.id)

        //Deleting the edited transcation
        this.$store.dispatch('filteringTransactions', this.id)

        // Updating the transcation
        const updatedTransaction = {
          id: this.id,
          // Getting input from form
          text: this.$refs.text._data.localValue,
          amount: Number(this.$refs.amount._data.localValue)
          // Because it returns a string, it needs to be a number
        }

        // Sending the updated transaction
        this.$store.dispatch('updateTranscations', updatedTransaction)

        console.log(updatedTransaction)
        this.$emit('Close')

        // Resetting inputs && showing alert
        this.text = ''
        this.amount = ''
        this.credit = false
        this.expense = false
        this.date = ''
        this.selected = null
        this.alertText = 'Success'
        this.showAlert = true
        this.alertType = 'success'
      }
    }
  }
}
</script>

<style scoped></style>

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
          v-model="text"
          type="text"
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
          v-model="amount"
          type="number"
          placeholder="Enter amount"
        />
      </b-form-group>

      <!-- Credit input -->
      <b-form-checkbox
        name="credit"
        v-model="credit"
        switch
        v-on:change=";(credit = true), (expense = false)"
      >
        Credit
      </b-form-checkbox>

      <!-- Expense input -->
      <b-form-checkbox
        name="expense"
        switch
        v-model="expense"
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
      selected: null,
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

  methods: {
    sendTransaction() {
      // Check user input
      if (!this.amount || !this.text) {
        this.alertText = 'Please fill all the inputs'
        this.showAlert = true
        this.alertType = 'warning'
      } else if (!this.credit && !this.expense) {
        this.alertText = 'Please choose your transaction'
        this.showAlert = true
        this.alertType = 'warning'
      } else {
        const id = Math.floor(Math.random() * 10000000)

        // Constructing the obj
        const newTransaction = {
          id,
          text: this.text,
          // Checking amount input
          amount:
            (this.credit && this.amount > 0) ||
            (this.expense && this.amount < 0)
              ? Number(this.amount)
              : -Number(this.amount),
          selected: this.selected,
          date: this.date
        }
        // Send newTransaction to store
        this.$store.dispatch('newTransaction', newTransaction)

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

import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/services/api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Transactions: [],

    Deleted: [],

    categories: [
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
    ]
  },
  getters: {
    AllTransactions: state => {
      return state.Transactions
    },

    Balance: state => {
      const amount = state.Transactions.map(i => i.amount)
      const total = amount.reduce((x, y) => x + y, 0).toFixed(2)
      return total
    },

    Credit: state => {
      const amount = state.Transactions.map(i => i.amount)
      //Filter through and get the credit only
      const filterCredit = amount.filter(i => i > 0)
      //Add all credit
      const credit = filterCredit.reduce((x, y) => x + y, 0).toFixed(2)

      return credit
    },

    Expense: state => {
      const amount = state.Transactions.map(i => i.amount)
      //Filter through and get the expanse only
      const filterExpense = amount.filter(i => i < 0)
      //Add all credit
      const total = filterExpense.reduce((x, y) => x + y, 0).toFixed(2)

      return total
    },

    TotalSpending: (state, getters) => {
      return (getters.Expense / getters.Credit) * -100 // To track progress of spending for balance
    },

    SpendingProgress: (state, getters) => {
      //Reconstructing the Expanse Array to hold the new amount modal
      return getters.ExpenseArray.map(spend => {
        return {
          id: spend.id,
          Name: spend.text,
          Amount: (spend.amount / getters.Credit) * -100
          /*The progress bar only have a max value of 100. 
           So the amount had to reflect this in order to track*/
        }
      })
    },

    ExpenseArray: state => {
      return state.Transactions.filter(Transaction => {
        if (Transaction.amount < 0) return Transaction
      })
    },

    CreditArray: state => {
      return state.Transactions.filter(Transaction => {
        if (Transaction.amount > 0) return Transaction
      })
    },

    // Deleted || Edited Transactions

    getTransaction: state => id => {
      return state.Transactions.find(i => i.id === id)
    }
  },

  mutations: {
    // Fetching data from DB
    getTransactions: (state, transactions) => {
      state.Transactions = transactions
    },
    // Finding the transaction that needs an update || to be deleted
    findTransaction: (state, id) => {
      const find = state.Transactions.find(i => i.id === id)
      // Adding the old transaction to a new array
      state.Deleted.unshift(find)
    },

    // Removing the old transaction from the array
    filteringTransactions: (state, id) => {
      state.Transactions = state.Transactions.filter(i => i.id !== id)
    },

    // Deleting transactions
    deleTransaction: (state, id) => {
      const find = state.Transactions.find(i => i.id === id)
      state.Deleted.unshift(find)
      state.Transactions = state.Transactions.filter(i => i.id !== id)
    },

    // Updating the transactions with the new value
    updateTransactions: (state, updatedTransaction) => {
      state.Transactions.push(updatedTransaction)
    },

    // Add newTransaction
    newTransaction: (state, newTransaction) => {
      state.Transactions.unshift(newTransaction)
    }
  },

  actions: {
    // Fetching data from DB
    getTransactions: ({ commit }) => {
      api
        .getTransactions()
        .then(response => {
          commit('getTransactions', response.data)
          // console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    // Finding the transaction that needs an update || to be deleted
    findTransaction: (context, id) => {
      context.commit('findTransaction', id)
    },

    // Removing the old transaction from the array
    filteringTransactions: (context, id) => {
      context.commit('filteringTransactions', id)
    },

    // Deleting transactions
    deleTransaction: (context, id) => {
      context.commit('deleTransaction', id)
    },

    // Receiving the updated transaction
    updateTransactions: (context, updatedTransaction) => {
      context.commit('updateTransactions', updatedTransaction)
    },

    // Add newTransaction
    newTransaction: ({ commit }, newTransaction) => {
      api
        .postTransaction(newTransaction)
        .then(response => {
          commit('newTransaction', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  modules: {}
})

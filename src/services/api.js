import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getTransactions() {
    return apiClient.get('/transactions')
  },
  getTransaction(id) {
    return apiClient.get('/transactions/' + id)
  },
  postTransaction(transaction) {
    return apiClient.post('/transactions', transaction)
  }
}

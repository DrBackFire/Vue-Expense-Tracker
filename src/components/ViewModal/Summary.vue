<template>
  <div class="reports container">
    <header>Reports Summary</header>
    <b-row class="status">
      <b-col class="expense">
        <Expense />
      </b-col>
      <b-col class="credit">
        <Credit />
      </b-col>
      <b-col class="balance" align-self="stretch">
        <Pie />
      </b-col>
    </b-row>
    <b-col class="chart">
      <Bar />
    </b-col>

    <div class="summary"></div>
  </div>
</template>

<script>
import Expense from '@/components/ViewModal/ExpenseSummary.vue'
import Credit from '@/components/ViewModal/CreditSummary.vue'
import Bar from '@/components/ViewModal/Charts/Summary/Bar-Chart.vue'
import Pie from '@/components/ViewModal/Charts/Summary/Pie-Chart.vue'

export default {
  components: { Expense, Credit, Bar, Pie }
}
</script>

<style scoped>
.container {
  background: white;
  border-radius: 24px;
  padding: 20px;
  max-width: 80%;
  box-shadow: 5px 5px 5px grey;
}

header {
  font-weight: bold;
  font-size: 1.5rem;
  margin: 10px;
}

.status {
  margin: 30px auto;
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
}

.expense {
  padding: 10px;
  font-size: 1.2rem;
}

.credit {
  padding: 10px;
  font-size: 1.2rem;
}

.balance {
  border-left: dotted #e0e0e0;
  font-size: 1.3rem;
}

.chart {
  flex-grow: 1;
}

@media (max-width: 600px) {
  .container {
    max-width: 100%;
  }

  .expense {
    font-size: 1rem;
  }

  .credit {
    font-size: 1rem;
  }

  .balance {
    font-size: 1rem;
  }
}
</style>

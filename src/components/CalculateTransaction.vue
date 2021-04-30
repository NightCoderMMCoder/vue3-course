<template>
  <h4>Your Balance</h4>
  <h1 id="balance">${{ totalBalance }}</h1>

  <div class="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p id="money-plus" class="money plus">+${{ calculateIncome }}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p id="money-minus" class="money minus">-${{ calculateExpense }}</p>
    </div>
  </div>
</template>

<script>
import { computed, toRefs } from "vue";
import useFormatToCurrency from "../composables/FormatToCurrency";

export default {
  props: { transactions: Array },
  setup(props) {
    const { transactions } = toRefs(props);
    const { formatToCurrency } = useFormatToCurrency();
    const calculateIncome = computed(() =>
      formatToCurrency(
        transactions.value
          .filter((transaction) => transaction.amount > 0)
          .reduce((total, cur) => (total += cur.amount), 0)
      )
    );
    const calculateExpense = computed(() =>
      formatToCurrency(
        transactions.value
          .filter((transaction) => transaction.amount < 0)
          .reduce((total, cur) => (total -= cur.amount), 0)
      )
    );

    const totalBalance = computed(() =>
      formatToCurrency(
        transactions.value.reduce((total, cur) => (total += cur.amount), 0)
      )
    );
    return { calculateIncome, calculateExpense, totalBalance };
  },
};
</script>

<style scoped>
.inc-exp-container {
  background-color: #fff;
  box-shadow: var(--box-shadow);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

.inc-exp-container > div {
  flex: 1;
  text-align: center;
}

.inc-exp-container > div:first-of-type {
  border-right: 1px solid #dedede;
}

.money {
  font-size: 20px;
  letter-spacing: 1px;
  margin: 5px 0;
}

.money.plus {
  color: #2ecc71;
}

.money.minus {
  color: #c0392b;
}
</style>

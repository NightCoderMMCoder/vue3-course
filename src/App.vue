<template>
  <the-hader></the-hader>
  <div class="container">
    <calculate-transaction></calculate-transaction>

    <transacitons-list :transactions="transactions"></transacitons-list>

    <add-transaciton></add-transaciton>
  </div>
</template>

<script>
import { provide, ref } from "vue";
import AddTransaciton from "./components/AddTransaciton.vue";
import CalculateTransaction from "./components/CalculateTransaction.vue";
import TheHader from "./components/Layout/TheHader.vue";
import TransacitonsList from "./components/TransacitonsList.vue";
export default {
  components: {
    TheHader,
    CalculateTransaction,
    TransacitonsList,
    AddTransaciton,
  },
  name: "App",
  setup() {
    const transactions = ref([
      {
        id: 1,
        text: "Shopping",
        amount: -300,
      },
      {
        id: 2,
        text: "Salary",
        amount: 100000,
      },
    ]);

    const deleteTransaction = (id) => {
      const index = transactions.value.findIndex(
        (transaction) => transaction.id === id
      );
      transactions.value.splice(index, 1);
    };
    provide("deleteTransaction", deleteTransaction);

    const addTransaction = (transaction) => {
      transactions.value.push(transaction);
    };
    provide("addTransaction", addTransaction);
    return { transactions, deleteTransaction };
  },
};
</script>

<template>
  <the-hader></the-hader>
  <div class="container">
    <calculate-transaction :transactions="transactions"></calculate-transaction>
    <div v-if="isLoading">Loading...</div>
    <transacitons-list v-else :transactions="transactions"></transacitons-list>

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
    const isLoading = ref(true);
    const transactions = ref([]);
    fetch("http://localhost:3000/transactions")
      .then((res) => res.json())
      .then((data) => {
        transactions.value = data.reverse();
        isLoading.value = false;
      });

    const deleteTransaction = (id) => {
      const index = transactions.value.findIndex(
        (transaction) => transaction.id === id
      );
      transactions.value.splice(index, 1);
    };
    provide("deleteTransaction", deleteTransaction);

    const addTransaction = (transaction) => {
      fetch("http://localhost:3000/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transaction),
      })
        .then((res) => res.json())
        .then((data) => {
          transactions.value.unshift(data);
        });
    };
    provide("addTransaction", addTransaction);
    return { transactions, deleteTransaction, isLoading };
  },
};
</script>

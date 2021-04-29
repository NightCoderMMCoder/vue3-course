<template>
  <the-hader></the-hader>

  <div class="container">
    <calculate-transaction></calculate-transaction>

    <transacitons-list :transactions="transactions"></transacitons-list>

    <add-transaciton></add-transaciton>
  </div>
</template>

<script>
import { ref } from "vue";
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
    return { transactions };
  },
};
</script>

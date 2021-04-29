<template>
  <the-hader></the-hader>

  <div class="container">
    <calculate-transaction></calculate-transaction>

    <transacitons-list></transacitons-list>

    <add-transaciton></add-transaciton>
  </div>
</template>

<script>
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
};
</script>

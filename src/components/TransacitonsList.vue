<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <TransactionItem
      v-for="transaction in transactions"
      :key="transaction.id"
      :transaction="transaction"
    />
  </ul>
</template>

<script>
import TransactionItem from "./TransactionItem";
export default {
  props: { transactions: Array },
  components: { TransactionItem },
};
</script>

<style scoped>
.list {
  list-style-type: none;
  padding: 0;
  margin-bottom: 40px;
}
</style>

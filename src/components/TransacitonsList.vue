<template>
  <teleport to=".modal">
    <BaseDialog v-if="open">
      <template v-slot:header>
        Just Checking...
      </template>
      <template #body>
        <p>Are you sure to delete?</p>
      </template>
      <template #actions>
        <base-button class="flat" @click="confirmDelete(false)">
          Cancel
        </base-button>
        <base-button @click="confirmDelete(true)">Ok</base-button>
      </template>
    </BaseDialog>
  </teleport>
  <h3>History</h3>
  <transition-group name="slide" tag="ul">
    <TransactionItem
      v-for="transaction in transactions"
      :key="transaction.id"
      :transaction="transaction"
      @delete-confirm="handleClick"
    />
  </transition-group>
</template>

<script>
import { inject, ref } from "vue";
import TransactionItem from "./TransactionItem";
import BaseDialog from "./UI/BaseDialog";
export default {
  props: { transactions: Array },
  components: { TransactionItem, BaseDialog },
  setup() {
    const open = ref(false);
    const transactionId = ref(null);
    const deleteTransaction = inject("deleteTransaction");

    const handleClick = (id) => {
      open.value = true;
      transactionId.value = id;
    };
    const confirmDelete = (confirm) => {
      if (confirm) {
        deleteTransaction(transactionId.value);
      }
      open.value = false;
    };
    return { open, confirmDelete, handleClick };
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin-bottom: 40px;
  position: relative;
}
.slide-enter-from {
  opacity: 0;
  transform: translateX(-100px);
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.slide-leave-active {
  position: absolute;
}
</style>

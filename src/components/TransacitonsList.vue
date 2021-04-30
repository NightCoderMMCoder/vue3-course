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
  <ul id="list" class="list">
    <transition-group name="slide">
      <TransactionItem
        v-for="transaction in transactions"
        :key="transaction.id"
        :transaction="transaction"
        @delete-confirm="handleClick"
      />
    </transition-group>
  </ul>
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
.list {
  list-style-type: none;
  padding: 0;
  margin-bottom: 40px;
}
.slide-enter-from {
  opacity: 0;
  transform: translateX(-100px);
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.slide-enter-active,
.slide-leave-active {
  transition: all 1s ease-in-out;
}
</style>

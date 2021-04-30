<template>
  <h3>Add new transaction</h3>
  <form @submit.prevent="addTransaction">
    <div class="form-control">
      <label for="text">Text</label>
      <input
        type="text"
        id="text"
        class="errorBox"
        placeholder="Enter text..."
        v-model.trim="transaction.text"
      />
      <small class="error">Please fill the text</small>
    </div>
    <div class="form-control">
      <label for="amount"
        >Amount <br />
        (negative - expense, positive - income)</label
      >
      <input
        type="number"
        id="amount"
        class="errorBox"
        placeholder="Enter amount..."
        v-model.number="transaction.amount"
      />
      <small class="error">Please fill the amount</small>
    </div>
    <button class="btn" type="submit">Add transaction</button>
  </form>
</template>

<script>
import { inject, reactive, toRefs } from "vue";
export default {
  setup() {
    const createTransaction = inject("addTransaction");
    const state = reactive({
      transaction: {
        text: "",
        amount: "",
      },
      errors: {},
    });

    const addTransaction = () => {
      createTransaction({
        ...state.transaction,
        id: Math.floor(Math.random() * 100000000),
      });
      state.transaction.text = "";
      state.transaction.amount = "";
    };
    return { ...toRefs(state), addTransaction };
  },
};
</script>

<style scoped>
.error {
  color: red;
}
.errorBox {
  border: 1px solid red;
}
</style>

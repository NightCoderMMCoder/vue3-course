<template>
  <h3>Add new transaction</h3>
  <form @submit.prevent="addTransaction">
    <div class="form-control">
      <label for="text">Text</label>
      <input
        type="text"
        id="text"
        :class="{ errorBox: errors.text }"
        placeholder="Enter text..."
        v-model.trim="transaction.text"
        @blur="clearValidation('text')"
      />
      <small class="error" v-if="errors.text">{{ errors.text }}</small>
    </div>
    <div class="form-control">
      <label for="amount"
        >Amount <br />
        (negative - expense, positive - income)</label
      >
      <input
        type="number"
        id="amount"
        :class="{ errorBox: errors.amount }"
        placeholder="Enter amount..."
        v-model.number="transaction.amount"
        @blur="clearValidation('amount')"
      />
      <small class="error" v-if="errors.amount">{{ errors.amount }}</small>
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

    const clearValidation = (input) => {
      if (!state.transaction[input]) return;
      state.errors[input] = "";
    };

    const notValidate = () => {
      let isError = false;
      if (!state.transaction.text) {
        state.errors.text = "Please fill the text";
        isError = true;
      }
      if (!state.transaction.amount) {
        state.errors.amount = "Please fill the amount";
        isError = true;
      }
      if (state.transaction.amount === 0) {
        state.errors.amount = "Amount must not be 0";
        isError = true;
      }
      return isError;
    };

    const addTransaction = () => {
      if (!notValidate()) {
        createTransaction({
          ...state.transaction,
          id: Math.floor(Math.random() * 100000000),
        });
        state.transaction.text = "";
        state.transaction.amount = "";
      }
    };
    return { ...toRefs(state), addTransaction, clearValidation };
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

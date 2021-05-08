import { reactive } from "vue";

const state = reactive({
  name: "Aung Myat Oo",
  count: 0,
});

const increaseCount = () => {
  state.count++;
};
const decreaseCount = () => {
  state.count--;
};

export default { state, increaseCount, decreaseCount };

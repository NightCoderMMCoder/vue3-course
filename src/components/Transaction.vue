<template>
  <li :class="listClasses">
    {{ transaction.text }}
    <span>{{ minusOrPlus }}${{ Math.abs(transaction.amount) }}</span
    ><button class="delete-btn">x</button>
  </li>
</template>

<script>
import { computed } from "vue";
export default {
  props: { transaction: Object },
  setup(props) {
    const listClasses = computed(() => {
      if (props.transaction.amount > 0) return "plus";
      return "minus";
    });
    const minusOrPlus = computed(() => {
      if (props.transaction.amount > 0) return "+";
      return "-";
    });
    return { listClasses, minusOrPlus };
  },
};
</script>

<style scoped>
li {
  background-color: #fff;
  box-shadow: var(--box-shadow);
  color: #333;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 10px;
  margin: 10px 0;
}

li.plus {
  border-right: 5px solid #2ecc71;
}

li.minus {
  border-right: 5px solid #c0392b;
}

.delete-btn {
  cursor: pointer;
  background-color: #e74c3c;
  border: 0;
  color: #fff;
  font-size: 20px;
  line-height: 20px;
  padding: 2px 5px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-100%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

li:hover .delete-btn {
  opacity: 1;
}
</style>

<template>
  <transition-group tag="ul" name="slide">
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      class="list"
    ></TodoItem>
  </transition-group>
  <div
    v-for="(expen, index) in expense"
    :key="expen.id"
    @click="handleClick(index)"
  >
    {{ expen.text }}
  </div>
</template>

<script>
import { inject } from "vue";
import TodoItem from "./TodoItem.vue";
export default {
  components: { TodoItem },
  setup() {
    const todos = inject("todos");
    return { todos };
  },
  inject: ["expense", "handleClick"],
};
</script>

<style scoped>
ul {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}
li {
  display: inline-block;
  transition: all 1s;
}
.slide-enter-from {
  opacity: 0;
  transform: translateX(-40px);
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(40px);
}
.slide-leave-active {
  position: absolute;
}
/* .slide-move {
  transition: transform 1s ease;
} */
</style>

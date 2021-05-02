<template>
  <div class="contact-list">
    <user-item></user-item>
  </div>
</template>

<script>
import UserItem from "./UserItem.vue";

export default {
  components: { UserItem },
  async setup() {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    console.log(data);
  },
};
</script>

<style scoped></style>

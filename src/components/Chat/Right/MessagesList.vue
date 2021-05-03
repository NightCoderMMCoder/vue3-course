<template>
  <div class="chats-list">
    <div class="message-container sender">
      <div class="user-img">A</div>
      <div class="message-text">
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, iure.
          Omnis sunt nisi perferendis vero sequi possimus nobis? Rerum
          laboriosam nostrum consequuntur doloremque, quis placeat laborum
          assumenda quibusdam recusandae architecto!
        </h3>
        <small>Today 8:40</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.chats-list {
  padding: 15px 10px;
  height: 77.52vh;
  overflow-y: auto;
  width: 100%;
}
.message-container {
  display: flex;
  align-items: flex-end;
  margin-bottom: 20px;
}
.message-container .user-img {
  width: 50px;
  height: 50px;
  font-size: 20px;
}
.message-text {
  margin-left: 10px;
  position: relative;
  max-width: 400px;
}
.message-text h3 {
  background: var(--primary);
  padding: 10px;
  border-radius: 20px;
  font-weight: normal;
}
.message-text small {
  width: 200px;
  position: absolute;
  bottom: -23px;
  color: var(--input-color);
  font-size: 14px;
}

.sender {
  flex-direction: row-reverse;
}
.message-container.sender .user-img {
  background: #387c6d;
}
.sender .message-text {
  margin-right: 10px;
}
.sender .message-text h3 {
  background: #387c6d;
}
.sender .message-text small {
  right: 10px;
  text-align: right;
}
</style>

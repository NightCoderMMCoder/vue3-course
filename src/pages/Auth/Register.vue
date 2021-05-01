<template>
  <div class="row">
    <div class="card">
      <div class="card-header">
        <h3>Register</h3>
      </div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" class="form-control" />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" class="form-control" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" class="form-control" />
          </div>
          <base-button>Register</base-button>
        </form>
        <p>
          Not a member?
          <router-link :to="{ name: 'Login' }"
            ><span>Sign up now</span></router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
p {
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  color: rgb(221, 221, 221);
}
p span {
  color: #fff;
  cursor: pointer;
  text-decoration: underline;
}
</style>

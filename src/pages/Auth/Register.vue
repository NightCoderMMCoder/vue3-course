<template>
  <div class="row">
    <div class="card">
      <div class="card-header">
        <h3>Register</h3>
      </div>
      <div class="card-body">
        <form @submit.prevent="register">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              class="form-control"
              v-model.trim="name"
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              class="form-control"
              v-model.trim="email"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              class="form-control"
              v-model.trim="password"
            />
          </div>
          <base-button type="submit">Register</base-button>
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
import { reactive, toRefs } from "vue";
import { db, firebaseAuth } from "../../firebase/init";
export default {
  setup() {
    const user = reactive({
      name: "",
      email: "",
      password: "",
    });

    const register = async () => {
      let res = await firebaseAuth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );
      await res.user.updateProfile({ displayName: user.name });
      db.collection("users")
        .doc(res.user.uid)
        .set({
          name: user.name,
          email: user.email,
          status: true,
        });
      console.log(res);
    };

    return { ...toRefs(user), register };
  },
};
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

<template>
  <div class="row">
    <div class="card">
      <div class="card-header">
        <h3>Login</h3>
      </div>
      <div class="card-body">
        <div class="errors" v-if="errors.error">
          {{ errors.error }}
        </div>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              class="form-control"
              v-model.trim="email"
            />
            <small v-if="errors.email" class="error">{{ errors.email }}</small>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              class="form-control"
              v-model.trim="password"
            />
            <small v-if="errors.password" class="error">{{
              errors.password
            }}</small>
          </div>
          <base-button type="submit"
            >Login <base-spinner v-if="isLoading"></base-spinner
          ></base-button>
        </form>
        <p>
          Have already account?
          <router-link :to="{ name: 'Register' }"
            ><span>Login here</span></router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue";
import { firebaseAuth } from "../../firebase/init";
import { useRouter } from "vue-router";
import BaseSpinner from "../../components/UI/BaseSpinner.vue";
import useValidation from "../../hooks/validation";

export default {
  components: { BaseSpinner },
  setup() {
    const { errors, validation } = useValidation();
    const router = useRouter();

    const user = reactive({
      email: "",
      password: "",
    });
    const isLoading = ref(false);

    const login = async () => {
      let formValidate = validation({ ...user });
      if (formValidate) {
        isLoading.value = true;
        try {
          await firebaseAuth.signInWithEmailAndPassword(
            user.email,
            user.password
          );
          isLoading.value = false;
          router.push({ name: "ChatScreen" });
        } catch (error) {
          isLoading.value = false;
          errors.value.error = error.message;
        }
      }
    };

    return { ...toRefs(user), login, errors, isLoading };
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

<template>
  <div class="row">
    <div class="card">
      <div class="card-header">
        <h3>Register</h3>
      </div>
      <div class="card-body">
        <div class="errors" v-if="errors.error">
          {{ errors.error }}
        </div>
        <form @submit.prevent="register">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              class="form-control"
              v-model.trim="name"
            />
            <small v-if="errors.name" class="error">{{ errors.name }}</small>
          </div>
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
            >Register <base-spinner v-if="isLoading"></base-spinner
          ></base-button>
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
import { reactive, ref, toRefs } from "vue";
import { db, firebaseAuth, timestamp } from "../../firebase/init";
import { useRouter } from "vue-router";
import BaseSpinner from "../../components/UI/BaseSpinner.vue";
import useValidation from "../../hooks/validation";

export default {
  components: { BaseSpinner },
  setup() {
    const { errors, validation } = useValidation();

    const router = useRouter();

    const user = reactive({
      name: "",
      email: "",
      password: "",
    });
    const isLoading = ref(false);

    const register = async () => {
      let formValidate = validation({ ...user });
      if (formValidate) {
        isLoading.value = true;
        try {
          let res = await firebaseAuth.createUserWithEmailAndPassword(
            user.email,
            user.password
          );
          await res.user.updateProfile({ displayName: user.name });

          await db
            .collection("users")
            .doc(res.user.uid)
            .set({
              name: user.name,
              email: user.email,
              status: true,
              createdAt: timestamp(),
            });
          isLoading.value = false;
          router.push({ name: "ChatScreen" });
        } catch (error) {
          isLoading.value = false;
          errors.value.error = error.message;
        }
      }
    };

    return { ...toRefs(user), register, errors, isLoading };
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

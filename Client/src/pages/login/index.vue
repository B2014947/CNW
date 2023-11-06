<template>
  <div class="lg-container">
    <form @submit.prevent="onSubmit">
      <h1>Log In</h1>
      <div class="form-group">
        <input
          v-model="formData.username"
          class="form-control"
          placeholder="Email address or phone number"
          autocomplete="current-username"
        />
      </div>

      <div class="form-group">
        <input
          v-model="formData.password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="current-password"
        />
      </div>

      <div class="form-group">
        <a href="#"> Forgotten password? </a>
      </div>

      <div class="form-group">
        <button type="submit" class="btn btn-primary">Log in</button>
      </div>

      <div class="form-group">
        <p>
          Don't have an account?
          <router-link to="/login-page/sign-up">
            <a href="#">Register here for free!</a></router-link
          >
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "vue";

export default {
  setup() {
    const router = useRouter();
    const formData = ref({
      username: "",
      password: "",
    });

    const onSubmit = async () => {
      try {
        const response = await window.axios.post(
          "http://localhost:3000/api/users/login",
          formData.value
        );
        if (response.status === 200) {
          router.push("/");
          console.log("Login success");
        } else {
          console.log("Login failed");
        }
      } catch (error) {
        console.error("An error occurred while logging in:", error);
      }
    };

    return {
      formData,
      onSubmit,
    };
  },
};
</script>
<style scoped>
@import url("@/assets/Login/login.css");
</style>

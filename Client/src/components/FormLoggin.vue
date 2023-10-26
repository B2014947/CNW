<script setup>
import { ref } from "vue";
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
const props = defineProps({
  initialAccounts: {
    type: Object,
    required: true,
  },
});
const $emit = defineEmits(["submit:Account"]);
const LogginFormSchema = yup.object().shape({
  user_name: yup.string().required("Username cannot be empty"),
  pass_word: yup.string().required("Password cannnot be empty"),
});
const checkedAccount = ref({
  ...props.initialAccounts,
});

function submitAccount() {
  $emit("submit:Account", checkedAccount.value);
}
</script>

<template>
  <div class="container">
    <div class="row">
      <!-- introduction home page -->
      <div class="col info">
        <div class="title">
          <img src="/homepage.jpg" alt="" />
          <h1></h1>
        </div>
      </div>

      <div class="col form justify-content-center">
        <Form @submit="submitAccount" :validation-schema="LogginFormSchema">
          <div class="form-group">
            <Field
              name="user_name"
              type="text"
              class="form-control"
              placeholder="Email address or phone number"
              v-model="checkedAccount.user_name"
            />
            <ErrorMessage name="user_name" class="error-feedback" />
          </div>

          <div class="form-group">
            <Field
              name="pass_word"
              type="password"
              class="form-control"
              placeholder="Password"
              v-model="checkedAccount.pass_word"
            />
            <ErrorMessage name="pass_word" class="error-feedback" />
          </div>

          <div class="form-group">
            <button type="submit" class="btn btn-primary">Log In</button>
          </div>

          <div class="form-group">
            <a href="#">Forrgot password?</a>
          </div>

          <div class="form-group">
            <button>Create new account</button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/LoginForm.css";
@import "@/assets/boostrap.css";
</style>

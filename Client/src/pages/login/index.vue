<template>
  <div>
    <a-form
      :model="formData"
      name="basic"
      @finish="onSubmit"
      @finishFailed="onError"
    >
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input
          v-model:value="formData.username"
          autocomplete="current-username"
        />
      </a-form-item>

      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password
          v-model:value="formData.password"
          autocomplete="current-password"
        />
      </a-form-item>

      <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <a-checkbox v-model:checked="formData.remember">
          Remember me
        </a-checkbox>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">Continue</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const formData = ref({
  username: "",
  password: "",
  remember: true,
});

const onSubmit = async (_formData) => {
  try {
    const response = await window.axios.post(
      "http://localhost:3000/api/users/login",
      _formData
    );
    if (response.status === 200) {
      console.log("Login success");
    } else {
      console.log("Login failed");
    }
  } catch (error) {
    console.error("An error occurred while logging in:", error);
  }
};

const onError = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
</script>

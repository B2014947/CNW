<template>
  <div>
    <a-form
      :model="formData"
      name="basic"
      autocomplete="off"
      @finish="onSubmit"
      @finishFailed="onError"
    >
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formData.username" />
      </a-form-item>

      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formData.password" />
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
  console.log("Form Submitted!:", _formData);
  await fetch("https://some.api/process-form", {
    method: "POST",
    body: _formData,
  });
};

const onError = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
</script>

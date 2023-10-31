<template>
  <div>
    <h1>Đây là trang quản lí user của admin</h1>
  </div>
</template>
<script>
import { useMenu } from "../../../stores/use-menu";
export default {
  setup() {
    useMenu().onSelectedKeys(["admin-users"]);

    const getUsers = () => {
      axios
        .get("http://localhost:3000/api/users/getusers")
        .then(function (response) {
          // xử trí khi thành công
          console.log(response);
        })
        .catch(function (error) {
          // xử trí khi bị lỗi
          console.log(error);
        });
    };
    getUsers();
  },
};
</script>

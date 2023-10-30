<template>
  <div>
    <h1>Đây là trang quản lí Roles</h1>
  </div>
</template>
<script>
import { useMenu } from "../../../stores/use-menu";
export default {
  setup() {
    useMenu().onSelectedKeys(["admin-roles"]);
  },
};
</script>

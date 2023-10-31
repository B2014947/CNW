<template>
  <div>
    <h1>Đây là trang setting</h1>
  </div>
</template>
<script>
import { useMenu } from "../../../stores/use-menu";
export default {
  setup() {
    useMenu().onSelectedKeys(["admin-settings"]);
  },
};
</script>

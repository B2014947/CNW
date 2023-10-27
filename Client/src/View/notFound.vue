<template>
  <div class="not-found">
    <h1>404 - Trang không tồn tại</h1>
    <p>Xin lỗi, trang bạn đang tìm kiếm không tồn tại.</p>
    <router-link to="../admin">Trở về trang chủ</router-link>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 20px;
}
</style>

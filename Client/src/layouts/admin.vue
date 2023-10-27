<script setup>
import theHeader from "../components/Ad_theHeader.vue";
</script>

<template>
  <div>
    <theHeader />

    <div class="container-fuild">
      <div class="row">
        <div class="col-sm-3">SIDER BAR</div>

        <div class="col-sm-3"><router-view></router-view></div>
      </div>
    </div>
  </div>
</template>

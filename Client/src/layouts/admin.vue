<script setup>
import theHeader from "../components/Ad_theHeader.vue";
import theMenu from "../components/Ad_theMenu.vue";
</script>

<template>
  <div>
    <theHeader />

    <div class="container-fluid mt-3">
      <div class="row">
        <div class="col-sm-3">
          <a-list bordered style="width: 100%">
            <theMenu />
            <template #header>
              <div>DASHBOARD</div>
            </template>
          </a-list>
        </div>

        <div class="col-sm-9">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

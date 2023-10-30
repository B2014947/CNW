<template>
  <a-menu :open-keys="openKeys" :selected-keys="selectedKeys" mode="inline">
    <a-menu-item key="admin-users">
      <router-link :to="{ name: 'admin-users' }">
        <span>Accounts</span>
      </router-link>
    </a-menu-item>

    <a-menu-item key="admin-roles">
      <router-link :to="{ name: 'admin-roles' }">
        <span>Roles</span>
      </router-link>
    </a-menu-item>

    <a-menu-item key="admin-settings">
      <router-link :to="{ name: 'admin-settings' }">
        <span>Settings</span>
      </router-link>
    </a-menu-item>
  </a-menu>
</template>

<script>
import { defineComponent } from "vue";
import { useMenu } from "../stores/use-menu";
import { storeToRefs } from "pinia";
export default defineComponent({
  setup() {
    const stores = useMenu;
    return {
      ...storeToRefs(stores),
    };
  },
});
</script>

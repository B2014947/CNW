<template>
  <a-menu :open-keys="openKeys" :selected-keys="selectedKeys" mode="inline">
    <a-menu-item key="admin-users">
      <router-link :to="{ name: 'admin-users' }">
        <span> <UserOutlined class="me-2" />Accounts </span>
      </router-link>
    </a-menu-item>

    <a-menu-item key="admin-products">
      <router-link :to="{ name: 'admin-products' }">
        <span> <SkinOutlined class="me-2" />Products</span>
      </router-link>
    </a-menu-item>

    <a-menu-item key="admin-settings">
      <router-link :to="{ name: 'admin-settings' }">
        <span> <SettingOutlined class="me-2" />Settings</span>
      </router-link>
    </a-menu-item>
  </a-menu>
</template>

<script>
import {
  UserOutlined,
  SkinOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";
import { defineComponent } from "vue";
import { useMenu } from "../stores/use-menu";
import { storeToRefs } from "pinia";
export default defineComponent({
  components: {
    UserOutlined,
    SkinOutlined,
    SettingOutlined,
  },
  setup() {
    const stores = useMenu;
    return {
      ...storeToRefs(stores),
    };
  },
});
</script>

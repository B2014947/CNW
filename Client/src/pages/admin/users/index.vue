<template>
  <div>
    <a-card title="LIST ACCOUNTS" style="width: 100%">
      <div class="row">
        <div class="col-12">
          <a-table :dataSource="users" :columns="columns">
            <template #bodyCell="{ column, index, text }">
              <template v-if="column.key === 'index'">
                <span>{{ index + 1 }}</span>
              </template>
              <template v-else-if="column.key === 'RegistrationDate'">
                <span>{{ formatDatetime(text) }}</span>
              </template>
              <template v-else>
                <span>{{ text }}</span>
              </template>
            </template>
          </a-table>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script>
import { useMenu } from "../../../stores/use-menu";
import { defineComponent, ref } from "vue";
import moment from "moment";

export default defineComponent({
  setup() {
    useMenu().onSelectedKeys(["admin-users"]);

    const columns = [
      {
        title: "No.",
        key: "index",
      },
      {
        title: "Username",
        dataIndex: "Username",
        key: "name",
      },
      {
        title: "Password",
        dataIndex: "Password",
        key: "passwd",
      },

      {
        title: "Status",
        dataIndex: "StatusID",
        key: "status",
      },
      {
        title: "RegistrationDate",
        dataIndex: "RegistrationDate",
        key: "RegistrationDate",
      },
    ];

    const formatDatetime = (datetime) => {
      return moment(datetime).format("DD/MM/YYYY (HH:mm)"); // Định dạng theo định dạng "18/12/2023 (23:00)"
    };

    const users = ref([]);
    const getUsers = () => {
      axios
        .get("http://localhost:3000/api/users/getusers")
        .then(function (response) {
          users.value = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    getUsers();

    return { users, columns, formatDatetime };
  },
});
</script>

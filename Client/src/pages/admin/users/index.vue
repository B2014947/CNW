<template>
  <div>
    <a-card title="LIST ACCOUNTS" style="width: 100%">
      <div class="row">
        <div class="col-12">
          <a-table :dataSource="users" :columns="columns">
            <template #bodyCell="{ column, index, record, text }">
              <template v-if="column.key === 'index'">
                <span>{{ index + 1 }}</span>
              </template>

              <template v-else-if="column.key === 'status'">
                <span v-if="record.StatusID == 1" class="text-success">{{
                  record.StatusName
                }}</span>
                <span v-if="record.StatusID == 2" class="text-warning">{{
                  record.StatusName
                }}</span>
                <span v-if="record.StatusID == 3" class="text-danger">{{
                  record.StatusName
                }}</span>
              </template>

              <template v-else-if="column.key === 'tools'">
                <span>
                  <button>
                    <font-awesome-icon icon="trash" style="color: #ff2e2e" />
                  </button>
                </span>
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

      {
        title: "Tools",
        dataIndex: "",
        key: "tools",
      },
    ];

    const formatDatetime = (datetime) => {
      return moment(datetime).format("DD/MM/YYYY (HH:mm)"); // Định dạng theo định dạng "18/12/2023 (23:00)"
    };

    const users = ref([]);
    const getUsers = () => {
      axios
        .get("http://localhost:3000/api/users/getusers?page=")
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

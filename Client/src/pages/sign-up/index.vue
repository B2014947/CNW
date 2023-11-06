<template>
  <div class="lg-container">
    <form class="row g-3">
      <h1>Sign Up</h1>
      <p><small>It's quick and easy.</small></p>

      <!-- input EMAIL -->
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label"
          >Email or phone number</label
        >
        <input type="text" class="form-control" id="inputEmail4" />
      </div>

      <!-- input PASSWD -->
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          v-model="password"
          id="inputPassword4"
        />
      </div>

      <div class="col-12">
        <label for="inputPassword5" class="form-label"
          >Re-Enter the password</label
        >
        <input
          type="password"
          class="form-control"
          v-model="confirmPassword"
          id="inputPassword5"
        />
        <div v-if="passwordsDoNotMatch" class="text-danger">
          <i>Passwords do not match.</i>
        </div>
      </div>

      <!-- input FIRST-NAME -->
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">First Name</label>
        <input type="email" class="form-control" id="inputEmail4" />
      </div>

      <!-- input LAST-NAME -->
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">Last Name</label>
        <input type="password" class="form-control" id="inputPassword4" />
      </div>

      <!-- input ADDRESS -->
      <div class="col-12">
        <label for="inputAddress" class="form-label">Address</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder=""
        />
      </div>

      <label for="inputState" class="form-label">Date of Birh</label>
      <div class="col-md-4">
        <select id="inputState" name="day" class="form-select">
          <option selected>Date</option>
          <option v-for="day in days" :key="day" :value="day">{{ day }}</option>
        </select>
      </div>

      <div class="col-md-4">
        <select name="month" class="form-select">
          <option selected>Month</option>
          <option v-for="month in months" :key="month" :value="month">
            {{ month }}
          </option>
        </select>
      </div>

      <div class="col-md-4">
        <select name="year" class="form-select">
          <option selected>Year</option>
          <option v-for="year in years" :key="year" :value="year">
            {{ year }}
          </option>
        </select>
      </div>

      <div class="col-12">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck" />
          <label class="form-check-label" for="gridCheck"
            >Agree to <router-link to="#">the terms?</router-link></label
          >
        </div>
      </div>

      <div class="col-12">
        <button type="submit" class="btn btn-primary">Sign up</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: [],
      months: [],
      years: [],
      password: "",
      confirmPassword: "",
      passwordsDoNotMatch: false,
    };
  },
  created() {
    for (let day = 1; day <= 31; day++) {
      this.days.push(day);
    }

    for (let month = 1; month <= 12; month++) {
      this.months.push(month);
    }

    for (let year = 1900; year <= 2099; year++) {
      this.years.push(year);
    }
  },
  computed: {
    // eslint-disable-next-line vue/no-dupe-keys
    passwordsDoNotMatch() {
      return this.password !== this.confirmPassword;
    },
    methods: {
      // signup function
      signup() {
        if (this.passwordsDoNotMatch) {
          this.passwordsDoNotMatch = true;
        } else {
          this.passwordsDoNotMatch = false;
        }
      },
    },
  },
};
</script>

<style scoped>
@import url("@/assets/Login/login.css");
</style>

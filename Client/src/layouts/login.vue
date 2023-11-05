<template>
  <div>
    <div class="container-fluid mt-3">
      <div class="position-absolute top-50 start-0">
        <router-link to="/login-page/sign-up"
          ><button>SIGN UP</button></router-link
        >
        <router-link to="/login-page/login"><button>LOGIN</button></router-link>
      </div>
      <div class="position-absolute top-50 start-50">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

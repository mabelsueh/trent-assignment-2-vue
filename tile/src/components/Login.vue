<template>
  <div>
    <div class="container">
      <h1>Admin Login</h1>
      <div>
        <b-form-group id="formgroup">
          <label>Username:</label>
          <b-form-input
            type="text"
            label="username"
            class="mb-2"
            v-model="vModelUserLogin"
          />
          <label>Password:</label>
          <b-form-input
            type="password"
            label="password"
            size="sm"
            v-model="vModelUserPw"
          />
          <p v-bind:style="{ color: 'red', fontSize: '15px' }">
            {{ loginError }}
          </p>
          <b-button v-on:click="adminLogin" variant="warning" size="sm"
            >Login</b-button
          >
        </b-form-group>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      vModelUserLogin: "",
      vModelUserPw: "",
      loginError: "",
    };
  },
  methods: {
    adminLogin: async function () {
      let response = await axios.get(
        "https://8080-b7315246-f510-4e1a-931e-c953f9f5cf27.ws-us03.gitpod.io/users"
      );
      this.users = response.data;
      this.error = "";

      if (
        this.vModelUserLogin.username === this.users.username &&
        this.vModelUserPw.password === this.users.password
      ) {
        this.loginError = "";
        alert("Logged In");
        this.$router.push("manage");
      } else {
        this.loginError = "Incorrect Password";
      }
    },
  },
};
</script> 

<style scoped>
.container {
  color: white;
  font-weight: bold !important;
}
</style> -->
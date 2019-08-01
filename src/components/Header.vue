<template>
  <div class="container">
    <h1 class="headerName" @click="goHomePage">Films forum</h1>
    <div class="buttonsWraper">
      <my-auth-button class="authButton" v-if="!getAuth" :onClick="login" buttonType="Login"></my-auth-button>
      <h4 v-if="getAuth">Igor</h4>
    </div>
  </div>
</template>

<script>

import AuthButton from "./AuthButton";
import { mapGetters } from "vuex";
import * as types from "../store/types";

export default {
  computed: {
    ...mapGetters({
      getAuth: types.GETTERS_GET_AUTH
    })
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    goHomePage() {
      this.$router.push("/");
    }
  },
  components: {
    "my-auth-button": AuthButton
  }
};
</script>

<style>
.container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: #3c948b;
  color: white;
  margin-bottom: 15px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 20px 0;
}

.headerName {
  margin-left: 15px;
  cursor: pointer;
}

.buttonsWraper {
  display: flex;
  flex-flow: row nowrap;
  margin-right: 15px;
}
</style>

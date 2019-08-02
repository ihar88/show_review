<template>
  <div class="container">
    <h1 class="headerName" @click="goHomePage">Show review</h1>
    <div class="buttonsWraper">
      <my-auth-button v-if="!getAuth" class="authButton" :onClick="singup" buttonType="SingUp"></my-auth-button>
      <my-auth-button v-if="!getAuth" class="authButton" :onClick="singin" buttonType="SingIn"></my-auth-button>
    </div>
  </div>
</template>

<script>
import AuthButton from "./AuthButton";
import { mapGetters, mapActions } from "vuex";
import * as types from "../store/types";

export default {
  computed: {
    ...mapGetters({
      getAuth: types.GETTERS_GET_AUTH
    })
  },
  methods: {
    ...mapActions({
      singupOnClick: types.ACTION_SING_UP_USER
    }),
    singin() {
      this.$router.push({
        name: "login",
        params: { buttonName: "SING IN" }
      });
    },
    singup() {
      this.$router.push({
        name: "login",
        params: { buttonName: "SING UP", onClick: this.singupOnClick }
      });
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

<style scoped>
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

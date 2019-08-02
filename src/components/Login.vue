<template>
  <div class="loginContainer">
    <div>
      <span>Please enter your name and password below :</span>
    </div>
    <form class="loginForm" @submit.prevent="validateUser">
      <input class="nameInput" v-model="name" type="text" />
      <input class="passwordInput" v-model="password" type="password" />
      <span
        class="loginErrorText"
        v-if="showAlertMessage"
      >Can't find user.Try to enter correct name and password</span>
      <button v-if="!buttonName" @click.prevent="validateUser" class="loginButton">SING IN</button>
      <button v-else @click.prevent="validateUser" class="loginButton">{{buttonName}}</button>
    </form>
  </div>
</template>

<script>
import * as types from "../store/types";
import { mapActions, mapGetters } from "vuex";
import store from "../store/store";

export default {
  props: ["buttonName", "onClick"],
  data() {
    return {
      name: "",
      password: "",
      showAlertMessage: false
    };
  },
  computed: {
    ...mapGetters({
      userInfo: types.GETTERS_GET_USER,
      currentShowItem: types.GETTERS_CURRENT_SHOW_ITEM
    })
  },
  methods: {
    ...mapActions({
      login: types.ACTION_CHANGE_AUTH
    }),
    clearInputs() {
      this.name = "";
      this.password = "";
    },
    validateUser() {
      if (this.buttonName === "SING IN" || !this.buttonName) {
        if (
          this.userInfo.some(user => user.name === this.name) &&
          this.userInfo.some(user => user.password === this.password)
        ) {
          this.login(true);
          if (this.currentShowItem) {
            this.$router.push({
              name: "ChosenShowItem",
              params: {
                name: this.currentShowItem.show.name,
                thatShow: this.currentShowItem
              }
            });
          }
          this.$router.push("/");
          this.clearInputs();
        } else {
          this.showAlertMessage = true;
        }
      } else {
        this.onClick({ name: this.name, password: this.password });
        this.login(true);
        this.clearInputs();
        this.$router.push("/");
      }
    }
  }
};
</script>

<style scoped>
.loginContainer {
  display: flex;
  flex-flow: column nowrap;
  margin: 0 auto;
  margin-top: 200px;
  width: 40%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.loginForm {
  display: flex;
  flex-flow: column nowrap;
  margin-top: 10px;
}

.nameInput,
.passwordInput {
  height: 20px;
  margin-bottom: 10px;
}

.loginButton {
  height: 30px;
}

.loginErrorText {
  color: red;
  margin-bottom: 15px;
}
</style>
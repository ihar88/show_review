<template>
  <div class="loginContainer">
    <span>Please enter your name and password below to login :</span>
    <form @submit.prevent="validateUser">
      <input class="nameInput" v-model="name" type="text" />
      <input class="passwordInput" v-model="password" type="password" />
      <span v-if="showAlertMessage">SORRY. CAN'T FIND A USER</span>
      <span v-if="showAlertMessage">Try to enter correct name and password</span>
      <button @click.prevent="validateUser" class="loginButton">SING IN</button>
    </form>
  </div>
</template>

<script>
import * as types from "../store/types";
import { mapActions, mapGetters } from "vuex";
import { setInitialStore } from "../utils/localStorageUtils";
import store from "../store/store";

export default {
  data() {
    return {
      name: "",
      password: "",
      showAlertMessage: false
    };
  },
  computed: {
    ...mapGetters({
      userInfo: types.GETTERS_GET_USER
    }),
    currentShowItem: {
      get: () => store.state.currentShowItem,
      set: fromLocalStore => fromLocalStore
    },
    currentShowItemFromLocalStore() {
      return setInitialStore("currentShowItem", "currentShowItem");
    }
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
      const { name, password } = this.userInfo;
      if (name === this.name && password === this.password) {
        this.login(true);
        this.$router.push({
          name: "ChosenShowItem",
          params: {
            name: this.currentShowItem.show.name,
            thatShow: this.currentShowItem
          }
        });
        this.clearInputs();
      } else {
        this.showAlertMessage = true;
        return;
      }
    }
  },
  created() {
    if (!this.currentShowItem) {
      this.currentShowItem = this.currentShowItemFromLocalStore;
    }
  }
};
</script>

<style>
.loginContainer {
  margin: 0 auto;
  margin-top: 50px;
  /* display: flex; */
  /* align-items: center; */
  width: 40%;
}

.nameInput,
.passwordInput {
  height: 20px;
  margin-bottom: 10px;
}

.loginButton {
  height: 30px;
  /* width: 135px; */
}
</style>

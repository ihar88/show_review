<template>
  <router-view></router-view>
</template>

<script>
import { getShows } from "./api/api";
import { mapActions } from "vuex";
import * as types from "./store/types";
import { saveToLocalStorage } from "./utils/localStorageUtils";
import { setInitialStore } from "./utils/sessionStorageUtils";

export default {
  methods: {
    ...mapActions({
      getShowsAction: types.ACTION_GET_SHOWS,
      getRegistredUsers: types.ACTION_LOAD_USER_DB
    }),
    saveShowsData() {
      getShows().then(data => {
        this.getShowsAction(data);
        saveToLocalStorage("shows", data);
      });
    }
  },
  created() {
    const usersFromLocalStore = JSON.parse(localStorage.getItem("user"));
    this.saveShowsData();
    this.getRegistredUsers(usersFromLocalStore);
  }
};
</script>

<style>
* {
  margin: 0;
}
</style>
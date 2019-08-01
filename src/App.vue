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
      changeAuthValue: types.ACTION_CHANGE_AUTH 
    }),
    saveShowsData() {
      getShows().then(data => {
        this.getShowsAction(data);
        saveToLocalStorage("shows", data);
      });
    },
  },
  created() {
    const authValue = Boolean(sessionStorage.getItem("auth"));
    console.log(authValue);
    this.saveShowsData();
    this.changeAuthValue(authValue);
  }
};
</script>

<style>
* {
  margin: 0;
}
</style>

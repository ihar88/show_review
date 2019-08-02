<template>
  <div class="listOfShowsContainer">
    <a class="showLink" v-for="item in shows" :key="item.id" @click="goToChosenShowItem(item)">
      <my-show-item :show="item.show"></my-show-item>
    </a>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ShowsItem from "./ShowsItem";
import * as types from "../store/types";

export default {
  computed: {
    ...mapGetters({
      shows: types.GETTERS_GET_SHOWS
    })
  },
  methods: {
    ...mapActions({
      chosenItemToStore: types.ACTION_CHANGE_CURRENT_SHOW_ITEM
    }),
    goToChosenShowItem(show) {
      this.$router.push({
        name: "ChosenShowItem",
        params: { name: show.show.name, thatShow: show }
      });
      this.chosenItemToStore(show);
    }
  },
  components: {
    "my-show-item": ShowsItem
  }
};
</script>

<style scoped>
.listOfShowsContainer {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

.showLink {
  cursor: pointer;
  width: 170px;
  margin-bottom: 15px;
  margin-right: 15px;
}
</style>
<template>
  <div class="chosenItemContainer">
    <Header />
    <div class="chosenItemWrapper">
      <img class="chosenItemImage" :src="show.image.medium" alt />
      <div class="summaryWrapper" v-html="show.summary"></div>
      <div class="showInfo">
        <h2 class="showInfoHeader">Show Info</h2>
        <h4 class="showInfoFeature">Schedule: {{schedule}}</h4>
        <h4 class="showInfoFeature">Status: {{show.status}}</h4>
        <h4 class="showInfoFeature">Show Type: {{show.type}}</h4>
        <h4 class="showInfoFeature">Official site: {{show.url}}</h4>
      </div>
    </div>
    <div class="chosenItemComments">
      <h2>Comments</h2>
      <div class="commentsList" v-for="(text,index) in show.comments" :key="index">
        <p  class="commentsListItem">{{text}}</p>
      </div>
      <form @submit.prevent="onCommentSubmit">
        <textarea
          style="resize:none"
          id
          cols="30"
          rows="10"
          placeholder="you can add your comment here"
          v-model="comment"
        ></textarea>
        <button @click.prevent="onCommentSubmit">send comment</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Header from "./Header";
import * as types from "../store/types";
import store from "../store/store";
import { setInitialStore } from "../utils/localStorageUtils";

export default {
  data() {
    return {
      comment: ""
    };
  },
  props: ["thatShow"],
  computed: {
    ...mapGetters({
      getAuth: types.GETTERS_GET_AUTH,
      getShows: types.GETTERS_GET_SHOWS
    }),
    show() {
      return this.thatShow.show;
    },
    getCurrentShowItem: {
      get: () => store.state.currentShowItem,
      set: fromLocalStore => fromLocalStore
    },
    currentShowItemFromLocalStore() {
      return setInitialStore("currentShowItem", "currentShowItem");
    },
    schedule() {
      return `${this.show.schedule.days.join()} ${this.show.schedule.time}`;
    },
    filterToFindItem() {
      const shows = this.getShows;
      return shows.findIndex(({ id }) => id === this.thatShow.id);
    }
  },
  methods: {
    ...mapActions({
      addComment: types.ACTION_ADD_COMMENT
    }),
    clearCommentInput() {
      this.comment = "";
    },
    onCommentSubmit() {
      const currentShow = this.filterToFindItem;
      const payload = { comment: this.comment, indexOfShow: currentShow };
      this.addComment(payload);
      this.clearCommentInput();
    }
  },
  components: {
    Header
  },
  created() {
    if (!this.currentShowItem) {
      this.currentShowItem = this.currentShowItemFromLocalStore;
    }
  }
};
</script>

<style>
.chosenItemContainer {
  display: flex;
  flex-flow: column;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.chosenItemWrapper {
  display: flex;
  flex-flow: row nowrap;
  padding: 10px;
}

.chosenItemComments {
  width: 50%;
  padding: 10px;
  margin-top: 15px;
}

form {
  display: flex;
  flex-flow: column;
}

.summaryWrapper {
  margin-right: 15px;
  width: 30%;
}

.chosenItemImage {
  margin-right: 15px;
}

p,
h2 {
  margin: 0;
}

.showInfoHeader,
.showInfoFeature {
  margin-bottom: 10px;
}

.commentsListItem{
  margin-bottom: 10px;
}
</style>

<template>
  <div class="showItemContainer">
    <img class="image" :src="show.image.medium" />
    <div class="descriptionWrapper">
      <span>{{show.name}}</span>
    </div>
  </div>
</template>

<script>

export default {
  props: ["show"],
};
</script>

<style>
.showItemContainer {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
}

.image {
  height: 170px;
  object-fit: cover;
}

.descriptionWrapper {
  height: 30px;
  text-align: center;
  background-color: #3c948b;
  color:white;
  position: relative;
  padding: 20px 0px;

}

span{
  font-weight: bold;
  font-size: 12px;
  font-family: Verdana, Geneva, Tahoma, sans-serif
}
</style>

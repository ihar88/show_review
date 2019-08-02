<template>
  <div class="container">
    <button class="authButton" @click="onClick">{{buttonType}}</button>
  </div>
</template>

<script>
export default {
  props: ["buttonType", "onClick"]
};
</script>

<style>
.container{
  display: flex;
  flex-flow: row nowrap;
}
.authButton {
  height: 30px;
  width: 90px;
  background-color: white;
  border-radius: 5px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  cursor: pointer;
  margin-right: 5px;
}
</style>

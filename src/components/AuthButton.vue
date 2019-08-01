<template>
  <button class="authButton" @click="onClick">{{buttonType}}</button>
</template>

<script>

export default {
  props: ["buttonType", "onClick"]
};
</script>

<style>
.authButton {
  height: 30px;
  width: 90px;
  background-color: white;
  border-radius: 5px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  cursor: pointer;
}
</style>

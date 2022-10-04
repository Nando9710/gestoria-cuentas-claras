<template>
  <button class="burguer-menu">
    <img src="../assets/menu.svg" alt="burguer-menu" />
  </button>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheButtonBurguerMenu",
});
</script>
<style>
.burguer-menu {
  width: 3rem;
  border: none;
  background: none;
}
@media screen and (min-width: 48em) {
  .burguer-menu {
    display: none;
  }
}
</style>

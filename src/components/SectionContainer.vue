<template>
  <section class="container">
    <slot></slot>
  </section>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SectionContainer",
});
</script>

<template>
  <div class="section-title">
    <h3>{{ upTitle }}</h3>
    <h2>{{ downTitle }}</h2>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SectionTitles",
  props: { upTitle: String, downTitle: String },
  setup(props) {
    return {
      upTitle: props.upTitle,
      downTitle: props.downTitle,
    };
  },
});
</script>
<style>
.section-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}
@media screen and (max-width: 37.5em) {
  .section-title {
    margin-top: 2rem;
  }
}
</style>

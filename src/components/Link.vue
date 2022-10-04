<template>
  <a :href="to"> {{ name }} </a>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Link",
  props: { to: String, name: String },
  setup(props) {
    return { to: props.to, name: props.name };
  },
});
</script>

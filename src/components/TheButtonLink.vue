<template>
  <a class="button-link" :href="to_link" target="_blank">
    {{ content }}
  </a>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheButtonLink",
  props: { to_link: String, content: String },
  setup(props) {
    return {
      to_link: props?.to_link ? "" : props.to_link,
      content: props.content,
    };
  },
});
</script>
<style>
.button-link {
  font-family: var(--font-text-900);
  color: white;
  background-color: var(--bg-logo);
  padding: 0.5rem 1rem;
  box-shadow: var(--shadow-logo);
  transition: 0.5s;
  border: thin solid var(--color-logo);
}

.button-link:hover {
  background-color: white;
  color: var(--text-color-logo);
}
@media screen and (max-width: 48em) {
  .button-navbar {
    display: none;
  }
}
</style>

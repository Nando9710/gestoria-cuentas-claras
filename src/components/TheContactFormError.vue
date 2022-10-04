<template>
  <div v-show="invalidFormVar" class="contact-form-error">
    <p>{{ message }}</p>
  </div>
</template>
<script>
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "TheContactFormError",
  props: { invalidFormVar: Boolean, message: String },
  setup(props) {
    return {
      message: props.message,
      invalidFormVar: computed(() => props.invalidFormVar),
    };
  },
});
</script>

<template>
  <figure class="team-image column align-items-center col-lg-3 col-md-6 col-9">
    <img
      class="whidth-100"
      :src="workerImage"
      :alt="`Trabajador ${worker.name}`"
    />
    <figcaption>{{ worker.name }}</figcaption>
    <p class="text-center">{{ worker.occupation }}</p>
  </figure>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheTeamCard",
  props: { worker: Object },
  setup(props) {
    return {
      worker: props.worker,
      workerImage: new URL(props.worker.image, import.meta.url).href,
    };
  },
});
</script>

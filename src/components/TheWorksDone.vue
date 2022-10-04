<template>
  <SectionContainer>
    <SectionTitles
      :upTitle="'Trabajos Realizados'"
      :downTitle="'MiPyMEs que han recibido nuestros servicios'"
    />
    <div class="row justify-content-center">
      <div class="col-lg-7 col-9">
        <TheCarousel />
      </div>
    </div>
  </SectionContainer>
</template>
<script>
import { defineComponent } from "vue";
import SectionContainer from "./SectionContainer.vue";
import SectionTitles from "./SectionTitles.vue";
import TheCarousel from "./TheCarousel.vue";

export default defineComponent({
  name: "TheWorksDone",
  components: { SectionContainer, SectionTitles, TheCarousel },
});
</script>

<template>
  <SectionContainer>
    <SectionTitles
      :upTitle="'Puede contactarnos'"
      :downTitle="'Comuníquese con nosotros'"
    />
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <TheContactForm />
      </div>
    </div>
  </SectionContainer>
</template>
<script>
import { defineComponent } from "vue";
import SectionContainer from "./SectionContainer.vue";
import SectionTitles from "./SectionTitles.vue";
import TheContactForm from "./TheContactForm.vue";

export default defineComponent({
  name: "TheContact",
  components: { SectionContainer, SectionTitles, TheContactForm },
});
</script>
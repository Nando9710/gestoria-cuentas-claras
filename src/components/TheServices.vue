<template>
  <SectionContainer>
    <SectionTitles
      :upTitle="'Nuestros Servicios'"
      :downTitle="'¿Que le brindamos?'"
    />
    <div class="row justify-content-center">
      <div
        class="col-lg-4 col-md-6 col-sm-8"
        v-for="card in cards"
        :key="card.title"
      >
        <CardService :cardContent="card" />
      </div>
    </div>
  </SectionContainer>
</template>
<script>
import { defineComponent } from "vue";
import SectionContainer from "./SectionContainer.vue";
import SectionTitles from "./SectionTitles.vue";
import CardService from "./CardService.vue";

export default defineComponent({
  name: "TheServices",
  components: { SectionContainer, CardService, SectionTitles },
  setup() {
    const cards = [
      {
        icon: "../assets/balance-law.svg",
        title: "Asesoría Jurídica",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit eos provident fuga.",
      },
      {
        icon: "../assets/money.svg",
        title: "Asesoría Contabilidad",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit eos provident fuga.",
      },
      {
        icon: "balance-law",
        title: "Asesoría Recursos Humanos",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit eos provident fuga.",
      },
    ];

    return {
      cards,
    };
  },
});
</script>

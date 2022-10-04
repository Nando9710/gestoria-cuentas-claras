<template>
  <SectionContainer>
    <SectionTitles
      :upTitle="'Conoce al equipo'"
      :downTitle="'Nuestros asesores expertos'"
    />
    <div class="row justify-content-center">
      <TheTeamCard
        v-for="worker in workers"
        :key="worker.name"
        :worker="worker"
      />
    </div>
  </SectionContainer>
</template>
<script>
import { defineComponent } from "vue";
import SectionContainer from "./SectionContainer.vue";
import SectionTitles from "./SectionTitles.vue";
import TheTeamCard from "./TheTeamCard.vue";

export default defineComponent({
  name: "TheTeam",
  components: { SectionContainer, SectionTitles, TheTeamCard },
  setup() {
    const workers = [
      {
        name: "Fernando Carr",
        occupation: "Contabilidad",
        image: "../assets/team-3.jpg",
      },
      {
        name: "Fernando Carr",
        occupation: "Contabilidad",
        image: "../assets/team-3.jpg",
      },
      {
        name: "Fernando Carr",
        occupation: "Contabilidad",
        image: "../assets/team-3.jpg",
      },
      {
        name: "Fernando Carr",
        occupation: "Recursos Humanos",
        image: "../assets/team-3.jpg",
      },
    ];
    return { workers };
  },
});
</script>

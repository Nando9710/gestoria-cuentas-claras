<template>
  <TheHeader />
  <TheHome id="home" />
  <TheAboutUs id="about" />
  <TheServices id="services" />
  <TheWorksDone id="works" />
  <TheTeam id="team" />
  <TheContact id="contact" />
  <TheFooter />
  <TheCopyright />
</template>

<script>
import { defineComponent } from "vue";
import TheHeader from "./components/TheHeader.vue";
import TheHome from "./components/TheHome.vue";
import TheAboutUs from "./components/TheAboutUs.vue";
import TheServices from "./components/TheServices.vue";
import TheWorksDone from "./components/TheWorksDone.vue";
import TheTeam from "./components/TheTeam.vue";
import TheContact from "./components/TheContact.vue";
import TheFooter from "./components/TheFooter.vue";
import TheCopyright from "./components/TheCopyright.vue";

export default defineComponent({
  name: "App",
  components: {
    TheHeader,
    TheHome,
    TheAboutUs,
    TheServices,
    TheWorksDone,
    TheTeam,
    TheContact,
    TheFooter,
    TheCopyright,
  },
});
</script>
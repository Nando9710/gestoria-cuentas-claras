<template>
  <nav :class="classes">
    <Link
      v-for="link in links"
      :key="link.to"
      :to="link.to"
      :name="link.name"
    />
  </nav>
</template>
<script>
import { computed, defineComponent } from "vue";
import Link from "./Link.vue";

export default defineComponent({
  name: "TheLinksPage",
  props: { classes: String },
  components: { Link },
  setup(props) {
    const links = [
      { to: "#home", name: "Inicio" },
      { to: "#about", name: "Sobre" },
      { to: "#services", name: "Servicios" },
      { to: "#works", name: "Proyectos" },
      { to: "#team", name: "Grupo" },
      { to: "#contact", name: "Contacto" },
    ];
    return { links, classes: computed(() => props.classes) };
  },
});
</script>

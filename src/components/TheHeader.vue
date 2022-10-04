<template>
  <header
    :class="` sticky-top ${!topOfPage && 'bg-white'} ${
      !showShadow && !topOfPage && 'shadow-header'
    }`"
  >
    <div class="header-container">
      <TheLogo />
      <TheLinksPage :classes="'nav-horizontal'" />
      <TheButtonLink
        class="button-navbar"
        :to_link="'https://wa.me/5354011545'"
        :content="'Whatsapp'"
      />

      <TheButtonBurguerMenu @click="showMenu" />
    </div>
    <!-- <TheLinksPage
      id="menu"
      v-show="menu"
      @click="showMenu"
      :classes="'nav-vertical'"
    /> -->
  </header>
  <TheLinksPage
    @click="showMenu"
    :classes="`nav-vertical ${menu && 'show-menu'}`"
  />
</template>

<script >
import { defineComponent, onBeforeMount, ref } from "vue";
import TheLogo from "./TheLogo.vue";
import TheLinksPage from "./TheLinksPage.vue";
import TheButtonLink from "./TheButtonLink.vue";
import TheButtonBurguerMenu from "./TheButtonBurguerMenu.vue";

export default defineComponent({
  name: "TheHeader",
  components: {
    TheLogo,
    TheLinksPage,
    TheButtonLink,
    TheButtonBurguerMenu,
  },
  setup() {
    const topOfPage = ref(true);
    const showShadow = ref(true);
    const menu = ref(false);

    onBeforeMount(() => {
      window.addEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
      window.innerWidth > 768
        ? (showShadow.value = false)
        : (showShadow.value = true);

      if (window.pageYOffset > 0) {
        if (topOfPage.value) topOfPage.value = false;
      } else {
        if (!topOfPage.value) topOfPage.value = true;
      }
    };

    const showMenu = () => {
      if (!menu.value) return (menu.value = true);
      if (menu.value) return (menu.value = false);
    };

    return { topOfPage, showMenu, showShadow, menu };
  },
});
</script>
<style>
.header-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 4rem;
}
.nav-vertical {
  position: fixed;
  top: 4rem;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: white;
  transition: transform 0.5s ease-in-out;
  transform: translate(0, -150%);
}

.nav-vertical.show-menu {
  transform: translate(0, 0);
}
</style>

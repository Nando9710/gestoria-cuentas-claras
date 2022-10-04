<template>
  <SectionContainer>
    <div class="row">
      <article class="col-lg-6 about-us-images">
        <div class="about-image">
          <div class="single-image float-left">
            <img src="../assets/about-1.png" alt="" />
          </div>
        </div>

        <div class="single-image image-tow float-right">
          <img class="adios" src="../assets/about-2.png" alt="" />
        </div>
      </article>
      <article class="col-lg-6">
        <SectionTitles
          :upTitle="'Sobre Nosotros'"
          :downTitle="'Conozcanos aun mas'"
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
          ipsa asperiores aliquid suscipit nam vitae nihil veniam atque.
          Voluptatibus maiores possimus asperiores! Aliquam, quibusdam quis
          aliquid natus fuga laudantium dignissimos.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quia
          excepturi animi, deserunt dolore, itaque eum sit neque pariatur quasi
          aperiam deleniti soluta expedita, voluptate numquam consequatur. Illo,
          cum impedit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quia
          excepturi animi, deserunt dolore, itaque eum sit neque pariatur quasi
          aperiam deleniti soluta expedita, voluptate numquam consequatur. Illo,
          cum impedit!
        </p>
        <TheButtonLink :to_link="''" :content="'Conózcanos aún más'" />
      </article>
    </div>
  </SectionContainer>
</template>
<script>
import { defineComponent } from "vue";
import SectionContainer from "./SectionContainer.vue";
import SectionTitles from "./SectionTitles.vue";
import TheButtonLink from "./TheButtonLink.vue";

export default defineComponent({
  name: "TheAboutUs",
  components: { SectionContainer, SectionTitles, TheButtonLink },
});
</script>
<style>
@media screen and (max-width: 37.5em) {
  .about-us-images {
    display: none;
  }
}
</style>

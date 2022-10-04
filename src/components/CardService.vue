<template>
  <div class="card-service">
    <div class="icon">
      <img src="../assets/balance-law.svg" alt="balance-law" />
    </div>
    <h4>{{ cardContent.title }}</h4>
    <p>
      {{ cardContent.text }}
    </p>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardService",
  props: { cardContent: Object },
  setup(props) {
    return {
      cardContent: props.cardContent,
    };
  },
});
</script>
<style>
.card-service {
  padding: 50px 30px 0 30px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.5s;
}
.icon {
  width: 3rem;
}
.card-service p,
.card-service h4 {
  text-align: center;
}

.card-service:hover {
  background-color: var(--bg-logo);
  color: white;
}

@media screen and (max-width: 37.5em) {
  .card-service {
    padding: 1rem;
  }
}
</style>

<template>
  <footer>
    <div class="container">
      <div class="row justify-content-center">
        <div class="footer-section col-10 col-md-6">
          <h2>Gestoría Cuentas Claras</h2>
          <div class="info">
            <img src="../assets/phone.svg" alt="phone" />
            <span>+5354011545</span>
          </div>
          <div class="info">
            <img src="../assets/email.svg" alt="phone" />
            <span>fcarr0397@gmail.com</span>
          </div>
        </div>
        <div class="footer-section col-10 col-md-6">
          <h2>Síguenos en</h2>
          <div class="icons">
            <a href="https://www.facebook.com/gcc.cuba" target="_blank">
              <img src="../assets/facebook.svg" alt="facebook-icon" />
            </a>
            <a href="https://t.me/CapacitacionGCC" target="_blank">
              <img src="../assets/telegram.svg" alt="telegram-icon" />
            </a>
            <a href="https://wa.me/5354011545" target="_blank">
              <img src="../assets/whatsapp.svg" alt="whatsapp-icon" />
            </a>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="footer-section col-10 col-md-6">
          <h2>Texto final</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            praesentium magnam est adipisci voluptas deserunt molestias maxime
            consectetur nulla cum dicta saepe.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheFooter",
});
</script>
<style>
footer h2 {
  text-align: start;
}

.info img {
  width: 1.2rem;
  margin-right: 0.5rem;
}
footer span,
footer p {
  color: var(--text-gray);
  font-size: large;
}
.info {
  margin-bottom: 1rem;
}
.icons a img {
  width: 8%;
  margin-right: 2rem;
}

.icons a img:hover {
  animation: pulse 1.5s linear infinite;
}
footer .container {
  margin-bottom: 5rem;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
@media screen and (max-width: 48em) {
  div.footer-section {
    margin-top: 2rem;
  }
}
</style>

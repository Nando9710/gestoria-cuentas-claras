<template>
  <div class="contact-form">
    <form class="row g-3 form-container" @submit.prevent="onSubmit">
      <div class="col-md-6 col-11">
        <input
          v-model="form.name"
          type="text"
          :class="`form-control ${inValidNameRegExp ? 'border-red' : ''}`"
          id="input-name"
          placeholder="Su nombre"
          title="Escriba su nombre"
          pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
          required
        />
        <TheContactFormError
          :invalidFormVar="inValidNameRegExp"
          :message="'Solo se aceptan letras y espacios en blanco'"
        />
      </div>
      <div class="col-md-6 col-11">
        <input
          v-model="form.email"
          type="email"
          :class="`form-control ${inValidEmailRegExp ? 'border-red' : ''}`"
          id="input-email"
          placeholder="Escriba su correo"
          pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
          required
        />
        <TheContactFormError
          :invalidFormVar="inValidEmailRegExp"
          :message="'Email incorrecto'"
        />
      </div>
      <div class="col-md-12 col-11">
        <input
          v-model="form.subject"
          type="text"
          :class="`form-control ${subjectEmpty ? 'border-red' : ''}`"
          id="input-subject"
          placeholder="Escriba el asunto del correo"
          title="Debe escribir un asunto"
          required
        />
        <TheContactFormError
          :invalidFormVar="subjectEmpty"
          :message="'Debe escribir un asunto'"
        />
      </div>
      <div class="col-md-12 col-11">
        <textarea
          v-model="form.textArea"
          :class="`form-control ${textAreaEmpty ? 'border-red' : ''}`"
          name="email-message"
          id="area-message"
          rows="5"
          placeholder="Escriba su mensaje"
          title="No deje el mensaje en blanco"
          required
        ></textarea>
        <TheContactFormError
          :invalidFormVar="textAreaEmpty"
          :message="'No deje el mensaje en blanco'"
        />
      </div>
      <div class="col-12 text-center">
        <TheLoader v-show="loading" />
      </div>
      <div class="col-12 text-center">
        <button type="submit" class="button-link" :disabled="disabledButton">
          Enviar mensaje
        </button>
      </div>
      <div class="contact-form-response none">
        <p>
          Se ha enviado el correo satisfactoriamente, le responderemos cuanto
          antes
        </p>
      </div>
    </form>
  </div>
</template>
<script>
import { computed, defineComponent, ref } from "vue";
import TheContactFormError from "./TheContactFormError.vue";
import TheLoader from "./TheLoader.vue";
import { sendEmail } from "../utils/sendEmail";

export default defineComponent({
  name: "TheContactForm",
  components: { TheContactFormError, TheLoader },
  setup() {
    const form = ref({
      name: null,
      email: null,
      subject: null,
      textArea: null,
    });
    const loading = ref(false);

    const error = ref({
      name: false,
      email: false,
      subject: false,
      textArea: false,
    });
    const validNameRegExp = new RegExp("^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$");
    const validEmailRegExp = new RegExp(
      "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$"
    );

    const inValidNameRegExp = computed(
      () => !validNameRegExp.exec(form.value.name)
    );
    const inValidEmailRegExp = computed(
      () =>
        !validEmailRegExp.exec(form.value.email) && form.value.email !== null
    );

    const subjectEmpty = computed(() => form.value.subject === "");

    const textAreaEmpty = computed(() => form.value.textArea === "");

    const disabledButton = computed(
      () =>
        !inValidNameRegExp &&
        !inValidEmailRegExp &&
        !subjectEmpty &&
        !textAreaEmpty
    );

    const onSubmit = async () => {
      loading.value = true;
      const { error } = await sendEmail();
      if (error !== null) console.log("error al enviar");
      loading.value = false;
    };
    return {
      form,
      loading,
      error,
      inValidNameRegExp,
      inValidEmailRegExp,
      subjectEmpty,
      textAreaEmpty,
      disabledButton,
      onSubmit,
    };
  },
});
</script>
<style>
.contact-form .form-control {
  padding: 1rem 2rem;
  margin: 1rem;
}
.contact-form .form-control:focus {
  box-shadow: none;
}
.text-center {
  text-align: center;
}
.contact-form .form-control::placeholder {
  color: var(--text-color-logo);
}

.contact-form-error p {
  font-size: 90%;
  color: red;
  transition: all 1s ease;
  margin: 1rem;
}
.contact-form-error.is-active {
  display: block;
}

.none {
  display: none;
}
.form-container .form-control.border-red {
  border: 1px solid red;
}

.button-link[disabled] {
  background-color: #b19c60;
}
.button-link[disabled]:hover {
  background-color: #b19c60;
  color: white;
}

@media screen and (max-width: 37.5em) {
  .contact-form .form-control {
    margin: 0;
  }
}
</style>
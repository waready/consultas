<template>
  <q-page class="flex flex-center">
    <q-input
      ref="myInput"
      standout
      v-model="text"
      :dense="dense"
      :maxlength="8"
      type="number"
      :rules="[
        (value) => !!value || 'Este campo es obligatorio',
        (value) => /^\d+$/.test(value) || 'Debe contener solo números',
        (value) =>
          (value && value.length === 8) || 'Debe tener 8 dígitos numéricos',
      ]"
      @input="handleInput"
    >
      <template v-slot:append>
        <q-avatar>
          <q-icon name="person" class="text-primary" style="font-size: 30px" />
        </q-avatar>
      </template>
    </q-input>

    <div class="q-pa-md q-gutter-sm">
      <q-dialog v-model="seamless" seamless position="bottom">
        <q-card style="width: 350px; height: 150px">
          <q-linear-progress :value="1" color="blue" />

          <q-card-section class="row items-center no-wrap">
            <div>
              <div class="text-h6 text-grey">Nombre Completo:</div>
              <div class="text-h5 text-weight-bold">
                <div v-if="!fetchDataResult">cargando ...</div>
                <div v-else-if="fetchDataResult.nombre"> {{ fetchDataResult.nombre }}</div>
                <div v-else>
                  No existe o es menor de edad 😡
                </div>
                
              </div>
            </div>

            <q-space />
            <q-btn flat round icon="close" v-close-popup />
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";
import { QSpinnerGears } from 'quasar';

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      text: "",
      dense: false,
      seamless: false,
      fetchDataResult: "", // Variable para almacenar el resultado de fetchData
    };
  },
  mounted() {
    // Dando focus al q-input al cargar la página
    this.$refs.myInput.focus();
  },
  watch: {
    text(newText) {
      if (newText.length === 8) {
        this.seamless = true;
        this.fetchData();
      }
    },
  },
  methods: {
    async fetchData() {
      try {

        const dismiss = this.$q.notify({
            spinner: QSpinnerGears,
            message: '<p>Esperando al Servidor &nbsp;<span><i class="fa fa-server" aria-hidden="true"></i> <span> <p>',
            timeout: 0, // Establecer el timeout a 0 para que la notificación no se cierre automáticamente
            html: true
        });
        const response = await axios.get(
          `http://104.131.72.170/api/v1/getdni?valor=${this.text}`
        );
        this.fetchDataResult = response.data;
        dismiss() // Asignar el resultado a la variable
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
});
</script>

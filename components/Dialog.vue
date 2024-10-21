<template>
  <div class="pa-4 text-center">
    <v-dialog
      v-model="dialog"
      max-width="600"
    >
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          class="text-none font-weight-regular"
          prepend-icon="mdi-plus"
          text="Añadir"
          variant="tonal"
          v-bind="activatorProps"
        ></v-btn>
      </template>

      <v-card
        prepend-icon="mdi-plus"
        title="Nuevo Evento"
      >
        <v-card-text>
          <v-row dense>
            <v-col cols="12">
              <v-text-field
                label="Título"
                v-model="event.title"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                label="Fecha"
                type="date"
                v-model="event.date"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                label="Hora"
                type="time"
                v-model="event.time"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-textarea
                label="Descripción"
                rows="3"
                v-model="event.description"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text="Cerrar"
            variant="plain"
            @click="closeDialog"
          ></v-btn>

          <v-btn
            color="primary"
            text="Guardar"
            variant="tonal"
            @click="saveEvent"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Opcional: Aquí puedes mostrar la lista de eventos almacenados -->
    <div v-for="(event, index) in events" :key="index" class="event-item">
      <h3>{{ event.title }}</h3>
      <p>{{ event.date }} - {{ event.time }}</p>
      <p>{{ event.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      event: {
        title: '',
        date: '',
        time: '',
        description: '',
      },
      events: [], // Arreglo para almacenar eventos
    };
  },
  methods: {
    closeDialog() {
      this.dialog = false;
      this.resetEvent(); // Restablecer el formulario
    },
    saveEvent() {
      // Agregar el nuevo evento al arreglo
      this.events.push({ ...this.event });
      this.closeDialog(); // Cerrar el diálogo
    },
    resetEvent() {
      this.event = {
        title: '',
        date: '',
        time: '',
        description: '',
      };
    },
  },
};
</script>

<style scoped>
.event-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
}
</style>

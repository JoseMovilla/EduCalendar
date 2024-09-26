<template>
  <v-container fluid>
    <v-row>
      <!-- Columna izquierda: Calendario -->
      <v-col cols="8">
        <v-sheet>
          <v-calendar
            ref="calendar"
            v-model="value"
            :view-mode="'month'"
          ></v-calendar>
        </v-sheet>
      </v-col>

      <!-- Columna derecha: Sección de eventos -->
      <v-col cols="4">
        <v-sheet class="pa-4">
          <h3>Eventos</h3>
          <v-list>
            <!-- Aquí puedes renderizar tus eventos, por ahora es un ejemplo básico -->
            <v-list-item v-for="(event, index) in events" :key="index">
              <v-list-item-content>
                <v-list-item-title>{{ event.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ event.date }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    value: [new Date()], // Fecha actual predeterminada
    events: [
      { title: 'Reunión', date: '2024-09-24' },
      { title: 'Examen', date: '2024-09-25' },
    ],
  }),
}
</script>

<style scoped>
.v-sheet {
  height: 100%;
}
</style>

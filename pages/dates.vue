<template>
  <v-container class="my-10">
    <!-- Título principal -->
    <v-row justify="center" class="mb-6">
      <v-col cols="12" md="10">
        <h1 class="text-h4 font-weight-bold text-center" style="color: #a1207a;">
          <v-icon class="mr-2" color="#a1207a">mdi-calendar-clock</v-icon>
          Sesiones en Vivo
        </h1>
        <p class="text-center text-subtitle-1 mt-2">
          Aquí tienes el listado actualizado de las sesiones en vivo del OVA. ¡No te pierdas ninguna!
        </p>
      </v-col>
    </v-row>

    <!-- Lista de fechas desde el store -->
    <v-row justify="center" v-if="dates.length">
      <v-col cols="12" md="8" v-for="item in dates" :key="'api-' + item.id">
        <v-card class="pa-4 mb-4" color="#f3e5f5" elevation="2" rounded="xl">
          <v-card-title class="text-h6 font-weight-bold">
            <v-icon class="mr-2" color="purple">mdi-calendar</v-icon>
            {{ item.title || 'Sesión programada' }}
          </v-card-title>
          <v-card-text>
            <p><strong>📅 Fecha:</strong> {{ item.date }}</p>
            <p><strong>🕒 Hora:</strong> {{ item.time || 'Por confirmar' }}</p>
            <p>{{ item.description }}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="purple"
              variant="flat"
              class="mt-2"
              :href="item.link || '#'"
              target="_blank"
              prepend-icon="mdi-video"
            >
              Unirse a la sesión
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Estado de carga -->
    <v-row justify="center" v-else>
      <v-col cols="12" class="text-center">
        <v-progress-circular indeterminate color="purple" />
        <p class="mt-4">Cargando sesiones en vivo...</p>
      </v-col>
    </v-row>

    <!-- Añadir nueva sesión personalizada -->
    <v-divider class="my-10" />
    <v-row justify="center">
      <v-col cols="12" md="8">
        <AddSession />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// Importa desde el store correcto
import { useDateStore } from '~/stores/dates'
import AddSession from '@/components/AddSession.vue'

// Carga las fechas desde la API/store
const dateStore = useDateStore()

await useAsyncData('dates', async () => {
  await dateStore.fetchDates()
})

const dates = dateStore.dates
</script>

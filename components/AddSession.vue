<template>
    <div class="pa-4 text-center">
      <!-- Botón que abre el modal -->
      <v-dialog v-model="dialog" max-width="600">
        <template #activator="{ props: activatorProps }">
          <v-btn
            prepend-icon="mdi-calendar-plus"
            color="purple"
            variant="tonal"
            text="Añadir sesión"
            v-bind="activatorProps"
          />
        </template>
  
        <!-- Contenido del modal -->
        <v-card title="Nueva Sesión en Vivo" prepend-icon="mdi-calendar-plus">
          <v-card-text>
            <v-row dense>
              <v-col cols="12">
                <v-text-field label="Título" v-model="event.title" />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field label="Fecha" type="date" v-model="event.date" />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field label="Hora" type="time" v-model="event.time" />
              </v-col>
              <v-col cols="12">
                <v-textarea label="Descripción" rows="3" v-model="event.description" />
              </v-col>
            </v-row>
          </v-card-text>
  
          <v-divider />
  
          <v-card-actions>
            <v-spacer />
            <v-btn text="Cerrar" variant="plain" @click="closeDialog" />
            <v-btn text="Guardar" color="purple" variant="flat" @click="saveEvent" />
          </v-card-actions>
        </v-card>
      </v-dialog>
  
      <!-- Lista de sesiones añadidas -->
      <v-container class="mt-6">
        <v-row v-if="sessions.length" dense>
          <v-col cols="12" md="6" v-for="(session, index) in sessions" :key="index">
            <v-card color="#f3e5f5" elevation="2" class="pa-4 rounded-xl">
              <v-card-title class="text-subtitle-1 font-weight-bold">
                <v-icon class="mr-2" color="purple">mdi-calendar</v-icon>
                {{ session.title }}
              </v-card-title>
              <v-card-text>
                <p><strong>📅 Fecha:</strong> {{ session.date }}</p>
                <p><strong>🕒 Hora:</strong> {{ session.time }}</p>
                <p>{{ session.description }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col cols="12" class="text-center">
            <p class="text-subtitle-2 text-grey">No hay sesiones añadidas aún.</p>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const dialog = ref(false)
  
  const event = ref({
    title: '',
    date: '',
    time: '',
    description: '',
  })
  
  const sessions = ref([])
  
  function closeDialog() {
    dialog.value = false
    resetEvent()
  }
  
  function saveEvent() {
    sessions.value.push({ ...event.value })
    closeDialog()
  }
  
  function resetEvent() {
    event.value = {
      title: '',
      date: '',
      time: '',
      description: '',
    }
  }
  </script>
  
<template>
      <v-row>
        <v-col>
        <v-card
          class="mx-auto my-16"
          max-width="344"
        >
          <v-card-item>
            <v-card-title>
              <h1>Eventos</h1>
            </v-card-title>
            <Dates />
            <Dialog />
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
</template>

<script setup>
  // Instanciar el store de fechas
  const dateStore = useDateStore()

  // Obtener las fechas de forma asincrónica
  await useAsyncData('dates', async () => {
    await dateStore.fetchDates()  // Obtener las fechas desde el store
  })

  // Acceder directamente a las fechas desde el store
  const dates = dateStore.dates
</script>
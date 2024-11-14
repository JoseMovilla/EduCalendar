<template>
  <h1>Fechas Importantes</h1>
  <!-- Renderizar las fechas directamente -->
  <pre>{{ dates }}</pre>
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

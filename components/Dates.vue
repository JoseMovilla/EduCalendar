<template>
    <div>
      <h1>Fechas Importantes</h1>
      <div v-if="getDates.length">
        <ul>
          <li v-for="date in getDates" :key="date.id">
            <h2>{{ date.date }}</h2>
            <p>{{ date.description }}</p>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
    // Instanciar el store de fechas
    const dateStore = useDateStore()
  
    // Obtener las fechas
    const { getDates } = dateStore
  </script>
  
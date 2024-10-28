<template>
  <div>
    <!-- Encabezado del Calendario Educativo -->
    <header>
      <v-row align="center" justify="center">
        <v-icon
          color="white"
          icon="mdi-school"
          size="48px"
          class="mr-2"
        ></v-icon>
        <h1 class="title">EDUCALENDAR</h1>
      </v-row>
      <h3 class="subtitle"> Organiza tus eventos y actividades en un solo lugar</h3>
    </header>

    <!-- Contenido de la Página -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer>
      <p>&copy; 2024 Universidad de Córdoba</p>
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
header {
  background-color: #1f8301;
  color: white;
  padding: 20px;
  text-align: center;
}

.title {
  font-size: 32px; /* Ajusta el tamaño del título según sea necesario */
  margin: 5px;
}

.subtitle {
  justify-content: center;
  text-align: center;
  font-size: 12px; /* Ajusta el tamaño del título según sea necesario */
  margin: 0px;
}

main {
  padding: 20px;
  background-color: #f0f0f0;
}

footer {
  background-color: #1f8301;
  color: white;
  text-align: center;
  padding: 10px;
}
</style>

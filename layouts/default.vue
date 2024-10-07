<template>
  <div>
    <!-- Encabezado del Calendario Educativo -->
    <header>
      <h1>Calendario Educativo</h1>
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


main {
  padding: 20px;
  background-color: #f0f0f0;
}

footer {
  background-color: #1f8301;
  color: white;
  text-align: center;
  padding: 10px;
  margin-top: 20px;
}
</style>
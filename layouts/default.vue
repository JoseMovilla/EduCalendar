<template>
  <v-app>
    <div>
      <!-- Encabezado -->
      <header>
        <v-row align="center" justify="center">
          <v-icon color="white" icon="mdi-brain" size="48px" class="mr-2" />
          <h1 class="title">OVA: “Entrena tu Memoria”</h1>
        </v-row>
        <h3 class="subtitle">
          Desarrolla tu memoria mientras aprendes de forma divertida.
        </h3>
      </header>

      <!-- Contenido principal -->
      <main>
        <v-container>
          <v-row align="center" justify="center">
            <!-- Imagen izquierda -->
            <v-col cols="12" md="2" class="text-center d-none d-md-flex">
              <v-img
                src="/images/neurona.png"
                alt="Ilustración memoria izquierda"
                max-width="340"
                max-height="340"
                contain
              />
            </v-col>

            <!-- Contenido dinámico -->
            <v-col cols="12" md="8">
              <v-sheet class="pa-6" elevation="3" rounded="xl" color="white">
                <slot />
              </v-sheet>
            </v-col>

            <!-- Imagen derecha -->
            <v-col cols="12" md="2" class="text-center d-none d-md-flex">
              <v-img
                src="public/images/cerebro.png"
                alt="Ilustración memoria derecha"
                max-width="340"
                max-height="340"
                contain
              />
            </v-col>
          </v-row>
        </v-container>
      </main>

      <!-- Barra de navegación inferior flotante -->
      <v-bottom-navigation
        app
        color="#a1207a"
        elevation="12"
        class="mx-auto rounded-xl transition-all"
        style="max-width: 500px; bottom: 20px; position: fixed; left: 0; right: 0;"
      >
        <v-btn to="/" value="inicio">
          <v-icon>mdi-home</v-icon>
          <span>Inicio</span>
        </v-btn>
        <v-btn to="/videos" value="videos">
          <v-icon>mdi-video</v-icon>
          <span>Videos</span>
        </v-btn>
        <v-btn to="/actividades" value="actividades">
          <v-icon>mdi-brain</v-icon>
          <span>Actividades</span>
        </v-btn>
        <v-btn to="/dates" value="envivo">
          <v-icon>mdi-calendar-clock</v-icon>
          <span>En vivo</span>
        </v-btn>
      </v-bottom-navigation>
    </div>
  </v-app>
</template>


<style scoped>
header {
  background-color: #a1207a;
  color: white;
  padding: 20px;
  text-align: center;
}

.title {
  font-size: 32px;
  margin: 5px;
}

.subtitle {
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
}

main {
  padding: 40px 20px;
  background-color: #f8ebf4;
  padding-bottom: 120px; /* espacio para que no tape la nav */
}

.v-bottom-navigation {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
</style>

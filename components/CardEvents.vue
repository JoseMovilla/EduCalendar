<template>
  <v-container class="my-10">
    <!-- Título de bienvenida con ícono -->
    <v-row justify="center" class="mb-8">
      <v-col cols="12" md="10">
        <h1 class="text-h4 font-weight-bold text-center" style="color: #a1207a;">
          <v-icon size="32" color="#a1207a" class="mr-2">mdi-school</v-icon>
          Bienvenido al OVA “Entrena tu Memoria”
        </h1>
        <p class="text-center text-subtitle-1 mt-2">
          Explora recursos, actividades y videos diseñados para fortalecer tu memoria con estrategias neuroeducativas.
        </p>
      </v-col>
    </v-row>

    <!-- Collage de tarjetas -->
    <v-row dense align="stretch" justify="center" class="pa-4">
      <!-- Qué es -->
      <v-col cols="12" md="6">
        <v-card class="pa-6" elevation="2" rounded="xl" color="#f3e5f5">
          <v-card-text>
            <h3 class="text-h6 font-weight-bold mb-2">
              <v-icon class="mr-2" color="purple">mdi-brain</v-icon>
              ¿Qué es “Entrena tu Memoria”?
            </h3>
            <p>
              Es un Objeto Virtual de Aprendizaje centrado en fortalecer la memoria como habilidad cognitiva clave. Incluye juegos, retos y estrategias para comprender y mejorar cómo funciona nuestra memoria.
            </p>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Objetivos -->
      <v-col cols="12" md="6">
        <v-card class="pa-6" elevation="2" rounded="xl" color="#f3e5f5">
          <v-card-text>
            <h3 class="text-h6 font-weight-bold mb-2">
              <v-icon class="mr-2" color="purple">mdi-target</v-icon>
              Objetivos del OVA
            </h3>
            <ul>
              <li>✔ Comprender los tipos y procesos de la memoria.</li>
              <li>✔ Aplicar técnicas neuroeducativas.</li>
              <li>✔ Desarrollar hábitos personalizados.</li>
              <li>✔ Superar retos y ejercicios metacognitivos.</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Metodologías -->
      <v-col cols="12" md="6">
        <v-card class="pa-6" elevation="2" rounded="xl" color="#fce4ec">
          <v-card-text>
            <h3 class="text-h6 font-weight-bold mb-2">
              <v-icon class="mr-2" color="purple">mdi-lightbulb-on</v-icon>
              Metodologías activas
            </h3>
            <ul>
              <li>🎮 Gamificación: niveles y logros.</li>
              <li>🧠 Aprendizaje basado en retos.</li>
              <li>💬 Metacognición y autoevaluación.</li>
              <li>🕒 Microprácticas diarias de memoria.</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Actividades -->
      <v-col cols="12" md="6">
        <v-card class="pa-6" elevation="2" rounded="xl" color="#fce4ec">
          <v-card-text>
            <h3 class="text-h6 font-weight-bold mb-2">
              <v-icon class="mr-2" color="purple">mdi-run-fast</v-icon>
              Actividades destacadas
            </h3>
            <ul>
              <li>📷 Retos visuales y auditivos.</li>
              <li>🧩 Taller de mnemotecnia.</li>
              <li>🔁 Simulación del olvido.</li>
              <li>📘 Diario de memoria.</li>
              <li>🎯 Desafíos colaborativos.</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Principios -->
      <v-col cols="12" md="6">
        <v-card class="pa-6" elevation="2" rounded="xl" color="#ede7f6">
          <v-card-text>
            <h3 class="text-h6 font-weight-bold mb-2">
              <v-icon class="mr-2" color="purple">mdi-star-circle</v-icon>
              Principios clave
            </h3>
            <v-chip-group column>
              <v-chip color="purple" text-color="white" class="ma-1">Activo</v-chip>
              <v-chip color="purple" text-color="white" class="ma-1">Neuroeficiente</v-chip>
              <v-chip color="purple" text-color="white" class="ma-1">Entrenable</v-chip>
              <v-chip color="purple" text-color="white" class="ma-1">Transferible</v-chip>
              <v-chip color="purple" text-color="white" class="ma-1">Divertido</v-chip>
              <v-chip color="purple" text-color="white" class="ma-1">Personalizable</v-chip>
            </v-chip-group>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

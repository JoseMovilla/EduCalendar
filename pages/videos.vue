<template>
    <v-container class="my-10">
      <!-- Título -->
      <v-row justify="center" class="mb-6">
        <v-col cols="12" md="10">
          <h1 class="text-h4 font-weight-bold text-center" style="color: #a1207a;">
            <v-icon class="mr-2" color="#a1207a">mdi-video</v-icon>
            Videos educativos sobre la memoria
          </h1>
          <p class="text-center text-subtitle-1 mt-2">
            Revisa estos videos que refuerzan los contenidos del OVA y exploran conceptos clave del funcionamiento de la memoria.
          </p>
        </v-col>
      </v-row>
  
      <!-- Videos en cards -->
      <v-row justify="center" dense>
        <!-- Video 1 -->
        <v-col cols="12" md="6">
          <v-card elevation="2" class="pa-4" color="#f3e5f5" rounded="xl">
            <v-card-title class="font-weight-bold">
              <v-icon class="mr-2" color="purple">mdi-brain</v-icon>
              Entrenamiento mental con desafíos prácticos
            </v-card-title>
            <v-card-text>
              <v-responsive aspect-ratio="16/9">
                <iframe
                  src="https://www.youtube.com/embed/WsYse0S29Ls?si=vrEaswL46wk742ix"
                  title="Entrenamiento mental con desafíos prácticos"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </v-responsive>
              <p class="mt-2 text-body-2">
                Aprende a potenciar tu memoria mediante ejercicios y retos diseñados para el uso cotidiano.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
  
        <!-- Video 2 -->
        <v-col cols="12" md="6">
          <v-card elevation="2" class="pa-4" color="#fce4ec" rounded="xl">
            <v-card-title class="font-weight-bold">
              <v-icon class="mr-2" color="purple">mdi-alert-decagram</v-icon>
              ¿Por qué es importante ejercitar la memoria?
            </v-card-title>
            <v-card-text>
              <v-responsive aspect-ratio="16/9">
                <iframe
                  src="https://www.youtube.com/embed/gYGi9iDbHtM?si=Ukg2B_Pg8DTbUt62"
                  title="¿Por qué es importante ejercitar la memoria?"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </v-responsive>
              <p class="mt-2 text-body-2">
                Conoce las razones científicas y pedagógicas detrás del entrenamiento de la memoria.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
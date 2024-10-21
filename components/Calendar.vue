<template>
  <v-container fluid>
    <v-row>
      <v-col cols="8">
        <v-sheet>
          <v-calendar
            ref="calendar"
            v-model="value"
            :view-mode="'month'"
          ></v-calendar>
        </v-sheet>
      </v-col>
      <v-col cols="4">
        <CardEvents />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    value: [new Date()], // Fecha actual predeterminada
  }),
}
</script>

<style scoped>
.v-sheet {
  height: 100%;
}
</style>
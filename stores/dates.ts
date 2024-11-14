import { defineStore } from "pinia";

interface DateItem {
  id: number;
  date: string;
  description: string;
}

export const useDateStore = defineStore({
  id: "dates",  // Cambiamos el id del store a "dates"
  state: () => ({
    dates: [] as DateItem[],  // Lista de fechas
    date: {} as DateItem,     // Detalle de una fecha
  }),
  persist: {
    storage: persistedState.localStorage,  // Persistencia en localStorage
  },
  getters: {
    getDates: (state) => state.dates,  // Obtener todas las fechas
    getDate: (state) => state.date,    // Obtener una fecha específica
  },
  actions: {
    async fetchDates() {
      // Obtener las fechas desde la API
      const dates = await $fetch("/api/dates");  // Cambié la URL para que apunte a la API de fechas
      this.dates = dates;  // Asignamos las fechas al estado
    },    
  },
});

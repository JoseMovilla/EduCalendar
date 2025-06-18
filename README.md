🧠 Documentación sobre: OVA: Entrena tu Memoria
Integrantes:
•	Eder Luis Perez Guzman
•	Jose Javier Arrieta Delaossa
________________________________________
📝 Descripción
“Entrena tu Memoria” es un Objeto Virtual de Aprendizaje (OVA) diseñado para fortalecer la memoria como habilidad cognitiva fundamental. A través de sesiones en vivo, actividades interactivas, principios neuroeducativos y recursos visuales, este OVA motiva a los usuarios a aprender de forma divertida, estructurada y personalizada. El diseño es responsivo y accesible, con un enfoque centrado en la experiencia de usuario para entornos educativos virtuales.
________________________________________
🧰 Tecnologías Utilizadas
•	Nuxt.js – Framework de Vue.js para SSR y SPA.
•	Vuetify 3 – Biblioteca de componentes con estilo Material Design.
•	Pinia – Sistema de gestión de estado global.
•	JavaScript – Lenguaje principal.
•	Vite – Herramienta de construcción moderna utilizada por Nuxt.
________________________________________
⚙️ Instalación
# Clonar el repositorio
git clone https://github.com/usuario/ova-memoria.git

# Navegar al proyecto
cd ova-memoria

# Instalar dependencias
npm install
________________________________________
▶️ Uso
# Ejecutar el servidor de desarrollo
npm run dev

# Acceder a la app
http://localhost:3000
________________________________________
📁 Estructura del Proyecto
components/
├── AddSession.vue     # Modal para añadir nuevas sesiones en vivo
├── Dates.vue          # Listado de sesiones desde el store
pages/
├── index.vue          # Página de bienvenida y descripción del OVA
├── dates.vue          # Página que muestra sesiones en vivo
├── videos.vue         # Página con videos recomendados
├── actividades.vue    # Página con tarjetas interactivas
stores/
├── dates.ts           # Store global para gestionar las fechas
public/
├── images/neurona.png
├── images/cerebro.png
layouts/
├── default.vue        # Layout con imágenes laterales y navegación inferior
________________________________________
🧭 Páginas del OVA
3.1 Inicio (index.vue)
Descripción:
La página principal del OVA actúa como carta de presentación del recurso. Está estructurada para dar una bienvenida visualmente atractiva y clara, destacando la finalidad del proyecto.
Elementos clave:
•	Encabezado con icono de cerebro (mdi-brain) y título centralizado.
•	Subtítulo motivacional que introduce la temática.
•	Diseño responsive con imágenes decorativas a ambos lados: neurona (izquierda) y cerebro (derecha).
•	Contenedor principal en forma de tarjeta (v-sheet) con fondo blanco y sombra (elevation).
•	Contenido introductorio: descripción del OVA, objetivos, principios neuroeducativos (presentados como chips de colores).
3.2 Actividades (actividades.vue)
Descripción:
Página que contiene una serie de tarjetas interactivas, cada una correspondiente a una actividad didáctica enfocada en la memoria. Están enlazadas a plataformas externas donde se ejecutan los juegos o recursos.
Características:
•	Tarjetas con títulos descriptivos, íconos temáticos y explicación breve.
•	Colores combinados en tonos lilas, rosas o lavanda, siguiendo la identidad visual del OVA.
•	href externo en cada tarjeta con target="_blank" para abrir en nueva pestaña.
•	Estilo tipo collage: uso de y para distribuir las tarjetas de manera estética.
3.3 Videos (videos.vue)
Descripción:
Sección dedicada al refuerzo audiovisual. Contiene dos videos de YouTube insertados mediante iframe que tratan sobre técnicas de memoria y su importancia.
Características:
•	Cada video está contenido en una tarjeta con un título explicativo.
•	Se usa para mantener proporción adaptable.
•	Diseño centrado y ordenado en dos columnas o una sola columna en móviles.
•	Los videos están seleccionados para complementar el contenido teórico del OVA.
3.4 Fechas (En Vivo) (dates.vue)
Descripción:
Página que presenta una lista de sesiones sincrónicas (ficticias o reales), útiles para planificar talleres o encuentros virtuales. Los datos provienen de una API interna simulada en Nuxt.
Características:
•	Cada sesión aparece en una tarjeta con ícono, título, fecha, hora, descripción y un botón falso de “Unirse”.
•	Si no hay datos, se muestra un mensaje de carga con v-progress-circular.
•	Las fechas se obtienen del store Pinia con useDateStore().
•	Admite expansión futura: integración con links reales de Zoom, Meet o LMS.
3.5 Componente AddSession.vue
Descripción:
Este componente modular permite abrir un formulario emergente para que los usuarios (o el docente) ingresen nuevas sesiones. Simula el proceso de agendar eventos en vivo.
Características:
•	Utiliza v-dialog para generar un modal centrado.
•	Incluye campos de entrada: título (text), fecha (date), hora (time) y descripción (textarea).
•	Al hacer clic en “Guardar”, el evento se agrega a un array interno (puede expandirse para usar LocalStorage o persistencia real).
•	Es un componente reutilizable, ya integrado en la página dates.vue.
________________________________________
Componentes Personalizados
•	AddSession.vue: Formulario para ingresar nuevas sesiones con almacenamiento local.
•	Dates.vue: Renderiza sesiones cargadas desde el store Pinia.
•	Cards interactivas: Navegan hacia recursos externos o juegos de memoria.
•	Layout responsive: Con imágenes laterales e íconos decorativos en móvil y escritorio.
•	Barra de navegación inferior con íconos.
________________________________________
🚀 Funcionalidades Principales
•	📆 Visualización de sesiones en vivo
•	➕ Agregar nuevas sesiones mediante un formulario modal
•	🎯 Acceso a actividades interactivas desde tarjetas
•	🎬 Reproductores de video integrados desde YouTube
•	📱 Interfaz adaptable a dispositivos móviles
•	🧠 Integración de conceptos neuroeducativos
________________________________________
💾 Store de Fechas Pinia (stores/dates.ts)
Este store maneja las fechas académicas desde la API:
export const useDateStore = defineStore('dateStore', {
  state: () => ({
    dates: [],
  }),
  actions: {
    async fetchDates() {
      const res = await $fetch('/api/dates')
      this.dates = res
    }
  }
})
Ejemplo de uso:
const dateStore = useDateStore()
await useAsyncData('dates', () => dateStore.fetchDates())
________________________________________
🌐 API de Fechas (server/api/dates.ts)
Simula la respuesta de sesiones académicas en vivo:
export default defineEventHandler(() => {
  return [
    {
      id: 1,
      date: '2025-07-01',
      time: '10:00',
      title: 'Sesión de introducción a la memoria',
      description: 'Exploración inicial sobre los tipos de memoria',
      link: 'https://meet.example.com/sesion1'
    },
    ...
  ]
})
________________________________________
🧩 Componentes Clave
components/AddSession.vue
Permite agregar sesiones con título, fecha, hora y descripción. Muestra tarjetas interactivas de las nuevas sesiones creadas.
components/Dates.vue
Muestra las fechas desde el store con formato visual estructurado.
________________________________________
🧠 Actividades Interactivas
La página actividades.vue presenta tarjetas clicables que redirigen a plataformas de ejercicios mentales:
Actividad	Link
Retos visuales y auditivos	https://www.cognifit.com/co/retos-mentales/bb-memory-hero

Mnemotecnia	https://es.educaplay.com/recursos-educativos/2211154-mnemotecnia.html

Simulación del olvido	https://www.juegos-mentales.com/juego/3D+Memory+Matching

Diario de memoria	https://www.juegosdememoriagratis.com/adultos/02-medianos/m-verduras.html

Desafíos colaborativos	https://www.juegosdememoriagratis.com/adultos/03-dificiles/d-perros.html

________________________________________
📺 Página de Videos
Incluye dos recursos integrados con <iframe> para fortalecer la comprensión:
•	Entrenamiento mental con desafíos prácticos
•	¿Por qué es importante ejercitar la memoria?
________________________________________
🧭 Navegación
La app cuenta con una barra de navegación inferior fija con acceso directo a:
•	Inicio
•	Videos
•	Actividades
•	Sesiones en vivo
Con iconografía Material Design y diseño responsivo.
________________________________________
🙌 Contribución
1.	Haz fork del repositorio.
2.	Crea una rama: feature/nueva-funcionalidad.
3.	Envía un pull request con tu propuesta.
________________________________________


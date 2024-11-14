# Educalendar

Integrantes: Jose Movilla - Alejandro Alvarez

## Descripción
Educalendar es una aplicación de calendario educativo diseñada para ayudar a los estudiantes y profesores a organizar y visualizar fechas importantes en el ámbito académico, como exámenes, entregas de proyectos, vacaciones y eventos especiales. Su interfaz intuitiva permite una fácil navegación y gestión de eventos, proporcionando una herramienta práctica para el seguimiento de actividades y el manejo del tiempo en un entorno educativo.

## Tecnologías Utilizadas
Este proyecto se desarrolló utilizando las siguientes tecnologías:
- **Nuxt.js** - Framework de Vue.js para desarrollar aplicaciones web de forma rápida y eficiente.
- **JavaScript** - Lenguaje de programación principal del proyecto.
- **Vuetify** - Biblioteca de componentes de interfaz de usuario basada en Material Design para Vue.js.
- **Pinia** - Sistema de gestión de estado para Vue.js, utilizado para manejar el estado global de la aplicación.

## Instalación
Sigue estos pasos para instalar el proyecto en un entorno local:

```bash
# Clonar el repositorio
git clone https://github.com/usuario/Educalendar.git

# Navegar a la carpeta del proyecto
cd Educalendar

# Instalar las dependencias
npm install
```

## Uso
Para iniciar el servidor de desarrollo y ver la aplicación en tu navegador:

```bash
# Ejecutar el servidor de desarrollo
npm run dev

# La aplicación estará disponible en: http://localhost:3000
```

## Estructura del Proyecto
Aquí tienes una descripción de la estructura principal de carpetas y archivos:

- `pages/` - Contiene las vistas principales de la aplicación.
  - `index.vue` - Página de inicio que muestra la vista principal del calendario.
  - `dates.vue` - Página para visualizar y administrar fechas importantes.
- `components/` - Componentes reutilizables, como el componente de visualización de calendario.
  - `Calendar.vue` - Componente para representar el calendario con las fechas destacadas.
- `store/` - Gestión del estado global utilizando Pinia.
  - `datesStore.js` - Store para manejar la información de las fechas importantes.
- `plugins/` - Plugins de Vuetify y otras configuraciones.
- `api/` - Endpoints de la API para obtener y actualizar datos de fechas educativas.

## Funcionalidades Principales
- **Visualización de calendario educativo**: Permite ver un calendario con fechas importantes resaltadas.
- **Gestión de fechas**: Los usuarios pueden agregar, editar o eliminar fechas relevantes, como exámenes y eventos.
- **Integración de API**: La aplicación se conecta a una API para almacenar y recuperar datos de eventos en tiempo real.

## Ejemplos de Código

Ejemplo de cómo acceder a los datos del store de fechas usando `useAsyncData`:

```javascript
// Obtener fechas desde el store
await useAsyncData('dates', async () => {
  await dateStore.fetchDates()
  const dates = dateStore.dates
})
```

## Contribución
Si deseas contribuir al desarrollo de **Educalendar**, sigue estos pasos:

1. Realiza un fork del repositorio.
2. Crea una rama con tu funcionalidad (`feature/nueva-funcionalidad`).
3. Envía un pull request con una descripción detallada de tus cambios.



### Store de Fechas

El store `dates.ts`, implementado con **Pinia**, se encarga de gestionar el estado global de las fechas importantes en la aplicación. Este store permite:

- **Persistencia en LocalStorage**: Los datos de las fechas se almacenan en el almacenamiento local del navegador, permitiendo que las fechas se mantengan incluso después de recargar la página.
- **Getters**: Ofrece dos getters, `getDates` y `getDate`, para obtener todas las fechas o una fecha específica.
- **Acción `fetchDates`**: Esta acción utiliza `fetch` para obtener datos de fechas desde una API externa y los asigna al estado del store.

#### Ejemplo de Uso:
```typescript
const dates = dateStore.dates // Obtener todas las fechas desde el store
await dateStore.fetchDates() // Llamar a la API para actualizar las fechas
```



### API de Fechas

El archivo `server/api/dates/index.get.ts` define un handler de API en **Educalendar** que proporciona las fechas importantes del proyecto. Esta API devuelve un arreglo de objetos de fechas, cada uno con:

- `id`: Identificador único de la fecha.
- `date`: Fecha en formato `YYYY-MM-DD`.
- `description`: Descripción de la fecha, explicando su importancia (por ejemplo, inicio del proyecto, revisión intermedia, finalización).

Este endpoint facilita la obtención de fechas desde el frontend, permitiendo que el store `dates.ts` las consuma para mostrarlas en el calendario.

#### Ejemplo de Respuesta de la API:
```json
[
  {
    "id": 1,
    "date": "2024-01-01",
    "description": "Fecha de inicio del proyecto"
  },
  {
    "id": 2,
    "date": "2024-02-15",
    "description": "Fecha de revisión intermedia"
  },
  {
    "id": 3,
    "date": "2024-03-30",
    "description": "Fecha de finalización del proyecto"
  }
]
```



### Página de Fechas

El archivo `pages/dates.vue` es un componente de página en **Educalendar** que muestra las fechas importantes almacenadas en el store. Este archivo:

1. **Importa el store de fechas** usando `useDateStore()`, lo cual permite acceder a las fechas almacenadas.
2. **Realiza una llamada asíncrona** a `fetchDates()` del store al utilizar `useAsyncData` para cargar las fechas en el estado antes de renderizar el componente.
3. **Muestra las fechas en el DOM**, en un formato simple de `<pre>{{ dates }}</pre>`, para visualización y depuración inicial.

Este enfoque permite una carga de datos eficiente y reactiva desde el store.



### Componente de Fechas

El archivo `components/Dates.vue` es un componente en **Educalendar** que muestra una lista de fechas importantes en un formato organizado. Este componente:

1. **Importa el store de fechas** usando `useDateStore()`, lo que permite acceder a los datos almacenados en el store de fechas.
2. **Recupera las fechas** a través del getter `getDates` para mostrarlas dinámicamente en un listado `<ul>`.
3. **Muestra cada fecha** en un formato de lista (`<li>`) que contiene el nombre y la descripción de cada evento importante, con un encabezado `<h2>` para la fecha y un párrafo `<p>` para la descripción.

Este componente permite organizar y visualizar las fechas de una manera clara y estructurada en el proyecto.

export default defineEventHandler(async (event) => {
  const dates = [
    {
      id: 1,
      date: '2024-01-01',
      description: 'Fecha de inicio del proyecto'
    },
    {
      id: 2,
      date: '2024-02-15',
      description: 'Fecha de revisión intermedia'
    },
    {
      id: 3,
      date: '2024-03-30',
      description: 'Fecha de finalización del proyecto'
    }
  ]

  return dates
})

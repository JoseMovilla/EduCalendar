// server/api/ova-sesiones.ts
export default defineEventHandler(async (event) => {
  const sesiones = [
    {
      id: 1,
      date: '2025-08-01T10:00:00',
      description: '🧠 Sesión de bienvenida: ¿Qué es la memoria y por qué entrenarla?'
    },
    {
      id: 2,
      date: '2025-08-03T14:00:00',
      description: '🎯 Entrenamiento mental: retos de memoria visual y auditiva en vivo.'
    },
    {
      id: 3,
      date: '2025-08-05T10:00:00',
      description: '🧩 Taller en vivo: estrategias mnemotécnicas aplicadas con ejemplos prácticos.'
    },
    {
      id: 4,
      date: '2025-08-07T16:00:00',
      description: '💡 Sesión interactiva: cómo prevenir el olvido y mejorar la retención.'
    },
    {
      id: 5,
      date: '2025-08-09T11:00:00',
      description: '📊 Evaluación gamificada: responde en tiempo real y gana insignias.'
    },
    {
      id: 6,
      date: '2025-08-11T15:00:00',
      description: '🤝 Desafío grupal: reconstrucción de secuencias y competencias colaborativas.'
    },
    {
      id: 7,
      date: '2025-08-13T10:00:00',
      description: '🎓 Cierre del OVA: repaso, testimonios y entrega de reconocimientos.'
    }
  ]

  return sesiones
})

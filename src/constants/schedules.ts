type ClassSession = {
  id: number
  subject: string
  startTime: string
  endTime: string
  instructor: string
}

type WeeklySchedule = {
  [key: string]: ClassSession[]
}

export const weeklyClasses: WeeklySchedule = {
  Holiday: [
    {
      id: 1,
      subject: 'Treino Livre',
      startTime: '11:00',
      endTime: '12:00',
      instructor: 'Fabiano Índio',
    },
  ],
  Monday: [
    {
      id: 2,
      subject: 'Treino Básico',
      startTime: '11:00',
      endTime: '12:00',
      instructor: 'Roni Júnior',
    },
    {
      id: 3,
      subject: 'Treino Competição',
      startTime: '12:00',
      endTime: '13:00',
      instructor: 'Fabiano Índio',
    },
    {
      id: 4,
      subject: 'Treino Básico/Intermediário',
      startTime: '17:30',
      endTime: '18:30',
      instructor: 'Fabiano Índio',
    },
    {
      id: 5,
      subject: 'Treino Kids',
      startTime: '18:30',
      endTime: '19:30',
      instructor: 'Monique Valadão e Henrique Passos',
    },
    {
      id: 6,
      subject: 'Treino Básico/Intermediário',
      startTime: '19:30',
      endTime: '20:30',
      instructor: 'Fabiano Índio',
    },
    {
      id: 7,
      subject: 'Treino Corujão',
      startTime: '22:00',
      endTime: '23:00',
      instructor: 'Matheus Pereira',
    },
  ],
  Tuesday: [
    {
      id: 8,
      subject: 'Treino Drills',
      startTime: '11:30',
      endTime: '12:00',
      instructor: 'Fabiano Índio',
    },
    {
      id: 9,
      subject: 'Treino Competição',
      startTime: '12:00',
      endTime: '13:00',
      instructor: 'Fabiano Índio',
    },
    {
      id: 10,
      subject: 'Treino Baby',
      startTime: '18:30',
      endTime: '19:30',
      instructor: 'Monique Valadão',
    },
    {
      id: 11,
      subject: 'Treino Feminino',
      startTime: '18:30',
      endTime: '19:30',
      instructor: 'Felipe Zanini e Matheus Pereira',
    },
    {
      id: 12,
      subject: 'Treino Executivo',
      startTime: '19:30',
      endTime: '20:30',
      instructor: 'Fabiano Índio',
    },
    {
      id: 13,
      subject: 'Treino Básico/Intermediário',
      startTime: '20:30',
      endTime: '21:30',
      instructor: 'Fabiano Índio',
    },
    {
      id: 14,
      subject: 'Treino Corujão',
      startTime: '22:00',
      endTime: '23:00',
      instructor: 'Matheus Pereira',
    },
  ],
  Wednesday: [
    {
      id: 15,
      subject: 'Treino Básico',
      startTime: '11:00',
      endTime: '12:00',
      instructor: 'Roni Júnior',
    },
    {
      id: 16,
      subject: 'Treino Competição',
      startTime: '12:00',
      endTime: '13:00',
      instructor: 'Fabiano Índio',
    },
    {
      id: 17,
      subject: 'Treino Básico/Intermediário',
      startTime: '17:30',
      endTime: '18:30',
      instructor: 'Fabiano Índio',
    },
    {
      id: 18,
      subject: 'Treino Kids',
      startTime: '18:30',
      endTime: '19:30',
      instructor: 'Monique Valadão e Henrique Passos',
    },
    {
      id: 19,
      subject: 'Treino Básico/Intermediário',
      startTime: '19:30',
      endTime: '20:30',
      instructor: 'Fabiano Índio',
    },
    {
      id: 20,
      subject: 'Treino NO GI',
      startTime: '20:30',
      endTime: '21:30',
      instructor: 'Fabiano Índio',
    },
    {
      id: 21,
      subject: 'Treino Corujão',
      startTime: '22:00',
      endTime: '23:00',
      instructor: 'Matheus Pereira',
    },
  ],
  Thursday: [
    {
      id: 22,
      subject: 'Treino Drills',
      startTime: '11:30',
      endTime: '12:00',
      instructor: 'Fabiano Índio',
    },
    {
      id: 23,
      subject: 'Treino Competição',
      startTime: '12:00',
      endTime: '13:00',
      instructor: 'Fabiano Índio',
    },
    {
      id: 24,
      subject: 'Treino Baby',
      startTime: '18:30',
      endTime: '19:30',
      instructor: 'Monique Valadão',
    },
    {
      id: 25,
      subject: 'Treino Feminino',
      startTime: '18:30',
      endTime: '19:30',
      instructor: 'Felipe Zanini e Matheus Pereira',
    },
    {
      id: 26,
      subject: 'Treino Executivo',
      startTime: '19:30',
      endTime: '20:30',
      instructor: 'Fabiano Índio',
    },
    {
      id: 27,
      subject: 'Treino Básico/Intermediário',
      startTime: '20:30',
      endTime: '21:30',
      instructor: 'Fabiano Índio',
    },
  ],
  Friday: [
    {
      id: 28,
      subject: 'Treino Básico',
      startTime: '11:00',
      endTime: '12:00',
      instructor: 'Roni Júnior',
    },
    {
      id: 29,
      subject: 'Treino Competição',
      startTime: '12:00',
      endTime: '13:00',
      instructor: 'Fabiano Índio',
    },
    {
      id: 30,
      subject: 'Treino Básico/Intermediário',
      startTime: '17:30',
      endTime: '18:30',
      instructor: 'Fabiano Índio',
    },
    {
      id: 31,
      subject: 'Treino Kids',
      startTime: '18:30',
      endTime: '19:30',
      instructor: 'Monique Valadão e Henrique Passos',
    },
    {
      id: 32,
      subject: 'Treino NO GI',
      startTime: '19:30',
      endTime: '20:30',
      instructor: 'Fabiano Índio',
    },
  ],
  Saturday: [
    {
      id: 33,
      subject: 'Treino Livre',
      startTime: '11:00',
      endTime: '12:00',
      instructor: 'Fabiano Índio',
    },
  ],
}

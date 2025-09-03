import type { Exercise, Workout } from "./model";
import { WorkoutDifficulty } from "./model";

const REST_ID = 0;
export const USER = {
  weight: 79,
};
export const SETTINGS = {
  restId: REST_ID,
};

// --- Справочник упражнений (без «заглушек», все с MET):
const EX: Record<string, Exercise> = {
  chinTuck: {
    id: 1,
    name: "Подбородок к горлу (chin tuck, стоя у стены)",
    image: { src: "chin_tuck_wall.jpg", lqip: 10 },
    met: 2.0,
  },
  wallSlides: {
    id: 2,
    name: "Скольжения по стене («ангелы»)",
    image: { src: "wall_slides.jpg", lqip: 10 },
    met: 2.5,
  },
  pullApart: {
    id: 3,
    name: "Разведения резинки (band pull-aparts)",
    image: { src: "band_pull_aparts.jpg", lqip: 10 },
    met: 3.0,
  },
  facePull: {
    id: 4,
    name: "Face pull с резинкой",
    image: { src: "band_face_pull.jpg", lqip: 10 },
    met: 3.5,
  },
  proneY: {
    id: 5,
    name: "Подъёмы рук «Y» лёжа на животе",
    image: { src: "prone_y_raise.jpg", lqip: 10 },
    met: 4.0,
  },
  proneT: {
    id: 6,
    name: "Подъёмы рук «T» лёжа на животе",
    image: { src: "prone_t_raise.jpg", lqip: 10 },
    met: 3.8,
  },
  catCow: {
    id: 7,
    name: "Кошка–верблюд",
    image: { src: "cat_cow.jpg", lqip: 10 },
    met: 2.3,
  },
  thoracicTowel: {
    id: 8,
    name: "Разгибание грудного отдела на полотенце",
    image: { src: "thoracic_towel_extension.jpg", lqip: 10 },
    met: 2.0,
  },
  hipFlexorStretch: {
    id: 9,
    name: "Растяжка сгибателей бедра (выпад)",
    image: { src: "hip_flexor_stretch_lunge.jpg", lqip: 10 },
    met: 2.3,
  },
  birdDog: {
    id: 10,
    name: "Bird-dog",
    image: { src: "bird_dog.jpg", lqip: 10 },
    met: 2.8,
  },
  deadBug: {
    id: 11,
    name: "Dead bug",
    image: { src: "dead_bug.jpg", lqip: 10 },
    met: 3.0,
  },
  sidePlank: {
    id: 12,
    name: "Боковая планка",
    image: { src: "side_plank.jpg", lqip: 10 },
    met: 3.0,
  },
  pallof: {
    id: 13,
    name: "Pallof press с резинкой",
    image: { src: "pallof_press_band.jpg", lqip: 10 },
    met: 3.5,
  },
  rdlBar: {
    id: 14,
    name: "Тяга румынская со штангой (лёгкий вес)",
    image: { src: "romanian_deadlift_barbell.jpg", lqip: 10 },
    met: 5.0,
  },
  rowDb: {
    id: 15,
    name: "Тяга гантели в упоре",
    image: { src: "one_arm_db_row.jpg", lqip: 10 },
    met: 5.0,
  },
  revLunge: {
    id: 16,
    name: "Выпады назад (вес тела)",
    image: { src: "reverse_lunge_bw.jpg", lqip: 10 },
    met: 4.0,
  },
  gobletSquat: {
    id: 17,
    name: "Присед с гантелью у груди (goblet)",
    image: { src: "goblet_squat.jpg", lqip: 10 },
    met: 4.5,
  },
  hamStretch: {
    id: 18,
    name: "Растяжка задней поверхности бедра лёжа с ремнём",
    image: { src: "supine_hamstring_stretch.jpg", lqip: 10 },
    met: 2.3,
  },
  briskWalk: {
    id: 19,
    name: "Ходьба бодрым шагом (Zone 2)",
    image: { src: "brisk_walking.jpg", lqip: 10 },
    met: 3.3,
  },
  chestDoor: {
    id: 20,
    name: "Растяжка груди в проёме двери",
    image: { src: "doorway_pec_stretch.jpg", lqip: 10 },
    met: 2.3,
  },
  scapPushup: {
    id: 21,
    name: "Лопаточные отжимания (серратус)",
    image: { src: "scapular_pushup.jpg", lqip: 10 },
    met: 3.5,
  },
  extRotBand: {
    id: 22,
    name: "Наружная ротация плеча с резинкой",
    image: { src: "band_external_rotation.jpg", lqip: 10 },
    met: 2.8,
  },
  hollowHold: {
    id: 23,
    name: "Hollow hold (короткие удержания)",
    image: { src: "hollow_hold.jpg", lqip: 10 },
    met: 4.0,
  },
  reversePlank: {
    id: 24,
    name: "Обратная планка (tabletop)",
    image: { src: "reverse_plank_tabletop.jpg", lqip: 10 },
    met: 3.0,
  },
  calfRaise: {
    id: 25,
    name: "Подъёмы на носки стоя",
    image: { src: "standing_calf_raise.jpg", lqip: 10 },
    met: 3.5,
  },
  openBook: {
    id: 26,
    name: "«Книга» — ротация грудного отдела лёжа на боку",
    image: { src: "open_book_tspine.jpg", lqip: 10 },
    met: 2.5,
  },
  hipHingeRock: {
    id: 27,
    name: "Квадрупед-рокинг (паттерн «хип-хинж»)",
    image: { src: "quadruped_rocking.jpg", lqip: 10 },
    met: 2.5,
  },
  gluteBridge: {
    id: 28,
    name: "Ягодичный мост",
    image: { src: "glute_bridge.jpg", lqip: 10 },
    met: 3.5,
  },
  frontPlank: {
    id: 29,
    name: "Планка на локтях",
    image: { src: "elbow_plank.jpg", lqip: 10 },
    met: 3.5,
  },
};

// --- Распределение по дням недели:

// Ежедневная утренняя (15 минут до еды, низкая интенсивность, вода — обязательно)
const workoutDailyAM: Workout = {
  id: 101,
  title: "AM-15: мобилизация + осанка (ежедневно)",
  day: "Ежедневно утром",
  difficulty: WorkoutDifficulty.Beginner,
  image: { src: "/stock-row-small.webp", lqip: 57377 },
  averageDurationSeconds: 60 * 15,
  sets: [
    {
      exercises: [
        { type: "time", exercise: EX.catCow, count: 40 },
        { type: "reps", exercise: EX.chinTuck, count: 12 },
        { type: "reps", exercise: EX.wallSlides, count: 12 },
        { type: "reps", exercise: EX.pullApart, count: 15 },
        { type: "reps", exercise: EX.birdDog, count: 20 }, // по 10 на сторону, попеременно
      ],
      restSeconds: 30,
      repeatCount: 2,
    },
    {
      exercises: [
        { type: "time", exercise: EX.hipFlexorStretch, count: 60 }, // суммарно обе стороны
        { type: "time", exercise: EX.chestDoor, count: 60 },
        { type: "time", exercise: EX.thoracicTowel, count: 60 },
      ],
      restSeconds: 15,
      repeatCount: 1,
    },
  ],
};

// Ежедневная вечерняя (15 минут, лёгкая аэробика + растяжка)
const workoutDailyPM: Workout = {
  id: 102,
  title: "PM-15: ходьба Zone 2 + растяжка (ежедневно)",
  day: "Ежедневно вечером",
  difficulty: WorkoutDifficulty.Beginner,
  image: { src: "/stock-row-small.webp", lqip: 57377 },
  averageDurationSeconds: 60 * 15,
  sets: [
    {
      exercises: [{ type: "time", exercise: EX.briskWalk, count: 12 * 60 }], // 12 минут
      restSeconds: 0,
      repeatCount: 1,
    },
    {
      exercises: [
        { type: "time", exercise: EX.chestDoor, count: 60 },
        { type: "time", exercise: EX.hamStretch, count: 60 },
      ],
      restSeconds: 0,
      repeatCount: 1,
    },
  ],
};

// Понедельник — короткая 30 мин
const workoutMon30: Workout = {
  id: 201,
  title: "ПН-30: база для осанки + кор",
  day: "Понедельник",
  difficulty: WorkoutDifficulty.Beginner,
  image: { src: "/stock-row-small.webp", lqip: 57377 },
  averageDurationSeconds: 60 * 30,
  sets: [
    {
      exercises: [
        { type: "time", exercise: EX.openBook, count: 60 },
        { type: "time", exercise: EX.hipHingeRock, count: 45 },
        { type: "reps", exercise: EX.scapPushup, count: 12 },
        { type: "reps", exercise: EX.extRotBand, count: 15 },
      ],
      restSeconds: 30,
      repeatCount: 1,
    },
    {
      exercises: [
        { type: "reps", exercise: EX.gluteBridge, count: 12 },
        { type: "reps", exercise: EX.pallof, count: 20 }, // по 10 на сторону
        { type: "reps", exercise: EX.rowDb, count: 24 }, // 12 на каждую сторону
        { type: "reps", exercise: EX.rdlBar, count: 10 }, // лёгкий вес, техника
      ],
      restSeconds: 75,
      repeatCount: 2,
    },
    {
      exercises: [
        { type: "reps", exercise: EX.deadBug, count: 20 }, // по 10 на сторону
        { type: "time", exercise: EX.sidePlank, count: 60 }, // 30 с на сторону
      ],
      restSeconds: 30,
      repeatCount: 1,
    },
  ],
};

// Среда — полная 60 мин (тягущие/лопатки + кор)
const workoutWed60: Workout = {
  id: 301,
  title: "СР-60: осанка — спина/лопатки + кор",
  day: "Среда",
  difficulty: WorkoutDifficulty.Intermediate,
  image: { src: "/stock-row-small.webp", lqip: 57377 },
  averageDurationSeconds: 60 * 60,
  sets: [
    {
      exercises: [
        { type: "time", exercise: EX.catCow, count: 40 },
        { type: "time", exercise: EX.openBook, count: 40 },
        { type: "time", exercise: EX.thoracicTowel, count: 60 },
        { type: "time", exercise: EX.hipFlexorStretch, count: 60 },
      ],
      restSeconds: 30,
      repeatCount: 1,
    },
    {
      exercises: [
        { type: "reps", exercise: EX.extRotBand, count: 15 },
        { type: "reps", exercise: EX.wallSlides, count: 12 },
        { type: "reps", exercise: EX.scapPushup, count: 12 },
        { type: "reps", exercise: EX.pullApart, count: 15 },
      ],
      restSeconds: 45,
      repeatCount: 2,
    },
    {
      exercises: [
        { type: "reps", exercise: EX.rowDb, count: 24 }, // 12/12
        { type: "reps", exercise: EX.rdlBar, count: 10 },
        { type: "reps", exercise: EX.revLunge, count: 20 }, // 10/10
        { type: "reps", exercise: EX.gluteBridge, count: 15 },
      ],
      restSeconds: 75,
      repeatCount: 2,
    },
    {
      exercises: [
        { type: "reps", exercise: EX.facePull, count: 15 },
        { type: "reps", exercise: EX.proneY, count: 12 },
        { type: "reps", exercise: EX.proneT, count: 12 },
      ],
      restSeconds: 60,
      repeatCount: 2,
    },
    {
      exercises: [
        { type: "time", exercise: EX.frontPlank, count: 45 },
        { type: "reps", exercise: EX.pallof, count: 24 }, // 12/12
        { type: "time", exercise: EX.sidePlank, count: 60 }, // 30/30
      ],
      restSeconds: 45,
      repeatCount: 2,
    },
  ],
};

// Пятница — полная 60 мин (низ + паттерн «хинж»)
const workoutFri60: Workout = {
  id: 302,
  title: "ПТ-60: нижняя часть + техника хип-хинжа",
  day: "Пятница",
  difficulty: WorkoutDifficulty.Intermediate,
  image: { src: "/stock-row-small.webp", lqip: 57377 },
  averageDurationSeconds: 60 * 60,
  sets: [
    {
      exercises: [
        { type: "time", exercise: EX.hipHingeRock, count: 60 },
        { type: "time", exercise: EX.hipFlexorStretch, count: 60 },
        { type: "time", exercise: EX.catCow, count: 40 },
        { type: "time", exercise: EX.hamStretch, count: 60 },
      ],
      restSeconds: 30,
      repeatCount: 1,
    },
    {
      exercises: [
        { type: "reps", exercise: EX.rdlBar, count: 8 },
        { type: "reps", exercise: EX.gobletSquat, count: 10 },
        { type: "reps", exercise: EX.calfRaise, count: 15 },
      ],
      restSeconds: 90,
      repeatCount: 3,
    },
    {
      exercises: [
        { type: "reps", exercise: EX.gluteBridge, count: 15 },
        { type: "reps", exercise: EX.birdDog, count: 20 }, // 10/10
        { type: "reps", exercise: EX.deadBug, count: 20 },
        { type: "time", exercise: EX.reversePlank, count: 40 },
      ],
      restSeconds: 60,
      repeatCount: 2,
    },
    {
      exercises: [{ type: "time", exercise: EX.briskWalk, count: 8 * 60 }],
      restSeconds: 0,
      repeatCount: 1,
    },
  ],
};

// Воскресенье — полная 60 мин (постуральная тяга + аэробный блок)
const workoutSun60: Workout = {
  id: 303,
  title: "ВС-60: осанка-тяга + кор + лёгкая аэробика",
  day: "Воскресенье",
  difficulty: WorkoutDifficulty.Intermediate,
  image: { src: "/stock-row-small.webp", lqip: 57377 },
  averageDurationSeconds: 60 * 60,
  sets: [
    {
      exercises: [
        { type: "time", exercise: EX.openBook, count: 60 },
        { type: "reps", exercise: EX.chinTuck, count: 12 },
        { type: "reps", exercise: EX.wallSlides, count: 12 },
      ],
      restSeconds: 30,
      repeatCount: 1,
    },
    {
      exercises: [
        { type: "reps", exercise: EX.rowDb, count: 24 },
        { type: "reps", exercise: EX.facePull, count: 15 },
        { type: "reps", exercise: EX.pullApart, count: 15 },
        { type: "reps", exercise: EX.wallSlides, count: 12 },
      ],
      restSeconds: 75,
      repeatCount: 3,
    },
    {
      exercises: [
        { type: "reps", exercise: EX.rdlBar, count: 8 },
        { type: "reps", exercise: EX.revLunge, count: 20 },
        { type: "reps", exercise: EX.gluteBridge, count: 15 },
      ],
      restSeconds: 75,
      repeatCount: 2,
    },
    {
      exercises: [
        { type: "reps", exercise: EX.pallof, count: 24 },
        { type: "time", exercise: EX.hollowHold, count: 20 }, // короткие качественные удержания
        { type: "time", exercise: EX.sidePlank, count: 60 },
      ],
      restSeconds: 45,
      repeatCount: 2,
    },
    {
      exercises: [{ type: "time", exercise: EX.briskWalk, count: 8 * 60 }],
      restSeconds: 0,
      repeatCount: 1,
    },
  ],
};

// --- Итоговая программа:
export const PROGRAM: Workout[] = [
  workoutDailyAM,
  workoutDailyPM,
  workoutMon30,
  workoutWed60,
  workoutFri60,
  workoutSun60,
];

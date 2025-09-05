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
    name: "chin tuck",
    image: { src: "chin_tuck.jpg", lqip: 10 },
    met: 2.0,
    video: {
      src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68b9dad50020cc7cea82/files/chin_tuck/view?project=68b9dabf00211a8552c2",
    },
  },
  wallSlides: {
    id: 2,
    name: "wall slides",
    image: { src: "wall_slides.jpg", lqip: 10 },
    met: 2.5,
    video: {
      src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68b9dad50020cc7cea82/files/wall_slides/view?project=68b9dabf00211a8552c2",
    },
  },
  pullApart: {
    id: 3,
    name: "band pull-aparts",
    image: { src: "band_pull_aparts.jpg", lqip: 10 },
    met: 3.0,
    video: {
      src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68b9dad50020cc7cea82/files/band_pull_aparts/view?project=68b9dabf00211a8552c2",
    },
  },
  facePull: {
    id: 4,
    name: "face pull band",
    image: { src: "band_face_pull.jpg", lqip: 10 },
    met: 3.5,
    video: {
      src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68b9dad50020cc7cea82/files/band_face_pull/view?project=68b9dabf00211a8552c2",
    },
  },
  proneY: {
    id: 5,
    name: "prone Y raise",
    image: { src: "prone_y_raise.jpg", lqip: 10 },
    met: 4.0,
    video: {
      src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68b9dad50020cc7cea82/files/prone_y_raise/view?project=68b9dabf00211a8552c2",
    },
  },
  proneT: {
    id: 6,
    name: "prone T raise",
    image: { src: "prone_t_raise.jpg", lqip: 10 },
    met: 3.8,
    video: {
      src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68b9dad50020cc7cea82/files/prone_t_raise/view?project=68b9dabf00211a8552c2",
    },
  },
  catCow: {
    id: 7,
    name: "cat-cow",
    image: { src: "cat_cow.jpg", lqip: 10 },
    met: 2.3,
    // video: {
    //   src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68b9dad50020cc7cea82/files/cat_cow/view?project=68b9dabf00211a8552c2",
    // },
  },
  thoracicTowel: {
    id: 8,
    name: "thoracic towel extension",
    image: { src: "thoracic_towel_extension.jpg", lqip: 10 },
    met: 2.0,
    video: {
      src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68b9dad50020cc7cea82/files/thoracic_towel_extension/view?project=68b9dabf00211a8552c2",
    },
  },
  hipFlexorStretch: {
    id: 9,
    name: "hip flexor stretch lunge",
    image: { src: "hip_flexor_stretch_lunge.jpg", lqip: 10 },
    met: 2.3,
    video: {
      src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68b9dad50020cc7cea82/files/hip_flexor_stretch_lunge/view?project=68b9dabf00211a8552c2",
    },
  },
  birdDog: {
    id: 10,
    name: "bird-dog",
    image: { src: "bird_dog.jpg", lqip: 10 },
    met: 2.8,
    video: {
      src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68b9dad50020cc7cea82/files/bird_dog/view?project=68b9dabf00211a8552c2",
    },
  },
  deadBug: {
    id: 11,
    name: "dead bug",
    image: { src: "dead_bug.jpg", lqip: 10 },
    met: 3.0,
    video: {
      src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68b9dad50020cc7cea82/files/dead_bug/view?project=68b9dabf00211a8552c2",
    },
  },
  sidePlankLeft: {
    id: 12,
    name: "side plank (left)",
    image: { src: "side_plank.jpg", lqip: 10 },
    met: 3.0,
  },
  sidePlankRight: {
    id: 13,
    name: "side plank (right)",
    image: { src: "side_plank.jpg", lqip: 10 },
    met: 3.0,
  },
  pallofLeft: {
    id: 14,
    name: "Pallof press band (left)",
    image: { src: "pallof_press_band.jpg", lqip: 10 },
    met: 3.5,
    video: {
      src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68b9dad50020cc7cea82/files/pallof_press_band/view?project=68b9dabf00211a8552c2",
    },
  },
  pallofRight: {
    id: 15,
    name: "Pallof press band (right)",
    image: { src: "pallof_press_band.jpg", lqip: 10 },
    met: 3.5,
    video: {
      src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68b9dad50020cc7cea82/files/pallof_press_band/view?project=68b9dabf00211a8552c2",
    },
  },
  rdlBar: {
    id: 16,
    name: "romanian deadlift barbell",
    image: { src: "romanian_deadlift_barbell.jpg", lqip: 10 },
    met: 5.0,
    video: {
      src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68b9dad50020cc7cea82/files/romanian_deadlift_barbell/view?project=68b9dabf00211a8552c2",
    },
  },
  rowDbLeft: {
    id: 17,
    name: "one arm db row (left)",
    image: { src: "one_arm_db_row.jpg", lqip: 10 },
    met: 5.0,
    video: {
      src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68b9dad50020cc7cea82/files/one_arm_db_row/view?project=68b9dabf00211a8552c2",
    },
  },
  rowDbRight: {
    id: 18,
    name: "one arm db row (right)",
    image: { src: "one_arm_db_row.jpg", lqip: 10 },
    met: 5.0,
    video: {
      src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68b9dad50020cc7cea82/files/one_arm_db_row/view?project=68b9dabf00211a8552c2",
    },
  },
  revLunge: {
    id: 16,
    name: "reverse lunge",
    image: { src: "reverse_lunge_bw.jpg", lqip: 10 },
    met: 4.0,
    video: {
      src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68b9dad50020cc7cea82/files/reverse_lunge_bw/view?project=68b9dabf00211a8552c2",
    },
  },
  gobletSquat: {
    id: 17,
    name: "goblet squat",
    image: { src: "goblet_squat.jpg", lqip: 10 },
    met: 4.5,
    video: {
      src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68b9dad50020cc7cea82/files/goblet_squat/view?project=68b9dabf00211a8552c2",
    },
  },
  hamStretchLeft: {
    id: 18,
    name: "supine hamstring stretch (left)",
    image: { src: "supine_hamstring_stretch.jpg", lqip: 10 },
    met: 2.3,
    video: {
      src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68b9dad50020cc7cea82/files/supine_hamstring_stretch/view?project=68b9dabf00211a8552c2",
    },
  },
  hamStretchRight: {
    id: 19,
    name: "supine hamstring stretch (right)",
    image: { src: "supine_hamstring_stretch.jpg", lqip: 10 },
    met: 2.3,
    video: {
      src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68b9dad50020cc7cea82/files/supine_hamstring_stretch/view?project=68b9dabf00211a8552c2",
    },
  },
  briskWalk: {
    id: 20,
    name: "brisk walking",
    image: { src: "brisk_walking.jpg", lqip: 10 },
    met: 3.3,
  },
  chestDoor: {
    id: 21,
    name: "doorway pec stretch",
    image: { src: "doorway_pec_stretch.jpg", lqip: 10 },
    met: 2.3,
    video: {
      src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68b9dad50020cc7cea82/files/doorway_pec_stretch/view?project=68b9dabf00211a8552c2",
    },
  },
  scapPushup: {
    id: 22,
    name: "scapular pushup",
    image: { src: "scapular_pushup.jpg", lqip: 10 },
    met: 3.5,
    video: {
      src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68b9dad50020cc7cea82/files/scapular_pushup/view?project=68b9dabf00211a8552c2",
    },
  },
  extRotBandLeft: {
    id: 23,
    name: "band external rotation (left)",
    image: { src: "band_external_rotation.jpg", lqip: 10 },
    met: 2.8,
    video: {
      src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68b9dad50020cc7cea82/files/band_external_rotation/view?project=68b9dabf00211a8552c2",
    },
  },
  extRotBandRight: {
    id: 24,
    name: "band external rotation (right)",
    image: { src: "band_external_rotation.jpg", lqip: 10 },
    met: 2.8,
    video: {
      src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68b9dad50020cc7cea82/files/band_external_rotation/view?project=68b9dabf00211a8552c2",
    },
  },
  hollowHold: {
    id: 25,
    name: "hollow hold",
    image: { src: "hollow_hold.jpg", lqip: 10 },
    met: 4.0,
    video: {
      src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68b9dad50020cc7cea82/files/hollow_hold/view?project=68b9dabf00211a8552c2",
    },
  },
  reversePlank: {
    id: 26,
    name: "reverse plank tabletop",
    image: { src: "reverse_plank_tabletop.jpg", lqip: 10 },
    met: 3.0,
  },
  calfRaise: {
    id: 27,
    name: "standing calf raise",
    image: { src: "standing_calf_raise.jpg", lqip: 10 },
    met: 3.5,
    video: {
      src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68b9dad50020cc7cea82/files/standing_calf_raise/view?project=68b9dabf00211a8552c2",
    },
  },
  openBookLeft: {
    id: 28,
    name: "open book t-spine (left)",
    image: { src: "open_book_tspine.jpg", lqip: 10 },
    met: 2.5,
    video: {
      src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68b9dad50020cc7cea82/files/open_book_tspine/view?project=68b9dabf00211a8552c2",
    },
  },
  openBookRight: {
    id: 29,
    name: "open book t-spine (right)",
    image: { src: "open_book_tspine.jpg", lqip: 10 },
    met: 2.5,
    video: {
      src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68b9dad50020cc7cea82/files/open_book_tspine/view?project=68b9dabf00211a8552c2",
    },
  },
  hipHingeRock: {
    id: 30,
    name: "quadruped rocking",
    image: { src: "quadruped_rocking.jpg", lqip: 10 },
    met: 2.5,
    video: {
      src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68b9dad50020cc7cea82/files/hipHingeRock/view?project=68b9dabf00211a8552c2",
    },
  },
  gluteBridge: {
    id: 31,
    name: "glute bridge",
    image: { src: "glute_bridge.jpg", lqip: 10 },
    met: 3.5,
    video: {
      src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68b9dad50020cc7cea82/files/glute_bridge/view?project=68b9dabf00211a8552c2",
    },
  },
  frontPlank: {
    id: 32,
    name: "elbow plank",
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
        { type: "time", exercise: EX.hamStretchLeft, count: 30 },
        { type: "time", exercise: EX.hamStretchRight, count: 30 },
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
        { type: "time", exercise: EX.openBookLeft, count: 15 },
        { type: "time", exercise: EX.openBookRight, count: 15 },
        { type: "time", exercise: EX.hipHingeRock, count: 45 },
        { type: "reps", exercise: EX.scapPushup, count: 12 },
        { type: "reps", exercise: EX.extRotBandLeft, count: 15 },
        { type: "reps", exercise: EX.extRotBandRight, count: 15 },
      ],
      restSeconds: 30,
      repeatCount: 1,
    },
    {
      exercises: [
        { type: "reps", exercise: EX.gluteBridge, count: 12 },
        { type: "reps", exercise: EX.pallofLeft, count: 10 }, // по 10 на сторону
        { type: "reps", exercise: EX.pallofRight, count: 10 }, // по 10 на сторону
        { type: "reps", exercise: EX.rowDbLeft, count: 12 }, // 12 на каждую сторону
        { type: "reps", exercise: EX.rowDbRight, count: 12 }, // 12 на каждую сторону
        { type: "reps", exercise: EX.rdlBar, count: 10 }, // лёгкий вес, техника
      ],
      restSeconds: 75,
      repeatCount: 2,
    },
    {
      exercises: [
        { type: "reps", exercise: EX.deadBug, count: 20 }, // по 10 на сторону
        { type: "time", exercise: EX.sidePlankLeft, count: 30 }, // 30 с на сторону
        { type: "time", exercise: EX.sidePlankRight, count: 30 }, // 30 с на сторону
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
        { type: "time", exercise: EX.openBookLeft, count: 20 },
        { type: "time", exercise: EX.openBookRight, count: 20 },
        { type: "time", exercise: EX.thoracicTowel, count: 60 },
        { type: "time", exercise: EX.hipFlexorStretch, count: 60 },
      ],
      restSeconds: 30,
      repeatCount: 1,
    },
    {
      exercises: [
        { type: "reps", exercise: EX.extRotBandLeft, count: 15 },
        { type: "reps", exercise: EX.extRotBandRight, count: 15 },
        { type: "reps", exercise: EX.wallSlides, count: 12 },
        { type: "reps", exercise: EX.scapPushup, count: 12 },
        { type: "reps", exercise: EX.pullApart, count: 15 },
      ],
      restSeconds: 45,
      repeatCount: 2,
    },
    {
      exercises: [
        { type: "reps", exercise: EX.rowDbLeft, count: 12 }, // 12/12
        { type: "reps", exercise: EX.rowDbRight, count: 12 }, // 12/12
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
        { type: "reps", exercise: EX.pallofLeft, count: 12 }, // 12/12
        { type: "reps", exercise: EX.pallofRight, count: 12 }, // 12/12
        { type: "time", exercise: EX.sidePlankLeft, count: 30 }, // 30/30
        { type: "time", exercise: EX.sidePlankRight, count: 30 }, // 30/30
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
        { type: "time", exercise: EX.hamStretchLeft, count: 30 },
        { type: "time", exercise: EX.hamStretchRight, count: 30 },
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
        { type: "time", exercise: EX.openBookLeft, count: 30 },
        { type: "time", exercise: EX.openBookRight, count: 30 },
        { type: "reps", exercise: EX.chinTuck, count: 12 },
        { type: "reps", exercise: EX.wallSlides, count: 12 },
      ],
      restSeconds: 30,
      repeatCount: 1,
    },
    {
      exercises: [
        { type: "reps", exercise: EX.rowDbLeft, count: 12 },
        { type: "reps", exercise: EX.rowDbRight, count: 12 },
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
        { type: "reps", exercise: EX.pallofLeft, count: 12 },
        { type: "reps", exercise: EX.pallofRight, count: 12 },
        { type: "time", exercise: EX.hollowHold, count: 20 }, // короткие качественные удержания
        { type: "time", exercise: EX.sidePlankLeft, count: 30 },
        { type: "time", exercise: EX.sidePlankRight, count: 30 },
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

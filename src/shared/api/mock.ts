import type { Exercise, Workout } from "./model";
import { WorkoutDifficulty } from "./model";

const REST_ID = 0;
export const USER = {
  weight: 79,
};
export const SETTINGS = {
  restId: REST_ID,
};

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
  sidePlank: {
    id: 12,
    name: "side plank",
    image: { src: "side_plank.jpg", lqip: 10 },
    met: 3.0,
  },
  pallof: {
    id: 14,
    name: "Pallof press band",
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
  rowDb: {
    id: 17,
    name: "one arm db row",
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
  hamStretch: {
    id: 18,
    name: "supine hamstring stretch",
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
  extRotBand: {
    id: 23,
    name: "band external rotation",
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
  openBook: {
    id: 28,
    name: "open book t-spine",
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
  vacuum: {
    id: 33,
    name: "Vacuum",
    image: { lqip: 173538, src: "/Vacuum.png" },
    met: 2.2,
  },
};

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
        { type: "reps", exercise: EX.birdDog, count: 20 },
      ],
      restSeconds: 30,
      repeatCount: 2,
    },
    {
      exercises: [
        {
          type: "time",
          exercise: EX.hipFlexorStretch,
          count: 30,
          side: "left",
        },
        {
          type: "time",
          exercise: EX.hipFlexorStretch,
          count: 30,
          side: "right",
        },
        { type: "time", exercise: EX.chestDoor, count: 60 },
        { type: "time", exercise: EX.thoracicTowel, count: 60 },
      ],
      restSeconds: 15,
      repeatCount: 1,
    },
  ],
};

const workoutDailyPM: Workout = {
  id: 102,
  title: "PM-15: ходьба Zone 2 + растяжка (ежедневно)",
  day: "Ежедневно вечером",
  difficulty: WorkoutDifficulty.Beginner,
  image: { src: "/stock-row-small.webp", lqip: 57377 },
  averageDurationSeconds: 60 * 15,
  sets: [
    {
      exercises: [{ type: "time", exercise: EX.briskWalk, count: 12 * 60 }],
      restSeconds: 0,
      repeatCount: 1,
    },
    {
      exercises: [
        { type: "time", exercise: EX.chestDoor, count: 60 },
        { type: "time", exercise: EX.hamStretch, count: 30, side: "left" },
        { type: "time", exercise: EX.hamStretch, count: 30, side: "right" },
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
        { type: "time", exercise: EX.openBook, count: 15, side: "left" },
        { type: "time", exercise: EX.openBook, count: 15, side: "right" },
        { type: "time", exercise: EX.hipHingeRock, count: 45 },
        { type: "reps", exercise: EX.scapPushup, count: 12 },
        { type: "reps", exercise: EX.extRotBand, count: 15, side: "left" },
        { type: "reps", exercise: EX.extRotBand, count: 15, side: "right" },
      ],
      restSeconds: 30,
      repeatCount: 1,
    },
    {
      exercises: [
        { type: "reps", exercise: EX.gluteBridge, count: 12 },
        { type: "reps", exercise: EX.pallof, side: "left", count: 10 },
        { type: "reps", exercise: EX.pallof, side: "right", count: 10 },
        { type: "reps", exercise: EX.rowDb, side: "left", count: 12 },
        { type: "reps", exercise: EX.rowDb, side: "right", count: 12 },
        { type: "reps", exercise: EX.rdlBar, count: 10 },
      ],
      restSeconds: 75,
      repeatCount: 2,
    },
    {
      exercises: [
        { type: "reps", exercise: EX.deadBug, count: 20 },
        { type: "time", exercise: EX.sidePlank, side: "left", count: 30 },
        { type: "time", exercise: EX.sidePlank, side: "right", count: 30 },
      ],
      restSeconds: 30,
      repeatCount: 1,
    },
  ],
};

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
        { type: "time", exercise: EX.openBook, side: "left", count: 20 },
        { type: "time", exercise: EX.openBook, side: "right", count: 20 },
        { type: "time", exercise: EX.thoracicTowel, count: 60 },
        {
          type: "time",
          exercise: EX.hipFlexorStretch,
          count: 30,
          side: "left",
        },
        {
          type: "time",
          exercise: EX.hipFlexorStretch,
          count: 30,
          side: "right",
        },
      ],
      restSeconds: 30,
      repeatCount: 1,
    },
    {
      exercises: [
        { type: "reps", exercise: EX.extRotBand, side: "left", count: 15 },
        { type: "reps", exercise: EX.extRotBand, side: "right", count: 15 },
        { type: "reps", exercise: EX.wallSlides, count: 12 },
        { type: "reps", exercise: EX.scapPushup, count: 12 },
        { type: "reps", exercise: EX.pullApart, count: 15 },
      ],
      restSeconds: 45,
      repeatCount: 2,
    },
    {
      exercises: [
        { type: "reps", exercise: EX.rowDb, side: "left", count: 12 },
        { type: "reps", exercise: EX.rowDb, side: "right", count: 12 },
        { type: "reps", exercise: EX.rdlBar, count: 10 },
        { type: "reps", exercise: EX.revLunge, count: 20 },
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
        { type: "reps", exercise: EX.pallof, side: "left", count: 12 },
        { type: "reps", exercise: EX.pallof, side: "right", count: 12 },
        { type: "time", exercise: EX.sidePlank, side: "left", count: 30 },
        { type: "time", exercise: EX.sidePlank, side: "right", count: 30 },
      ],
      restSeconds: 45,
      repeatCount: 2,
    },
  ],
};

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
        {
          type: "time",
          exercise: EX.hipFlexorStretch,
          count: 30,
          side: "left",
        },
        {
          type: "time",
          exercise: EX.hipFlexorStretch,
          count: 30,
          side: "right",
        },
        { type: "time", exercise: EX.catCow, count: 40 },
        { type: "time", exercise: EX.hamStretch, side: "left", count: 30 },
        { type: "time", exercise: EX.hamStretch, side: "right", count: 30 },
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
        { type: "reps", exercise: EX.birdDog, count: 20 },
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
        { type: "time", exercise: EX.openBook, side: "left", count: 30 },
        { type: "time", exercise: EX.openBook, side: "right", count: 30 },
        { type: "reps", exercise: EX.chinTuck, count: 12 },
        { type: "reps", exercise: EX.wallSlides, count: 12 },
      ],
      restSeconds: 30,
      repeatCount: 1,
    },
    {
      exercises: [
        { type: "reps", exercise: EX.rowDb, side: "left", count: 12 },
        { type: "reps", exercise: EX.rowDb, side: "right", count: 12 },
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
        { type: "reps", exercise: EX.pallof, side: "left", count: 12 },
        { type: "reps", exercise: EX.pallof, side: "right", count: 12 },
        { type: "time", exercise: EX.hollowHold, count: 20 },
        { type: "time", exercise: EX.sidePlank, side: "left", count: 30 },
        { type: "time", exercise: EX.sidePlank, side: "right", count: 30 },
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

const workoutVacuum: Workout = {
  id: 404,
  title: "Вакуум",
  day: "всегда",
  difficulty: WorkoutDifficulty.Beginner,
  image: { src: "/stock-row-small.webp", lqip: 57377 },
  averageDurationSeconds: 60 * 5,
  sets: [
    {
      exercises: [{ type: "time", exercise: EX.vacuum, count: 30 }],
      restSeconds: 30,
      repeatCount: 3,
    },
  ],
};

export const PROGRAM: Workout[] = [
  workoutVacuum,
  workoutDailyAM,
  workoutDailyPM,
  workoutMon30,
  workoutWed60,
  workoutFri60,
  workoutSun60,
];

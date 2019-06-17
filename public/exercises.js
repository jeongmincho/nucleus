class Exercise {
  constructor(day, name, time, reps, sets, parts) {
    this.day = day;
    this.name = name;
    this.time = time;
    this.reps = reps;
    this.sets = sets;
    this.parts = parts;
    this.count = 0;
    this.completed = false;
  }
}

const latPullDown = new Exercise("monday", "LAT PULL DOWN", 25, 15, 5, "LATS");
const pullups = new Exercise("monday", "PULLUPS", 20, 10, 7, "LATS, DELTOID");
const barbellRows = new Exercise(
  "monday",
  "BARBELL ROWS",
  25,
  10,
  4,
  "LATS, DELTOID"
);
const deadlifts = new Exercise(
  "monday",
  "DEADLIFTS",
  30,
  10,
  5,
  "GLUTES, QUADS, LOWER BACK"
);

const pushups = new Exercise("tuesday", "PUSHUPS", 20, 50, 5, "CHEST");
const benchPress = new Exercise("tuesday", "BENCH PRESS", 30, 10, 5, "CHEST");
const cableFlies = new Exercise(
  "tuesday",
  "CABLE FLIES",
  20,
  20,
  3,
  "UPPER CHEST"
);
const chestDip = new Exercise(
  "tuesday",
  "CHEST DIPS",
  25,
  15,
  8,
  "LOWER CHEST"
);

const squats = new Exercise("wednesday", "SQUATS", 25, 10, 5, "LEGS");
const dumbbellLunges = new Exercise(
  "wednesday",
  "DUMBBELL LUNGES",
  20,
  10,
  7,
  "LEGS"
);
const legPress = new Exercise("wednesday", "LEG PRESS", 25, 10, 3, "LEGS");
const calfRaise = new Exercise("wednesday", "CALF RAISES", 20, 30, 4, "CALVES");

const preacherCurls = new Exercise(
  "thursday",
  "PREACHER CURLS",
  25,
  15,
  5,
  "LOWER BICEPS"
);
const inclineDumbbellCurls = new Exercise(
  "thursday",
  "INCLINE DUMBBELL CURLS",
  20,
  10,
  7,
  "UPPER BICEPS"
);
const hammerCurls = new Exercise(
  "thursday",
  "HAMMER CURLS",
  25,
  10,
  4,
  "SIDE BICEPS"
);
const standingBarbellCurls = new Exercise(
  "thursday",
  "STANDING BARBELL CURLS",
  30,
  10,
  5,
  "BICEPS"
);

const closeGripBenches = new Exercise(
  "friday",
  "CLOSE GRIP BENCH PRESS",
  25,
  25,
  5,
  "TRICEPS"
);
const tricepExtensions = new Exercise(
  "friday",
  "TRICEP EXTENSIONS",
  25,
  10,
  4,
  "LOWER TRICEPS"
);
const skullcrushers = new Exercise(
  "friday",
  "SKULLCRUSHERS",
  30,
  10,
  5,
  "UPPER TRICEPS"
);

const tricepKickbacks = new Exercise(
  "friday",
  "TRICEP KICKBACKS",
  20,
  10,
  7,
  "TRICEPS"
);

const dumbbellLateralRaise = new Exercise(
  "saturday",
  "DUMBBELL LATERAL RAISE",
  30,
  10,
  5,
  "OUTER SHOULDERS"
);
const barbellFrontRaise = new Exercise(
  "saturday",
  "BARBELL FRONT RAISE",
  25,
  10,
  4,
  "FRONT SHOULDERS"
);
const seatedMilitaryPresses = new Exercise(
  "saturday",
  "SEATED MILITARY PRESS",
  20,
  10,
  7,
  "SHOULDERS"
);
const oneArmCableLateralRaise = new Exercise(
  "saturday",
  "ONE ARM CABLE LATERAL RAISES",
  25,
  25,
  5,
  "SHOULDERS"
);

const latPullDownSun = new Exercise(
  "sunday",
  "LAT PULL DOWN",
  25,
  10,
  4,
  "LATS"
);
const pullupsSun = new Exercise(
  "sunday",
  "PULLUPS",
  20,
  10,
  7,
  "LATS, DELTOID"
);
const barbellRowsSun = new Exercise(
  "sunday",
  "BARBELL ROWS",
  30,
  10,
  5,
  "LATS, DELTOID"
);
const deadliftsSun = new Exercise(
  "sunday",
  "DEADLIFTS",
  25,
  10,
  3,
  "GLUTES, QUADS, LOWER BACK"
);

const array = [
  pullups,
  barbellRows,
  deadlifts,
  pushups,
  benchPress,
  cableFlies,
  latPullDown,
  chestDip,
  squats,
  dumbbellLunges,
  legPress,
  calfRaise,
  preacherCurls,
  inclineDumbbellCurls,
  hammerCurls,
  standingBarbellCurls,
  closeGripBenches,
  tricepExtensions,
  skullcrushers,
  tricepKickbacks,
  dumbbellLateralRaise,
  barbellFrontRaise,
  seatedMilitaryPresses,
  oneArmCableLateralRaise,
  latPullDownSun,
  pullupsSun,
  barbellRowsSun,
  deadliftsSun
];

export default { array };

import { WorkoutPlan } from "./Workout.interfaces";

const workouts: WorkoutPlan = {
  "2/5/2024": [
    {
      key: "squatClean",
      name: "Squat Clean",
      rounds: [
        { sets: 1, reps: 6, weight: 0.75 },
        { sets: 1, reps: 5, weight: 0.83 },
        { sets: 1, reps: 4, weight: 0.9 },
        { sets: 1, reps: 4, weight: 0.92 },
        { sets: 1, reps: 2, weight: 0.95 },
        { sets: 3, reps: 2, weight: 0.9 }
      ]
    }
  ],
  "3/5/2024": [
    {
      key: "powerSnatch",
      name: "Snatch Shrug",
      rounds: [{ sets: 5, reps: 5, weight: 1 }]
    },
    {
      key: "highHangSnatch",
      name: "High Hang Snatch",
      rounds: [{ sets: 5, reps: 5, weight: 0.6 }]
    },
    {
      key: "powerSnatch",
      name: "Snatch dl hold",
      rounds: [{ sets: 10, reps: "5 sec", weight: 1.2 }]
    }
  ],
  "4/5/2024": [
    {
      key: "highHangClean",
      name: "High Hang Clean",
      rounds: [{ sets: 5, reps: 5, weight: 0.6 }]
    },
    {
      key: "powerClean",
      name: "Clean Deadlift",
      rounds: [{ sets: 5, reps: "10 sec", weight: 0.6 }]
    }
  ]
};

export default workouts;

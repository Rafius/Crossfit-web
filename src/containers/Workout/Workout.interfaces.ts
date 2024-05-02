export interface Exercise {
  key: string;
  name: string;
  rounds: Round[];
}

export interface Round {
  sets: number;
  reps: number | string;
  weight?: number;
}

export interface WorkoutPlan {
  [date: string]: Exercise[];
}

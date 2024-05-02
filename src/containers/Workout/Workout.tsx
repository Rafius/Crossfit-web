import { Exercise, Round } from "./Workout.interfaces.ts";
import workouts from "./workouts.ts";

const getDate = () => {
  const currentDate = new Date();

  const day = currentDate.getDate() ; // add + 1 to get tomorrow´s workout
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  return day + "/" + month + "/" + year;
};
const Workout = () => {
  const prs = JSON.parse(localStorage.getItem("weights") ?? "");

  const formattedDate = getDate();
  const todaysWorkout: Array<Exercise> = workouts[formattedDate];

  return (
    <div>
      {todaysWorkout?.map((exercise: Exercise, index) => {
        const exercisePr = prs?.[exercise.key];

        return (
          <div key={index}>
            <p> {exercise.name}</p>
            {exercise.rounds.map((round: Round, key) => {
              return (
                <div key={key}>
                  <p>
                    {round.sets}X{round.reps}
                    {round.weight
                      ? ` ${parseFloat(
                          (round.weight * exercisePr).toFixed(1)
                        )} kg`
                      : ""}
                  </p>
                </div>
              );
            })}
          </div>
        );
      })}

      {!todaysWorkout && <div>No hay entreno para hoy </div>}
    </div>
  );
};

export default Workout;

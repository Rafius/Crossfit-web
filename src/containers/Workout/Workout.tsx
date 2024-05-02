import { Exercise, Round } from "./Workout.interfaces.ts";
import workouts from "./workouts.ts";
import styles from "./Workout.module.scss";

const getDate = () => {
  const currentDate = new Date();

  const day = currentDate.getDate(); // add + 1 to get tomorrow´s workout
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  return day + "/" + month + "/" + year;
};
const Workout = () => {
  const weightsString = localStorage.getItem("weights");
  const prs = weightsString && JSON.parse(weightsString);

  const formattedDate = getDate();
  const todaysWorkout: Array<Exercise> = workouts[formattedDate];

  return (
    <div className="">
      {todaysWorkout?.map((exercise: Exercise, index) => {
        const exercisePr = prs?.[exercise.key];

        return (
          <div className={styles.Workout} key={index}>
            <h2> {exercise.name}</h2>
            {exercise.rounds.map((round: Round, key) => {
              const exerciseWeight =
                round.weight && exercisePr
                  ? parseFloat((round.weight * exercisePr).toFixed(1))
                  : "Introduce tus rms para calcular";

              return (
                <div key={key}>
                  <p>
                    {round.sets}X{round.reps} {exerciseWeight}
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

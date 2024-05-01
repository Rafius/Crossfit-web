import { Exercise, Round } from "./Workout.interfaces";
import workouts from "./workouts.ts";

const getDate = () => {
  const currentDate = new Date();

  const day = currentDate.getDate() + 3; // add + 1 to get tomorrow´s workout
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  return day + "/" + month + "/" + year;
};
const Home = () => {
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
                    Series: {round.sets}, Repeticiones: {round.reps}, Peso:
                    {(round.weight * exercisePr).toFixed(1) ||
                      "Introduce tus pesos"}
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

export default Home;

import { Exercise, Round } from "./Workout.interfaces.ts";
import workouts from "./workouts.ts";
import styles from "./Workout.module.scss";
import { useState } from "react";

const Workout = () => {
  const [date, setDate] = useState(new Date());
  const weightsString = localStorage.getItem("weights");
  const prs = weightsString && JSON.parse(weightsString);

  const formattedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  console.log(formattedDate);

  const todaysWorkout: Array<Exercise> = workouts[formattedDate];

  const increaseActualDate = () => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1);
    setDate(newDate);
  };

  const decreaseActualDate = () => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - 1);
    setDate(newDate);
  };

  return (
    <div className={styles.Workout}>
      <div className={styles.Workout__navigation}>
        <button onClick={decreaseActualDate}>{"<--"}</button>
        {formattedDate}
        <button onClick={increaseActualDate}>{"-->"}</button>
      </div>
      {todaysWorkout?.map((exercise: Exercise, index) => {
        const exercisePr = prs?.[exercise.key];

        return (
          <div className={""} key={index}>
            <h2> {exercise.name}</h2>
            {exercise.rounds.map((round: Round, key) => {
              const exerciseWeight =
                round.weight &&
                exercisePr &&
                `${parseFloat((round.weight * exercisePr).toFixed(1))} kg`;

              const errorMessage =
                !exercisePr && round.weight && "Introduce tu rm";

              return (
                <div key={key}>
                  <p>
                    {round.sets}X{round.reps} {exerciseWeight} {errorMessage}
                  </p>
                </div>
              );
            })}
          </div>
        );
      })}{" "}
      {!todaysWorkout && <div>No hay entreno para este dia </div>}
    </div>
  );
};

export default Workout;

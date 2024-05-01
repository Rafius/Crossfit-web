import workout from "../../workout.json";
const Home = () => {
  const prs = JSON.parse(localStorage.getItem("weights")!);

  return (
    <div>
      {workout.thursday.map((exercise) => {
        const exercisePr = prs?.[exercise.key];

        return (
          <div key={exercise.key}>
            <p> {exercise.name}</p>
            {exercise.rounds.map((round) => {
              return (
                <div key={round.weight}>
                  <p>
                    Series: {round.sets}, Repeticiones: {round.reps}, Peso:{" "}
                    {round.weight * exercisePr || "Introduce tus pesos"}
                  </p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Home;

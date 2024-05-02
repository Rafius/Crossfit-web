import { useState, useEffect, ChangeEvent } from "react";

const initialWeights = {
  deadlift: 170,
  benchPress: 97.5,
  pressStrict: 60,
  backSquat: 130,
  frontSquat: 100,
  powerSnatch: 57,
  hangSnatch: 50,
  highHangSnatch: 50,
  squatSnatch: 40,
  powerClean: 90,
  hangClean: 80,
  highHangClean: 70,
  squatClean: 90,
  thruster: 65,
  pushPress: 75,
  splitJerk: 70
};

const WeightForm = () => {
  const [weights, setWeights] = useState(initialWeights);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setWeights({ ...weights, [name]: value });
  };

  const saveWeightsToLocalStorage = () => {
    localStorage.setItem("weights", JSON.stringify(weights));
  };

  useEffect(() => {
    const storedWeights = localStorage.getItem("weights");
    if (storedWeights) {
      setWeights(JSON.parse(storedWeights));
    }
  }, []);

  return (
    <div>
      <h2>Enter Weights</h2>
      <form>
        {Object.entries(weights).map(([exercise, weight]) => (
          <div key={exercise}>
            <label htmlFor={exercise}>{exercise}</label>
            <input
              type="number"
              id={exercise}
              name={exercise}
              value={weight}
              onChange={handleInputChange}
            />
          </div>
        ))}
      </form>
      <button onClick={saveWeightsToLocalStorage}>Save</button>
    </div>
  );
};

export default WeightForm;

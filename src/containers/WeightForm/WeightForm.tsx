import  { useState, useEffect } from 'react';

const WeightForm = () => {
  const [weights, setWeights] = useState({
    deadlift: '',
    benchPress: '',
    pressStrict: '',
    backSquat: '',
    frontSquat: '',
    powerSnatch: '',
    squatSnatch: '',
    powerClean: '',
    squatClean: '',
    thruster: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWeights({ ...weights, [name]: value });
  };

  const saveWeightsToLocalStorage = () => {
    localStorage.setItem('weights', JSON.stringify(weights));
  };

  useEffect(() => {
    const storedWeights = localStorage.getItem('weights');
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

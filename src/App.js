import React, { useState } from 'react';
import axios from 'axios';

function App() {
  // Define state variables to hold input and output data
  const [petalWidth, setPetalWidth] = useState(0);
  const [predictedPetalLength, setPredictedPetalLength] = useState(0);

  // Define a function to handle the form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const apiUrl = 'https://reasonapi.world';
      const endpoint = '/predict_petal_length';
      const url = `${apiUrl}${endpoint}?petal_width=${petalWidth}`;
      const response = await axios.get(url);
      
      setPredictedPetalLength(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Display an error message to the user
      alert('Error fetching data. Please try again later.');
    }
  };

  return (
    <div>
      <h1>Petal Length Predictor</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Petal Width:
          <input
            type="number"
            value={petalWidth}
            onChange={(event) => setPetalWidth(event.target.value)}
          />
        </label>
        <button type="submit">Predict Petal Length</button>
      </form>
      <p>Predicted Petal Length: {predictedPetalLength}</p>
    </div>
  );
}

export default App;
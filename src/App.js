import React, { useState } from "react";
import "./App.css";

function App() {
  const [angle, setAngle] = useState(0); // State to store the selected angle

  // Common angles for radio buttons
  const commonAngles = [0, 45, 60, 90, 180];

  // Handle text input change
  const handleInputChange = (e) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) value = 0;
    if (value < 0) value = 0;
    if (value > 360) value = 360;
    setAngle(value);
  };

  // Handle slider change
  const handleSliderChange = (e) => {
    setAngle(parseInt(e.target.value));
  };

  // Handle radio button selection
  const handleRadioChange = (value) => {
    setAngle(value);
  };

  return (
    <div className="container">
      <h2>Angle Selector</h2>

      <label htmlFor="angle-input">Angle:</label>
      <input
        type="number"
        id="angle-input"
        value={angle}
        min="0"
        max="360"
        onChange={handleInputChange}
      />

      <label htmlFor="angle-slider">Angle Slider:</label>
      <input
        type="range"
        id="angle-slider"
        min="0"
        max="360"
        value={angle}
        onChange={handleSliderChange}
      />

      <div className="radio-buttons">
        <label>Select a common angle:</label>
        {commonAngles.map((commonAngle) => (
          <div key={commonAngle}>
            <input
              type="radio"
              id={`angle${commonAngle}`}
              name="angle"
              value={commonAngle}
              checked={angle === commonAngle}
              onChange={() => handleRadioChange(commonAngle)}
            />
            <label htmlFor={`angle${commonAngle}`}>{commonAngle}°</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

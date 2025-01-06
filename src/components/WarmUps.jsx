import React, { useState } from 'react';

    function WarmUps() {
      const [selectedWarmUp, setSelectedWarmUp] = useState('');
      const warmUps = ['Lip Trills', 'Humming', 'Scales', 'Arpeggios'];

      return (
        <div className="feature-container">
          <h2>Vocal Warm-ups & Exercises</h2>
          <p>Choose a warm-up routine:</p>
          <select value={selectedWarmUp} onChange={(e) => setSelectedWarmUp(e.target.value)}>
            <option value="">Select a warm-up</option>
            {warmUps.map((warmUp, index) => (
              <option key={index} value={warmUp}>{warmUp}</option>
            ))}
          </select>
          {selectedWarmUp && <p>Selected warm-up: {selectedWarmUp}</p>}
          <button>Start Warm-up</button>
        </div>
      );
    }

    export default WarmUps;

import React, { useState } from 'react';

    function RecordingStudio() {
      const [recordingName, setRecordingName] = useState('');

      return (
        <div className="feature-container">
          <h2>Recording Studio</h2>
          <p>Record and save your performances:</p>
          <input type="text" placeholder="Recording Name" value={recordingName} onChange={(e) => setRecordingName(e.target.value)} />
          <button>Start Recording</button>
          <button>Stop Recording</button>
        </div>
      );
    }

    export default RecordingStudio;

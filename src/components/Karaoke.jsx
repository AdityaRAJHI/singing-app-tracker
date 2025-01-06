import React, { useState } from 'react';

    function Karaoke() {
      const [songTitle, setSongTitle] = useState('');
      const [key, setKey] = useState('');
      const [tempo, setTempo] = useState(100);

      return (
        <div className="feature-container">
          <h2>Karaoke Mode</h2>
          <p>Select a song and adjust settings:</p>
          <input type="text" placeholder="Song Title" value={songTitle} onChange={(e) => setSongTitle(e.target.value)} />
          <input type="text" placeholder="Key" value={key} onChange={(e) => setKey(e.target.value)} />
          <input type="number" placeholder="Tempo" value={tempo} onChange={(e) => setTempo(parseInt(e.target.value, 10))} />
          <button>Start Karaoke</button>
        </div>
      );
    }

    export default Karaoke;

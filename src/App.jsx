import React from 'react';
    import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
    import Home from './components/Home';
    import WarmUps from './components/WarmUps';
    import Karaoke from './components/Karaoke';
    import PitchAnalyzer from './components/PitchAnalyzer';
    import RecordingStudio from './components/RecordingStudio';
    import AiCoaching from './components/AiCoaching';
    import Community from './components/Community';
    import Subscription from './components/Subscription';

    function App() {
      return (
        <Router>
          <div className="app-container">
            <nav className="app-nav">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/warmups">Warm-ups</Link></li>
                <li><Link to="/karaoke">Karaoke</Link></li>
                <li><Link to="/pitch-analyzer">Pitch Analyzer</Link></li>
                <li><Link to="/recording-studio">Recording Studio</Link></li>
                <li><Link to="/ai-coaching">AI Coaching</Link></li>
                <li><Link to="/community">Community</Link></li>
                <li><Link to="/subscription">Subscription</Link></li>
              </ul>
            </nav>
            <div className="app-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/warmups" element={<WarmUps />} />
                <Route path="/karaoke" element={<Karaoke />} />
                <Route path="/pitch-analyzer" element={<PitchAnalyzer />} />
                <Route path="/recording-studio" element={<RecordingStudio />} />
                <Route path="/ai-coaching" element={<AiCoaching />} />
                <Route path="/community" element={<Community />} />
                <Route path="/subscription" element={<Subscription />} />
              </Routes>
            </div>
          </div>
        </Router>
      );
    }

    export default App;

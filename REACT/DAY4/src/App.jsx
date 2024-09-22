import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const start = () => {
    if (!intervalId) {
      const newIntervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 100);
      setIntervalId(newIntervalId);
    }
  };

  const stop = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const reset = () => {
    stop();
    setCount(0);
  };

  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <div>
      <div className="display">{formatTime(count)} ⏳</div>
      <div className="buttonContainer">
        <button className="button start-btn" onClick={start}>🎬 Start</button>
        <button className="button stop-btn" onClick={stop}>⏸️ Stop</button>
        <button className="button reset-btn" onClick={reset}>🔄 Reset</button>
      </div>
    </div>
  );
};

export default App;

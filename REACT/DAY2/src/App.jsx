import React, { useState } from "react";
import "./App.css";
import Modal from "./Modal";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isDark, setIsDark] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleEqual = () => {
    try {
      setResult(eval(input));
      setIsModalOpen(true);
    } catch (error) {
      setResult("Oops!");
      setIsModalOpen(true);
    }
  };

  const toggleTheme = () => {
    setIsDark((prevTheme) => !prevTheme);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDark ? "🌞 Switch to Angel Mode 😇" : "🌙 Switch to Demon Mode 😈"}
      </button>
      <div className="calculator">
        <div className="display">
          <div className="input">{input || "Let's Calculate!"}</div>
          <div className="result">{result || ""}</div>
        </div>
        <div className="buttons">
          <button onClick={() => handleClick("1")} className="number-btn">1</button>
          <button onClick={() => handleClick("2")} className="number-btn">2</button>
          <button onClick={() => handleClick("3")} className="number-btn">3</button>
          <button onClick={() => handleClick("+")} className="operator-btn">+</button>
          <button onClick={() => handleClick("4")} className="number-btn">4</button>
          <button onClick={() => handleClick("5")} className="number-btn">5</button>
          <button onClick={() => handleClick("6")} className="number-btn">6</button>
          <button onClick={() => handleClick("-")} className="operator-btn">-</button>
          <button onClick={() => handleClick("7")} className="number-btn">7</button>
          <button onClick={() => handleClick("8")} className="number-btn">8</button>
          <button onClick={() => handleClick("9")} className="number-btn">9</button>
          <button onClick={() => handleClick("*")} className="operator-btn">*</button>
          <button onClick={() => handleClick("0")} className="number-btn">0</button>
          <button onClick={() => handleClick(".")} className="number-btn">.</button>
          <button onClick={handleEqual} className="equal-btn">=</button>
          <button onClick={() => handleClick("/")} className="operator-btn">/</button>
          <button onClick={handleClear} className="clear-btn">C</button>
        </div>
      </div>
      {isModalOpen && <Modal isDark={isDark} result={result} onClose={closeModal} />}
    </div>
  );
};

export default App;

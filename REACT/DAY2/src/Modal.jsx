import React from "react";
import "./Modal.css";

const Modal = ({ isDark, result, onClose }) => {
  return (
    <div className={`modal-overlay ${isDark ? "dark" : "light"}`}>
      <div className="modal-content">
        <h2>{isDark ? "😈 Demon Result 😈" : "😇 Angelic Result 😇"}</h2>
        <p className="result">{result}</p>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;

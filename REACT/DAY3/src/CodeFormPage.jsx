import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./CodeFormPage.css";

const CodeFormPage = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("Python");
  const [status, setStatus] = useState("Complete");
  const [credit, setCredit] = useState("");
  const [timeComplexity, setTimeComplexity] = useState("");
  const [spaceComplexity, setSpaceComplexity] = useState("");

  const postData = async () => {
    const url =
      "https://img-app-5de85-default-rtdb.asia-southeast1.firebasedatabase.app/data.json";
    const dataToSend = { code, language, status, credit, timeComplexity, spaceComplexity };

    try {
      await axios.post(url, dataToSend);
      alert("Data submitted successfully!");
      setCode("");
      setLanguage("Python");
      setStatus("Complete");
      setCredit("");
      setTimeComplexity("");
      setSpaceComplexity("");
    } catch (error) {
      alert("Failed to submit data.");
    }
  };

  return (
    <div className="form-container">
      <h2>Add/Edit Code</h2>

      <textarea
        placeholder="Enter CODE"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      ></textarea>

      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option>Python</option>
        <option>JavaScript</option>
        <option>Java</option>
      </select>

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>Complete</option>
        <option>Pending</option>
        <option>Review</option>
      </select>

      <input
        placeholder="Credit"
        type="text"
        value={credit}
        onChange={(e) => setCredit(e.target.value)}
      />

      <input
        placeholder="Time Complexity"
        type="text"
        value={timeComplexity}
        onChange={(e) => setTimeComplexity(e.target.value)}
      />

      <input
        placeholder="Space Complexity"
        type="text"
        value={spaceComplexity}
        onChange={(e) => setSpaceComplexity(e.target.value)}
      />

      <button onClick={postData}>Submit</button>

      <Link to="/" className="back-home-button">
        <i className="fas fa-arrow-left"></i>
        Back to Home
      </Link>
    </div>
  );
};

export default CodeFormPage;

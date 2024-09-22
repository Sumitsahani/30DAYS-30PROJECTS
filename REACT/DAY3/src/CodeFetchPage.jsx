import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CodeFetchPage.css';

const CodeFetchPage = () => {
  const [data, setData] = useState([]);

  // Function to fetch data from the API
  const fetchData = async () => {
    const url = 'https://img-app-5de85-default-rtdb.asia-southeast1.firebasedatabase.app/data.json';
    try {
      const response = await axios.get(url);
      if (response.data) {
        const fetchedData = Object.values(response.data); // Convert the response object to an array
        setData(fetchedData);
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Function to copy code to clipboard
  const copyCodeToClipboard = (code) => {
    navigator.clipboard.writeText(code)
      .then(() => {
        alert('Code copied to clipboard!');
      })
      .catch((error) => {
        console.error('Failed to copy code:', error);
      });
  };

  return (
    <div className="data-fetch-container">
      <h2>CODES</h2>
      <div className="data-list">
        {data.length === 0 ? (
          <p>No data available</p>
        ) : (
          data.map((item, index) => (
            <div key={index} className="data-item">
              <pre>
                <strong>Code:</strong>
                <span className="code-content">{item.code}</span>
                <i 
                  className="fas fa-copy copy-icon" 
                  onClick={() => copyCodeToClipboard(item.code)} 
                  title="Copy Code"
                ></i>
              </pre>
              <p><strong>Language:</strong> {item.language}</p>
              <p><strong>Status:</strong> {item.status}</p>
              <p><strong>Credit:</strong> {item.credit}</p>
              <div className="complexity-display">
                <div className="complexity-circle">
                  <span>{item.timeComplexity}</span>
                </div>
                <div className="complexity-circle">
                  <span>{item.spaceComplexity}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );  
};

export default CodeFetchPage;

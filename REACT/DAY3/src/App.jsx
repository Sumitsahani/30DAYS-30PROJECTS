import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CodeFetchPage from './CodeFetchPage';
import CodeFormPage from './CodeFormPage';
import NavBar from './NavBar';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <Routes>
          <Route path="/" element={<CodeFetchPage />} />
          <Route path="/add" element={<CodeFormPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

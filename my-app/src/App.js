import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Your own custom styles
import Landing from './pages/Landing';
import Homepage from './pages/Homepage';
import SecurityQuestPage from './pages/SecurityQuestPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

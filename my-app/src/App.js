import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Your own custom styles

function App() {
  return (
    <div className="App">
      <HomePage />
      
    </div>
  );
}

export default App;

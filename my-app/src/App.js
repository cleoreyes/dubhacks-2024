import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Your own custom styles
import Landing from './pages/Landing';
import Homepage from './pages/Homepage';

//import the function from the realtime database module
// import { getDatabase, ref, set as firebaseSet } from 'firebase/database';

function App() {
  return (
    <div className="App">
      <Homepage />
      
    </div>
  );
}

// // adding data into firebase
// const db = getDatabase();
// const name = ref(db, "firstName"); // address
// const skills = ref(db, "skills/skill1"); // nested address
// firebaseSet(name, "Keiraaaaa!!!");


export default App;

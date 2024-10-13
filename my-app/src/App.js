import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Landing from "./pages/Landing";
import Homepage from "./pages/Homepage";
import PersonalInfoPage from "./pages/PersonalInfoPage";
import SecurityQuestPage from "./pages/SecurityQuestPage";
import Media from "./pages/Media";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/personal-info" element={<PersonalInfoPage />} />
          <Route path="/media" element={<Media />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

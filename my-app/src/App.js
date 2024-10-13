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
import MessagesPage from "./pages/Messages";
import SecurityQuestPage from "./pages/SecurityQuestPage";
import Reflections from "./pages/Reflections";
import LifeDocumentsPage from "./pages/LifeDocuments";
import MediaMemoriesPage from "./pages/Media";
import RecipesTraditionsPage from "./pages/RecipesAndTraditions";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/security" element={<SecurityQuestPage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/personal-info" element={<PersonalInfoPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/reflections" element={<Reflections />} />
          <Route path="/lifedocuments" element={<LifeDocumentsPage />} />
          <Route path="/media" element={<MediaMemoriesPage />} />
          <Route
            path="/recipesandtraditions"
            element={<RecipesTraditionsPage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
